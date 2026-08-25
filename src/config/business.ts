export type BusinessConfig = {
  name: string;
  email: string;
  phone: string;
  tagline: string;
  location: string;
  description: string;
  services: string[];
  enquiryTypes: string[];
  bookingUrl: string;
};

/**
 * Client configuration generated from public business research.
 * Source: colbranwingrove.co.uk and public business listings, researched August 2026.
 */
export const business: BusinessConfig = {
  name: "Colbran & Wingrove",
  email: "office@colbranwingrove.co.uk",
  phone: "01323 729025",
  tagline: "Family-run · Independent · Since 1967",
  location: "Eastbourne & East Sussex",
  description:
    "Independent residential and commercial building contractor based in Eastbourne, managing projects from early ideas and surveys through construction and final finish.",
  services: [
    "Extensions & alterations",
    "Loft conversions",
    "Refurbishment & repairs",
    "Commercial building & maintenance",
    "New build projects",
    "Decorating & finishing",
    "Other / not sure",
  ],
  enquiryTypes: ["Request a quote", "Discuss a project", "General enquiry"],
  bookingUrl: "",
};
