# Inside Philippines — Sanity Studio

The CMS for the website. Editors manage every page, in every language, without code.

## Set up (once)

1. Create a project at sanity.io/manage (free plan is enough to start). Note the **project ID**.
2. `cd sanity && npm install`
3. `SANITY_STUDIO_PROJECT_ID=xxxx npm run dev` → Studio on http://localhost:3333
4. `npm run deploy` → hosted Studio at `https://inside-philippines.sanity.studio`
5. In the website's environment add `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_API_READ_TOKEN`.

## How translation works

- Every translatable document (destination, journey, guide, story, landing…) exists **once per language**, linked by the Translations menu at the top of the document.
- Each language version has its own slug, SEO title and description, so French pages can target French searches, not translated English ones.
- A page only appears in a language (and in hreflang/sitemap) when that language's document is published.

## Collections

Destinations · Journeys · Experience categories · Experiences (database) · Hotels (database) · Restaurants · Travel guide · Stories · Landing pages · FAQs · Testimonials · Team · Homepage · Prices & currencies · Site settings.

Internal-only fields (hotel booking notes, supplier notes) are never queried by the website.

## Connecting the website

The website reads content only through `src/lib/content.ts`. To switch from the local files to Sanity, replace each function with a GROQ query, for example:

```ts
import { createClient } from "next-sanity";
const client = createClient({ projectId, dataset, apiVersion: "2025-01-01", useCdn: true });

export const getDestination = (slug: string, locale: Locale) =>
  client.fetch(
    `*[_type == "destination" && slug.current == $slug && language == $locale][0]{
      ..., "translations": *[_type == "translation.metadata" && references(^._id)][0].translations[].value->{language, "slug": slug.current}
    }`,
    { slug, locale },
    { next: { tags: ["destination"] } },
  );
```

Then add a Sanity webhook → `/api/revalidate` (tag-based) so publishing updates the live site in seconds while pages stay static and fast.

Migration of the v1 content: `scripts/export-to-sanity.mjs` (to write) maps each `L<T>` field to one document per language, using `en` as the base document.
