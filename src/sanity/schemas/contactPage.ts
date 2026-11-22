import { defineField, defineType } from "sanity";

export const contactPageType = defineType({
  name: "contactPage",
  title: "Contact Page",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero" },
    { name: "office", title: "2. Office Credentials" },
    { name: "steps", title: "3. Survey Steps" },
  ],
  fields: [
    // 1. HERO
    defineField({
      name: "badgeEn",
      title: "Hero Badge (English)",
      type: "string",
      group: "hero",
      initialValue: "Direct Malaz Survey Booking Desk",
    }),
    defineField({
      name: "badgeAr",
      title: "Hero Badge (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "مكتب الحجز والمعاينة الميدانية",
    }),
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
      type: "string",
      group: "hero",
      initialValue: "Book a CCTV survey in Riyadh.",
    }),
    defineField({
      name: "titleAr",
      title: "Page Title (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "احجز معاينة لكاميرات المراقبة في الرياض.",
    }),
    defineField({
      name: "ledeEn",
      title: "Page Description (English)",
      type: "text",
      rows: 2,
      group: "hero",
      initialValue:
        "The form opens WhatsApp to the Malaz office. Hours are Saturday to Thursday, 9:00 to 18:00.",
    }),
    defineField({
      name: "ledeAr",
      title: "Page Description (Arabic)",
      type: "text",
      rows: 2,
      group: "hero",
      initialValue:
        "النموذج يفتح محادثة واتساب مع مكتب الملز. أوقات العمل من السبت إلى الخميس، 9:00 إلى 18:00.",
    }),

    // 2. OFFICE CREDENTIALS
    defineField({
      name: "statusBadgeEn",
      title: "Status Badge (English)",
      type: "string",
      group: "office",
      initialValue: "Malaz Desk Active & Online",
    }),
    defineField({
      name: "statusBadgeAr",
      title: "Status Badge (Arabic)",
      type: "string",
      group: "office",
      initialValue: "المكتب متاح للرد المباشر",
    }),
    defineField({
      name: "officeHeadingEn",
      title: "Office Heading (English)",
      type: "string",
      group: "office",
      initialValue: "Malaz Operations Desk",
    }),
    defineField({
      name: "officeHeadingAr",
      title: "Office Heading (Arabic)",
      type: "string",
      group: "office",
      initialValue: "مكتب الملز بالرياض",
    }),
    defineField({
      name: "addressEn",
      title: "Office Address (English)",
      type: "string",
      group: "office",
      initialValue: "Malaz, Riyadh, Saudi Arabia",
    }),
    defineField({
      name: "addressAr",
      title: "Office Address (Arabic)",
      type: "string",
      group: "office",
      initialValue: "الملز، الرياض، المملكة العربية السعودية",
    }),
    defineField({
      name: "phone",
      title: "Telephone Number",
      type: "string",
      group: "office",
      initialValue: "+966 53 298 0149",
    }),
    defineField({
      name: "email",
      title: "Contact Email",
      type: "string",
      group: "office",
      initialValue: "sales@sysnet-ksa.com",
    }),
    defineField({
      name: "hoursEn",
      title: "Office Working Hours (English)",
      type: "string",
      group: "office",
      initialValue: "Saturday to Thursday, 9:00 to 18:00",
    }),
    defineField({
      name: "hoursAr",
      title: "Office Working Hours (Arabic)",
      type: "string",
      group: "office",
      initialValue: "السبت إلى الخميس، 9:00 إلى 18:00",
    }),
    defineField({
      name: "formSubmitBtnEn",
      title: "Submit Button Text (English)",
      type: "string",
      group: "office",
      initialValue: "Send on WhatsApp",
    }),
    defineField({
      name: "formSubmitBtnAr",
      title: "Submit Button Text (Arabic)",
      type: "string",
      group: "office",
      initialValue: "إرسال عبر واتساب",
    }),

    // 3. BOOKING STEPS
    defineField({
      name: "stepsList",
      title: "3 Survey Booking Steps",
      type: "array",
      group: "steps",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", title: "Step Number", type: "string" },
            { name: "titleEn", title: "Title (English)", type: "string" },
            { name: "titleAr", title: "Title (Arabic)", type: "string" },
            { name: "descEn", title: "Description (English)", type: "text", rows: 2 },
            { name: "descAr", title: "Description (Arabic)", type: "text", rows: 2 },
          ],
        },
      ],
      initialValue: [
        {
          num: "1",
          titleEn: "Request Received at Malaz Desk",
          titleAr: "استلام الطلب في مكتب الملز",
          descEn: "Immediate review of location and facility type.",
          descAr: "مراجعة الموقع ونوع المبنى فوراً.",
        },
        {
          num: "2",
          titleEn: "Site Survey Appointment Scheduled",
          titleAr: "تحديد موعد المعاينة الميدانية",
          descEn: "Field crew attends your building to mark plans.",
          descAr: "فريق المسح الميداني يزور موقعك لتحديد المخطط.",
        },
        {
          num: "3",
          titleEn: "Itemized Parts & Labour Quotation",
          titleAr: "تسليم جدول الكميات والأسعار",
          descEn: "Transparent breakdown separating equipment from labour.",
          descAr: "عرض أسعار مفصل يفصل الأجهزة عن التركيب.",
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Page Settings",
        subtitle: "Office address, phone, hours, and 3 survey steps",
      };
    },
  },
});
