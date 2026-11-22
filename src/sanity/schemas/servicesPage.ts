import { defineField, defineType } from "sanity";

export const servicesPageType = defineType({
  name: "servicesPage",
  title: "Services Overview Page",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero" },
    { name: "catalog", title: "2. Catalog Header" },
    { name: "advantage", title: "3. Single-Contractor Advantage" },
  ],
  fields: [
    // 1. HERO
    defineField({
      name: "badgeEn",
      title: "Hero Badge (English)",
      type: "string",
      group: "hero",
      initialValue: "15 Service Lines",
    }),
    defineField({
      name: "badgeAr",
      title: "Hero Badge (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "١٥ خط خدمة",
    }),
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
      type: "string",
      group: "hero",
      initialValue: "CCTV and cabling services in Riyadh.",
    }),
    defineField({
      name: "titleAr",
      title: "Page Title (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "خدمات كاميرات المراقبة وتمديدات الشبكات في الرياض.",
    }),
    defineField({
      name: "ledeEn",
      title: "Page Description (English)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Each scope below is something we price on its own. Most Riyadh jobs combine two or three: a camera, a reader, and the cable between them.",
    }),
    defineField({
      name: "ledeAr",
      title: "Page Description (Arabic)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "كل نطاق عمل أدناه نسعره بشكل مستقل. معظم مشاريع الرياض تجمع بين اثنين أو ثلاثة: كاميرا، وقارئ بطاقات، والكيبل الرابط بينهما.",
    }),

    // 2. CATALOG HEADER
    defineField({
      name: "catalogHeadingEn",
      title: "Catalog Heading (English)",
      type: "string",
      group: "catalog",
      initialValue: "All 15 Service Scopes",
    }),
    defineField({
      name: "catalogHeadingAr",
      title: "Catalog Heading (Arabic)",
      type: "string",
      group: "catalog",
      initialValue: "جميع خطوط الخدمة في الرياض",
    }),
    defineField({
      name: "catalogSubtitleEn",
      title: "Catalog Subtitle (English)",
      type: "text",
      rows: 2,
      group: "catalog",
      initialValue:
        "Select any scope to inspect full survey coverage, field procedures, and handover deliverables.",
    }),
    defineField({
      name: "catalogSubtitleAr",
      title: "Catalog Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "catalog",
      initialValue:
        "اختر النطاق الذي يناسب مبناك للحصول على تفاصيل المواصفات وما تشمله المعاينة وما يتم تسليمه لإدارة المبنى.",
    }),
    defineField({
      name: "featuredTitleEn",
      title: "Featured Scopes Title (English)",
      type: "string",
      group: "catalog",
      initialValue: "Most Requested Installation Scopes",
    }),
    defineField({
      name: "featuredTitleAr",
      title: "Featured Scopes Title (Arabic)",
      type: "string",
      group: "catalog",
      initialValue: "أكثر النطاقات طلباً وتنفيذاً في الرياض",
    }),
    defineField({
      name: "featuredLedeEn",
      title: "Featured Scopes Description (English)",
      type: "text",
      rows: 2,
      group: "catalog",
      initialValue:
        "Floor-plan marked coverage and certified numbered racks delivered as unified scopes.",
    }),
    defineField({
      name: "featuredLedeAr",
      title: "Featured Scopes Description (Arabic)",
      type: "text",
      rows: 2,
      group: "catalog",
      initialValue: "حلول شاملة مع تحديد الزوايا على المخطط وتسليم كبائن مرتبة ومرقمة بالكامل.",
    }),

    // 3. SINGLE-CONTRACTOR ADVANTAGE
    defineField({
      name: "advantageBadgeEn",
      title: "Advantage Badge (English)",
      type: "string",
      group: "advantage",
      initialValue: "Single-Contractor Advantage",
    }),
    defineField({
      name: "advantageBadgeAr",
      title: "Advantage Badge (Arabic)",
      type: "string",
      group: "advantage",
      initialValue: "ميزة المقاول الموحد",
    }),
    defineField({
      name: "advantageTitleEn",
      title: "Advantage Title (English)",
      type: "string",
      group: "advantage",
      initialValue: "One drawing, one cabinet, one invoice.",
    }),
    defineField({
      name: "advantageTitleAr",
      title: "Advantage Title (Arabic)",
      type: "string",
      group: "advantage",
      initialValue: "مخطط واحد، كابينة واحدة، وفاتورة واحدة.",
    }),
    defineField({
      name: "advantageBodyEn",
      title: "Advantage Description (English)",
      type: "text",
      rows: 3,
      group: "advantage",
      initialValue:
        "Why facilities choose Sysnet over multiple sub-contractors: eliminate vendor blame games, maintain clean cabling, and receive full admin handover on every installation.",
    }),
    defineField({
      name: "advantageBodyAr",
      title: "Advantage Description (Arabic)",
      type: "text",
      rows: 3,
      group: "advantage",
      initialValue:
        "لماذا تفضل الشركات سيسنت بدلاً من تعدد المقاولين: إنهاء تضارب المسؤوليات، والحفاظ على كبائن منظمة، وتسليم كلمات المرور كاملة لإدارة المنشأة.",
    }),
    defineField({
      name: "advantageBtnAllEn",
      title: "Explore All Button Text (English)",
      type: "string",
      group: "advantage",
      initialValue: "Explore All Scopes",
    }),
    defineField({
      name: "advantageBtnAllAr",
      title: "Explore All Button Text (Arabic)",
      type: "string",
      group: "advantage",
      initialValue: "استعراض جميع النطاقات",
    }),
    defineField({
      name: "advantageBtnSurveyEn",
      title: "Survey Button Text (English)",
      type: "string",
      group: "advantage",
      initialValue: "Request a Survey",
    }),
    defineField({
      name: "advantageBtnSurveyAr",
      title: "Survey Button Text (Arabic)",
      type: "string",
      group: "advantage",
      initialValue: "طلب معاينة ميدانية",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Services Page Settings",
        subtitle: "Hero, Catalog Header, and Advantage Section",
      };
    },
  },
});
