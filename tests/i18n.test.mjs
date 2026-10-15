import { test } from "node:test";
import assert from "node:assert/strict";
import en from "../src/i18n/dictionaries/en.ts";
import fr from "../src/i18n/dictionaries/fr.ts";
import es from "../src/i18n/dictionaries/es.ts";
import ru from "../src/i18n/dictionaries/ru.ts";
import ar from "../src/i18n/dictionaries/ar.ts";

function shape(o, path = "") {
  if (Array.isArray(o)) return [`${path}[${o.length}]`, ...o.flatMap((v, i) => shape(v, `${path}[${i}]`))];
  if (o && typeof o === "object") return Object.keys(o).sort().flatMap((k) => [`${path}.${k}`, ...shape(o[k], `${path}.${k}`)]);
  return [];
}
const placeholders = (s) => (typeof s === "string" ? (s.match(/\{\w+\}/g) || []).sort().join() : "");
function leaves(o, path = "", out = {}) {
  if (o && typeof o === "object") for (const [k, v] of Object.entries(o)) leaves(v, `${path}.${k}`, out);
  else out[path] = o;
  return out;
}

for (const [name, dict] of Object.entries({ fr, es, ru, ar })) {
  test(`${name} dictionary has exactly the English keys and array lengths`, () => {
    assert.deepEqual(shape(dict), shape(en));
  });
  test(`${name} dictionary keeps {placeholders} and has no empty strings`, () => {
    const a = leaves(en), b = leaves(dict);
    for (const k of Object.keys(a)) {
      assert.equal(placeholders(b[k]), placeholders(a[k]), k);
      assert.ok(typeof b[k] !== "string" || b[k].trim().length > 0, `${k} is empty`);
    }
  });
}

test("no banned clichés in English UI copy", () => {
  const text = JSON.stringify(en).toLowerCase();
  for (const p of ["paradise awaits", "embark on", "once-in-a-lifetime", "unforgettable", "breathtaking", "memories that last"]) {
    assert.ok(!text.includes(p), p);
  }
});
