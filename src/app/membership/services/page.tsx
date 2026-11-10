import type { Metadata } from "next";
import { membershipServicesDetail } from "@/data/program-details";
import { ProgramDetailPage } from "@/components/programs/ProgramDetailPage";
export const metadata: Metadata = { title: "Membership Services | Monroe Alumnae Chapter", description: membershipServicesDetail.introduction };
export default function MembershipServices() { return <ProgramDetailPage detail={membershipServicesDetail} memberPage />; }
