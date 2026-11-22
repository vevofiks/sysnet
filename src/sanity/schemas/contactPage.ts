import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  fields: [
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
      type: "string",
      initialValue: "Book a CCTV survey in Riyadh.",
    }),
    defineField({
      name: "titleAr",
      title: "Page Title (Arabic)",
      type: "string",
      initialValue: "احجز معاينة لكاميرات المراقبة في الرياض.",
    }),
    defineField({
      name: "ledeEn",
      title: "Page Description (English)",
      type: "text",
      rows: 2,
      initialValue: "The form opens WhatsApp to the Malaz office. Hours are Saturday to Thursday, 9:00 to 18:00.",
    }),
    defineField({
      name: "ledeAr",
      title: "Page Description (Arabic)",
      type: "text",
      rows: 2,
      initialValue: "النموذج يفتح محادثة واتساب مع مكتب الملز. أوقات العمل من السبت إلى الخميس، 9:00 إلى 18:00.",
    }),
    defineField({
      name: "officeHeadingEn",
      title: "Office Heading (English)",
      type: "string",
      initialValue: "Malaz office",
    }),
    defineField({
      name: "officeHeadingAr",
      title: "Office Heading (Arabic)",
      type: "string",
      initialValue: "مكتب الملز",
    }),
    defineField({
      name: "addressEn",
      title: "Office Address (English)",
      type: "string",
      initialValue: "Malaz, Riyadh, Saudi Arabia",
    }),
    defineField({
      name: "addressAr",
      title: "Office Address (Arabic)",
      type: "string",
      initialValue: "الملز، الرياض، المملكة العربية السعودية",
    }),
    defineField({
      name: "phone",
      title: "Telephone Number",
      type: "string",
      initialValue: "+966 53 298 0149",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      initialValue: "sales@sysnet-ksa.com",
    }),
    defineField({
      name: "hoursEn",
      title: "Office Working Hours (English)",
      type: "string",
      initialValue: "Saturday to Thursday, 9:00 to 18:00",
    }),
    defineField({
      name: "hoursAr",
      title: "Office Working Hours (Arabic)",
      type: "string",
      initialValue: "السبت إلى الخميس، 9:00 إلى 18:00",
    }),
    defineField({
      name: "formSubmitBtnEn",
      title: "Submit Button Text (English)",
      type: "string",
      initialValue: "Send on WhatsApp",
    }),
    defineField({
      name: "formSubmitBtnAr",
      title: "Submit Button Text (Arabic)",
      type: "string",
      initialValue: "إرسال عبر واتساب",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Page Settings",
        subtitle: "Office address, phone, hours, and WhatsApp form settings",
      };
    },
  },
});
