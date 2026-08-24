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
  name: "Dotty's Vintage Travelling Tea Company",
  email: "dottysteas@gmail.com",
  phone: "01323 485909",
  tagline: "Vintage afternoon tea · Eastbourne & East Sussex",
  location: "Eastbourne, East Sussex",
  description: "A vintage afternoon tea experience brought to your door, complete with homemade treats and beautiful vintage tableware.",
  services: ["Afternoon tea at home", "Birthdays", "Hen parties", "Baby showers", "Special occasions"],
  enquiryTypes: ["Birthday", "Hen party", "Baby shower", "Special occasion", "General enquiry"],
  bookingUrl: "mailto:dottysteas@gmail.com",
};
