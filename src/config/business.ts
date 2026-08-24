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
 * Prospect demo configuration for Peter & Son Property Maintenance.
 * This lives on a separate client branch; the master template is untouched.
 */
export const business: BusinessConfig = {
  name: "Peter & Son Property Maintenance",
  email: "Peterandson100@gmail.com",
  phone: "07380 603426",
  tagline: "Eastbourne · Family-run · Reliable",
  location: "Eastbourne & East Sussex",
  description:
    "A friendly father-and-son property maintenance team providing practical, reliable work across Eastbourne and East Sussex.",
  services: [
    "Guttering & fascia",
    "Roof cleaning & repairs",
    "Fencing & decking",
    "Pressure washing",
    "Patios & driveways",
    "General property maintenance",
  ],
  enquiryTypes: ["Free quote", "Booking", "General enquiry"],
  bookingUrl: "",
};
