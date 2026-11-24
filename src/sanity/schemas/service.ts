import { defineField, defineType } from "sanity";

export const serviceType = defineType({
  name: "service",
  title: "Services & Products",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero & Scope Header" },
    { name: "quote", title: "2. Scope Quote Box & Hardware" },
    { name: "journey", title: "3. Execution Journey (4 Steps)" },
    { name: "sections", title: "4. Technical Content Grid (6 Cards)" },
    { name: "standards", title: "5. Riyadh Site Standard Banner" },
    { name: "inclusions", title: "6. Survey & Handover Lists" },
    { name: "faq", title: "7. Service FAQs" },
    { name: "cta", title: "8. Booking CTA" },
    { name: "seo", title: "9. SEO & Metadata" },
  ],
  fields: [
    // =========================================================================
    // 1. HERO & SCOPE HEADER
    // =========================================================================
    defineField({
      name: "titleEn",
      title: "Scope Title / Tag (English)",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "titleAr",
      title: "Scope Title / Tag (Arabic)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "scopeNumberEn",
      title: "Scope Number Badge (English, e.g. Scope 01 / 15)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "scopeNumberAr",
      title: "Scope Number Badge (Arabic, e.g. النطاق 01 / 15)",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "headingEn",
      title: "Hero Main Heading (English)",
      type: "string",
      group: "hero",
      description: "e.g. CCTV and security equipment supplier in Riyadh",
    }),
    defineField({
      name: "headingAr",
      title: "Hero Main Heading (Arabic)",
      type: "string",
      group: "hero",
      description: "e.g. توريد وتركيب كاميرات المراقبة والأنظمة الأمنية بالرياض",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "hero",
      options: {
        source: "titleEn",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured on Home Page",
      type: "boolean",
      group: "hero",
      initialValue: false,
    }),
    defineField({
      name: "summaryEn",
      title: "Hero Summary / Lede (English)",
      type: "text",
      group: "hero",
      rows: 3,
    }),
    defineField({
      name: "summaryAr",
      title: "Hero Summary / Lede (Arabic)",
      type: "text",
      group: "hero",
      rows: 3,
    }),
    defineField({
      name: "featuresEn",
      title: "Target Sectors / Application Tags (English)",
      type: "array",
      group: "hero",
      of: [{ type: "string" }],
      description: "e.g. Community centers, Retail, Protection agency, Service centres",
    }),
    defineField({
      name: "featuresAr",
      title: "Target Sectors / Application Tags (Arabic)",
      type: "array",
      group: "hero",
      of: [{ type: "string" }],
      description: "e.g. المراكز المجتمعية، المتاجر والمستودعات، المجمعات السكنية، المنشآت الطبية",
    }),

    // =========================================================================
    // 2. SCOPE QUOTE BOX & HARDWARE (Sub-hero)
    // =========================================================================
    defineField({
      name: "subheroBadgeEn",
      title: "Quote Box Badge (English)",
      type: "string",
      group: "quote",
      initialValue: "ONLINE QUOTE",
    }),
    defineField({
      name: "subheroBadgeAr",
      title: "Quote Box Badge (Arabic)",
      type: "string",
      group: "quote",
      initialValue: "عرض سعر فوري",
    }),
    defineField({
      name: "detailEn",
      title: "Main Scope Description / Lede (English)",
      type: "text",
      group: "quote",
      rows: 4,
      description: "Large callout text in the quote box (e.g. You can buy the hardware without the labour...)",
    }),
    defineField({
      name: "detailAr",
      title: "Main Scope Description / Lede (Arabic)",
      type: "text",
      group: "quote",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Primary Scope / Hardware Photo",
      type: "image",
      group: "quote",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "alt",
      title: "Primary Image Alt Text",
      type: "string",
      group: "quote",
    }),
    defineField({
      name: "imageLabelEn",
      title: "Photo Footer Label (English, e.g. Hardware Only)",
      type: "string",
      group: "quote",
    }),
    defineField({
      name: "imageLabelAr",
      title: "Photo Footer Label (Arabic, e.g. توريد معدات فقط)",
      type: "string",
      group: "quote",
    }),
    defineField({
      name: "imageBadgeEn",
      title: "Photo Verified Badge (English, e.g. Verified on Site)",
      type: "string",
      group: "quote",
      initialValue: "Verified on Site",
    }),
    defineField({
      name: "imageBadgeAr",
      title: "Photo Verified Badge (Arabic, e.g. تم الفحص في الموقع)",
      type: "string",
      group: "quote",
      initialValue: "تم الفحص في الموقع",
    }),
    defineField({
      name: "btnQuoteTextEn",
      title: "Quote Button Text (English)",
      type: "string",
      group: "quote",
      initialValue: "Request a Quote",
    }),
    defineField({
      name: "btnQuoteTextAr",
      title: "Quote Button Text (Arabic)",
      type: "string",
      group: "quote",
      initialValue: "طلب عرض سعر",
    }),
    defineField({
      name: "btnCallTextEn",
      title: "Call Button Text (English)",
      type: "string",
      group: "quote",
      initialValue: "Call Us",
    }),
    defineField({
      name: "btnCallTextAr",
      title: "Call Button Text (Arabic)",
      type: "string",
      group: "quote",
      initialValue: "اتصل بنا",
    }),

    // =========================================================================
    // 3. EXECUTION JOURNEY (4 Steps)
    // =========================================================================
    defineField({
      name: "journeyBadgeEn",
      title: "Journey Section Badge (English)",
      type: "string",
      group: "journey",
      initialValue: "STEP-BY-STEP PROCESS",
    }),
    defineField({
      name: "journeyBadgeAr",
      title: "Journey Section Badge (Arabic)",
      type: "string",
      group: "journey",
      initialValue: "مراحل التنفيذ",
    }),
    defineField({
      name: "journeyTitleEn",
      title: "Journey Section Heading (English)",
      type: "string",
      group: "journey",
      initialValue: "How We Survey & Install This Scope",
    }),
    defineField({
      name: "journeyTitleAr",
      title: "Journey Section Heading (Arabic)",
      type: "string",
      group: "journey",
      initialValue: "كيف ننفذ هذا النطاق من المعاينة حتى التسليم؟",
    }),
    defineField({
      name: "workflowSteps",
      title: "4 Installation Steps",
      type: "array",
      group: "journey",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "num", title: "Step Number (e.g. 01)", type: "string" }),
            defineField({ name: "titleEn", title: "Step Title (English)", type: "string" }),
            defineField({ name: "titleAr", title: "Step Title (Arabic)", type: "string" }),
            defineField({ name: "descEn", title: "Step Description (English)", type: "text", rows: 2 }),
            defineField({ name: "descAr", title: "Step Description (Arabic)", type: "text", rows: 2 }),
          ],
        },
      ],
    }),

    // =========================================================================
    // 4. TECHNICAL CONTENT GRID (6 CARDS)
    // =========================================================================
    defineField({
      name: "sections",
      title: "Technical Content Cards (Detailed Scope Guides)",
      type: "array",
      group: "sections",
      description: "The 2-column editorial cards explaining scope specifications, preparation, brands, and order process.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "headingEn",
              title: "Card Heading (English)",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "headingAr",
              title: "Card Heading (Arabic)",
              type: "string",
            }),
            defineField({
              name: "bodyEn",
              title: "Card Body Paragraphs (English)",
              type: "array",
              of: [{ type: "text", rows: 3 }],
            }),
            defineField({
              name: "bodyAr",
              title: "Card Body Paragraphs (Arabic)",
              type: "array",
              of: [{ type: "text", rows: 3 }],
            }),
          ],
          preview: {
            select: {
              title: "headingEn",
              subtitle: "headingAr",
            },
          },
        },
      ],
    }),

    // =========================================================================
    // 5. RIYADH SITE STANDARD BANNER (Secondary Context Section)
    // =========================================================================
    defineField({
      name: "secondaryBadgeEn",
      title: "Standard Badge (English)",
      type: "string",
      group: "standards",
      initialValue: "Riyadh Site Standard",
    }),
    defineField({
      name: "secondaryBadgeAr",
      title: "Standard Badge (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "معايير التنفيذ في الرياض",
    }),
    defineField({
      name: "secondaryHeadingEn",
      title: "Standard Heading (English)",
      type: "string",
      group: "standards",
      initialValue: "Reliable Hardware with Proven Handover",
    }),
    defineField({
      name: "secondaryHeadingAr",
      title: "Standard Heading (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "أجهزة موثوقة مع ضمان التسليم الفعلي",
    }),
    defineField({
      name: "secondaryBodyEn",
      title: "Standard Body (English)",
      type: "text",
      group: "standards",
      rows: 4,
      initialValue:
        "We never leave unlabeled hardware or unidentified cables. Our technicians label every channel and provide master credentials directly to site management.",
    }),
    defineField({
      name: "secondaryBodyAr",
      title: "Standard Body (Arabic)",
      type: "text",
      group: "standards",
      rows: 4,
      initialValue:
        "لا نترك أجهزة غير معنونة أو أسلاكاً مجهولة المصدر. يلتزم فنيونا بوضع ملصقات تعريفية لكل نقطة وتدوين كلمات المرور لإدارة الموقع مباشرة.",
    }),
    defineField({
      name: "secondaryImage",
      title: "Banner Image",
      type: "image",
      group: "standards",
      options: { hotspot: true },
    }),
    defineField({
      name: "secondaryImageLabelEn",
      title: "Banner Image Floating Caption (English)",
      type: "string",
      group: "standards",
      initialValue: "Certified Field Installation Standards",
    }),
    defineField({
      name: "secondaryImageLabelAr",
      title: "Banner Image Floating Caption (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "معايير التركيب الميداني المعتمدة",
    }),
    defineField({
      name: "secondaryCtaTextEn",
      title: "Banner CTA Button Text (English)",
      type: "string",
      group: "standards",
      initialValue: "Request a Quote",
    }),
    defineField({
      name: "secondaryCtaTextAr",
      title: "Banner CTA Button Text (Arabic)",
      type: "string",
      group: "standards",
      initialValue: "طلب معاينة",
    }),

    // =========================================================================
    // 6. SURVEY INCLUSIONS & HANDOVER LISTS
    // =========================================================================
    defineField({
      name: "includesTitleEn",
      title: "Inclusions Card Title (English)",
      type: "string",
      group: "inclusions",
      initialValue: "What's Included",
    }),
    defineField({
      name: "includesTitleAr",
      title: "Inclusions Card Title (Arabic)",
      type: "string",
      group: "inclusions",
      initialValue: "ما تشمله كل معاينة ميدانية",
    }),
    defineField({
      name: "includesEn",
      title: "Survey Inclusions List (English)",
      type: "array",
      group: "inclusions",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "includesAr",
      title: "Survey Inclusions List (Arabic)",
      type: "array",
      group: "inclusions",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "leavesTitleEn",
      title: "Handover Card Title (English)",
      type: "string",
      group: "inclusions",
      initialValue: "What you receive at completion",
    }),
    defineField({
      name: "leavesTitleAr",
      title: "Handover Card Title (Arabic)",
      type: "string",
      group: "inclusions",
      initialValue: "ما نسلمه لإدارة المبنى",
    }),
    defineField({
      name: "leavesEn",
      title: "Handover Deliverables List (English)",
      type: "array",
      group: "inclusions",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "leavesAr",
      title: "Handover Deliverables List (Arabic)",
      type: "array",
      group: "inclusions",
      of: [{ type: "string" }],
    }),

    // =========================================================================
    // 7. FREQUENTLY ASKED QUESTIONS (FAQ)
    // =========================================================================
    defineField({
      name: "faqBadgeEn",
      title: "FAQ Badge (English)",
      type: "string",
      group: "faq",
      initialValue: "FAQ",
    }),
    defineField({
      name: "faqBadgeAr",
      title: "FAQ Badge (Arabic)",
      type: "string",
      group: "faq",
      initialValue: "الأسئلة الشائعة",
    }),
    defineField({
      name: "faqTitleEn",
      title: "FAQ Section Title (English)",
      type: "string",
      group: "faq",
      initialValue: "Questions before you book",
    }),
    defineField({
      name: "faqTitleAr",
      title: "FAQ Section Title (Arabic)",
      type: "string",
      group: "faq",
      initialValue: "أسئلة شائعة قبل المعاينة",
    }),
    defineField({
      name: "faqsList",
      title: "Service FAQs List",
      type: "array",
      group: "faq",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "questionEn",
              title: "Question (English)",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "questionAr",
              title: "Question (Arabic)",
              type: "string",
            }),
            defineField({
              name: "answerEn",
              title: "Answer (English)",
              type: "text",
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "answerAr",
              title: "Answer (Arabic)",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "questionEn",
              subtitle: "questionAr",
            },
          },
        },
      ],
    }),

    // =========================================================================
    // 8. BOOKING CTA
    // =========================================================================
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
      name: "ctaHeadingEn",
      title: "CTA Heading (English)",
      type: "string",
      group: "cta",
      initialValue: "Book a site survey across Riyadh.",
    }),
    defineField({
      name: "ctaHeadingAr",
      title: "CTA Heading (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "احجز معاينة ميدانية في الرياض.",
    }),
    defineField({
      name: "ctaBodyEn",
      title: "CTA Body (English)",
      type: "text",
      group: "cta",
      rows: 3,
    }),
    defineField({
      name: "ctaBodyAr",
      title: "CTA Body (Arabic)",
      type: "text",
      group: "cta",
      rows: 3,
    }),
    defineField({
      name: "ctaBtnSurveyEn",
      title: "CTA Survey Button (English)",
      type: "string",
      group: "cta",
      initialValue: "Request a survey",
    }),
    defineField({
      name: "ctaBtnSurveyAr",
      title: "CTA Survey Button (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "طلب معاينة",
    }),
    defineField({
      name: "ctaBtnCallEn",
      title: "CTA Call Button (English)",
      type: "string",
      group: "cta",
      initialValue: "Call our desk",
    }),
    defineField({
      name: "ctaBtnCallAr",
      title: "CTA Call Button (Arabic)",
      type: "string",
      group: "cta",
      initialValue: "اتصل بالمكتب",
    }),

    // =========================================================================
    // 9. SEO & METADATA
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
    select: {
      title: "titleEn",
      subtitle: "headingEn",
      media: "image",
    },
  },
});
