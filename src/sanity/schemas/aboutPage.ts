import { defineField, defineType } from "sanity";

export const aboutPageType = defineType({
  name: "aboutPage",
  title: "About Us Page",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero" },
    { name: "story", title: "2. Story & Office" },
    { name: "pillars", title: "3. Pillars" },
    { name: "standards", title: "4. Field Standards" },
    { name: "cta", title: "5. Booking CTA" },
  ],
  fields: [
    // 1. HERO
    defineField({
      name: "badgeEn",
      title: "Hero Badge (English)",
      type: "string",
      group: "hero",
      initialValue: "Company Profile · Sysnet Technologies",
    }),
    defineField({
      name: "badgeAr",
      title: "Hero Badge (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "نبذة عن سيسنت تكنولوجيز",
    }),
    defineField({
      name: "titleEn",
      title: "Hero Title (English)",
      type: "string",
      group: "hero",
      initialValue: "CCTV installation from a Malaz office.",
    }),
    defineField({
      name: "titleAr",
      title: "Hero Title (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "تركيب كاميرات مراقبة من مكتب الملز.",
    }),
    defineField({
      name: "ledeEn",
      title: "Hero Description (English)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Sysnet Technologies is the name on the van and the invoice. The work is cameras, alarms, access control, and the cable that joins them.",
    }),
    defineField({
      name: "ledeAr",
      title: "Hero Description (Arabic)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "سيسنت تكنولوجيز هو الاسم على الفان والفاتورة. العمل يشمل الكاميرات والإنذارات والتحكم بالدخول وتمديدات الشبكات.",
    }),
    defineField({
      name: "skylineImage",
      title: "Riyadh Skyline / Office Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // 2. STORY & CREDENTIALS
    defineField({
      name: "headingEn",
      title: "Story Heading (English)",
      type: "string",
      group: "story",
      initialValue: "Based in Riyadh, not a catalogue with a PO box.",
    }),
    defineField({
      name: "headingAr",
      title: "Story Heading (Arabic)",
      type: "string",
      group: "story",
      initialValue: "مقرنا في الرياض، ولسنا مجرد كتالوج بصندوق بريد.",
    }),
    defineField({
      name: "p1En",
      title: "Story Paragraph 1 (English)",
      type: "text",
      rows: 3,
      group: "story",
      initialValue:
        "The office is in Malaz. Calls go to +966 53 298 0149. Mail goes to sales@sysnet-ksa.com. Survey crews cover the city: Olaya towers, villas in the north, and stores in Al Sulay.",
    }),
    defineField({
      name: "p1Ar",
      title: "Story Paragraph 1 (Arabic)",
      type: "text",
      rows: 3,
      group: "story",
      initialValue:
        "المكتب في الملز. الاتصالات على ‎+966 53 298 0149. البريد إلى sales@sysnet-ksa.com. فرق المعاينة تغطي المدينة: أبراج العليا، وفلل الشمال، ومستودعات السلي.",
    }),
    defineField({
      name: "p2En",
      title: "Story Paragraph 2 (English)",
      type: "text",
      rows: 3,
      group: "story",
      initialValue:
        "Procurement teams get a parts list they can read. Facility managers get one cabinet instead of three vendors pointing at each other. Homeowners get a gate station that rings a monitor inside the house.",
    }),
    defineField({
      name: "p2Ar",
      title: "Story Paragraph 2 (Arabic)",
      type: "text",
      rows: 3,
      group: "story",
      initialValue:
        "فرق المشتريات تحصل على قائمة قطع تُقرأ. مدير المرافق يحصل على خزانة واحدة بدل ثلاثة مورّدين يشير بعضهم إلى بعض. صاحب البيت يحصل على محطة بوابة ترن على شاشة داخل المنزل.",
    }),

    // 3. PILLARS
    defineField({
      name: "pillarsList",
      title: "Core Operational Pillars (4 Cards)",
      type: "array",
      group: "pillars",
      of: [
        {
          type: "object",
          fields: [
            { name: "num", title: "Number (e.g. 01)", type: "string" },
            { name: "titleEn", title: "Title (English)", type: "string" },
            { name: "titleAr", title: "Title (Arabic)", type: "string" },
            { name: "descEn", title: "Description (English)", type: "text", rows: 2 },
            { name: "descAr", title: "Description (Arabic)", type: "text", rows: 2 },
          ],
        },
      ],
      initialValue: [
        {
          num: "01",
          titleEn: "Marked Drawings Before Ordering",
          titleAr: "مخطط معتمد قبل الحفر والطلب",
          descEn:
            "We survey the site and mark each camera angle and cable run on the floor plan before drilling begins.",
          descAr: "نعاين الموقع ونحدد كل زاوية ونقطة بيانات على المخطط قبل طلب أي أجهزة أو حفر أي جدار.",
        },
        {
          num: "02",
          titleEn: "One Consolidated Cabinet",
          titleAr: "كابينة موحدة تمنع تضارب المقاولين",
          descEn:
            "Cameras, alarms, and data patch panels terminate in one labeled rack to eliminate multi-vendor finger-pointing.",
          descAr: "نجمع الكاميرات والإنذار والشبكة في كابينة واحدة منظمة تمنع تهرب المقاولين من المسؤولية.",
        },
        {
          num: "03",
          titleEn: "Complete Documented Handover",
          titleAr: "تسليم رسمي بكلمات المرور وورقة الفحص",
          descEn:
            "We hand over verified test sheets, administrator passwords, and port maps with total transparency.",
          descAr: "نسلمك ورقة فحص مختبرة، وكلمات مرور المشرف، وخريطة المنافذ دون أي غموض.",
        },
        {
          num: "04",
          titleEn: "Local Malaz Operations Desk",
          titleAr: "مكتب محلي في الملز جاهز للمعاينة والصيانة",
          descEn:
            "Our crews deploy directly from Malaz to serve Riyadh and Dammam with reliable same-day dispatch.",
          descAr: "فريقنا ينطلق من الملز لتغطية أحياء الرياض والدمام مع سرعة الرد والتنفيذ في اليوم نفسه.",
        },
      ],
    }),

    // 4. FIELD STANDARDS
    defineField({
      name: "workBadgeEn",
      title: "Field Standards Badge (English)",
      type: "string",
      group: "standards",
      initialValue: "Field Standards in Practice",
    }),
    defineField({
      name: "workBadgeAr",
      title: "Field Standards Badge (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "معايير التنفيذ الميداني",
    }),
    defineField({
      name: "workTitleEn",
      title: "Field Standards Title (English)",
      type: "string",
      group: "standards",
      initialValue: "What the technicians actually do on site.",
    }),
    defineField({
      name: "workTitleAr",
      title: "Field Standards Title (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "ما يقوم به الفنيون عملياً في الموقع.",
    }),
    defineField({
      name: "workLedeEn",
      title: "Field Standards Description (English)",
      type: "text",
      rows: 2,
      group: "standards",
      initialValue:
        "Authentic views of our technicians in the field: termination, labeling, and proving on site.",
    }),
    defineField({
      name: "workLedeAr",
      title: "Field Standards Description (Arabic)",
      type: "text",
      rows: 2,
      group: "standards",
      initialValue: "صور واقعية من تنفيذ الفنيين في الميدان: تأسيس، ترقيم، واختبار عملي قبل التسليم.",
    }),

    // 5. BOOKING CTA
    defineField({
      name: "ctaBadgeEn",
      title: "CTA Badge (English)",
      type: "string",
      group: "cta",
      initialValue: "Malaz Operations Desk",
    }),
    defineField({
      name: "ctaBadgeAr",
      title: "CTA Badge (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "مكتب العمليات بالملز",
    }),
    defineField({
      name: "ctaTitleEn",
      title: "CTA Title (English)",
      type: "string",
      group: "cta",
      initialValue: "Talk to the Malaz Desk",
    }),
    defineField({
      name: "ctaTitleAr",
      title: "CTA Title (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "تواصل مع مكتب الملز",
    }),
    defineField({
      name: "ctaBodyEn",
      title: "CTA Description (English)",
      type: "text",
      rows: 2,
      group: "cta",
      initialValue:
        "Speak directly with field technicians and engineers. We provide prompt site surveys across Riyadh within 24 hours.",
    }),
    defineField({
      name: "ctaBodyAr",
      title: "CTA Description (Arabic)",
      type: "text",
      rows: 2,
      group: "cta",
      initialValue: "تحدث مباشرة مع المهندسين والفنيين. نقدم معاينات ميدانية سريعة في أنحاء الرياض خلال 24 ساعة.",
    }),
    defineField({
      name: "ctaBtnSurveyEn",
      title: "Survey Button Text (English)",
      type: "string",
      group: "cta",
      initialValue: "Book a Survey",
    }),
    defineField({
      name: "ctaBtnSurveyAr",
      title: "Survey Button Text (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "احجز معاينة",
    }),
    defineField({
      name: "ctaBtnCallEn",
      title: "Call Button Text (English)",
      type: "string",
      group: "cta",
      initialValue: "Direct Phone",
    }),
    defineField({
      name: "ctaBtnCallAr",
      title: "Call Button Text (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "الاتصال المباشر",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "About Us Page Settings",
        subtitle: "Hero, Story, 4 Pillars, Field Standards, and CTA",
      };
    },
  },
});
