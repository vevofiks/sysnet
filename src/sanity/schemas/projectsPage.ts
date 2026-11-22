import { defineField, defineType } from "sanity";

export const projectsPageType = defineType({
  name: "projectsPage",
  title: "Projects Page (Overview)",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero" },
    { name: "standards", title: "2. Standards & Testing" },
  ],
  fields: [
    // 1. HERO
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

    // 2. STANDARDS
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
      name: "standardsList",
      title: "Installation Standards (4 Cards)",
      type: "array",
      group: "standards",
      of: [
        {
          type: "object",
          fields: [
            { name: "titleEn", title: "Title (English)", type: "string" },
            { name: "titleAr", title: "Title (Arabic)", type: "string" },
            { name: "descEn", title: "Description (English)", type: "text", rows: 2 },
            { name: "descAr", title: "Description (Arabic)", type: "text", rows: 2 },
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
  ],
  preview: {
    prepare() {
      return {
        title: "Projects Page Settings",
        subtitle: "Hero, Lede, and 4 Installation Standards",
      };
    },
  },
});
