import type { Locale } from "@/lib/locale";
import type { Guide } from "@/lib/guides";

type Extra = Pick<Guide, "sections">;

export const guideExtras: Record<Locale, Record<string, Extra>> = {
  en: {
    cctv: {
      sections: [
        {
          heading: "Where we survey cameras, and how to book",
          body: [
            "In Riyadh we cover compounds in Al Nakheel, offices on King Fahd Road, and yards in Al Sulay. Dammam and the Eastern Province are surveyed by the same team. Sites elsewhere in Saudi Arabia are arranged when you ask.",
            "You leave the visit with a clear plan for the views that matter on your site. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    intercom: {
      sections: [
        {
          heading: "Where we survey door stations, and how to book",
          body: [
            "Villa gates in Malaz and north Riyadh, and lobby stations for offices in Olaya, are the visits we make most often. Dammam and the Eastern Province are covered by the same team. Anywhere else in Saudi Arabia, tell us the city and we will arrange it.",
            "A short visit shows you the cable route, the monitor position, and the lock. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    cabling: {
      sections: [
        {
          heading: "Where we survey cabling, and how to book",
          body: [
            "Most cabling surveys in Riyadh are open floors in Olaya and along King Fahd Road, plus smaller offices in Al Nakheel that are adding a cabinet. Dammam and the Eastern Province are on the same list. Other Saudi cities are scheduled on request.",
            "Send the seat count before the ceiling closes and the routes stay simple. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    computers: {
      sections: [
        {
          heading: "Where we fit out desks, and how to book",
          body: [
            "Desk hardware follows office fit-outs in Riyadh, in Olaya, on King Fahd Road, and in Malaz, and the same offer stands for offices in Dammam and the Eastern Province. For a site elsewhere in Saudi Arabia, ask and we will set the visit.",
            "Tell us how many seats should be ready to work. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    access: {
      sections: [
        {
          heading: "Where we survey readers, and how to book",
          body: [
            "Readers in Riyadh go onto staff doors in Olaya offices, clinic stores around Salah Al-Din, and dock offices in Al Sulay. Dammam and the Eastern Province are surveyed the same way. Other cities in Saudi Arabia are arranged on request.",
            "Walk us through who must enter after hours and the quotation will match those doors. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    "fire-alarm": {
      sections: [
        {
          heading: "Where we survey alarms, and how to book",
          body: [
            "Fire and intrusion surveys in Riyadh cover clinics off Salah Al-Din, schools and offices in Al Nakheel, and buildings in Olaya. Dammam and the Eastern Province are included. The rest of Saudi Arabia is arranged when you need a crew there.",
            "If a drawing exists, send it with the district and we will mark what is still missing. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    "fire-safety": {
      sections: [
        {
          heading: "Where we place safety equipment, and how to book",
          body: [
            "In Riyadh, extinguishers, hose reels, and emergency lights are placed for offices in Malaz, warehouses in Al Sulay, and buildings along King Fahd Road. Dammam and the Eastern Province are covered too. Other Saudi cities are booked on request.",
            "Photos of what is already on the walls make the first visit faster. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    "home-office": {
      sections: [
        {
          heading: "Where we survey homes and small offices, and how to book",
          body: [
            "Combined surveys are most often Malaz villas, small offices in Olaya, and compound gates in north Riyadh. Dammam and the Eastern Province follow the same drawing method. Sites in other Saudi cities are arranged on request.",
            "Say which pieces you already have and the quotation covers only the rest. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    "smart-office": {
      sections: [
        {
          heading: "Where we survey smart offices, and how to book",
          body: [
            "Meeting rooms and desk rows in Riyadh, in Olaya, on King Fahd Road, and in Al Nakheel, are the usual brief. Dammam and the Eastern Province are surveyed by the same team. Elsewhere in Saudi Arabia, we arrange the visit when you ask.",
            "Count the rooms and the seats, and we will price the cabinet around them. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    products: {
      sections: [
        {
          heading: "Where equipment is supplied, and how to order",
          body: [
            "Parts are quoted for sites in Riyadh, including Olaya offices and Al Sulay warehouses, and for Dammam and the Eastern Province. Supply to other cities in Saudi Arabia is agreed on the quotation.",
            "Send any list you already have and you will get model lines you can compare. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
    maintenance: {
      sections: [
        {
          heading: "Where we attend repairs, and how to book",
          body: [
            "Repair visits in Riyadh cover offices, villas, clinics, and yards in Malaz, Olaya, and Al Sulay, plus Dammam and the Eastern Province. For a site elsewhere in Saudi Arabia, say so when you book and we will confirm the visit.",
            "Describe what stopped, and have the passwords ready if you have them. Call or WhatsApp +966 53 298 0149, or email sales@sysnet-ksa.com, Saturday–Thursday, 9:00–18:00.",
          ],
        },
      ],
    },
  },
  ar: {
    cctv: {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز معاينة الكاميرات",
          body: [
            "في الرياض نغطي المجمعات السكنية في النخيل، ومكاتب طريق الملك فهد، وساحات السلي. الدمام والمنطقة الشرقية ضمن النطاق نفسه. وفي بقية مدن السعودية نرتب الزيارة عندما تطلبها.",
            "تخرج من المعاينة بخطة واضحة للمشاهد التي تهم موقعك. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    intercom: {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز معاينة الإنتركم",
          body: [
            "بوابات الفلل في الملز وشمال الرياض، ومحطات البهو لمكاتب العليا، هي الزيارات الأكثر. الدمام والمنطقة الشرقية يغطيهما الفريق نفسه. ولأي مدينة أخرى في السعودية اذكر اسمها لنرتب الحضور.",
            "زيارة قصيرة توضح مسار الكابل وموضع الشاشة والقفل. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    cabling: {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز معاينة التمديد",
          body: [
            "أكثر معاينات التمديد تكون لأدوار ما زالت مفتوحة في العليا وعلى طريق الملك فهد، ولمكاتب أصغر في النخيل تضيف خزانة. الدمام والمنطقة الشرقية على القائمة نفسها. ومدن السعودية الأخرى تُجدول عند الطلب.",
            "أرسل عدد المقاعد قبل إغلاق السقف ليبقى المسار واضحًا. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    computers: {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز تجهيز المكاتب",
          body: [
            "أجهزة المكاتب تتبع تجهيز المكاتب في العليا وطريق الملك فهد والملز، والعرض نفسه لمكاتب الدمام والمنطقة الشرقية. وإذا كان الموقع في مدينة أخرى بالسعودية فاطلب الزيارة ونحدد موعدها.",
            "أخبرنا بعدد المقاعد التي يجب أن تكون جاهزة للعمل. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    access: {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز معاينة أجهزة الدخول",
          body: [
            "القارئات تُركَّب على أبواب الموظفين في مكاتب العليا، ومخازن العيادات قرب صلاح الدين، ومكاتب الأرصفة في السلي. الدمام والمنطقة الشرقية بالمعاينة نفسها. ومدن السعودية الأخرى تُرتَّب عند الطلب.",
            "اشرح من يحتاج الدخول بعد الدوام ليطابق عرض السعر هذه الأبواب. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    "fire-alarm": {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز معاينة الإنذار",
          body: [
            "معاينات إنذار الحريق والسرقة تشمل عيادات صلاح الدين، والمدارس والمكاتب في النخيل، ومباني العليا. الدمام والمنطقة الشرقية داخل النطاق. وبقية السعودية نرتب لها فريقًا عندما تحتاج ذلك.",
            "إن وُجد مخطط فأرسله مع الحي لنحدد ما زال ناقصًا. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    "fire-safety": {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز توريد معدات السلامة",
          body: [
            "الطفايات وبكرات الخراطيم وإضاءة الطوارئ توضع لمكاتب الملز ومستودعات السلي ومباني طريق الملك فهد. الدمام والمنطقة الشرقية مشمولتان أيضًا. ومدن السعودية الأخرى تُحجز عند الطلب.",
            "صور ما هو موجود على الجدران تجعل الزيارة الأولى أسرع. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    "home-office": {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز مشروع المنزل أو المكتب",
          body: [
            "المعاينة المجمّعة تكون غالبًا لفلل الملز ومكاتب العليا الصغيرة وبوابات المجمعات في شمال الرياض. الدمام والمنطقة الشرقية بالطريقة نفسها. ومواقع المدن السعودية الأخرى تُرتَّب عند الطلب.",
            "اذكر ما هو موجود عندك ليغطي عرض السعر الباقي فقط. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    "smart-office": {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز معاينة المكتب الذكي",
          body: [
            "غرف الاجتماع وصفوف المكاتب في العليا وطريق الملك فهد والنخيل هي الطلب المعتاد. الدمام والمنطقة الشرقية يعاينهما الفريق نفسه. وفي بقية السعودية نرتب الزيارة عندما تطلبها.",
            "عدّ الغرف والمقاعد لنسعّر الخزانة على أساسها. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    products: {
      sections: [
        {
          heading: "مناطق التوريد وكيف تطلب الأجهزة",
          body: [
            "القطع تُسعَّر لمواقع الرياض، ومنها مكاتب العليا ومستودعات السلي، وللدمام والمنطقة الشرقية. والتوريد إلى مدن السعودية الأخرى يُتفق عليه في عرض السعر.",
            "أرسل أي قائمة لديك وتصلك بنود الموديلات لتقارنها. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
    maintenance: {
      sections: [
        {
          heading: "مناطق الخدمة وكيف تحجز زيارة الإصلاح",
          body: [
            "زيارات الإصلاح تشمل المكاتب والفلل والعيادات والساحات في الملز والعليا والسلي، إضافة إلى الدمام والمنطقة الشرقية. وإذا كان الموقع في مدينة أخرى بالسعودية فاذكر ذلك عند الحجز لنؤكد الزيارة.",
            "صف ما الذي توقف، وجهّز كلمات المرور إن كانت لديك. اتصل أو راسلنا على واتساب \u200e+966 53 298 0149، أو عبر البريد sales@sysnet-ksa.com، من السبت إلى الخميس، 9:00–18:00.",
          ],
        },
      ],
    },
  },
};
