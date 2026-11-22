import { defineField, defineType } from "sanity";

export const homePageType = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  groups: [
    { name: "hero", title: "1. Hero" },
    { name: "crew", title: "2. Why Sysnet" },
    { name: "sectors", title: "3. Sectors" },
    { name: "marquee", title: "4. Brands" },
    { name: "services", title: "5. Services" },
    { name: "steps", title: "6. Process Steps" },
    { name: "projects", title: "7. Projects" },
    { name: "areas", title: "8. Areas" },
    { name: "faq", title: "9. FAQs" },
    { name: "book", title: "10. Booking CTA" },
  ],
  fields: [
    // =========================================================================
    // 1. HERO SECTION
    // =========================================================================
    defineField({
      name: "heroBadgeEn",
      title: "Hero Desk Badge (English)",
      type: "string",
      group: "hero",
      initialValue: "Riyadh Field Operations Desk · Malaz",
    }),
    defineField({
      name: "heroBadgeAr",
      title: "Hero Desk Badge (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "مكتب الرياض الميداني · حي الملز",
    }),
    defineField({
      name: "heroTitleEn",
      title: "Hero Headline (English)",
      type: "string",
      group: "hero",
      initialValue: "CCTV installation for Riyadh buildings.",
    }),
    defineField({
      name: "heroTitleAr",
      title: "Hero Headline (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "تركيب كاميرات مراقبة لمباني الرياض.",
    }),
    defineField({
      name: "heroLedeEn",
      title: "Hero Description (English)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "Sysnet Technologies surveys the site, writes the parts list, and installs CCTV, intercom, fire alarm, and network cable. The office is in Malaz.",
    }),
    defineField({
      name: "heroLedeAr",
      title: "Hero Description (Arabic)",
      type: "text",
      rows: 3,
      group: "hero",
      initialValue:
        "سيسنت تكنولوجيز تعاين الموقع وتكتب قائمة القطع وتركّب كاميرات المراقبة والإنتركم وإنذار الحريق وكيبل الشبكة. المكتب في الملز.",
    }),
    defineField({
      name: "heroImage",
      title: "Hero Main Photo",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroExploreBtnEn",
      title: "Explore Button Label (English)",
      type: "string",
      group: "hero",
      initialValue: "Explore services",
    }),
    defineField({
      name: "heroExploreBtnAr",
      title: "Explore Button Label (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "استعراض الخدمات",
    }),
    defineField({
      name: "heroContactBtnEn",
      title: "Contact Button Label (English)",
      type: "string",
      group: "hero",
      initialValue: "Contact us",
    }),
    defineField({
      name: "heroContactBtnAr",
      title: "Contact Button Label (Arabic)",
      type: "string",
      group: "hero",
      initialValue: "تواصل مع المكتب",
    }),
    defineField({
      name: "heroScopesEn",
      title: "Hero Quick Scopes (English)",
      type: "array",
      group: "hero",
      of: [{ type: "string" }],
      initialValue: ["CCTV Surveillance", "Fire Alarms", "Access Control", "Cat6 Structured Cabling"],
    }),
    defineField({
      name: "heroScopesAr",
      title: "Hero Quick Scopes (Arabic)",
      type: "array",
      group: "hero",
      of: [{ type: "string" }],
      initialValue: ["كاميرات المراقبة", "إنذار الحريق", "التحكم بالدخول", "تمديد الشبكات"],
    }),

    // =========================================================================
    // 2. CREW / WHY CHOOSE SYSNET SECTION
    // =========================================================================
    defineField({
      name: "crewBadgeEn",
      title: "Crew Badge (English)",
      type: "string",
      group: "crew",
      initialValue: "Unified Riyadh Field Crew",
    }),
    defineField({
      name: "crewBadgeAr",
      title: "Crew Badge (Arabic)",
      type: "string",
      group: "crew",
      initialValue: "فريق عمل موحد في الرياض",
    }),
    defineField({
      name: "crewTitleEn",
      title: "Crew Section Title (English)",
      type: "string",
      group: "crew",
      initialValue: "One crew for the camera, the alarm, and the cable.",
    }),
    defineField({
      name: "crewTitleAr",
      title: "Crew Section Title (Arabic)",
      type: "string",
      group: "crew",
      initialValue: "طاقم واحد للكاميرا والإنذار والكابل.",
    }),
    defineField({
      name: "crewBodyEn",
      title: "Crew Section Body (English)",
      type: "text",
      rows: 4,
      group: "crew",
      initialValue:
        "Facility managers and villa owners in Riyadh often end up with three contractors who will not share a cabinet. Sysnet puts CCTV, intrusion, fire alarm, access control, and structured cabling on one drawing and one visit plan. Sysnet Technologies. Desk in Malaz, Riyadh, Saudi Arabia.",
    }),
    defineField({
      name: "crewBodyAr",
      title: "Crew Section Body (Arabic)",
      type: "text",
      rows: 4,
      group: "crew",
      initialValue:
        "كثير من مديري المرافق وملّاك الفلل في الرياض ينتهون بثلاثة مقاولين لا يتشاركون خزانة واحدة. سيسنت تجمع كاميرات المراقبة وإنذار الاقتحام وإنذار الحريق والتحكم في الدخول والكيابل المنظمة في مخطط واحد وخطة زيارة واحدة. سيسنت تكنولوجيز. المكتب في الملز، الرياض، المملكة العربية السعودية.",
    }),
    defineField({
      name: "crewPointsEn",
      title: "Crew Feature Points (English)",
      type: "array",
      group: "crew",
      of: [{ type: "string" }],
      initialValue: [
        "Floor plan marked before hardware is ordered",
        "Recorders, readers, and patch panels in one cabinet",
        "Handover with labels, passwords, and a test sheet",
        "Camera and alarm alerts go to the building admin",
      ],
    }),
    defineField({
      name: "crewPointsAr",
      title: "Crew Feature Points (Arabic)",
      type: "array",
      group: "crew",
      of: [{ type: "string" }],
      initialValue: [
        "يُعلَّم مخطط الدور قبل طلب الأجهزة",
        "أجهزة التسجيل والقارئات ولوحات التوصيل في خزانة واحدة",
        "تسليم مع ملصقات وكلمات المرور وورقة اختبار",
        "تنبيهات الكاميرا والإنذار تصل إلى مدير المبنى",
      ],
    }),
    defineField({
      name: "crewBtnAllServicesEn",
      title: "All Services Button Label (English)",
      type: "string",
      group: "crew",
      initialValue: "All 15 service lines",
    }),
    defineField({
      name: "crewBtnAllServicesAr",
      title: "All Services Button Label (Arabic)",
      type: "string",
      group: "crew",
      initialValue: "جميع خطوط الخدمة الـ 15",
    }),
    defineField({
      name: "crewBtnSurveyEn",
      title: "Request Survey Button Label (English)",
      type: "string",
      group: "crew",
      initialValue: "Request a survey",
    }),
    defineField({
      name: "crewBtnSurveyAr",
      title: "Request Survey Button Label (Arabic)",
      type: "string",
      group: "crew",
      initialValue: "طلب معاينة",
    }),
    defineField({
      name: "crewImage",
      title: "Crew Section Photo",
      type: "image",
      group: "crew",
      options: { hotspot: true },
    }),
    defineField({
      name: "crewCardBadgeEn",
      title: "Crew Photo Card Badge (English)",
      type: "string",
      group: "crew",
      initialValue: "Consolidated Accountability",
    }),
    defineField({
      name: "crewCardBadgeAr",
      title: "Crew Photo Card Badge (Arabic)",
      type: "string",
      group: "crew",
      initialValue: "مسؤولية فنية كاملة",
    }),
    defineField({
      name: "crewCardTextEn",
      title: "Crew Photo Card Text (English)",
      type: "text",
      rows: 2,
      group: "crew",
      initialValue:
        "Marked floor plans, single cabinet for CCTV, alarm & network, with verified handover sheets.",
    }),
    defineField({
      name: "crewCardTextAr",
      title: "Crew Photo Card Text (Arabic)",
      type: "text",
      rows: 2,
      group: "crew",
      initialValue:
        "مخطط معتمد، وكابينة واحدة تجمع الكاميرات والإنذار والشبكة، وتسليم رسمي بكلمات المرور.",
    }),

    // =========================================================================
    // 3. SECTORS / INDUSTRIES (5 CARDS)
    // =========================================================================
    defineField({
      name: "sectorsBadgeEn",
      title: "Sectors Badge (English)",
      type: "string",
      group: "sectors",
      initialValue: "Riyadh Facility Sectors",
    }),
    defineField({
      name: "sectorsBadgeAr",
      title: "Sectors Badge (Arabic)",
      type: "string",
      group: "sectors",
      initialValue: "قطاعات الأعمال في الرياض",
    }),
    defineField({
      name: "sectorsTitleEn",
      title: "Sectors Section Title (English)",
      type: "string",
      group: "sectors",
      initialValue: "Booked across offices, yards, and villas.",
    }),
    defineField({
      name: "sectorsTitleAr",
      title: "Sectors Section Title (Arabic)",
      type: "string",
      group: "sectors",
      initialValue: "أعمال في المكاتب والساحات والفلل.",
    }),
    defineField({
      name: "sectorsLedeEn",
      title: "Sectors Subtitle (English)",
      type: "text",
      rows: 2,
      group: "sectors",
      initialValue:
        "Tailored camera angles, retention sizing, and cabling designed for each facility type.",
    }),
    defineField({
      name: "sectorsLedeAr",
      title: "Sectors Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "sectors",
      initialValue: "تجهيز متكامل للشركات والمستودعات والفلل والمنشآت الصحية.",
    }),
    defineField({
      name: "industriesList",
      title: "Industry Cards (5 Sectors)",
      type: "array",
      group: "sectors",
      of: [
        {
          type: "object",
          fields: [
            { name: "index", title: "Index (e.g. 01)", type: "string" },
            { name: "titleEn", title: "Title (English)", type: "string" },
            { name: "titleAr", title: "Title (Arabic)", type: "string" },
            { name: "textEn", title: "Text (English)", type: "text", rows: 2 },
            { name: "textAr", title: "Text (Arabic)", type: "text", rows: 2 },
          ],
        },
      ],
      initialValue: [
        {
          index: "01",
          titleEn: "Commercial offices",
          titleAr: "المكاتب التجارية",
          textEn: "Olaya and King Fahd Road fit-outs: cameras at reception, data to desks.",
          textAr: "تشطيبات العليا وطريق الملك فهد: كاميرات في الاستقبال، وبيانات إلى المكاتب.",
        },
        {
          index: "02",
          titleEn: "Warehouses & logistics",
          titleAr: "المستودعات والخدمات اللوجستية",
          textEn: "Sulay and south Riyadh industrial zones: high-bay camera brackets, dock coverage.",
          textAr: "السلي ومناطق جنوب الرياض الصناعية: قواعد كاميرات عالية، وتغطية أرصفة التحميل.",
        },
        {
          index: "03",
          titleEn: "Clinics & healthcare",
          titleAr: "العيادات والمنشآت الصحية",
          textEn: "Reception privacy, medicine storage monitoring, and waiting area coverage.",
          textAr: "خصوصية الاستقبال، ومراقبة غرف الأدوية، وتغطية صالات الانتظار.",
        },
        {
          index: "04",
          titleEn: "Private villas",
          titleAr: "الفلل الخاصة",
          textEn: "Perimeter cameras, video intercom at gate, and family privacy zones.",
          textAr: "كاميرات محيطية، وإنتركم مرئي عند البوابة، ومناطق لخصوصية العائلة.",
        },
        {
          index: "05",
          titleEn: "Hospitality & dining",
          titleAr: "الضيافة والمطاعم",
          textEn: "POS camera angles, kitchen coverage, guest Wi-Fi, and background audio.",
          textAr: "زوايا كاميرات نقاط البيع، وتغطية المطابخ، وشبكة الضيوف، والصوتيات.",
        },
      ],
    }),

    // =========================================================================
    // 4. BRAND MARQUEE
    // =========================================================================
    defineField({
      name: "brandLabelEn",
      title: "Brand Marquee Label (English)",
      type: "string",
      group: "marquee",
      initialValue: "Camera & Network Brands",
    }),
    defineField({
      name: "brandLabelAr",
      title: "Brand Marquee Label (Arabic)",
      type: "string",
      group: "marquee",
      initialValue: "العلامات المعتمدة للكاميرات والشبكات",
    }),

    // =========================================================================
    // 5. SCOPED ENGINEERING (SERVICES)
    // =========================================================================
    defineField({
      name: "scopedBadgeEn",
      title: "Scoped Engineering Badge (English)",
      type: "string",
      group: "services",
      initialValue: "Scoped Engineering",
    }),
    defineField({
      name: "scopedBadgeAr",
      title: "Scoped Engineering Badge (Arabic)",
      type: "string",
      group: "services",
      initialValue: "النطاقات والأسعار",
    }),
    defineField({
      name: "scopedTitleEn",
      title: "Scoped Engineering Title (English)",
      type: "string",
      group: "services",
      initialValue: "Predictable scoping for commercial and residential sites.",
    }),
    defineField({
      name: "scopedTitleAr",
      title: "Scoped Engineering Title (Arabic)",
      type: "string",
      group: "services",
      initialValue: "نطاقات هندسية واضحة للمنشآت التجارية والسكنية.",
    }),
    defineField({
      name: "scopedLedeEn",
      title: "Scoped Engineering Description (English)",
      type: "text",
      rows: 2,
      group: "services",
      initialValue:
        "Clear parts list, documented cable runs, and Riyadh municipality standards on every low-current installation.",
    }),
    defineField({
      name: "scopedLedeAr",
      title: "Scoped Engineering Description (Arabic)",
      type: "text",
      rows: 2,
      group: "services",
      initialValue:
        "قائمة قطع واضحة، ومسارات كيابل موثقة، وتوافق تام مع معايير بلدية الرياض في كل تمديد.",
    }),
    defineField({
      name: "scopedSeeScopeBtnEn",
      title: "See Scope Button Label (English)",
      type: "string",
      group: "services",
      initialValue: "See this scope",
    }),
    defineField({
      name: "scopedSeeScopeBtnAr",
      title: "See Scope Button Label (Arabic)",
      type: "string",
      group: "services",
      initialValue: "استعراض النطاق",
    }),
    defineField({
      name: "complementaryBadgeEn",
      title: "Complementary Trades Badge (English)",
      type: "string",
      group: "services",
      initialValue: "Complementary Trades",
    }),
    defineField({
      name: "complementaryBadgeAr",
      title: "Complementary Trades Badge (Arabic)",
      type: "string",
      group: "services",
      initialValue: "النطاقات التكميلية",
    }),
    defineField({
      name: "complementaryTitleEn",
      title: "Complementary Trades Title (English)",
      type: "string",
      group: "services",
      initialValue: "All Other Scopes Quoted & Installed Together",
    }),
    defineField({
      name: "complementaryTitleAr",
      title: "Complementary Trades Title (Arabic)",
      type: "string",
      group: "services",
      initialValue: "خطوط الخدمة الأخرى المنفذة في نفس الزيارة",
    }),
    defineField({
      name: "complementaryBtnEn",
      title: "Complementary All Lines Button (English)",
      type: "string",
      group: "services",
      initialValue: "All 15 service lines",
    }),
    defineField({
      name: "complementaryBtnAr",
      title: "Complementary All Lines Button (Arabic)",
      type: "string",
      group: "services",
      initialValue: "جميع خطوط الخدمة الـ 15",
    }),
    defineField({
      name: "complementaryContactBtnEn",
      title: "Complementary Contact Button (English)",
      type: "string",
      group: "services",
      initialValue: "Talk to engineers",
    }),
    defineField({
      name: "complementaryContactBtnAr",
      title: "Complementary Contact Button (Arabic)",
      type: "string",
      group: "services",
      initialValue: "تحدث مع المهندسين",
    }),

    // =========================================================================
    // 6. 5-STEP STRUCTURED METHODOLOGY
    // =========================================================================
    defineField({
      name: "stepsBadgeEn",
      title: "Steps Badge (English)",
      type: "string",
      group: "steps",
      initialValue: "Structured Methodology",
    }),
    defineField({
      name: "stepsBadgeAr",
      title: "Steps Badge (Arabic)",
      type: "string",
      group: "steps",
      initialValue: "مسار العمل الميداني",
    }),
    defineField({
      name: "stepsTitleEn",
      title: "Steps Section Title (English)",
      type: "string",
      group: "steps",
      initialValue: "Five steps from the phone call to the test report.",
    }),
    defineField({
      name: "stepsTitleAr",
      title: "Steps Section Title (Arabic)",
      type: "string",
      group: "steps",
      initialValue: "خمس خطوات من الاتصال إلى تقرير الفحص.",
    }),
    defineField({
      name: "stepsLedeEn",
      title: "Steps Subtitle (English)",
      type: "text",
      rows: 2,
      group: "steps",
      initialValue: "From the first phone call to the handover of passwords and test sheets.",
    }),
    defineField({
      name: "stepsLedeAr",
      title: "Steps Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "steps",
      initialValue: "من المكالمة الأولى إلى تسليم المخطط النهائي وكلمات المرور لمدير المبنى.",
    }),
    defineField({
      name: "stepsList",
      title: "5 Process Steps",
      type: "array",
      group: "steps",
      of: [
        {
          type: "object",
          fields: [
            { name: "index", title: "Step Number (e.g. 01)", type: "string" },
            { name: "titleEn", title: "Title (English)", type: "string" },
            { name: "titleAr", title: "Title (Arabic)", type: "string" },
            { name: "textEn", title: "Description (English)", type: "text", rows: 2 },
            { name: "textAr", title: "Description (Arabic)", type: "text", rows: 2 },
          ],
        },
      ],
      initialValue: [
        {
          index: "01",
          titleEn: "Phone call",
          titleAr: "الاتصال الهاتفي",
          textEn: "Same-day booking from our Malaz desk. Scope, floors, and address logged.",
          textAr: "حجز في نفس اليوم من مكتبنا بالملز. تسجيل النطاق والأدوار والعنوان.",
        },
        {
          index: "02",
          titleEn: "Site survey",
          titleAr: "المعاينة الميدانية",
          textEn: "Floor plan walk in Riyadh. Camera angles, cable routes, and rack space marked.",
          textAr: "جولة على مخطط الدور بالرياض. تحديد زوايا الكاميرات ومسارات الكيابل وخزانة الأجهزة.",
        },
        {
          index: "03",
          titleEn: "Bill of materials",
          titleAr: "جدول الكميات",
          textEn: "Fixed parts list, cable lengths, and recorder sizing delivered within 24 hours.",
          textAr: "قائمة قطع محددة وأطوال الكيابل وحجم جهاز التسجيل خلال 24 ساعة.",
        },
        {
          index: "04",
          titleEn: "Installation",
          titleAr: "التركيب والتمديد",
          textEn: "Conduit, terminations, bracket mounting, and rack patch panels dressed neat.",
          textAr: "مواسير التمديد، والتوصيل، وتركيب القواعد، وترتيب لوحات الخزانة بعناية.",
        },
        {
          index: "05",
          titleEn: "Testing & handover",
          titleAr: "الفحص والتسليم",
          textEn: "Cable tester results, camera alignment check, and admin passwords handed over.",
          textAr: "نتائج فاحص الكيابل، وضبط زوايا الكاميرات، وتسليم كلمات مرور الإدارة.",
        },
      ],
    }),
    defineField({
      name: "trustIndicator1En",
      title: "Trust Indicator 1 (English)",
      type: "string",
      group: "steps",
      initialValue: "Site survey dispatched within 24 hours",
    }),
    defineField({
      name: "trustIndicator1Ar",
      title: "Trust Indicator 1 (Arabic)",
      type: "string",
      group: "steps",
      initialValue: "معاينة ميدانية خلال 24 ساعة",
    }),
    defineField({
      name: "trustIndicator2En",
      title: "Trust Indicator 2 (English)",
      type: "string",
      group: "steps",
      initialValue: "Certified cable schedule & parts list",
    }),
    defineField({
      name: "trustIndicator2Ar",
      title: "Trust Indicator 2 (Arabic)",
      type: "string",
      group: "steps",
      initialValue: "مخطط كابلات وجدول كميات معتمد",
    }),
    defineField({
      name: "trustIndicator3En",
      title: "Trust Indicator 3 (English)",
      type: "string",
      group: "steps",
      initialValue: "Tested handover with passwords",
    }),
    defineField({
      name: "trustIndicator3Ar",
      title: "Trust Indicator 3 (Arabic)",
      type: "string",
      group: "steps",
      initialValue: "تسليم معتمد مع كلمات المرور",
    }),

    // =========================================================================
    // 7. PROJECTS / PORTFOLIO HEADER
    // =========================================================================
    defineField({
      name: "projectsBadgeEn",
      title: "Projects Badge (English)",
      type: "string",
      group: "projects",
      initialValue: "Verified Projects",
    }),
    defineField({
      name: "projectsBadgeAr",
      title: "Projects Badge (Arabic)",
      type: "string",
      group: "projects",
      initialValue: "مشاريع نموذجية",
    }),
    defineField({
      name: "projectsTitleEn",
      title: "Projects Section Title (English)",
      type: "string",
      group: "projects",
      initialValue: "Real sites surveyed, installed, and handed over.",
    }),
    defineField({
      name: "projectsTitleAr",
      title: "Projects Section Title (Arabic)",
      type: "string",
      group: "projects",
      initialValue: "مشاريع حقيقية تمت معاينتها وتركيبها وتسليمها بالرياض.",
    }),
    defineField({
      name: "projectsLedeEn",
      title: "Projects Section Subtitle (English)",
      type: "text",
      rows: 2,
      group: "projects",
      initialValue: "From Olaya corporate offices to Sulay warehouses and Malaz villas.",
    }),
    defineField({
      name: "projectsLedeAr",
      title: "Projects Section Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "projects",
      initialValue: "من مكاتب الشركات في العليا إلى مستودعات السلي وفلل الملز.",
    }),

    // =========================================================================
    // 8. COVERAGE AREAS HEADER
    // =========================================================================
    defineField({
      name: "areasBadgeEn",
      title: "Areas Badge (English)",
      type: "string",
      group: "areas",
      initialValue: "Field Coverage Radius",
    }),
    defineField({
      name: "areasBadgeAr",
      title: "Areas Badge (Arabic)",
      type: "string",
      group: "areas",
      initialValue: "نطاق التغطية الميدانية",
    }),
    defineField({
      name: "areasTitleEn",
      title: "Areas Section Title (English)",
      type: "string",
      group: "areas",
      initialValue: "Direct Riyadh dispatch with nationwide capability.",
    }),
    defineField({
      name: "areasTitleAr",
      title: "Areas Section Title (Arabic)",
      type: "string",
      group: "areas",
      initialValue: "فرق ميدانية مباشرة في الرياض وتغطية لكافة مناطق المملكة.",
    }),
    defineField({
      name: "areasBodyEn",
      title: "Areas Section Subtitle (English)",
      type: "text",
      rows: 2,
      group: "areas",
      initialValue:
        "Headquartered in Malaz, Riyadh. Fast field mobilization across the capital, Eastern Province, and major commercial hubs.",
    }),
    defineField({
      name: "areasBodyAr",
      title: "Areas Section Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "areas",
      initialValue:
        "المقر الرئيسي في الملز، الرياض. تحرك ميداني سريع في العاصمة والمنطقة الشرقية والمراكز التجارية الكبرى.",
    }),

    // =========================================================================
    // 9. FAQ SECTION (WITH FAQ CARDS)
    // =========================================================================
    defineField({
      name: "faqBadgeEn",
      title: "FAQ Badge (English)",
      type: "string",
      group: "faq",
      initialValue: "Common Questions",
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
      title: "FAQ Title (English)",
      type: "string",
      group: "faq",
      initialValue: "Questions before you book",
    }),
    defineField({
      name: "faqTitleAr",
      title: "FAQ Title (Arabic)",
      type: "string",
      group: "faq",
      initialValue: "أسئلة شائعة قبل الحجز",
    }),
    defineField({
      name: "faqLedeEn",
      title: "FAQ Subtitle (English)",
      type: "text",
      rows: 2,
      group: "faq",
      initialValue:
        "Clear answers regarding site surveys, maintenance takeovers, equipment purchasing, and desk hours.",
    }),
    defineField({
      name: "faqLedeAr",
      title: "FAQ Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "faq",
      initialValue:
        "إجابات واضحة ومباشرة حول كيفية تنفيذ المعاينة الميدانية وعقود الصيانة ونطاق التغطية.",
    }),
    defineField({
      name: "faqCardTitleEn",
      title: "FAQ Floating Card Title (English)",
      type: "string",
      group: "faq",
      initialValue: "Have an Urgent Scope Question?",
    }),
    defineField({
      name: "faqCardTitleAr",
      title: "FAQ Floating Card Title (Arabic)",
      type: "string",
      group: "faq",
      initialValue: "هل لديك استفسار محدد لمبناك؟",
    }),
    defineField({
      name: "faqCardLedeEn",
      title: "FAQ Floating Card Subtitle (English)",
      type: "text",
      rows: 2,
      group: "faq",
      initialValue: "Speak directly with the Malaz engineering desk for immediate guidance.",
    }),
    defineField({
      name: "faqCardLedeAr",
      title: "FAQ Floating Card Subtitle (Arabic)",
      type: "text",
      rows: 2,
      group: "faq",
      initialValue: "تواصل مباشرة مع المهندسين في مكتب الملز للحصول على إفادة هندسية فورية.",
    }),
    defineField({
      name: "faqsList",
      title: "Frequently Asked Questions",
      type: "array",
      group: "faq",
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
      initialValue: [
        {
          questionEn: "How fast can you do a site survey in Riyadh?",
          questionAr: "ما سرعة إجراء المعاينة الميدانية في الرياض؟",
          answerEn:
            "Within 24 to 48 hours anywhere in Riyadh. We review building layouts, identify camera blind spots, and map network cable runs.",
          answerAr:
            "خلال 24 إلى 48 ساعة في أي مكان داخل الرياض. نعاين مخططات المبنى ونحدد النقاط العمياء ومسارات تمديد الكيابل.",
        },
        {
          questionEn: "Do you supply the equipment or install only?",
          questionAr: "هل توفرون الأجهزة أم التركيب فقط؟",
          answerEn:
            "Both. We supply certified Hikvision, Dahua, Cisco, Schneider, and Honeywell hardware with warranty, or install your supplied equipment.",
          answerAr:
            "كلاهما. نوفر أجهزة معتمدة مع الضمان من هيكفيجن، داهوا، سيسكو، شنايدر، وهانيويل، أو نقوم بتركيب أجهزتكم الموردة.",
        },
        {
          questionEn: "Are your CCTV installations approved by authorities?",
          questionAr: "هل تركيبات كاميرات المراقبة معتمدة من الجهات المختصة؟",
          answerEn:
            "Yes, our camera specifications, retention capacities, and placement angles meet Riyadh municipality and civil defense standards.",
          answerAr:
            "نعم، مواصفات الكاميرات وسعات التخزين وزوايا التغطية متوافقة تماماً مع معايير بلدية الرياض والدفاع المدني.",
        },
        {
          questionEn: "Do you provide warranties and maintenance contracts?",
          questionAr: "هل تقدمون ضمانات وعقود صيانة؟",
          answerEn:
            "Every installation comes with a 1-year workmanship warranty and standard 2-year manufacturer warranties. Annual maintenance contracts (AMC) are also available.",
          answerAr:
            "جميع التركيبات تشمل ضمان سنة كاملة على التنفيذ وضمان الوكيل لسنتين للأجهزة، مع إمكانية توقيع عقود صيانة سنوية.",
        },
      ],
    }),

    // =========================================================================
    // 10. BOOK SITE SURVEY BANNER
    // =========================================================================
    defineField({
      name: "bookBadgeEn",
      title: "Survey Banner Badge (English)",
      type: "string",
      group: "book",
      initialValue: "Riyadh Operations Hub",
    }),
    defineField({
      name: "bookBadgeAr",
      title: "Survey Banner Badge (Arabic)",
      type: "string",
      group: "book",
      initialValue: "مكتب الملز بالرياض",
    }),
    defineField({
      name: "bookTitleEn",
      title: "Survey Banner Title (English)",
      type: "string",
      group: "book",
      initialValue: "Book a free site survey.",
    }),
    defineField({
      name: "bookTitleAr",
      title: "Survey Banner Title (Arabic)",
      type: "string",
      group: "book",
      initialValue: "احجز معاينة مجانية للموقع.",
    }),
    defineField({
      name: "bookBodyEn",
      title: "Survey Banner Body (English)",
      type: "text",
      rows: 2,
      group: "book",
      initialValue:
        "We survey your site in Riyadh, mark cable paths, and give you a fixed quote.",
    }),
    defineField({
      name: "bookBodyAr",
      title: "Survey Banner Body (Arabic)",
      type: "text",
      rows: 2,
      group: "book",
      initialValue: "نعاين موقعك في الرياض، ونحدد مسارات الكيابل، ونعطيك عرض سعر ثابت.",
    }),
    defineField({
      name: "bookBtnSurveyEn",
      title: "Survey Button Label (English)",
      type: "string",
      group: "book",
      initialValue: "Request a survey",
    }),
    defineField({
      name: "bookBtnSurveyAr",
      title: "Survey Button Label (Arabic)",
      type: "string",
      group: "book",
      initialValue: "طلب معاينة",
    }),
    defineField({
      name: "bookBtnCallEn",
      title: "Call Button Label (English)",
      type: "string",
      group: "book",
      initialValue: "Call us",
    }),
    defineField({
      name: "bookBtnCallAr",
      title: "Call Button Label (Arabic)",
      type: "string",
      group: "book",
      initialValue: "اتصل بالمكتب",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page Settings",
        subtitle: "Every Section, Card, Step, FAQ & Button Editable",
      };
    },
  },
});
