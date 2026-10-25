import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale, type Locale } from "@/i18n/config";
import { CURRENCY_COOKIE, defaultCurrency, isCurrency } from "@/lib/currency";

const LOCALE_COOKIE = "ip_locale";

function negotiate(req: NextRequest): Locale {
  const saved = req.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && (locales as readonly string[]).includes(saved)) return saved as Locale;
  const header = req.headers.get("accept-language") || "";
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { lang: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { lang } of ranked) if ((locales as readonly string[]).includes(lang)) return lang as Locale;
  return defaultLocale;
}

function country(req: NextRequest) {
  // Vercel / Cloudflare geo headers; absent locally.
  return req.headers.get("x-vercel-ip-country") || req.headers.get("cf-ipcountry");
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const first = pathname.split("/")[1];
  const hasLocale = (locales as readonly string[]).includes(first);

  let res: NextResponse;
  if (hasLocale) {
    res = NextResponse.next();
  } else {
    // "/siargao" (social bio link) -> "/fr/siargao" for a French visitor
    const url = req.nextUrl.clone();
    url.pathname = `/${negotiate(req)}${pathname === "/" ? "" : pathname}`;
    // The bare homepage is served in place (no redirect) so Search Console's
    // verification check and first-time crawlers get a 200; its canonical still points at /{locale}.
    res = pathname === "/" ? NextResponse.rewrite(url) : NextResponse.redirect(url, 307);
  }

  if (!isCurrency(req.cookies.get(CURRENCY_COOKIE)?.value)) {
    const locale = (hasLocale ? first : negotiate(req)) as Locale;
    res.cookies.set(CURRENCY_COOKIE, defaultCurrency(locale, country(req)), {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }
  return res;
}

export const config = {
  matcher: ["/((?!api|_next|brand|images|favicon|icon|apple-icon|og-default|robots.txt|sitemap.xml|manifest|.*\\..*).*)"],
};
