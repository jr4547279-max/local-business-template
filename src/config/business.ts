export type BusinessConfig = {
  name: string;
  email: string;
  phone: string;
  tagline: string;
  location: string;
  services: string[];
  enquiryTypes: string[];
};

export const business: BusinessConfig = {
  name: "Hawthorne & Stone",
  email: "hello@yourbusiness.co.uk",
  phone: "",
  tagline: "Independent · Local · Trusted",
  location: "",
  services: [
    "General property care",
    "Maintenance & repairs",
    "Exterior work",
    "Interior work",
    "Other / not sure",
  ],
  enquiryTypes: ["General enquiry", "Request a quote", "Booking"],
};
