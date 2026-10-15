import { Fragment } from "react";

/** Renders the CMS's "markdown-lite": ## headings, blank-line paragraphs, "- " bullets, **bold**. */
export function Prose({ text, className = "" }: { text: string; className?: string }) {
  const blocks = text.trim().split(/\n{2,}/);
  return (
    <div className={`prose-ip ${className}`}>
      {blocks.map((b, i) => {
        const lines = b.split("\n");
        if (lines[0].startsWith("## ")) {
          const rest = lines.slice(1).join("\n").trim();
          const id = slugify(lines[0].slice(3));
          return (
            <Fragment key={i}>
              <h2 id={id}>{lines[0].slice(3)}</h2>
              {rest && <Block text={rest} />}
            </Fragment>
          );
        }
        return <Block key={i} text={b} />;
      })}
    </div>
  );
}

function Block({ text }: { text: string }) {
  const lines = text.split("\n");
  if (lines.every((l) => l.trim().startsWith("- "))) {
    return (
      <ul>
        {lines.map((l, i) => (
          <li key={i}>{inline(l.trim().slice(2))}</li>
        ))}
      </ul>
    );
  }
  return <p>{inline(text.replace(/\n/g, " "))}</p>;
}

function inline(s: string) {
  const parts = s.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => (p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : p));
}

export function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}

export function headingsOf(text: string) {
  return text
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => ({ id: slugify(l.slice(3)), title: l.slice(3) }));
}
