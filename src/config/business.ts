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
  name: "Love To Walk",
  email: "lovetowalk.co.uk@gmail.com",
  phone: "",
  tagline: "Eastbourne · Guided countryside walks · Meet people",
  location: "Eastbourne, East Sussex",
  description: "Weekly guided countryside walks around Eastbourne, bringing people together to explore the Downs in a relaxed, social setting.",
  services: ["Weekly guided walks", "Social countryside walks", "The Downs", "Pub-stop walks"],
  enquiryTypes: ["I want to join", "Ask about the next walk", "General enquiry"],
  bookingUrl: "",
};
