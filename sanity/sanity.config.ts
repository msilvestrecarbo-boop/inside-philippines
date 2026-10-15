import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { documentInternationalization } from "@sanity/document-internationalization";
import { schemaTypes, TRANSLATED_TYPES } from "./schemaTypes";
import { structure } from "./structure";

export const LANGUAGES = [
  { id: "en", title: "English" },
  { id: "fr", title: "Français" },
  { id: "es", title: "Español" },
  { id: "ru", title: "Русский" },
  { id: "ar", title: "العربية" },
];

export default defineConfig({
  name: "inside-philippines",
  title: "Inside Philippines",
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "REPLACE_ME",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",
  plugins: [
    structureTool({ structure }),
    visionTool(),
    // One document per language, linked as translations of each other:
    // every page gets its own professionally written copy, slug and SEO fields.
    documentInternationalization({ supportedLanguages: LANGUAGES, schemaTypes: TRANSLATED_TYPES }),
  ],
  schema: { types: schemaTypes },
});
