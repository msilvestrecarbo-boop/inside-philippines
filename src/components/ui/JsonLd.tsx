export function JsonLd({ data }: { data: (Record<string, unknown> | null)[] | Record<string, unknown> | null }) {
  const list = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!list.length) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(list.length === 1 ? list[0] : list).replace(/</g, "\\u003c") }}
    />
  );
}
