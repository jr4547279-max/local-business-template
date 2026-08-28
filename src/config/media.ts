export type MediaAsset = {
  src: string;
  alt: string;
};

/** Demo imagery only. Replace with genuine client photography before launch. */
export const media = {
  hero: {
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2000&q=85",
    alt: "Traditional brick wall with detailed masonry",
  },
  services: [
    {
      src: "https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=1200&q=85",
      alt: "Close detail of traditional brickwork",
    },
    {
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=85",
      alt: "Masonry construction and brickwork",
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85",
      alt: "Detailed architectural exterior",
    },
  ] satisfies MediaAsset[],
  gallery: [
    {
      src: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1600&q=85",
      alt: "Brick architectural detail",
    },
    {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
      alt: "Crafted interior detail",
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
      alt: "Traditional home exterior detail",
    },
  ] satisfies MediaAsset[],
};
