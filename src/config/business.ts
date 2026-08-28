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

/** Prospect-specific demo configuration. */
export const business: BusinessConfig = {
  name: "Joint to Joint",
  email: "Richard@joint-to-joint.co.uk",
  phone: "07877 146685",
  tagline: "REPOINTING · BRICKWORK · RESTORATION",
  location: "Eastbourne · Sussex",
  description:
    "Family-run brickwork and repointing specialists with decades of experience restoring and protecting homes across Eastbourne and Sussex.",
  services: [
    "Traditional lime repointing",
    "Sand & cement repointing",
    "Brickwork repairs",
    "Patios & masonry",
    "Exterior repairs",
    "Not sure — tell us what you need",
  ],
  enquiryTypes: ["Request a quote", "Book a survey", "General enquiry"],
  bookingUrl: "",
};
