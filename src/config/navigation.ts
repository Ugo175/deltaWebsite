// All chapter destinations are local. Only national/regional sites remain external.
export const destinations = {
  home: "/", about: "/about-us", eboard: "/about-us/eboard", programs: "/programs",
  gallery: "/gallery", membership: "/membership", contact: "/contact",
  national: "https://www.deltasigmatheta.org/",
  region: "https://www.dstsouthwes.org/",
};
export type NavigationItem = { label: string; href: string; children?: { label: string; href: string }[] };
export const navigation: NavigationItem[] = [
  { label: "Home", href: destinations.home },
  { label: "About us", href: destinations.about, children: [{ label: "Our chapter & history", href: destinations.about }, { label: "Meet Our Eboard", href: destinations.eboard }] },
  { label: "Programs & events", href: destinations.programs },
  { label: "Gallery", href: destinations.gallery },
  { label: "Membership", href: destinations.membership },
];

// Public information and member guidance stay within this application.
export const chapterResources = {
  "economic": "/programs/economic-development",
  "educational": "/programs/educational-development",
  "international": "/programs/international-awareness",
  "health": "/programs/physical-mental-health",
  "political": "/programs/political-awareness",
  "arts": "/programs/arts-letters",
  "scholarship": "/programs/scholarship",
  "deltaDears": "/programs/delta-dears",
  "membershipServices": "/membership/services",
  "sororsOnly": "/membership/member-resources"
};
