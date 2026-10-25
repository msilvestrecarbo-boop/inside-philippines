import { NextResponse } from "next/server";
import { clientIp, rateLimited } from "@/lib/ratelimit";

export async function POST(req: Request) {
  if (rateLimited(clientIp(req), 5)) return NextResponse.json({ ok: false }, { status: 429 });
  const b = (await req.json().catch(() => ({}))) as Record<string, string>;
  if (b.website) return NextResponse.json({ ok: true });
  const email = (b.email || "").trim();
  const message = (b.message || "").trim().slice(0, 5000);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || message.length < 5) return NextResponse.json({ ok: false }, { status: 422 });
  const payload = { name: (b.name || "").slice(0, 120), email, message, locale: b.locale };
  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: `Contact form: ${payload.name} <${email}>\n${message}`, contact: payload }) }).catch(() => null);
  else console.info("[contact]", payload);
  return NextResponse.json({ ok: true, delivered: !!hook });
}
