import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services & Products",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Title (English)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Title (Arabic)",
      type: "string",
    }),
    defineField({
      name: "headingEn",
      title: "Hero Main Heading (English)",
      type: "string",
    }),
    defineField({
      name: "headingAr",
      title: "Hero Main Heading (Arabic)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "titleEn",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured on Home Page",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "Service Photo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Image Alt Text",
      type: "string",
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
      name: "detailEn",
      title: "Full Detail (English)",
      type: "text",
      rows: 6,
    }),
    defineField({
      name: "detailAr",
      title: "Full Detail (Arabic)",
      type: "text",
      rows: 6,
    }),
  ],
  preview: {
    select: {
      title: "titleEn",
      subtitle: "summaryEn",
      media: "image",
    },
  },
});
