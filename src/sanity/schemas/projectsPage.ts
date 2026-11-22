import { defineField, defineType } from "sanity";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projects Overview Page",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
      type: "string",
      initialValue: "CCTV and cabling projects in Riyadh.",
    }),
    defineField({
      name: "titleAr",
      title: "Page Title (Arabic)",
      type: "string",
      initialValue: "مشاريع كاميرات المراقبة وتمديدات الشبكات في الرياض.",
    }),
    defineField({
      name: "ledeEn",
      title: "Page Description (English)",
      type: "text",
      rows: 3,
      initialValue: "These are the jobs we price in Riyadh: how many cameras, how many data points, what the cabinet has to hold. They are typical scopes, not a claim that a named tenant hired us.",
    }),
    defineField({
      name: "ledeAr",
      title: "Page Description (Arabic)",
      type: "text",
      rows: 3,
      initialValue: "هذه المشاريع التي نسعرها في الرياض: عدد الكاميرات، نقاط البيانات، وما يجب أن تحتويه الكابينة.",
    }),
    defineField({
      name: "promptEn",
      title: "Callout Prompt (English)",
      type: "string",
      initialValue: "Have a building that looks like one of these?",
    }),
    defineField({
      name: "promptAr",
      title: "Callout Prompt (Arabic)",
      type: "string",
      initialValue: "هل لديك مبنى يشبه أحد هذه المشاريع؟",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Projects Page Settings",
        subtitle: "Header title and survey prompt",
      };
    },
  },
});
