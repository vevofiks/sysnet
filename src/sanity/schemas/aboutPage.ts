import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Us Page",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Hero Title (English)",
      type: "string",
      initialValue: "CCTV installation from a Malaz office.",
    }),
    defineField({
      name: "titleAr",
      title: "Hero Title (Arabic)",
      type: "string",
      initialValue: "تركيب كاميرات مراقبة من مكتب الملز.",
    }),
    defineField({
      name: "ledeEn",
      title: "Hero Lede (English)",
      type: "text",
      rows: 3,
      initialValue: "Sysnet Technologies is the name on the van and the invoice. The work is cameras, alarms, access control, and the cable that joins them.",
    }),
    defineField({
      name: "ledeAr",
      title: "Hero Lede (Arabic)",
      type: "text",
      rows: 3,
      initialValue: "سيسنت تكنولوجيز هو الاسم على الفان والفاتورة. العمل يشمل الكاميرات والإنذارات والتحكم بالدخول وتمديدات الشبكات.",
    }),
    defineField({
      name: "headingEn",
      title: "Story Heading (English)",
      type: "string",
      initialValue: "Based in Riyadh, not a catalogue with a PO box.",
    }),
    defineField({
      name: "headingAr",
      title: "Story Heading (Arabic)",
      type: "string",
      initialValue: "مقرنا في الرياض، ولسنا مجرد كتالوج بصندوق بريد.",
    }),
    defineField({
      name: "p1En",
      title: "Story Paragraph 1 (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "p1Ar",
      title: "Story Paragraph 1 (Arabic)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "p2En",
      title: "Story Paragraph 2 (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "p2Ar",
      title: "Story Paragraph 2 (Arabic)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "skylineImage",
      title: "Riyadh Skyline Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "techImage",
      title: "Technicians On-Site Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "workTitleEn",
      title: "What Technicians Do Title (English)",
      type: "string",
      initialValue: "What the technicians actually do on site.",
    }),
    defineField({
      name: "workTitleAr",
      title: "What Technicians Do Title (Arabic)",
      type: "string",
      initialValue: "ما يقوم به الفنيون عملياً في الموقع.",
    }),
    defineField({
      name: "workText1En",
      title: "Field Work Detail 1 (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "workText1Ar",
      title: "Field Work Detail 1 (Arabic)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "workText2En",
      title: "Field Work Detail 2 (English)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "workText2Ar",
      title: "Field Work Detail 2 (Arabic)",
      type: "text",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us Page",
        subtitle: "Company story, technician workflows, and office photos",
      };
    },
  },
});
