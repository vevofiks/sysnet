import { defineField, defineType } from "sanity";

export const notFoundType = defineType({
  name: "notFoundPage",
  title: "404 Not Found Page",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Title (English)",
      type: "string",
      initialValue: "Page Not Found",
      description: "Text shown for the 404 heading in English.",
    }),
    defineField({
      name: "titleAr",
      title: "Title (Arabic)",
      type: "string",
      initialValue: "الصفحة غير موجودة",
      description: "Text shown for the 404 heading in Arabic.",
    }),
    defineField({
      name: "subtitleEn",
      title: "Subtitle (English)",
      type: "text",
      rows: 2,
      initialValue: "The page you're looking for doesn't seem to exist or may have been moved.",
    }),
    defineField({
      name: "subtitleAr",
      title: "Subtitle (Arabic)",
      type: "text",
      rows: 2,
      initialValue: "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.",
    }),
    defineField({
      name: "backgroundImage",
      title: "3D Background Image",
      type: "image",
      description: "Upload a replacement for the 404 room image if desired.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "homeButtonTextEn",
      title: "Home Button Label (English)",
      type: "string",
      initialValue: "Back to Home",
    }),
    defineField({
      name: "homeButtonTextAr",
      title: "Home Button Label (Arabic)",
      type: "string",
      initialValue: "العودة إلى الرئيسية",
    }),
    defineField({
      name: "productsButtonTextEn",
      title: "Products Button Label (English)",
      type: "string",
      initialValue: "Browse Products",
    }),
    defineField({
      name: "productsButtonTextAr",
      title: "Products Button Label (Arabic)",
      type: "string",
      initialValue: "تصفح المنتجات",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "404 Not Found Page Settings",
        subtitle: "Texts, buttons, and background image",
      };
    },
  },
});
