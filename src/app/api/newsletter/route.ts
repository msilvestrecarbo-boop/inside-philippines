import { NextResponse } from "next/server";
import { clientIp, rateLimited } from "@/lib/ratelimit";

export async function POST(req: Request) {
  if (rateLimited(clientIp(req), 5)) return NextResponse.json({ ok: false }, { status: 429 });
  const { email, locale } = (await req.json().catch(() => ({}))) as { email?: string; locale?: string };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return NextResponse.json({ ok: false }, { status: 422 });
  const hook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (hook) {
    const r = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, locale, list: "inside-notes" }) }).catch(() => null);
    if (!r?.ok) return NextResponse.json({ ok: false }, { status: 502 });
  } else {
    console.info("[newsletter] (no provider configured)", email, locale);
  }
  return NextResponse.json({ ok: true });
}
