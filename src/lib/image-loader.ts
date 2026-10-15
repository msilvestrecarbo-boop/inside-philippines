/**
 * Global next/image loader. Unsplash and Sanity CDNs resize and serve AVIF/WebP
 * themselves, so images are requested from them directly instead of the Next.js optimiser.
 */
export default function imageLoader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  const q = quality ?? 72;
  if (src.startsWith("https://images.unsplash.com/")) return `${src}?auto=format&fit=crop&w=${width}&q=${q}`;
  if (src.startsWith("https://cdn.sanity.io/")) return `${src}?auto=format&w=${width}&q=${q}`;
  return src;
}
