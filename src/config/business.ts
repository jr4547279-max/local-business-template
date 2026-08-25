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
 * Source: carpetcleanereastbourne.co.uk and public business listings, researched August 2026.
 */
export const business: BusinessConfig = {
  name: "Select Cleaning Services",
  email: "info@carpetcleanereastbourne.co.uk",
  phone: "01323 729661 / 459409",
  tagline: "Family-run · Eastbourne · East Sussex",
  location: "Eastbourne & East Sussex",
  description:
    "Family-run cleaning specialists covering carpets, offices, driveways, outdoor surfaces and vehicle valeting across Eastbourne and East Sussex.",
  services: [
    "Carpet & upholstery cleaning",
    "Office & commercial cleaning",
    "Driveway & patio cleaning",
    "Fascia & gutter cleaning",
    "Conservatory & outdoor cleaning",
    "Vehicle valeting",
    "End-of-tenancy & contract cleaning",
  ],
  enquiryTypes: ["Free estimate", "Book a cleaning service", "Commercial enquiry", "General enquiry"],
  bookingUrl: "",
};
