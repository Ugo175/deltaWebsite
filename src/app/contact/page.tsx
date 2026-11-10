import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { SiteLink } from "@/components/ui/SiteLink";
import { site } from "@/config/site";
import { destinations } from "@/config/navigation";
export const metadata: Metadata = { title: "Contact Us | Monroe Alumnae Chapter", description: "Connect with Monroe Alumnae Chapter by email, phone, or mail for chapter and program inquiries." };
export default function Contact() {
  return <><PageIntro eyebrow="Let’s connect" title="A conversation begins" accent="with a simple hello." description="Reach out to Monroe Alumnae Chapter with questions about our programs, community activities, or visiting the chapter." />
    <section className="container content-section" aria-labelledby="contact-title"><p className="eyebrow section-kicker">Monroe Alumnae Chapter</p><h2 id="contact-title">We’d love to hear from you.</h2><div className="contact-grid">
      <article><Mail size={28} aria-hidden="true" /><h3>Email us</h3><p>For chapter questions, program information, and community inquiries.</p><a href={`mailto:${site.email}`}>{site.email}<ArrowUpRight size={17} aria-hidden="true" /></a><small>Opens your email application.</small></article>
      <article><Phone size={28} aria-hidden="true" /><h3>Call the chapter</h3><p>Connect with the chapter by telephone.</p><a href="tel:+13185820653">{site.phone}<ArrowUpRight size={17} aria-hidden="true" /></a></article>
      <article><MapPin size={28} aria-hidden="true" /><h3>Write to us</h3><p>Mailing address</p><address>{site.address[0]}<br />{site.address[1]}</address></article>
    </div></section>
    <section className="program-extra" aria-labelledby="contact-help-title"><div className="container"><p className="eyebrow section-kicker">Find your next step</p><h2 id="contact-help-title">How can we help?</h2><div className="resource-grid"><Link href={destinations.programs}>Programs & events <ArrowRight size={20} aria-hidden="true" /></Link><Link href={destinations.membership}>Visiting sorors <ArrowRight size={20} aria-hidden="true" /></Link></div><p className="page-copy">Planning a visit? Confirm the meeting date, location, and arrangements with the chapter before attending.</p><div className="page-actions"><SiteLink className="text-link" href={site.social.facebook}>Facebook <ArrowUpRight size={17} aria-hidden="true" /></SiteLink><SiteLink className="text-link" href={site.social.instagram}>Instagram <ArrowUpRight size={17} aria-hidden="true" /></SiteLink></div></div></section>
  </>;
}
