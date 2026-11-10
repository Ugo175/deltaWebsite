import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { SiteLink } from "@/components/ui/SiteLink";
import { destinations } from "@/config/navigation";
import { boardMembers } from "@/data/eboard";
import { president } from "@/data/president";

export const metadata: Metadata = {
  title: "Meet Our Eboard | Monroe Alumnae Chapter",
  description: "A welcome from Dr. LaTina S. Johnson, President of Monroe Alumnae Chapter.",
};

export default function Eboard() {
  return <>
    <PageIntro eyebrow="Our chapter leadership" title="Meet Our Eboard." accent="Leading with sisterly spirit." description="Get to know the leadership of Monroe Alumnae Chapter." />
    <section className="president-section" aria-labelledby="eboard-president-title">
      <div className="container eboard-welcome">
        <figure className="president-portrait">
          <Image src={president.image} alt={`${president.name}, Monroe Alumnae Chapter President`} width={president.width} height={president.height} sizes="(max-width: 700px) 85vw, 320px" />
          <figcaption><strong>{president.name}</strong><span>Chapter President</span></figcaption>
        </figure>
        <div className="president-message">
          <p className="eyebrow">A message from our president</p>
          <h2 id="eboard-president-title">President’s welcome</h2>
          <p className="president-greeting">{president.greeting}</p>
          {president.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <p>{president.closing}<br /><em className="president-signature">{president.name}</em></p>
          <div className="president-links"><SiteLink className="text-link" href={destinations.national}>About Delta <ArrowUpRight size={16} aria-hidden="true" /></SiteLink><SiteLink className="text-link" href={destinations.region}>Southwest Region <ArrowUpRight size={16} aria-hidden="true" /></SiteLink></div>
        </div>
      </div>
    </section>
    <section className="container content-section" aria-labelledby="board-members-title">
      <p className="eyebrow section-kicker">Service through leadership</p>
      <h2 id="board-members-title">Our executive board</h2>
      <div className="eboard-grid">
        {boardMembers.map(member => <figure className="eboard-card" key={member.name}>
          <div className="eboard-photo"><Image src={member.image} alt={member.name} width={member.width} height={member.height} sizes="(max-width: 600px) 90vw, (max-width: 960px) 45vw, 30vw" /></div>
          <figcaption><h3>{member.name}</h3><p>{member.role}</p></figcaption>
        </figure>)}
      </div>
    </section>
  </>;
}
