import {
  defineConfig,
  useDocumentOperation,
  type DocumentActionComponent,
} from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineDocuments } from "sanity/presentation";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";
import { projectId, dataset } from "./env";
import { homePageDefaults } from "./defaults";

const PopulateHomeDefaultsAction: DocumentActionComponent = (props) => {
  const { id, type } = props;
  const { patch } = useDocumentOperation(id, type);

  if (type !== "homePage") return null;

  return {
    label: "⚡ Fill All Sections with Default Content",
    title:
      "Populate all 10 sections with complete bilingual default content so every badge, card, button, and list item is immediately editable in Presentation Mode",
    onHandle: () => {
      patch.execute([{ setIfMissing: homePageDefaults }]);
    },
  };
};

export default defineConfig({
  name: "default",
  title: "Sysnet CMS",
  basePath: "/studio",
  projectId: projectId || "2caq43ho",
  dataset: dataset || "production",
  document: {
    actions: (prev, context) => {
      if (context.schemaType === "homePage") {
        return [PopulateHomeDefaultsAction, ...prev];
      }
      return prev;
    },
  },
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
            route: ["/:locale", "/"],
            filter: `_type == "homePage"`,
          },
          {
            route: ["/:locale/about", "/about"],
            filter: `_type == "aboutPage"`,
          },
          {
            route: ["/:locale/services", "/services"],
            filter: `_type == "servicesPage"`,
          },
          {
            route: ["/:locale/projects", "/projects"],
            filter: `_type == "projectsPage"`,
          },
          {
            route: ["/:locale/contact", "/contact"],
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
