export function SectionHeading({
  kicker,
  title,
  body,
  id,
  align = "start",
  tone = "dark",
}: {
  kicker?: string;
  title: string;
  body?: string;
  id?: string;
  align?: "start" | "center";
  tone?: "dark" | "light";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {kicker && <p className={`kicker ${tone === "light" ? "text-white/70" : "text-narra"}`}>{kicker}</p>}
      <h2 id={id} className="mt-4 text-[length:var(--text-h2)]">{title}</h2>
      {body && <p className={`mt-5 text-lg leading-relaxed ${tone === "light" ? "text-white/80" : "text-stone"}`}>{body}</p>}
    </div>
  );
}
