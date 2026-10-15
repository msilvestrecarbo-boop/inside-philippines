import Link from "next/link";
import en from "@/i18n/dictionaries/en";

export default function NotFound() {
  const t = en.notFound;
  return (
    <section className="container-x flex min-h-[80vh] flex-col items-start justify-center pt-24">
      <p className="kicker text-narra">404</p>
      <h1 className="mt-4 max-w-3xl text-[length:var(--text-h1)]">{t.title}</h1>
      <p className="mt-6 max-w-xl text-lg text-stone">{t.body}</p>
      <Link href="/" className="btn btn-ink mt-10">{t.home}</Link>
    </section>
  );
}
