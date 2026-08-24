export type MediaAsset = { src: string; alt: string };

export const media = {
  hero: { src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1800&q=85", alt: "Warm independent bar atmosphere" },
  services: [
    { src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=85", alt: "Craft beer bar" },
    { src: "https://images.unsplash.com/photo-1547595628-c61a29f496f0?auto=format&fit=crop&w=1200&q=85", alt: "Cheese and charcuterie board" },
    { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=85", alt: "Friends enjoying a social event" },
  ] satisfies MediaAsset[],
  gallery: [
    { src: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1400&q=85", alt: "Independent bar interior" },
    { src: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1400&q=85", alt: "Craft beer bar detail" },
    { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1400&q=85", alt: "Friends gathering at an event" },
  ] satisfies MediaAsset[],
};
