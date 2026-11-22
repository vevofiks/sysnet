import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineDocuments } from "sanity/presentation";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";
import { projectId, dataset } from "./client";

export default defineConfig({
  name: "default",
  title: "Sysnet CMS",
  basePath: "/studio",
  projectId: projectId || "2caq43ho",
  dataset: dataset || "production",
  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      previewUrl: {
        initial: "/en",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/:locale",
            filter: `_type == "homePage"`,
          },
          {
            route: "/:locale/about",
            filter: `_type == "aboutPage"`,
          },
          {
            route: "/:locale/services",
            filter: `_type == "servicesPage"`,
          },
          {
            route: "/:locale/projects",
            filter: `_type == "projectsPage"`,
          },
          {
            route: "/:locale/contact",
            filter: `_type == "contactPage"`,
          },
        ]),
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
