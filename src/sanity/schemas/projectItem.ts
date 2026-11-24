import { defineField, defineType } from "sanity";

export const projectItemType = defineType({
  name: "projectItem",
  title: "Projects (Portfolio)",
  type: "document",
  groups: [
    { name: "content", title: "1. Scope & Description" },
    { name: "media", title: "2. Dual Imagery & Badges" },
    { name: "deliverables", title: "3. Scope Deliverables & Facts" },
    { name: "action", title: "4. Order & Action CTA" },
  ],
  fields: [
    // =========================================================================
    // 1. SCOPE & DESCRIPTION
    // =========================================================================
    defineField({
      name: "titleEn",
      title: "Project Title (English)",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Project Title (Arabic)",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "titleEn", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagEn",
      title: "Category / Tag (English)",
      type: "string",
      group: "content",
      initialValue: "CCTV, logistics",
    }),
    defineField({
      name: "tagAr",
      title: "Category / Tag (Arabic)",
      type: "string",
      group: "content",
      initialValue: "كاميرات مراقبة، لوجستيات",
    }),
    defineField({
      name: "locationEn",
      title: "District / Location (English, e.g. Al Sulay Yards)",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "locationAr",
      title: "District / Location (Arabic, e.g. حي السلي)",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "clientEn",
      title: "Facility Type / Sector (English)",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "clientAr",
      title: "Facility Type / Sector (Arabic)",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "summaryEn",
      title: "Summary Description (English)",
      type: "text",
      group: "content",
      rows: 3,
    }),
    defineField({
      name: "summaryAr",
      title: "Summary Description (Arabic)",
      type: "text",
      group: "content",
      rows: 3,
    }),

    // =========================================================================
    // 2. DUAL IMAGERY & BADGES
    // =========================================================================
    defineField({
      name: "image",
      title: "Primary Hardware / Installation Photo",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "alt",
      title: "Primary Image Alt Text",
      type: "string",
      group: "media",
    }),
    defineField({
      name: "hardwareLabelEn",
      title: "Image 1 Floating Badge (English)",
      type: "string",
      group: "media",
      initialValue: "Hardware Detail",
    }),
    defineField({
      name: "hardwareLabelAr",
      title: "Image 1 Floating Badge (Arabic)",
      type: "string",
      group: "media",
      initialValue: "تفاصيل التركيب",
    }),
    defineField({
      name: "sceneImage",
      title: "Secondary Scene / Environment Photo",
      type: "image",
      group: "media",
      options: { hotspot: true },
    }),
    defineField({
      name: "sceneAlt",
      title: "Secondary Image Alt Text",
      type: "string",
      group: "media",
    }),
    defineField({
      name: "sceneLabelEn",
      title: "Image 2 Floating Badge (English)",
      type: "string",
      group: "media",
      initialValue: "Site Environment",
    }),
    defineField({
      name: "sceneLabelAr",
      title: "Image 2 Floating Badge (Arabic)",
      type: "string",
      group: "media",
      initialValue: "بيئة الموقع",
    }),

    // =========================================================================
    // 3. SCOPE DELIVERABLES & FACTS
    // =========================================================================
    defineField({
      name: "deliverablesTitleEn",
      title: "Deliverables Header (English)",
      type: "string",
      group: "deliverables",
      initialValue: "Scope Deliverables:",
    }),
    defineField({
      name: "deliverablesTitleAr",
      title: "Deliverables Header (Arabic)",
      type: "string",
      group: "deliverables",
      initialValue: "مواصفات النطاق والتسليم:",
    }),
    defineField({
      name: "factsEn",
      title: "Key Scope Facts / Deliverables (English)",
      type: "array",
      group: "deliverables",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "factsAr",
      title: "Key Scope Facts / Deliverables (Arabic)",
      type: "array",
      group: "deliverables",
      of: [{ type: "string" }],
    }),

    // =========================================================================
    // 4. ACTION & PLACEMENT
    // =========================================================================
    defineField({
      name: "order",
      title: "Display Order Index (e.g. 1, 2, 3)",
      type: "number",
      group: "action",
      initialValue: 1,
    }),
    defineField({
      name: "ctaTextEn",
      title: "Card Button Text (English)",
      type: "string",
      group: "action",
      initialValue: "Request a Similar Survey",
    }),
    defineField({
      name: "ctaTextAr",
      title: "Card Button Text (Arabic)",
      type: "string",
      group: "action",
      initialValue: "طلب معاينة لنطاق مشابه",
    }),
    defineField({
      name: "ctaUrl",
      title: "Card Button URL",
      type: "string",
      group: "action",
      initialValue: "/contact",
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
