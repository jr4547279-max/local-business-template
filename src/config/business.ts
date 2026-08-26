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
  name: "Cherry Wood Adventures",
  email: "",
  phone: "07887 556336",
  tagline: "Wild learning · Sussex woods · Since 2013",
  location: "Eastbourne · Arlington · East Sussex",
  description:
    "Outdoor adventures, woodland learning and nature experiences for children, families and grown-ups across Sussex, led by Sarah Wilesmith with 25 years of outdoor education experience.",
  services: [
    "Acorn Folk · ages 2–4",
    "Forest Folk · home education",
    "Nature Adventures · ages 5–7",
    "Wild Wednesdays · ages 10–12",
    "Woodland Ways · grown-ups",
    "Family events & guided walks",
    "Bespoke outdoor activities",
  ],
  enquiryTypes: ["Book a session", "Ask about an event", "Bespoke enquiry"],
  bookingUrl: "https://www.cherrywoodadventures.co.uk/events.html",
};
