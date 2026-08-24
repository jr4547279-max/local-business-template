export type MediaAsset = { src: string; alt: string };

/** Demo imagery only. Replace with the client's own food photography before launch. */
export const media = {
  hero: {
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1800&q=88",
    alt: "Indian food and spices prepared for serving",
  },
  services: [
    { src: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=88", alt: "Indian curry with rice" },
    { src: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1200&q=88", alt: "Tandoori grilled dishes" },
    { src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1200&q=88", alt: "Warm restaurant dining atmosphere" },
  ] satisfies MediaAsset[],
  gallery: [
    { src: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1400&q=88", alt: "Indian street food and sharing dishes" },
    { src: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1400&q=88", alt: "Colourful Indian meal" },
    { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1400&q=88", alt: "Spiced curry served with rice" },
  ] satisfies MediaAsset[],
};
