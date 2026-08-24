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
  name: "The Crown",
  email: "",
  phone: "+441323724654",
  tagline: "Old Town · Community Pub · Real Ale",
  location: "22 Crown Street, Old Town, Eastbourne BN21 1PB",
  description: "A friendly traditional Old Town pub with real ale, a large garden, live music, quizzes and beer festivals.",
  services: ["Real ale & changing beers", "Garden & summer BBQs", "Live music & concerts", "Quiz nights", "Beer festivals", "Pool room"],
  enquiryTypes: ["General enquiry", "Event / group enquiry", "Private function enquiry"],
  bookingUrl: "",
};
