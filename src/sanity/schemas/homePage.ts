import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    // --- Hero Section ---
    defineField({
      name: "heroTitleEn",
      title: "Hero Headline (English)",
      type: "string",
      initialValue: "CCTV installation for Riyadh buildings.",
    }),
    defineField({
      name: "heroTitleAr",
      title: "Hero Headline (Arabic)",
      type: "string",
      initialValue: "تركيب كاميرات المراقبة للمباني في الرياض.",
    }),
    defineField({
      name: "heroLedeEn",
      title: "Hero Description (English)",
      type: "text",
      rows: 3,
      initialValue: "Sysnet Technologies surveys the site, writes the parts list, and installs CCTV, intercom, fire alarm, and network cable. The office is in Malaz.",
    }),
    defineField({
      name: "heroLedeAr",
      title: "Hero Description (Arabic)",
      type: "text",
      rows: 3,
      initialValue: "سيسنت تكنولوجيز تعاين الموقع، وتكتب قائمة القطع، وتركب كاميرات المراقبة، والإنتركم، وإنذار الحريق، وكابلات الشبكة. المكتب في الملز.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Main Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroExploreBtnEn",
      title: "Explore Button Label (English)",
      type: "string",
      initialValue: "Explore services",
    }),
    defineField({
      name: "heroExploreBtnAr",
      title: "Explore Button Label (Arabic)",
      type: "string",
      initialValue: "استكشف الخدمات",
    }),
    defineField({
      name: "heroContactBtnEn",
      title: "Contact Button Label (English)",
      type: "string",
      initialValue: "Contact us",
    }),
    defineField({
      name: "heroContactBtnAr",
      title: "Contact Button Label (Arabic)",
      type: "string",
      initialValue: "اتصل بنا",
    }),

    // --- Why Choose Sysnet / Crew Section ---
    defineField({
      name: "crewTitleEn",
      title: "Crew Section Title (English)",
      type: "string",
      initialValue: "One crew for the camera, the alarm, and the cable.",
    }),
    defineField({
      name: "crewTitleAr",
      title: "Crew Section Title (Arabic)",
      type: "string",
      initialValue: "فريق واحد للكاميرا، والإنذار، والكيبل.",
    }),
    defineField({
      name: "crewBodyEn",
      title: "Crew Section Body (English)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "crewBodyAr",
      title: "Crew Section Body (Arabic)",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "crewImage",
      title: "Crew Section Photo",
      type: "image",
      options: { hotspot: true },
    }),

    // --- Industries / Sectors Section ---
    defineField({
      name: "sectorsTitleEn",
      title: "Sectors Section Title (English)",
      type: "string",
      initialValue: "Booked across offices, yards, and villas.",
    }),
    defineField({
      name: "sectorsTitleAr",
      title: "Sectors Section Title (Arabic)",
      type: "string",
      initialValue: "حجوزات للمكاتب والساحات والفلل.",
    }),
    defineField({
      name: "industriesList",
      title: "Industry Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "titleEn", title: "Title (English)", type: "string" },
            { name: "titleAr", title: "Title (Arabic)", type: "string" },
            { name: "textEn", title: "Text (English)", type: "text", rows: 2 },
            { name: "textAr", title: "Text (Arabic)", type: "text", rows: 2 },
          ],
        },
      ],
    }),

    // --- 5 Steps Section ---
    defineField({
      name: "stepsTitleEn",
      title: "Steps Section Title (English)",
      type: "string",
      initialValue: "Five steps from the phone call to the test report.",
    }),
    defineField({
      name: "stepsTitleAr",
      title: "Steps Section Title (Arabic)",
      type: "string",
      initialValue: "خمس خطوات من الاتصال إلى تقرير الفحص.",
    }),
    defineField({
      name: "stepsList",
      title: "5 Process Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "titleEn", title: "Step Title (English)", type: "string" },
            { name: "titleAr", title: "Step Title (Arabic)", type: "string" },
            { name: "textEn", title: "Step Detail (English)", type: "text", rows: 2 },
            { name: "textAr", title: "Step Detail (Arabic)", type: "text", rows: 2 },
          ],
        },
      ],
    }),

    // --- FAQ Section ---
    defineField({
      name: "faqTitleEn",
      title: "FAQ Title (English)",
      type: "string",
      initialValue: "Questions before you book",
    }),
    defineField({
      name: "faqTitleAr",
      title: "FAQ Title (Arabic)",
      type: "string",
      initialValue: "أسئلة شائعة قبل الحجز",
    }),
    defineField({
      name: "faqsList",
      title: "Frequently Asked Questions",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "questionEn", title: "Question (English)", type: "string" },
            { name: "questionAr", title: "Question (Arabic)", type: "string" },
            { name: "answerEn", title: "Answer (English)", type: "text", rows: 3 },
            { name: "answerAr", title: "Answer (Arabic)", type: "text", rows: 3 },
          ],
        },
      ],
    }),

    // --- Book Site Survey Banner ---
    defineField({
      name: "bookTitleEn",
      title: "Survey Banner Title (English)",
      type: "string",
      initialValue: "Book a free site survey.",
    }),
    defineField({
      name: "bookTitleAr",
      title: "Survey Banner Title (Arabic)",
      type: "string",
      initialValue: "احجز معاينة مجانية للموقع.",
    }),
    defineField({
      name: "bookBodyEn",
      title: "Survey Banner Body (English)",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "bookBodyAr",
      title: "Survey Banner Body (Arabic)",
      type: "text",
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page Settings",
        subtitle: "Hero, Crew, Sectors, Steps, FAQs, and Survey Banner",
      };
    },
  },
});
