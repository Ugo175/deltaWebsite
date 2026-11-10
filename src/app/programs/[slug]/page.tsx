import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { programDetails } from "@/data/program-details";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return programDetails.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = programDetails.find(item => item.slug === slug);
  if (!detail) notFound();
  return { title: `${detail.title} | Monroe Alumnae Chapter`, description: detail.introduction };
}
export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const detail = programDetails.find(item => item.slug === slug);
  if (!detail) notFound();
  return <ProgramDetailPage detail={detail} />;
}
