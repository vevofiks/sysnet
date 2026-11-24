import { defineField, defineType } from "sanity";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projects Page (Overview)",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero & Stats" },
    { name: "standards", title: "2. Standards & Testing" },
    { name: "cta", title: "3. Survey Booking CTA Banner" },
    { name: "seo", title: "4. SEO & Metadata" },
  ],
  fields: [
    // =========================================================================
    // 1. HERO & STATS
    // =========================================================================
    defineField({
      name: "badgeEn",
      title: "Hero Badge (English)",
      type: "string",
      group: "hero",
      initialValue: "Real Riyadh Installation Scopes",
    }),
    defineField({
      name: "badgeAr",
      title: "Hero Badge (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "نماذج واقعية من مشاريع الرياض",
    }),
    defineField({
      name: "titleEn",
      title: "Page Title (English)",
      type: "string",
      group: "hero",
      initialValue: "CCTV and cabling projects in Riyadh.",
    }),
    defineField({
      name: "titleAr",
      title: "Page Title (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "مشاريع الكاميرات والكيابل في الرياض.",
    }),
    defineField({
      name: "ledeEn",
      title: "Page Description (English)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "These are typical scopes surveyed, installed, and handed over across Riyadh commercial towers, logistics warehouses, and residential compounds.",
    }),
    defineField({
      name: "ledeAr",
      title: "Page Description (Arabic)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "نماذج واقعية لنطاقات العمل المنفذة في أبراج ومستودعات ومجمعات الرياض: تحديد زوايا الكاميرات ومسارات الكيابل وتجهيز الكبائن.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Background Image",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroStats",
      title: "Hero Metric Highlights (3 Cards)",
      type: "array",
      group: "hero",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "labelEn", title: "Label (English)", type: "string" }),
            defineField({ name: "labelAr", title: "Label (Arabic)", type: "string" }),
            defineField({ name: "valueEn", title: "Value / District (English)", type: "string" }),
            defineField({ name: "valueAr", title: "Value / District (Arabic)", type: "string" }),
          ],
        },
      ],
      initialValue: [
        {
          labelEn: "Warehouses",
          labelAr: "مستودعات ولوجستيات",
          valueEn: "Al Sulay Yards",
          valueAr: "حي السلي",
        },
        {
          labelEn: "Commercial",
          labelAr: "مباني تجارية",
          valueEn: "Olaya Towers",
          valueAr: "حي العليا",
        },
        {
          labelEn: "Villas & Clinics",
          labelAr: "فلل وعيادات",
          valueEn: "Malaz & Salah Al-Din",
          valueAr: "الملز وصلاح الدين",
        },
      ],
    }),

    // =========================================================================
    // 2. STANDARDS & TESTING
    // =========================================================================
    defineField({
      name: "standardsBadgeEn",
      title: "Standards Badge (English)",
      type: "string",
      group: "standards",
      initialValue: "Installation Standards",
    }),
    defineField({
      name: "standardsBadgeAr",
      title: "Standards Badge (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "معايير التنفيذ المعتمدة",
    }),
    defineField({
      name: "standardsTitleEn",
      title: "Standards Section Title (English)",
      type: "string",
      group: "standards",
      initialValue: "Every project tested and documented before handover.",
    }),
    defineField({
      name: "standardsTitleAr",
      title: "Standards Section Title (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "كل مشروع يُفحص ويوثق بدقة هندسية قبل التسليم.",
    }),
    defineField({
      name: "standardsLedeEn",
      title: "Standards Section Description (English)",
      type: "text",
      rows: 2,
      group: "standards",
      initialValue:
        "Whether installing 22 warehouse cameras in Al Sulay or 4 access doors in Malaz, these rules never change.",
    }),
    defineField({
      name: "standardsLedeAr",
      title: "Standards Section Description (Arabic)",
      type: "text",
      rows: 2,
      group: "standards",
      initialValue:
        "سواء كان المشروع مستودعاً في السلي أو فيلا في الملز، يتم تسليم الأعمال وفق معايير هندسية موثقة.",
    }),
    defineField({
      name: "standardsList",
      title: "Installation Standards (4 Cards)",
      type: "array",
      group: "standards",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "titleEn", title: "Title (English)", type: "string" }),
            defineField({ name: "titleAr", title: "Title (Arabic)", type: "string" }),
            defineField({ name: "descEn", title: "Description (English)", type: "text", rows: 2 }),
            defineField({ name: "descAr", title: "Description (Arabic)", type: "text", rows: 2 }),
          ],
        },
      ],
      initialValue: [
        {
          titleEn: "100% Labeled & Tested",
          titleAr: "ترقيم وفحص ١٠٠٪",
          descEn: "Every patch lead and port is numbered at both ends with certified test sheets.",
          descAr: "جميع المنافذ والكيابل ترقم عند الطرفين وتسلم ورقة الفحص كاملة.",
        },
        {
          titleEn: "Verified 30-Day Retention",
          titleAr: "تسجيل ٣٠ يوماً فعلياً",
          descEn: "Hard drives sized to actual resolution and bitrate to guarantee full retention.",
          descAr: "حساب مساحة الأقراص الصلبة وفق عدد الكاميرات ومعدل الإطارات الفعلي.",
        },
        {
          titleEn: "Segregated Alarm Circuits",
          titleAr: "فصل دوائر الحريق عن السرقة",
          descEn: "Fire alarm loops stay strictly isolated from intrusion contacts.",
          descAr: "دوائر إنذار الحريق مستقلة تماماً عن حساسات الأبواب والنوافذ.",
        },
        {
          titleEn: "Full Admin Credentials",
          titleAr: "تسليم كلمات المرور للإدارة",
          descEn: "Direct handover of master passwords and cabinet maps to facility leadership.",
          descAr: "تسليم كلمات مرور المشرف وخريطة الكابينة لمدير المبنى دون حجب.",
        },
      ],
    }),

    // =========================================================================
    // 3. SURVEY BOOKING CTA BANNER
    // =========================================================================
    defineField({
      name: "ctaPromptEn",
      title: "CTA Heading / Prompt (English)",
      type: "string",
      group: "cta",
      initialValue: "Book a site survey across Riyadh.",
    }),
    defineField({
      name: "ctaPromptAr",
      title: "CTA Heading / Prompt (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "احجز موعد معاينة ميدانية لمبناك في الرياض.",
    }),
    defineField({
      name: "ctaLedeEn",
      title: "CTA Description (English)",
      type: "text",
      rows: 3,
      group: "cta",
      initialValue:
        "We survey the routes, count the cameras, and price cable and hardware line by line before any drilling begins.",
    }),
    defineField({
      name: "ctaLedeAr",
      title: "CTA Description (Arabic)",
      type: "text",
      rows: 3,
      group: "cta",
      initialValue:
        "نعاين المسارات ونحدد أماكن الكاميرات ونسعر الأجهزة والتركيب بنداً بنداً قبل بدء العمل.",
    }),
    defineField({
      name: "ctaBtnSurveyEn",
      title: "Survey Button Text (English)",
      type: "string",
      group: "cta",
      initialValue: "Request a survey",
    }),
    defineField({
      name: "ctaBtnSurveyAr",
      title: "Survey Button Text (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "طلب معاينة",
    }),
    defineField({
      name: "ctaBtnCallEn",
      title: "Call Button Text (English)",
      type: "string",
      group: "cta",
      initialValue: "Call us",
    }),
    defineField({
      name: "ctaBtnCallAr",
      title: "Call Button Text (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "اتصل بنا",
    }),
    defineField({
      name: "ctaImage",
      title: "CTA Background Photo",
      type: "image",
      group: "cta",
      options: { hotspot: true },
    }),

    // =========================================================================
    // 4. SEO & METADATA
    // =========================================================================
    defineField({
      name: "metaTitleEn",
      title: "Meta Title (English)",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "metaTitleAr",
      title: "Meta Title (Arabic)",
      type: "string",
      group: "seo",
    }),
    defineField({
      name: "metaDescriptionEn",
      title: "Meta Description (English)",
      type: "text",
      group: "seo",
      rows: 3,
    }),
    defineField({
      name: "metaDescriptionAr",
      title: "Meta Description (Arabic)",
      type: "text",
      group: "seo",
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Projects Page Settings",
        subtitle: "Hero, Lede, Standards, and Booking CTA",
      };
    },
  },
});
