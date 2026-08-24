export type MediaAsset = { src: string; alt: string };

export const media = {
  hero: { src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1800&q=85", alt: "Afternoon tea table with pastries" },
  services: [
    { src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1200&q=85", alt: "Vintage-style tea and cakes" },
    { src: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1200&q=85", alt: "Celebration cake and afternoon tea" },
    { src: "https://images.unsplash.com/photo-1528502668750-88ba580f7f4f?auto=format&fit=crop&w=1200&q=85", alt: "Friends celebrating together" },
  ] satisfies MediaAsset[],
  gallery: [
    { src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1400&q=85", alt: "Elegant tea table" },
    { src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1400&q=85", alt: "Freshly baked cakes and biscuits" },
    { src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=85", alt: "Friends enjoying a celebration" },
  ] satisfies MediaAsset[],
};
