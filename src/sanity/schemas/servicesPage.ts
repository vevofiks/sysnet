import { defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Overview Page",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
      type: "string",
      initialValue: "CCTV and cabling services in Riyadh.",
    }),
    defineField({
      name: "titleAr",
      title: "Page Title (Arabic)",
      type: "string",
      initialValue: "خدمات كاميرات المراقبة وتمديدات الشبكات في الرياض.",
    }),
    defineField({
      name: "ledeEn",
      title: "Page Description (English)",
      type: "text",
      rows: 3,
      initialValue: "Each scope below is something we price on its own. Most Riyadh jobs combine two or three: a camera, a reader, and the cable between them.",
    }),
    defineField({
      name: "ledeAr",
      title: "Page Description (Arabic)",
      type: "text",
      rows: 3,
      initialValue: "كل نطاق عمل أدناه نسعره بشكل مستقل. معظم مشاريع الرياض تجمع بين اثنين أو ثلاثة: كاميرا، وقارئ بطاقات، والكيبل الرابط بينهما.",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Services Page Settings",
        subtitle: "Header, intro description, and catalog labels",
      };
    },
  },
});
