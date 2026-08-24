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
 * Master template configuration.
 * Change this file for each client; the page stays the same.
 */
export const business: BusinessConfig = {
  name: "Hawthorne & Stone",
  email: "hello@yourbusiness.co.uk",
  phone: "",
  tagline: "Independent · Local · Trusted",
  location: "",
  description:
    "Professional local service with a premium, personal approach and attention to every detail.",
  services: [
    "General property care",
    "Maintenance & repairs",
    "Exterior work",
    "Interior work",
    "Other / not sure",
  ],
  enquiryTypes: ["Request a quote", "Booking", "General enquiry"],
  // Add a Calendly/booking URL for a client when they have one. Leave empty to use the enquiry form.
  bookingUrl: "",
};
