import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { destinations } from "@/config/navigation";
export const metadata: Metadata = { title: "Member Resources | Monroe Alumnae Chapter", description: "Contact the chapter for access to member materials and chapter communications." };
export default function MemberResources() {
  return <><PageIntro eyebrow="For current sorors" title="Member resources." accent="Stay connected to your chapter." description="Guidance for chapter members seeking materials and member communications." /><section className="container content-section member-guidance" aria-labelledby="member-materials-title"><h2 id="member-materials-title">Looking for chapter materials?</h2><p className="page-copy">Contact the chapter for current access instructions for member documents and communications. Member-only materials are not published on this public website.</p><div className="page-actions"><Link className="button button-crimson" href={destinations.contact}>Request access instructions <ArrowRight size={18} aria-hidden="true" /></Link><Link className="text-link" href={destinations.membership}><ArrowLeft size={17} aria-hidden="true" /> Back to membership</Link></div></section></>;
}
