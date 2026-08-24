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
  name: "Sultan To Go",
  email: "",
  phone: "",
  tagline: "Eastbourne · Indian takeaway · Made to order",
  location: "8 Susans Road, Eastbourne",
  description: "A warm, modern Indian takeaway experience built around generous dishes, family favourites and easy ordering.",
  services: ["Starters", "Tandoori dishes", "Main dishes", "Rice & breads", "Meal deals"],
  enquiryTypes: ["Collection order", "Delivery enquiry", "General enquiry"],
  bookingUrl: "/order",
};
