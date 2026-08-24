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

export const business: BusinessConfig = {
  name: "Secret Beauty World",
  email: "mindasamanta@gmail.com",
  phone: "07799 673918",
  tagline: "Nails · Lashes · Brows · Beauty",
  location: "Queens Gardens, Eastbourne",
  description: "A private Eastbourne beauty studio specialising in nails, lashes and brows, with online booking made simple.",
  services: ["Gel nails", "Lashes", "Brows", "Nail art", "Permanent makeup"],
  enquiryTypes: ["Book an appointment", "Treatment enquiry", "General enquiry"],
  bookingUrl: "https://booksy.com/en-gb/179397_secret-beauty-world_nail-salon_800824_eastbourne",
};
