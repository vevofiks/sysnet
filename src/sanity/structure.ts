import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Sysnet CMS Content")
    .items([
      // 1. Pages (Singletons: click directly opens page editor)
      S.listItem()
        .title("Website Pages")
        .child(
          S.list()
            .title("Pages")
            .items([
              S.listItem()
                .title("🏠 Home Page")
                .id("homePage")
                .child(S.document().schemaType("homePage").documentId("homePage")),

              S.listItem()
                .title("ℹ️ About Us Page")
                .id("aboutPage")
                .child(S.document().schemaType("aboutPage").documentId("aboutPage")),

              S.listItem()
                .title("💼 Services Page (Overview)")
                .id("servicesPage")
                .child(S.document().schemaType("servicesPage").documentId("servicesPage")),

              S.listItem()
                .title("🏗️ Projects Page (Overview)")
                .id("projectsPage")
                .child(S.document().schemaType("projectsPage").documentId("projectsPage")),

              S.listItem()
                .title("📞 Contact Page")
                .id("contactPage")
                .child(S.document().schemaType("contactPage").documentId("contactPage")),

              S.listItem()
                .title("🚫 404 Not Found Page")
                .id("notFoundPage")
                .child(S.document().schemaType("notFoundPage").documentId("notFoundPage")),
            ])
        ),

      S.divider(),

      // 2. Dynamic Collections (Add, Edit, Delete items)
      S.listItem()
        .title("🛠️ Services & Products Catalog")
        .schemaType("service")
        .child(S.documentTypeList("service").title("All Services (15 lines)")),

      S.listItem()
        .title("🏢 Projects Portfolio")
        .schemaType("projectItem")
        .child(S.documentTypeList("projectItem").title("All Verified Projects")),

      S.divider(),

      // 3. Global Settings
      S.listItem()
        .title("🧭 Header & Navigation Menus")
        .id("navigation")
        .child(S.document().schemaType("navigation").documentId("navigation")),

      S.listItem()
        .title("📌 Site Settings & Footer")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
    ]);
