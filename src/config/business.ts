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

/** Client research: Bourne to Kayak, Wish Tower Beach, Eastbourne. */
export const business: BusinessConfig = {
  name: "Bourne to Kayak",
  email: "bournetokayak@outlook.com",
  phone: "07359 668350",
  tagline: "Eastbourne · Kayaks · SUP Boards",
  location: "Wish Tower Beach, King Edwards Parade, Eastbourne, BN21 4BY",
  description: "Sit-on kayak and stand-up paddleboard hire from Wish Tower Beach on the Eastbourne coast.",
  services: ["Sit-on kayak hire", "Stand-up paddleboard hire", "Family / group hire", "Booking enquiry", "Not sure — ask us"],
  enquiryTypes: ["Book a session", "Check availability", "General enquiry"],
  bookingUrl: "",
};
