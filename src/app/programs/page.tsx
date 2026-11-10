import type { Metadata } from "next";
import { CalendarDays, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { SiteLink } from "@/components/ui/SiteLink";
import { programs, committees, additionalPrograms } from "@/data/programs";
import { site } from "@/config/site";
import { destinations } from "@/config/navigation";

export const metadata: Metadata = { title: "Programs & Events | Monroe Alumnae Chapter", description: "Explore Monroe Alumnae Chapter’s Five-Point Programmatic Thrust, committees, and community involvement." };
export default function Programs() {
  return <><PageIntro eyebrow="Public service in action" title="Purpose in every program." accent="Community at the heart." description="Discover the areas of service that guide Monroe Alumnae Chapter’s work in the community." />
    <section className="container content-section" aria-labelledby="programs-title"><p className="eyebrow section-kicker">Our foundation for service</p><h2 id="programs-title">The Five-Point<br /><em>Programmatic Thrust.</em></h2><p className="page-copy">Since 1955, Monroe Alumnae Chapter has developed service programs addressing the needs of African Americans and their families.</p>
      <div className="program-grid">{programs.map((program,index) => <article className="program-card" key={program.title}><span className="program-number" aria-hidden="true">0{index+1}</span><h3>{program.title}</h3><p>{program.description}</p><SiteLink className="text-link" aria-label={`${program.title} program details`} href={program.href}>Program details <ArrowRight size={17} aria-hidden="true" /></SiteLink></article>)}</div>
    </section>
    <section className="program-extra" aria-labelledby="additional-title"><div className="container"><p className="eyebrow section-kicker">More ways we serve</p><h2 id="additional-title">A shared commitment.</h2><div className="resource-grid">{additionalPrograms.map(item => <SiteLink key={item.title} href={item.href}>{item.title}<ArrowRight size={20} aria-hidden="true" /></SiteLink>)}</div><h3 className="committee-heading">Additional committees</h3><ul className="committee-list">{committees.map(name=><li key={name}>{name}</li>)}</ul></div></section>
    <section id="events" className="container content-section" aria-labelledby="events-title"><div className="events-panel"><CalendarDays size={36} aria-hidden="true" /><div><p className="eyebrow section-kicker">Stay connected</p><h2 id="events-title">Community events</h2><p className="page-copy">For upcoming event dates and participation information, contact the chapter. Browse our gallery for moments from past chapter activities.</p><div className="page-actions"><SiteLink className="button button-crimson" href={`mailto:${site.email}`}>Ask about upcoming events <ArrowRight size={18} aria-hidden="true" /></SiteLink><SiteLink className="text-link" href={destinations.gallery}>Explore the gallery <ArrowRight size={17} aria-hidden="true" /></SiteLink></div></div></div></section>
  </>;
}
