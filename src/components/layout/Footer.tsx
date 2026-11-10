import { SiteLink } from "@/components/ui/SiteLink";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/config/site";
import { destinations } from "@/config/navigation";
export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><p className="footer-kicker">Sisterhood in action</p><h2>{site.name}</h2><p>{site.organization}</p><div className="social-links"><SiteLink href={site.social.facebook} aria-label="Monroe Alumnae on Facebook">Facebook</SiteLink><SiteLink href={site.social.instagram} aria-label="Monroe Alumnae on Instagram">Instagram</SiteLink></div></div>
    <div><h3>Stay connected</h3><SiteLink href={`mailto:${site.email}`}>{site.email}</SiteLink><SiteLink href="tel:+13185820653">{site.phone}</SiteLink><address>{site.address[0]}<br />{site.address[1]}</address></div>
    <div><h3>Explore</h3><SiteLink href={destinations.contact}>Contact us</SiteLink><SiteLink href={destinations.home}>Home</SiteLink><SiteLink href={destinations.about}>Our chapter <ArrowUpRight size={13} aria-hidden="true" /></SiteLink><SiteLink href={destinations.programs}>Programs & events <ArrowUpRight size={13} aria-hidden="true" /></SiteLink><SiteLink href={destinations.membership}>Membership <ArrowUpRight size={13} aria-hidden="true" /></SiteLink></div>
  </div><div className="container footer-bottom"><p>© {new Date().getFullYear()} Monroe Alumnae Chapter. All rights reserved.</p><p>This website is the sole property and responsibility of the Monroe Alumnae Chapter of Delta Sigma Theta Sorority, Incorporated.</p></div></footer>;
}
