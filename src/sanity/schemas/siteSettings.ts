import { defineField, defineType } from "sanity";

export const siteSettingsType = defineType({
  name: "siteSettings",
  title: "Site Settings & Contact Info",
  type: "document",
  fields: [
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
      initialValue: "Sysnet",
    }),
    defineField({
      name: "phoneDisplay",
      title: "Display Phone",
      type: "string",
      initialValue: "+966 53 298 0149",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number",
      type: "string",
      initialValue: "966532980149",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      initialValue: "sales@sysnet-ksa.com",
    }),
    defineField({
      name: "addressEn",
      title: "Address (English)",
      type: "string",
      initialValue: "Malaz, Riyadh, Saudi Arabia",
    }),
    defineField({
      name: "addressAr",
      title: "Address (Arabic)",
      type: "string",
      initialValue: "الملز، الرياض، المملكة العربية السعودية",
    }),
    defineField({
      name: "workingHoursEn",
      title: "Working Hours (English)",
      type: "string",
      initialValue: "Saturday–Thursday, 9:00–18:00",
    }),
    defineField({
      name: "workingHoursAr",
      title: "Working Hours (Arabic)",
      type: "string",
      initialValue: "السبت إلى الخميس، 9:00 إلى 18:00",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site Settings & Contact Information",
      };
    },
  },
});
