export type MediaAsset = { src: string; alt: string };

export const media = {
  hero: { src: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=1800&q=85", alt: "Luxury manicure detail" },
  services: [
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=85", alt: "Gel manicure" },
    { src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1200&q=85", alt: "Beauty treatment detail" },
    { src: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=85", alt: "Beauty products and brushes" },
  ] satisfies MediaAsset[],
  gallery: [
    { src: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1400&q=85", alt: "Manicure detail" },
    { src: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=1400&q=85", alt: "Beauty treatment" },
    { src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1400&q=85", alt: "Makeup brushes" },
  ] satisfies MediaAsset[],
};
