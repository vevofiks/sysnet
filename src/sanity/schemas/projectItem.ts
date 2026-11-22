import { defineField, defineType } from "sanity";

export const projectItemType = defineType({
  name: "projectItem",
  title: "Projects (Portfolio)",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Project Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Project Title (Arabic)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "titleEn", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagEn",
      title: "Category / Tag (English)",
      type: "string",
      initialValue: "CCTV, logistics",
    }),
    defineField({
      name: "tagAr",
      title: "Category / Tag (Arabic)",
      type: "string",
      initialValue: "كاميرات مراقبة، لوجستيات",
    }),
    defineField({
      name: "image",
      title: "Primary Project Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "sceneImage",
      title: "Scene / Context Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "summaryEn",
      title: "Summary (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "summaryAr",
      title: "Summary (Arabic)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "factsEn",
      title: "Key Scope Facts (English)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "factsAr",
      title: "Key Scope Facts (Arabic)",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      title: "titleEn",
      subtitle: "tagEn",
      media: "image",
    },
  },
});
