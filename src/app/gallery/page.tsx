import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { PhotoGallery } from "@/components/gallery/PhotoGallery";
export const metadata: Metadata = { title: "Gallery | Monroe Alumnae Chapter", description: "Explore photographs from Monroe Alumnae Chapter’s community activities and sisterhood gatherings." };
export default function Gallery() {
  return <><PageIntro eyebrow="Our chapter in photographs" title="Moments together." accent="Memories that connect us." description="A collection of community activities, chapter gatherings, and sisterhood from our chapter gallery." /><section className="container content-section" aria-labelledby="gallery-title"><p className="eyebrow section-kicker">Sisterhood, captured</p><h2 id="gallery-title">Life in Monroe Alumnae.</h2><PhotoGallery slideshow /></section></>;
}
