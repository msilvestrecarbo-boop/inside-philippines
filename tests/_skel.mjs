// usage: node skel.mjs <module url> <locale> <from> <to>
const [,, file, l, a, b] = process.argv;
const mod = await import(file);
const arr = Object.values(mod).find(Array.isArray);
function skel(o, key) {
  if (key === "brief" || key === "credit" || key === "creditUrl" || key === "src") return undefined;
  if (o && typeof o === "object" && !Array.isArray(o) && "en" in o) return l in o ? undefined : o.en;
  if (Array.isArray(o)) { const r = o.map((x) => skel(x)); return r.some((x) => x !== undefined && x !== null) ? r.map((x) => x ?? null) : undefined; }
  if (o && typeof o === "object") { const r = {}; for (const [k, v] of Object.entries(o)) { const s = skel(v, k); if (s !== undefined) r[k] = s; } return Object.keys(r).length ? r : undefined; }
  return undefined;
}
const out = {};
for (const d of arr.slice(+a, +b)) { if (d.status === "planned") continue; const s = skel(d); if (s) { delete s.slug; out[d.slug] = s; } }
console.log(JSON.stringify(out, null, 1));
