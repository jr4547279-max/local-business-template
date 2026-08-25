export type MediaAsset = { src: string; alt: string };

/** Demo imagery for the concept. Replace with genuine Bourne to Kayak photography before launch. */
export const media = {
  hero: {
    src: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1800&q=85",
    alt: "Ocean water and coastline",
  },
  services: [
    { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85", alt: "Blue water suitable for a paddle adventure" },
    { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85", alt: "Coastal outdoor adventure scene" },
    { src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85", alt: "Bright seaside landscape" },
  ] satisfies MediaAsset[],
  gallery: [
    { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85", alt: "Eastbourne-inspired seaside coastline" },
    { src: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1400&q=85", alt: "Calm water and coastal horizon" },
    { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85", alt: "Outdoor landscape from the coast" },
  ] satisfies MediaAsset[],
};
