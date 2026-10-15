import { test } from "node:test";
import assert from "node:assert/strict";
import { destinations } from "../src/content/destinations.ts";
import { journeys } from "../src/content/journeys.ts";
import { guides } from "../src/content/guides.ts";
import { stories } from "../src/content/stories.ts";
import { experienceCategories } from "../src/content/experiences.ts";
import { landings } from "../src/content/landings.ts";
import { extraPlaces } from "../src/content/places.ts";

const destSlugs = new Set(destinations.map((d) => d.slug));
const journeySlugs = new Set(journeys.map((j) => j.slug));
const catSlugs = new Set(experienceCategories.map((c) => c.slug));
const LOCALES = ["en", "fr", "es", "ru", "ar"];
const RESERVED = ["destinations", "journeys", "experiences", "travel-guide", "stories", "about", "contact", "design-my-trip", "privacy", "terms"];

test("17 destinations with complete, fully translated card fields", () => {
  assert.equal(destinations.length, 17);
  for (const d of destinations) for (const f of ["short", "whyGo", "bestFor", "bestSeason"]) for (const l of LOCALES) assert.ok(d[f][l], `${d.slug}.${f}.${l}`);
});

test("destination references resolve", () => {
  for (const d of destinations) {
    for (const n of d.nearby ?? []) assert.ok(destSlugs.has(n), `${d.slug} nearby ${n}`);
    for (const c of d.experienceCategories ?? []) assert.ok(catSlugs.has(c), `${d.slug} category ${c}`);
  }
});

test("journey day ranges add up to the stated length", () => {
  for (const j of journeys) {
    const total = j.itinerary.reduce((n, d) => {
      const [a, b] = d.days.split(/[–-]/).map(Number);
      return n + (b ? b - a + 1 : 1);
    }, 0);
    assert.equal(total, j.days, j.slug);
  }
});

test("journey routes, prices and categories are valid", () => {
  for (const j of journeys) {
    for (const r of j.route) assert.ok(destSlugs.has(r) || r in extraPlaces, `${j.slug} route ${r}`);
    for (const c of j.categories) assert.ok(catSlugs.has(c), `${j.slug} category ${c}`);
    for (const t of Object.keys(j.fromPriceEUR)) assert.ok(j.styles.includes(t), `${j.slug} price tier ${t}`);
    for (const l of LOCALES) assert.ok(j.title[l] && j.short[l], `${j.slug} ${l}`);
  }
});

test("articles: unique slugs, published ones have a body, related links resolve", () => {
  const all = [...guides, ...stories];
  assert.equal(new Set(guides.map((g) => g.slug)).size, guides.length);
  assert.equal(new Set(stories.map((s) => s.slug)).size, stories.length);
  for (const a of all) {
    if (a.status === "published") assert.ok(a.body.en.length > 1500, `${a.slug} body`);
    for (const d of a.related?.destinations ?? []) assert.ok(destSlugs.has(d), `${a.slug} → ${d}`);
    for (const j of a.related?.journeys ?? []) assert.ok(journeySlugs.has(j), `${a.slug} → ${j}`);
  }
});

test("landing pages don't collide with site sections and reference real content", () => {
  for (const l of landings) {
    assert.ok(!RESERVED.includes(l.slug) && !LOCALES.includes(l.slug), l.slug);
    for (const j of l.journeys) assert.ok(journeySlugs.has(j), `${l.slug} → ${j}`);
    for (const d of l.destinations) assert.ok(destSlugs.has(d), `${l.slug} → ${d}`);
    assert.ok(l.seo.title.en.length <= 60, `${l.slug} seo title length`);
  }
});

test("journey prices stay flagged as placeholders until confirmed", () => {
  for (const j of journeys) assert.equal(j.priceIsPlaceholder, true, j.slug);
});
