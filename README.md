# Monroe Alumnae Chapter website

Milestone one: a statically rendered Next.js App Router homepage with TypeScript, React, Tailwind CSS, ESLint, and Lucide React. Responsive navigation, an introduction above an unobstructed chapter photograph, a president’s welcome with portrait, and a basic footer are implemented. No backend, CMS, authentication, or database is included.

## Local development

Use Node.js 20.9 or later (verified with Node 24.10) and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. To verify and serve the production build:

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

Webpack and the standard Tailwind PostCSS plugin are selected because the local sandbox blocks the process port required by the generated Turbopack CSS loader. This does not change App Router or static rendering.

## Structure and editing

- `src/app/`: root metadata, homepage composition, global styles and design tokens.
- `src/components/layout/`: sticky responsive Navbar and Footer.
- `src/components/home/`: Hero and PresidentsMessage.
- `src/config/navigation.ts`: verified existing Wix destinations and navigation entries. Replace an external URL with `/your-route` when that page is migrated.
- `src/config/site.ts`: chapter identity, contact information and verified social URLs.
- `src/data/homepage.ts`: editable hero copy and image references.
- `src/data/president.ts`: president welcome and portrait reference.
- `src/components/ui/SiteLink.tsx`: internal links stay in this tab; external websites open safely in a new tab with an accessible announcement.
- `public/images/`: local chapter assets optimized through Next Image.

Only the Navbar uses client JavaScript. Native disclosure elements support keyboard dropdowns; the mobile toggle exposes its state, Escape closes the dropdown/menu and restores focus, and a skip link provides direct access to the main content. Fonts use Georgia and system sans-serif without remote font dependencies. Motion is limited to hover transitions with reduced-motion support. A single hero image is deliberate: additional approved images should precede any carousel implementation.

## Source review (October 13, 2026)

Reference: https://wdcacdst.org/ — grouped navigation over a full-width photographic carousel, large type, crimson/white identity, followed by events, president, impact, image collections, legacy, testimonials and partners. The new foundation uses its photographic emphasis and generous spacing without copying text, code, or photographs. Desktop appearance was inspected; reference hover animations and mobile behavior were not fully audited.

Chapter: https://www.dstmonroealumnae.org/ — logo, chapter group photograph, navigation, president welcome, programs and contact information were reviewed. Existing verified destinations: `/about-us`, `/portfolio`, `/gallery`, `/membership`, `/contact`. All remain on the Wix domain. The About page verifies the March 25, 1955 charter; no numerical impact claims are used. The homepage legacy paragraph mentions the nation’s capital and founders in wording inconsistent with Monroe, so it is intentionally excluded. The homepage and some older pages list different email addresses; this foundation uses the current homepage address. Confirm current leadership, service area and editorial copy before a later content milestone.

Asset sources:
- Logo: https://static.wixstatic.com/media/b376c6_7a501cc221344a138dae209e69f7a8b9~mv2.png
- Group photograph: https://static.wixstatic.com/media/b376c6_6a2580f95fd444d8b28ab73945826302~mv2.jpg

These are chapter assets from the existing site. Confirm publication approval and preferred high-resolution originals before launch. Hero headline and introduction are proposed editorial copy, not quotations. The president’s welcome and portrait were added October 15, 2026, using the supplied screenshot and published chapter homepage. The welcome retains its published membership count, charter date and leadership details. No Washington assets are used.

## Verification and known issue

Production build prerenders `/` statically. Desktop and 390px mobile layouts were reviewed in the browser, with no horizontal overflow on mobile. Menu toggle, Enter to open the About dropdown, Escape to close it and Escape to close the menu were checked. Lint and TypeScript checks are run separately from the build.

The initial October 13 production audit reported zero vulnerabilities; see the October 22 security update below for the current result. The initial full audit reported five high-severity entries in a single development-tool dependency chain (`eslint-config-next` → `fast-glob` → `micromatch` → `braces`). The reported advisory is https://github.com/advisories/GHSA-vfj7-8cjw-p6xm; npm currently offers no patched braces release. Recheck before deployment; do not apply the suggested forced Next ESLint downgrade without compatibility review.

## Future milestones

After review and explicit approval: upcoming events, programs/community impact, and chapter legacy. Obtain approved assets and current content first. Sanity, database features, additional routes and production deployment are deferred. Vercel is the intended host; no deployment, Wix modification, DNS change, or domain change has been performed. Establish the deployment URL before adding canonical and social-preview URLs.

## Navigation update (October 15, 2026)

The existing-website preview callout was removed. Home, the chapter logo, and footer Home point to `/` on the new application. All remaining Wix pages, About Delta (https://www.deltasigmatheta.org/), and regional/social websites open in a separate tab so this homepage stays available. A return instruction is displayed beside the national and regional links. Wix pages retain their own navigation; changing their Home links requires editing Wix or rebuilding those pages, which remains outside this update. Browser Back operates within each tab; return to the original tab to resume the new site. Internal routes will automatically use the same tab as pages migrate.

President portrait source: https://static.wixstatic.com/media/b376c6_e1c02720651d45d899064b2c04155113~mv2.jpg

## Readability update (October 22, 2026)

The president’s message uses 20px body text, 1.8 line height, and darker text. The closing signature uses an explicit italic element and 30px serif type. The hero introduction and buttons sit above the photograph; the full image scales proportionally with no overlay or crop. Mobile verification at 390px confirms no horizontal overflow.

## About Us migration (October 22, 2026)

`/about-us` is now a local, statically rendered App Router page. Header, skip link, main landmark and footer live in the root layout and are shared by both pages. About destinations now use `/about-us`, and navigation highlights the current route. Programs, gallery, membership and contact remain external until approved for migration.

About content is in `src/data/about.ts`; reusable sections are in `src/components/about/`. The page includes the chapter timeline, 12 charter members, historical service-area context and four historical photographs. Paragraphs use readable 20px text; images retain their original proportions. Same-tab navigation supports Home, Back to home, browser Back and on-page section anchors.

Source: https://www.dstmonroealumnae.org/about-us (reviewed October 22, 2026). Historical dates and names were retained with concise rewritten prose. Older living-member and initiate-count claims were omitted pending a current chapter review. Parish expansion is presented as recorded history rather than a confirmed current service boundary. The group photograph includes the nine past presidents standing and charter members Jacquelyn Hilton Dawson and Francis Pierce Reddix seated; both original captions are retained. Chapter approval of names, spellings and archival captions is still appropriate before publication.

Downloaded chapter assets, stored in `public/images/history/`:
- `chapter-meeting-1959.png`: https://static.wixstatic.com/media/b376c6_0bab758cddae4f3da16f178f45681f34~mv2.png
- `past-presidents.jpg`: https://static.wixstatic.com/media/b376c6_fa7a3480ca7c40fea89410475f96d11c~mv2.jpg
- `gertrude-keys.png`: https://static.wixstatic.com/media/b376c6_75657af68b7e4b6da4a8cbcbe870513b~mv2.png
- `zolee-jones.png`: https://static.wixstatic.com/media/b376c6_724c3a669ae04e3eb1d617e648657105~mv2.png

## Programs, Gallery, and Membership migration (October 22, 2026)

Main navigation now uses `/programs`, `/gallery`, and `/membership`. They share the root layout, metadata conventions, and 18–20px content text. Page introductions are shared through `PageIntro`. Editable content is in `src/data/programs.ts`, `gallery.ts`, and `membership.ts`. No new packages, forms, authentication, or backend were introduced.

Programs preserves the five service areas, additional committees and verified original detail URLs in `chapterResources` (`src/config/navigation.ts`). Those detail pages remain external. An old multi-event flyer is not shown as current; no future event dates could be verified. The events section offers chapter contact and the gallery instead. International and health detail-page fetching failed in the reader, so summaries only repeat their verified category labels rather than inventing initiatives.

Gallery preserves 11 usable photos from the original gallery. The blank final source image and chapter-logo asset were omitted from the photographic collection. Images are uncropped; original EXIF orientation is respected by image optimization. Descriptions reflect visible content and do not assign unverified event names or dates. The native dialog viewer supports previous/next buttons, left/right arrow keys, Escape, focus containment, and native focus return to the triggering thumbnail.

Membership preserves eligibility for visiting sorors, card/member-number verification, photo ID, business attire and early arrival. The old schedule is explicitly attributed to the published page and asks visitors to confirm arrangements. Third-party replacement-card files from brsigma.org could not be verified; visitors are directed to the chapter for current instructions. No personal information is collected. National membership, Sorors Only, and Membership Services links remain accessible in new tabs.

Source pages: https://www.dstmonroealumnae.org/portfolio, https://www.dstmonroealumnae.org/gallery, https://www.dstmonroealumnae.org/membership. Original image URLs are recorded in `docs/migrated-page-assets.json`. The current homepage email is used consistently instead of the older Gmail address on these pages. Contact and program/member detail subpages remain outside this migration.

### Current verification and security status

A clean temporary installation from the exact package lock passed ESLint and the production build (including TypeScript checking) for `/`, `/about-us`, `/programs`, `/gallery`, and `/membership`; all five pages prerender statically. The original installed modules stalled during tool loading, so dependencies were refreshed with `npm ci` without changing versions.

The current production audit reports a critical Next.js advisory affecting the pinned 16.4.0 version, with 16.4.2 offered as the patch. The build initially stops to announce this advisory; the repeated build succeeds with a warning. Upgrade Next.js before public deployment. Advisories: https://github.com/advisories/GHSA-2464-fhr4-w9xw, https://github.com/advisories/GHSA-p3m5-59mp-jv5r, https://github.com/advisories/GHSA-673q-mjm6-r5xr. Dependencies were not upgraded as part of the content migration.

The project installation now also passes ESLint and the repeated production build, including TypeScript. Regenerating the disposable `.next/dev` cache resolved timed-out Webpack cache reads in the preview. The refreshed development server remains on port 3000. Browser checks cover desktop and 390px mobile layouts, same-tab main navigation, gallery next/previous and wraparound, Escape closing, and focus return to the invoking thumbnail.

## Independent chapter navigation (November 5, 2026)

All chapter-page links now stay inside this Next.js application. Contact, the eight program detail pages, Membership Services, and member-resource guidance no longer navigate to Wix. National, regional, and social links remain intentional external links. The original Wix website, DNS, and domain settings are untouched; existing tabs or bookmarks on its domain still display that separate site.

### New local routes

- `/contact`: working email, telephone, mailing address, and local program/membership navigation. Email opens the visitor’s email application; there is no submission form or backend and no false delivery confirmation.
- `/programs/[slug]`: eight statically generated pages defined in `src/data/program-details.ts`. The shared `ProgramDetailPage` renders content, program navigation, chapter contact links, and archival photographs. Unknown slugs return 404.
- `/membership/services`: public committee information and historical photographs.
- `/membership/member-resources`: public guidance to contact the chapter for access to member materials. No private Wix content, credentials, portal, or authentication has been recreated.

`src/config/legacy-routes.ts` maps eleven legacy paths to local destinations using temporary 307 redirects in the new app only. These include `/portfolio`, `/projects-8`, `/scholarship`, and `/sorors-only`. Parent navigation stays highlighted on program/member subpages.

### Content and source limits

Original public pages were reviewed November 5, 2026. Existing program copy was summarized, and photographs/emblems were retained locally with source URLs recorded in `docs/program-detail-assets.json`. The old Economic Development and Arts & Letters copy was corroborated by the public page reader’s archived content; the live page bodies were empty when retrieved. Education, political awareness, scholarship, Delta DEARS, and membership services had readable public content. International Awareness and Physical & Mental Health returned no readable current program body, so their local pages explicitly request chapter contact for current details instead of inventing initiatives. Current chapter-approved copy is needed to complete those two program descriptions. No event dates, application deadlines, or scholarship eligibility rules were fabricated.

Public source paths under https://www.dstmonroealumnae.org/: `projects-8`, `copy-of-economic-development`, `copy-2-of-economic-development`, `copy-of-international-awareness-inv`, `copy-2-of-international-awareness-inv`, `art-letters`, `scholarship`, `delta-dears`, `membership-services`, `contact`. The protected `sorors-only` destination was not accessed beyond its public response.

### Navigation regression check

With a local server running:

```sh
npm run check:navigation
# Or point it at a production preview:
npm run check:navigation -- http://127.0.0.1:3001
```

This checks 16 page responses, the Home/logo destination, every rendered local destination, same-tab internal links, an explicit external-host allowlist, all eleven compatibility redirects, contact links, and unknown-program 404 behavior. It fails on any rendered Wix navigation link. These checks passed against both development and the production preview. Browser checks also confirmed Programs → Education → Home → Back, mobile layouts without horizontal overflow at 390px, and switching from the tenth education photograph to the four-photo scholarship collection without retaining an invalid viewer index.

Production compilation, TypeScript, and ESLint passed in a clean temporary copy with identical source and the same locked dependencies. The existing Next.js security advisory still requires an upgrade before deployment; the repeated build completes with the framework warning. Development-only Webpack caching now uses memory to avoid repeated ETIMEDOUT reads from the local disk cache; production cache configuration is unchanged.
