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
import {
  homePageDefaults,
  aboutPageDefaults,
  servicesPageDefaults,
  projectsPageDefaults,
  contactPageDefaults,
} from "./defaults";

const PopulateDefaultsAction: DocumentActionComponent = (props) => {
  const { id, type } = props;
  const { patch } = useDocumentOperation(id, type);

  let defaults: Record<string, any> | null = null;
  if (type === "homePage") defaults = homePageDefaults;
  else if (type === "aboutPage") defaults = aboutPageDefaults;
  else if (type === "servicesPage") defaults = servicesPageDefaults;
  else if (type === "projectsPage") defaults = projectsPageDefaults;
  else if (type === "contactPage") defaults = contactPageDefaults;

  if (!defaults) return null;

  return {
    label: "⚡ Fill Page with Default Content",
    title:
      "Populate all sections of this page with complete bilingual default content so every badge, title, card, and button is immediately editable in Presentation Mode",
    onHandle: () => {
      if (defaults) {
        patch.execute([{ setIfMissing: defaults }]);
      }
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
      if (
        ["homePage", "aboutPage", "servicesPage", "projectsPage", "contactPage"].includes(
          context.schemaType
        )
      ) {
        return [PopulateDefaultsAction, ...prev];
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
            route: ["/:locale/services/:slug", "/services/:slug"],
            filter: `_type == "service" && slug.current == $slug`,
          },
          {
            route: ["/:locale/projects", "/projects"],
            filter: `_type == "projectsPage"`,
          },
          {
            route: ["/:locale/projects/:slug", "/projects/:slug"],
            filter: `_type == "projectItem" && slug.current == $slug`,
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
