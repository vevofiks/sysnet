import {
  defineConfig,
  useDocumentOperation,
  type DocumentActionComponent,
} from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool, defineDocuments, defineLocations } from "sanity/presentation";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";
import { projectId, dataset } from "./env";
import { StudioAutoInit } from "./components/StudioAutoInit";
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
  studio: {
    components: {
      layout: StudioAutoInit,
    },
  },
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
            filter: `_type == "homePage" || _id in ["homePage", "drafts.homePage"]`,
          },
          {
            route: ["/:locale/about", "/about"],
            filter: `_type == "aboutPage" || _id in ["aboutPage", "drafts.aboutPage"]`,
          },
          {
            route: ["/:locale/services", "/services"],
            filter: `_type == "servicesPage" || _id in ["servicesPage", "drafts.servicesPage"]`,
          },
          {
            route: ["/:locale/services/:slug", "/services/:slug"],
            filter: `_type == "service" && (slug.current == $slug || _id == "service-" + $slug || _id == "drafts.service-" + $slug)`,
          },
          {
            route: ["/:locale/projects", "/projects"],
            filter: `_type == "projectsPage" || _id in ["projectsPage", "drafts.projectsPage"]`,
          },
          {
            route: ["/:locale/projects/:slug", "/projects/:slug"],
            filter: `_type == "projectItem" && (slug.current == $slug || _id == "project-" + $slug || _id == "drafts.project-" + $slug)`,
          },
          {
            route: ["/:locale/contact", "/contact"],
            filter: `_type == "contactPage" || _id in ["contactPage", "drafts.contactPage"]`,
          },
        ]),
        locations: {
          homePage: defineLocations({
            locations: [
              { title: "Home (English)", href: "/en" },
              { title: "Home (Arabic)", href: "/ar" },
            ],
          }),
          aboutPage: defineLocations({
            locations: [
              { title: "About Us (English)", href: "/en/about" },
              { title: "About Us (Arabic)", href: "/ar/about" },
            ],
          }),
          servicesPage: defineLocations({
            locations: [
              { title: "Services (English)", href: "/en/services" },
              { title: "Services (Arabic)", href: "/ar/services" },
            ],
          }),
          projectsPage: defineLocations({
            locations: [
              { title: "Projects (English)", href: "/en/projects" },
              { title: "Projects (Arabic)", href: "/ar/projects" },
            ],
          }),
          contactPage: defineLocations({
            locations: [
              { title: "Contact (English)", href: "/en/contact" },
              { title: "Contact (Arabic)", href: "/ar/contact" },
            ],
          }),
          service: defineLocations({
            select: {
              slug: "slug.current",
            },
            resolve: (doc) => {
              const slug = doc?.slug;
              if (!slug) return null;
              return {
                locations: [
                  { title: `Service: ${slug} (EN)`, href: `/en/services/${slug}` },
                  { title: `Service: ${slug} (AR)`, href: `/ar/services/${slug}` },
                ],
              };
            },
          }),
          projectItem: defineLocations({
            select: {
              slug: "slug.current",
            },
            resolve: (doc) => {
              const slug = doc?.slug;
              return {
                locations: [
                  { title: "Projects (EN)", href: `/en/projects${slug ? `#${slug}` : ""}` },
                  { title: "Projects (AR)", href: `/ar/projects${slug ? `#${slug}` : ""}` },
                ],
              };
            },
          }),
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
