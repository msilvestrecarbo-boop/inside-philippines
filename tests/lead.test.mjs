import { test } from "node:test";
import assert from "node:assert/strict";
import { validateLead } from "../src/lib/lead.ts";

const base = { name: "Ana García", email: "ana@example.com", country: "Spain", consent: true, duration: "11-14", who: "couple", adults: 2 };

test("accepts a minimal valid lead", () => {
  const r = validateLead(base);
  assert.equal(r.ok, true);
});

test("rejects missing consent, bad email and missing country", () => {
  const r = validateLead({ ...base, consent: false, email: "nope", country: "" });
  assert.equal(r.ok, false);
  assert.deepEqual(r.errors.sort(), ["consent", "country", "email"]);
});

test("clamps and sanitises numbers and lengths", () => {
  const r = validateLead({ ...base, adults: 999, children: -3, childrenAges: [40, "x"], comments: "a".repeat(10000) });
  assert.equal(r.ok, true);
  assert.equal(r.lead.adults, 40);
  assert.equal(r.lead.children, 0);
  assert.deepEqual(r.lead.childrenAges, [17, 0]);
  assert.equal(r.lead.comments.length, 3000);
});
