// Generates docs/08-photography-shotlist.md from every photo brief in the content.
// Run: node scripts/shotlist.mjs
import { writeFileSync } from "node:fs";
import { destinations } from "../src/content/destinations.ts";
import { journeys } from "../src/content/journeys.ts";
import { guides } from "../src/content/guides.ts";
import { stories } from "../src/content/stories.ts";
import { experienceCategories, experiences } from "../src/content/experiences.ts";
import { landings } from "../src/content/landings.ts";

const rows = [];
const add = (group, name, p, path) => p && !p.src && rows.push({ group, name, brief: p.brief, tone: p.tone ?? "", path });
add("Home", "Hero video + poster", { brief: "8–12s muted loop, 1080p ≤4MB, plus poster: drone push over karst islands and a lagoon in Bacuit Bay at first light; second cut a banca crossing glassy water.", tone: "lagoon" }, "/");
add("Home", "Final CTA background", { brief: "Outrigger banca at dusk, karst silhouettes, warm low sun.", tone: "dusk" }, "all pages");
for (const d of destinations) add("Destinations", d.name, d.photo, `/destinations/${d.slug}`);
for (const d of destinations) for (const s of d.sections ?? []) add("Destination sections", `${d.name} — ${s.title.en}`, s.photo, `/destinations/${d.slug}#${s.id}`);
for (const j of journeys) add("Journeys", j.title.en, j.photo, `/journeys/${j.slug}`);
for (const c of experienceCategories) add("Experience categories", c.title.en, c.photo, `/experiences/${c.slug}`);
for (const e of experiences) for (const p of e.photos) add("Experiences database", e.title.en, p, "(CMS)");
for (const l of landings) add("Landing pages", l.title.en, l.photo, `/${l.slug}`);
for (const a of [...guides, ...stories]) if (a.status === "published") add("Guides & stories", a.title.en, a.photo, a.slug);
add("About", "Team portraits (×4+)", { brief: "Natural-light portraits outdoors in the Philippines, relaxed, not corporate.", tone: "sand" }, "/about");

let md = `# Photography shot list\n\nGenerated from the photo briefs in the content (\`node scripts/shotlist.mjs\`). ${rows.length} images.\n\n`;
md += `**Rules:** real places, real light, no stock "happy tourist" shots, turquoise only where the water really is. People shown from behind or candid unless model-released. Deliver 3:2 and 4:5 crops, min 3000px long edge; hero video 1080p H.264 + WebM.\n\n**Mix to cover (brief 47):** remote islands · boats · surf · diving/underwater · rice terraces · mountains · Manila · food · markets · hotels/design · people · culture · sunsets · villages · road trips · wellness · restaurants · wildlife · aerials.\n`;
let g = "";
for (const r of rows) {
  if (r.group !== g) { g = r.group; md += `\n## ${g}\n\n| Image | Brief | Tone | Used on |\n|---|---|---|---|\n`; }
  md += `| ${r.name} | ${r.brief.replace(/\|/g, "/").replace(/\n/g, " ")} | ${r.tone} | ${r.path} |\n`;
}
writeFileSync(new URL("../docs/08-photography-shotlist.md", import.meta.url), md);
console.log(rows.length, "shots");
