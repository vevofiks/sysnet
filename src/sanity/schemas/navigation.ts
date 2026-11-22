import { defineField, defineType } from "sanity";

export const navigationType = defineType({
  name: "navigation",
  title: "Header & Navigation",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand Name",
      type: "string",
      initialValue: "Sysnet",
    }),
    defineField({
      name: "homeLabelEn",
      title: "Home Link Label (English)",
      type: "string",
      initialValue: "Home",
    }),
    defineField({
      name: "homeLabelAr",
      title: "Home Link Label (Arabic)",
      type: "string",
      initialValue: "الرئيسية",
    }),
    defineField({
      name: "aboutLabelEn",
      title: "About Link Label (English)",
      type: "string",
      initialValue: "About Us",
    }),
    defineField({
      name: "aboutLabelAr",
      title: "About Link Label (Arabic)",
      type: "string",
      initialValue: "من نحن",
    }),
    defineField({
      name: "servicesLabelEn",
      title: "Services Link Label (English)",
      type: "string",
      initialValue: "Services",
    }),
    defineField({
      name: "servicesLabelAr",
      title: "Services Link Label (Arabic)",
      type: "string",
      initialValue: "الخدمات",
    }),
    defineField({
      name: "projectsLabelEn",
      title: "Projects Link Label (English)",
      type: "string",
      initialValue: "Projects",
    }),
    defineField({
      name: "projectsLabelAr",
      title: "Projects Link Label (Arabic)",
      type: "string",
      initialValue: "المشاريع",
    }),
    defineField({
      name: "contactLabelEn",
      title: "Contact Link Label (English)",
      type: "string",
      initialValue: "Contact",
    }),
    defineField({
      name: "contactLabelAr",
      title: "Contact Link Label (Arabic)",
      type: "string",
      initialValue: "اتصل بنا",
    }),
    defineField({
      name: "quoteButtonLabelEn",
      title: "Quote CTA Button (English)",
      type: "string",
      initialValue: "Get a quote",
    }),
    defineField({
      name: "quoteButtonLabelAr",
      title: "Quote CTA Button (Arabic)",
      type: "string",
      initialValue: "طلب عرض سعر",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation & Menus",
        subtitle: "Navbar links and Call-to-Action buttons",
      };
    },
  },
});
