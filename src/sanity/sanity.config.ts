import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
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
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
