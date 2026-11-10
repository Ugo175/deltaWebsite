import Image from "next/image";
import { SiteLink } from "@/components/ui/SiteLink";
import { destinations } from "@/config/navigation";
import { president } from "@/data/president";

export function PresidentsMessage() {
  return <section className="president-section" aria-labelledby="president-title">
    <div className="container president-grid">
      <figure className="president-portrait">
        <Image src={president.image} alt={`${president.name}, Monroe Alumnae Chapter President`} width={president.width} height={president.height} sizes="(max-width: 700px) 90vw, 380px" />
        <figcaption><strong>{president.name}</strong><span>Chapter President</span></figcaption>
        <SiteLink className="button button-crimson president-board-link" href={destinations.eboard}>Meet Our Eboard</SiteLink>
      </figure>
      <div className="president-message">
        <p className="eyebrow">A welcome from our president</p>
        <h2 id="president-title">Welcome to our website.</h2>
        <p>Welcome to the Monroe Alumnae Chapter of Delta Sigma Theta Sorority, Incorporated.</p>
        <p>Thank you for visiting our website. As Chapter President, I am delighted to welcome you and invite you to discover our sisterhood, our commitment to service, and the ways we connect with the Monroe community.</p>
        <p>{president.closing}<br /><em className="president-signature">{president.name}</em></p>
      </div>
    </div>
  </section>;
}
