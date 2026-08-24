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
  name: "Ninkaci",
  email: "",
  phone: "01323 573528",
  tagline: "Craft beer · wine · food · good company",
  location: "Unit 9, The Enterprise Centre, Station Parade, Eastbourne BN21 1BD",
  description: "An independent Eastbourne craft beer store and tap room with changing beers, wine, food, live music and a relaxed social atmosphere.",
  services: ["Craft beer & cider", "Wine & spirits", "Cheese & charcuterie", "Live music & DJs", "Paint & sip events"],
  enquiryTypes: ["Table / group enquiry", "Event enquiry", "General enquiry"],
  bookingUrl: "",
};
