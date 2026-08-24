export type MediaAsset = {
  src: string;
  alt: string;
};

/**
 * Demo media configuration. Replace these assets with the client's own
 * photography before launch; never present demo imagery as client work.
 */
export const media = {
  hero: {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    alt: "Modern residential property exterior",
  },
  services: [
    {
      src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      alt: "Well maintained modern home interior",
    },
    {
      src: "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=1200&q=85",
      alt: "Detailed home maintenance work",
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
      alt: "Finished residential property detail",
    },
  ] satisfies MediaAsset[],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
      alt: "Contemporary property exterior",
    },
    {
      src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85",
      alt: "Premium residential interior",
    },
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=85",
      alt: "Residential exterior and garden",
    },
  ] satisfies MediaAsset[],
};
