import Link from "next/link";

export function Breadcrumbs({ items, light = false }: { items: { name: string; href: string }[]; light?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${light ? "text-white/85" : "text-stone"}`}>
      <ol className={`inline-flex flex-wrap items-center gap-2 rounded-full border px-4 py-1.5 ${light ? "border-white/30 bg-black/15 backdrop-blur-sm" : "border-line"}`}>
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i < items.length - 1 ? (
              <Link href={it.href} className="link-u">{it.name}</Link>
            ) : (
              <span aria-current="page">{it.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
