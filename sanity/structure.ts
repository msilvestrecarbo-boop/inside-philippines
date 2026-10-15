import type { StructureResolver } from "sanity/structure";


export const structure: StructureResolver = (S) =>
  S.list()
    .title("Inside Philippines")
    .items([
      S.listItem().title("Homepage").id("homepage").child(S.documentTypeList("homepage").title("Homepage (per language)")),
      S.divider(),
      S.documentTypeListItem("destination").title("Destinations"),
      S.documentTypeListItem("journey").title("Journeys"),
      S.documentTypeListItem("experienceCategory").title("Experience categories"),
      S.documentTypeListItem("experience").title("Experiences (database)"),
      S.documentTypeListItem("hotel").title("Hotels (database)"),
      S.documentTypeListItem("restaurant").title("Restaurants"),
      S.divider(),
      S.documentTypeListItem("guideArticle").title("Travel guide"),
      S.documentTypeListItem("story").title("Stories"),
      S.documentTypeListItem("landing").title("Landing pages"),
      S.documentTypeListItem("faq").title("FAQs"),
      S.divider(),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("teamMember").title("Team"),
      S.divider(),
      S.listItem().title("Prices & currencies").id("pricing").child(S.document().schemaType("pricing").documentId("pricing")),
      S.listItem().title("Site settings").id("siteSettings").child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
