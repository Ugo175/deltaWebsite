import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
import { destinations } from "@/config/navigation";
import { programDetailLinks, type ProgramDetail } from "@/data/program-details";
import { programPhotos } from "@/data/program-photos";

export function ProgramDetailPage({ detail, memberPage = false }: { detail: ProgramDetail; memberPage?: boolean }) {
  const photos = detail.photoGroup ? programPhotos[detail.photoGroup] : undefined;
  return <>
    <PageIntro eyebrow={memberPage ? "Our sisterhood" : "Monroe Alumnae programs"} title={detail.title} accent={detail.accent} description={detail.introduction} />
    <div className="container detail-layout content-section">
      <div className="detail-content">
        <Link className="text-link" href={memberPage ? destinations.membership : destinations.programs}><ArrowLeft size={17} aria-hidden="true" />{memberPage ? "Back to membership" : "All programs & events"}</Link>
        {detail.sections.map(section => <section className="detail-section" key={section.title}><h2>{section.title}</h2>{section.paragraphs?.map(text => <p className="page-copy" key={text}>{text}</p>)}{section.items && <ul className="detail-list">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}</section>)}
        {detail.updateNote && <section className="detail-section"><h2>Program information</h2><p className="page-copy">{detail.updateNote}</p></section>}
        <div className="detail-contact"><h2>Connect with the chapter</h2><p className="page-copy">Ask about current activities, participation, or additional information.</p><Link className="button button-crimson" href={destinations.contact}>Contact Monroe Alumnae <ArrowRight size={18} aria-hidden="true" /></Link></div>
      </div>
      <aside className="detail-sidebar"><h2>Explore our programs</h2><nav aria-label="Chapter programs">{programDetailLinks.map(item => <Link key={item.href} href={item.href} aria-current={item.href === `/programs/${detail.slug}` ? "page" : undefined}>{item.title}<ArrowRight size={16} aria-hidden="true" /></Link>)}</nav></aside>
    </div>
    {photos?.length ? <section className="container detail-archive content-section" aria-labelledby="program-photos-title"><p className="eyebrow section-kicker">From our chapter archive</p><h2 id="program-photos-title">Moments from our work together.</h2><p className="resource-note">These photographs and materials document past chapter activities.</p><PhotoGallery key={detail.photoGroup} images={photos} /></section> : null}
  </>;
}
