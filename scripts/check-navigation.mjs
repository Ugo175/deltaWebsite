import assert from "node:assert/strict";

const base = new URL(process.argv[2] || "http://127.0.0.1:3000");
const routes = [
  "/", "/about-us", "/about-us/eboard", "/programs", "/gallery", "/membership", "/contact",
  "/programs/economic-development", "/programs/educational-development",
  "/programs/international-awareness", "/programs/physical-mental-health",
  "/programs/political-awareness", "/programs/arts-letters",
  "/programs/scholarship", "/programs/delta-dears",
  "/membership/services", "/membership/member-resources",
];
const aliases = {
  "/portfolio": "/programs",
  "/projects-8": "/programs/economic-development",
  "/copy-of-economic-development": "/programs/educational-development",
  "/copy-2-of-economic-development": "/programs/international-awareness",
  "/copy-of-international-awareness-inv": "/programs/physical-mental-health",
  "/copy-2-of-international-awareness-inv": "/programs/political-awareness",
  "/art-letters": "/programs/arts-letters",
  "/scholarship": "/programs/scholarship",
  "/delta-dears": "/programs/delta-dears",
  "/membership-services": "/membership/services",
  "/sorors-only": "/membership/member-resources",
};
const allowedExternalHosts = new Set([
  "www.deltasigmatheta.org", "www.dstsouthwes.org", "www.facebook.com", "www.instagram.com",
]);
const internalDestinations = new Set();
for (const route of routes) {
  const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `${route} should load`);
  assert.equal(new URL(response.url).origin, base.origin, `${route} must stay on this site`);
  const html = await response.text();
  const links = html.match(/<a\b[^>]*>/g) || [];
  assert(links.some(tag => /aria-label="Monroe Alumnae Chapter home"/.test(tag) && /href="\/"/.test(tag)), `${route}: chapter logo must link to the new home`);
  for (const tag of links) {
    const href = tag.match(/\bhref="([^"]+)"/)?.[1];
    if (!href || /^(mailto:|tel:|#)/.test(href)) continue;
    const target = new URL(href.replaceAll("&amp;", "&"), base);
    if (target.origin === base.origin) {
      assert(!/target="_blank"/.test(tag), `${route}: internal links must use the same tab`);
      internalDestinations.add(target.pathname);
    } else {
      assert(allowedExternalHosts.has(target.hostname), `${route}: unexpected external link ${target.hostname}`);
    }
  }
  if (route === "/contact") {
    assert(html.includes("mailto:dst@monroealumnae1955.org"), "Contact email must work without Wix");
    assert(html.includes("tel:+13185820653"), "Contact telephone link must exist");
    assert(!/<form\b/.test(html), "Do not present an unconnected submission form");
  }
}
for (const route of internalDestinations) {
  const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 200, `Internal destination ${route} must exist`);
}
for (const [oldPath, newPath] of Object.entries(aliases)) {
  const response = await fetch(new URL(oldPath, base), { redirect: "manual", signal: AbortSignal.timeout(30000) });
  assert.equal(response.status, 307, `${oldPath} should redirect locally`);
  const location = new URL(response.headers.get("location"), base);
  assert.equal(location.origin, base.origin);
  assert.equal(location.pathname, newPath);
}
const missing = await fetch(new URL("/programs/not-a-real-program", base));
assert.equal(missing.status, 404, "Unknown program slugs must return 404");
console.log(`Passed: ${routes.length} pages, ${internalDestinations.size} internal destinations, ${Object.keys(aliases).length} local redirects, and unknown-program 404. No navigation links point to Wix.`);
