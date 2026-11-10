import { chapterResources } from "@/config/navigation";
export type ProgramSection = { title: string; paragraphs?: string[]; items?: string[] };
export type ProgramDetail = { slug: string; title: string; accent: string; introduction: string; sections: ProgramSection[]; photoGroup?: string; updateNote?: string };

export const programDetails: ProgramDetail[] = [
  {
    slug: "economic-development", title: "Economic Development", accent: "Building financial knowledge.",
    introduction: "Financial Fortitude programming supports community financial education.",
    sections: [{ title: "Financial Fortitude", paragraphs: ["The chapter’s published program describes a practical approach to personal finances: identify goals, make a plan, and put that plan into action."], items: ["Goal setting", "Financial planning", "Budgeting", "Debt management", "Savings and investments", "Retirement planning", "Homeownership", "Insurance", "Estate planning", "Entrepreneurship"] }],
  },
  {
    slug: "educational-development", title: "Educational Development", accent: "Encouraging the next generation.",
    introduction: "Mentoring, positive relationships, and enriching educational experiences for young people in the Monroe area.", photoGroup: "educational",
    sections: [
      { title: "Supporting student growth", paragraphs: ["The Educational Development Committee supports academic achievement and social development through youth-focused public service programs."] },
      { title: "Delta Academy", paragraphs: ["Delta Academy serves girls ages 11–14 with educational enrichment, leadership through service, and opportunities to build relationships. Its focus includes math, science, and technology."] },
      { title: "EMBODI", paragraphs: ["EMBODI focuses on the educational, social, and emotional development of African American males through dialogue, workshops, and community collaboration."] },
      { title: "Delta GEMS", paragraphs: ["Delta GEMS serves girls ages 14–18, encouraging academic success, goal setting, college and career planning, and community service."] },
    ],
  },
  {
    slug: "international-awareness", title: "International Awareness & Involvement", accent: "A broader perspective on service.",
    introduction: "One of the chapter’s five programmatic areas.",
    sections: [], updateNote: "Current chapter information for this program is being updated. Contact Monroe Alumnae for details about initiatives and opportunities to participate.",
  },
  {
    slug: "physical-mental-health", title: "Physical & Mental Health", accent: "Connecting through community care.",
    introduction: "One of the chapter’s five programmatic areas.",
    sections: [], updateNote: "Current chapter information for this program is being updated. Contact Monroe Alumnae for details about initiatives and opportunities to participate.",
  },
  {
    slug: "political-awareness", title: "Political Awareness & Involvement", accent: "An informed, engaged community.",
    introduction: "Nonpartisan voter education, registration, and community involvement.", photoGroup: "political",
    sections: [{ title: "Information. Education. Participation.", paragraphs: ["The chapter’s published mission in this area is to inform, educate, and register people to vote. Its work includes community partnerships, voter education, and outreach to first-time voters.", "Programming is nonpartisan and emphasizes an informed electorate and civic participation."] }],
  },
  {
    slug: "arts-letters", title: "Arts & Letters", accent: "Celebrating creative expression.",
    introduction: "Performing, visual, and literary arts connect our community with African American cultural expression.",
    sections: [{ title: "Keeping a creative legacy alive", paragraphs: ["Monroe Alumnae’s published Arts and Letters program supports creative expression and honors African American history through the arts. Its work aligns with the national Arts and Letters Commission’s initiatives."] }],
  },
  {
    slug: "scholarship", title: "Scholarship", accent: "Supporting educational aspirations.",
    introduction: "Supporting local students as they pursue education beyond high school.", photoGroup: "scholarship",
    sections: [{ title: "Investing in education", paragraphs: ["The chapter’s scholarship program offers financial support to local students pursuing further education and their professional goals.", "Contact the chapter for current application availability, eligibility requirements, and deadlines."] }],
  },
  {
    slug: "delta-dears", title: "Delta DEARS", accent: "Honoring a legacy of dedication.",
    introduction: "Dedicated, Energetic, Active, Respected Sorors.", photoGroup: "delta-dears",
    sections: [{ title: "Experience that strengthens our sisterhood", paragraphs: ["Delta DEARS recognizes sorors age 62 and older and the knowledge, leadership, and history they share. Monroe Alumnae honors their years of service and the legacy they continue to build."] }],
  },
];
export const membershipServicesDetail: ProgramDetail = {
  slug: "membership-services", title: "Membership Services", accent: "An atmosphere of sisterly love.",
  introduction: "Strengthening connections through retention, reclamation, and sisterhood.", photoGroup: "membership-services",
  sections: [{ title: "Staying connected", paragraphs: ["The Membership Services Committee designs activities that bring sorors together and strengthen the chapter community."], items: ["Chapter Retreat", "Alumnae and Collegiate Exchange", "Sisterhood Month celebrations and activities"] }],
};
export const programDetailLinks = [
  { title: "Economic Development", href: chapterResources.economic },
  { title: "Educational Development", href: chapterResources.educational },
  { title: "International Awareness & Involvement", href: chapterResources.international },
  { title: "Physical & Mental Health", href: chapterResources.health },
  { title: "Political Awareness & Involvement", href: chapterResources.political },
  { title: "Arts & Letters", href: chapterResources.arts },
  { title: "Scholarship", href: chapterResources.scholarship },
  { title: "Delta DEARS", href: chapterResources.deltaDears },
];
