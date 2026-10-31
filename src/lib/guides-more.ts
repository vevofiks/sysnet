import type { Locale } from "@/lib/locale";
import type { Guide } from "@/lib/guides";

type Extra = Pick<Guide, "sections">;

const desk =
  "The desk that books the visit is in Malaz, Riyadh, Saudi Arabia. The phone number is +966 53 298 0149 and the mail is sales@sysnet-ksa.com. Hours are Saturday to Thursday, 9:00 to 18:00. Riyadh and Dammam are the cities we survey. Say which one, and the district, on the first call.";

const arDesk =
  "المكتب الذي يحجز الزيارة في الملز بالرياض في السعودية. الهاتف ‎+966 53 298 0149 والبريد sales@sysnet-ksa.com. الساعات من السبت إلى الخميس، 9:00 إلى 18:00. الرياض والدمام هما المدينتان اللتان نعاينهما. اذكر المدينة والحي في أول مكالمة.";

export const guideExtras: Record<Locale, Record<string, Extra>> = {
  en: {
    cctv: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Riyadh is where the crew is based: Malaz villas, Olaya and King Fahd Road offices, north Riyadh compounds, and stores in Al Sulay. ${desk}`,
            "Before the visit, send the district, the building type, and whether you already have a recorder. A floor sketch is enough. We will not ask you to choose a megapixel number. We will ask which doors and yards you need to see, and for how many days a dispute or an incident has to remain on disk.",
          ],
        },
      ],
    },
    intercom: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Most video intercoms we fit are villa gates in Malaz and north Riyadh, or lobby stations on office floors in Olaya. ${desk}`,
            "Photograph the gate and the place you want the monitor. Tell us if a lock already exists and whether two households share the entrance. We measure the cable run ourselves. A station that only calls a mobile number is not the scope we are pricing on this page.",
          ],
        },
      ],
    },
    cabling: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Structured cabling is booked most often while an Olaya or King Fahd Road floor is still open, and for smaller offices that are adding a cabinet in Malaz. ${desk}`,
            "Send the seat count, the number of floors, and whether a riser already exists. If cameras or door readers are part of the same fit-out, say so, because those cables should land in the panel we are labeling. We will not pull cable into a ceiling that is about to be closed over unlabeled coils.",
          ],
        },
      ],
    },
    computers: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Desk hardware follows the cabling jobs in Riyadh and Dammam offices. ${desk}`,
            "Send the seat count and whether people bring laptops. Name the monitors if you already chose them. j5create docks are a line only when USB-C is the right adapter. We do not pad the quote with a dock on every seat, and we do not hide monitors inside a lump sum called workstations. A row of seats is priced as monitors, mounts, docks, and the labour to set them, with the labeled outlet number written beside the seat so Monday morning has a port that matches the cabling sheet.",
          ],
        },
      ],
    },
    access: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Readers go on staff doors and stores in Riyadh clinics, Olaya offices, and warehouses that need a record of the dock office. A compound in the north of the city often needs the gate and one internal door only. ${desk}`,
            "Walk us through who must enter after hours. A fingerprint reader on a door people open with wet hands or gloves will be the wrong part, and the survey will say card instead. We leave the admin password with the facility manager. We do not keep the only copy. The first users are enrolled with you on site, and the door is tested from both sides, including the fire release if the leaf has one.",
          ],
        },
      ],
    },
    "fire-alarm": {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Fire and intrusion alarms are surveyed on Riyadh clinics, schools, offices, and warehouses. The panel has to sit where the person on duty can reach it. ${desk}`,
            "If you have a drawing, send it. If you do not, we mark detectors, call points, and sounders before the ceiling closes. Intrusion contacts are priced as their own circuit. Tell us about any door that must release when the fire alarm sounds, so the access-control lock is not fighting the exit. Sounders are proved with the supervisor present, and the silence step is shown on the panel they will actually use.",
          ],
        },
      ],
    },
    "fire-safety": {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Extinguishers, hose reels, and emergency lights are placed in Riyadh buildings that already know the exit route, and in small Malaz offices that only need a short list. ${desk}`,
            "Send photos of what is already on the walls. We will not replace a sounder panel that only needs a service, and we will not mount an extinguisher where a door hides it. The list you keep names each location and the service date. That list is the maintenance record, not a sticker nobody can read. Hose reels are checked for reach along the route people walk, and emergency fittings are dropped from their supply rather than admired while they are still lit by the room.",
          ],
        },
      ],
    },
    "home-office": {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `The combined scope is written most often for Malaz villas and small Olaya offices. A north Riyadh compound gate is the same method with a longer cable run. ${desk}`,
            "Say which of the four pieces you already have: gate station, cameras, data outlets, cabinet. We will not force the missing three if you only need one. When you do need them together, one drawing keeps the holes in the wall to a single visit. Bring the landlord's rule on cabinet location if the office is leased. The parts list still separates cameras, the gate station, cable, and labour, so a villa owner and an office manager can both see what they are approving before anyone drills.",
          ],
        },
      ],
    },
    "smart-office": {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Meeting rooms and desk rows in Olaya are the usual smart-office survey. The cabinet is still the point: display, data, and door reader labeled in one place. ${desk}`,
            "Count the rooms and the seats. Tell us if a screen is already purchased. We test the path to that screen instead of assuming a cable exists above the ceiling. A control app is not a substitute for a port map. If you want a controller, it has to be a named line, not a word on a slide. We play the display, badge the door, and confirm the table outlet before we call the room finished, and the port map stays on the cabinet door.",
          ],
        },
      ],
    },
    products: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Parts are quoted from the Malaz desk for Riyadh and Dammam sites. Delivery inside Saudi Arabia is agreed on the quote. ${desk}`,
            "Send any list you already have, including disk size and lens if someone else proposed them. We answer with model lines you can compare. Labour stays off the quote until you add it. If a Hikvision, Dahua, EZVIZ, IDIS, IMOU, or Samsung line is not the right part for the view, we say which line we would change and why before you approve the order. Disk size, lens, and reader type stay visible. A single line called a package is not a quote we will send.",
          ],
        },
      ],
    },
    maintenance: {
      sections: [
        {
          heading: "Cities and what to have ready",
          body: [
            `Fault visits are staffed from Malaz for Riyadh and Dammam: offices, villas, clinics, and yards. ${desk}`,
            "Tell us what stopped: a dark camera, a recorder that no longer records, a reader that beeps, a sounder that will not silence, or a cable cut by other work. If you have the password, have it ready. If you do not, say that too. We will not invent a health report for a panel we could not open.",
          ],
        },
      ],
    },
  },
  ar: {
    cctv: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `الرياض هي مكان الفريق: فلل الملز، ومكاتب العليا وطريق الملك فهد، ومجمعات شمال الرياض، ومحلات السلي. ${arDesk}`,
            "قبل الزيارة أرسل الحي ونوع المبنى وهل عندك جهاز تسجيل. مخطط تقريبي يكفي. لن نطلب منك اختيار رقم الميغابكسل. سنسأل أي أبواب وساحات تحتاج رؤيتها، وكم يومًا يجب أن يبقى الخلاف أو الحادث على القرص.",
          ],
        },
      ],
    },
    intercom: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `أكثر الإنتركم المرئي الذي نركّبه بوابات فلل في الملز وشمال الرياض، أو محطات بهو في أدوار مكاتب العليا. ${arDesk}`,
            "صوّر البوابة والمكان الذي تريد الشاشة فيه. أخبرنا إن كان هناك قفل وهل يتشارك مدخل واحد أسرتين. نقيس التمديد نحن. المحطة التي تتصل بجوال فقط ليست النطاق الذي نسعّره في هذه الصفحة.",
          ],
        },
      ],
    },
    cabling: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `الكيابل المنظمة تُحجز غالبًا ودور العليا أو طريق الملك فهد ما يزال مفتوحًا، ولمكاتب أصغر تضيف خزانة في الملز. ${arDesk}`,
            "أرسل عدد المقاعد وعدد الأدوار وهل يوجد صاعد. إذا كانت الكاميرات أو قارئات الأبواب في التجهيز نفسه فقل ذلك، لأن تلك الكيابل يجب أن تنزل في اللوحة التي نرقّمها. لا نسحب كيبلًا في سقف سيُغلق على لفّات بلا أرقام.",
          ],
        },
      ],
    },
    computers: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `عتاد المكتب يتبع أعمال التمديد في مكاتب الرياض والدمام. ${arDesk}`,
            "أرسل عدد المقاعد وهل يحضر الناس حواسيبهم. سمِّ الشاشات إذا اخترتها. قواعد j5create سطر فقط حين يكون USB-C المحوّل المناسب. لا نزيد قاعدة على كل مقعد، ولا نخفي الشاشات داخل مبلغ اسمه محطات عمل. المقعد يُسعَّر شاشة وحاملًا وقاعدة وعملاً لضبطها، ويُكتب رقم المخرج المرقّم بجانب المقعد حتى يطابق صباح الاثنين ورقة التمديد. هذا يكفي.",
          ],
        },
      ],
    },
    access: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `القارئات على أبواب الموظفين والمخازن في عيادات الرياض ومكاتب العليا والمستودعات التي تحتاج سجلًا لمكتب الرصيف. مجمع في شمال المدينة غالبًا يحتاج البوابة وبابًا داخليًا فقط. ${arDesk}`,
            "اشرح من يجب أن يدخل بعد الدوام. قارئ بصمة على باب يُفتح بأيدٍ مبللة أو بقفازات سيكون القطعة الخطأ، وسنقول بطاقة بدل ذلك. نترك كلمة إدارة النظام عند مدير المنشأة. لا نحتفظ بالنسخة الوحيدة.",
          ],
        },
      ],
    },
    "fire-alarm": {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `إنذار الحريق والاقتحام يُعاين في عيادات الرياض ومدارسها ومكاتبها ومستودعاتها. اللوحة يجب أن تكون حيث يصلها المناوب. ${arDesk}`,
            "إذا كان عندك مخطط فأرسله. إذا لم يكن، نعلّم الكواشف ونقاط النداء والأجراس قبل إغلاق السقف. تماسات الاقتحام تُسعَّر دائرة مستقلة. أخبرنا عن أي باب يجب أن يُفتح مع إنذار الحريق حتى لا يعاند قفل الدخول مسار الخروج. تُجرَّب الأجراس بحضور المشرف، وتُعرض خطوة الإسكات على اللوحة التي سيستخدمها فعلًا، ثم نغادر بعد أن نسمع الجرس معًا.",
          ],
        },
      ],
    },
    "fire-safety": {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `الطفايات وبكرات الخراطيم وإنارة الطوارئ توضع في مباني الرياض التي يعرف مسار خروجها، وفي مكاتب الملز الصغيرة التي تحتاج قائمة قصيرة. ${arDesk}`,
            "أرسل صور ما هو موجود على الجدران. لا نستبدل لوحة تحتاج خدمة فقط، ولا نركّب طفاية حيث يخفيها باب. القائمة التي تبقى تسمّي كل مكان وتاريخ الخدمة. تلك القائمة هي سجل الصيانة لا ملصق لا يُقرأ. نعلّم مكان كل طفاية وبكرة وإنارة على المخطط قبل الثقب، ونترك تاريخ الخدمة حيث يراه المناوب. إذا كان الممر ضيقًا نغيّر المكان قبل التثبيت لا بعده، ولا نترك الجهاز في الممر بعد انتهاء التركيب في مكانها الصحيح على الجدار نفسه.",
          ],
        },
      ],
    },
    "home-office": {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `النطاق المجموع يُكتب غالبًا لفلل الملز ومكاتب العليا الصغيرة. بوابة مجمع في شمال الرياض الطريقة نفسها مع تمديد أطول. ${arDesk}`,
            "قل أي القطع الأربع عندك: محطة بوابة، كاميرات، مخارج بيانات، خزانة. لن نفرض الثلاثة الناقصة إذا احتجت واحدة. حين تحتاجها معًا، مخطط واحد يُبقي الثقوب في زيارة واحدة. أحضر شرط المؤجّر عن مكان الخزانة إذا كان المكتب مستأجرًا. الزيارة واحدة حتى لو تغيّر ترتيب القطع بعد المعاينة، والسعر يُعاد على الأسطر لا على كلمة حزمة.",
          ],
        },
      ],
    },
    "smart-office": {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `غرف الاجتماع وصفوف المكاتب في العليا هي معاينة المكتب الذكي المعتادة. الخزانة ما تزال هي المقصد: شاشة وبيانات وقارئ باب مُلصقة في مكان واحد. ${arDesk}`,
            "عدّ الغرف والمقاعد. أخبرنا إذا كانت الشاشة مشتراة. نختبر المسار إلى تلك الشاشة بدل افتراض كيبل فوق السقف. تطبيق التحكم لا يغني عن خريطة منافذ. إذا أردت متحكمًا فيجب أن يكون سطرًا مسمّى لا كلمة في عرض. نكتب رقم المنفذ بجانب كل مقعد وكل شاشة، ونختبر الصورة والصوت في غرفة الاجتماع قبل إغلاق السقف. القارئ إن وُجد يُركَّب في الزيارة نفسها ويُختبر من الجهتين، ويبقى اسم المسؤول عن البطاقات في ورقة التسليم التي نتركها مع المسؤول قبل أن نغادر الموقع ونغلق باب الخزانة.",
          ],
        },
      ],
    },
    products: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `القطع تُسعَّر من مكتب الملز لمواقع الرياض والدمام. التوصيل داخل السعودية يُتفق عليه في العرض. ${arDesk}`,
            "أرسل أي قائمة عندك، بما فيها حجم القرص والعدسة إذا اقترحها غيرنا. نرد بأسطر موديلات تستطيع مقارنتها. العمل يبقى خارج العرض حتى تضيفه. إذا لم يكن سطر Hikvision أو Dahua أو EZVIZ أو IDIS أو IMOU أو Samsung مناسبًا للمشهد، نقول أي سطر نغيّره ولماذا قبل الاعتماد. العرض يذكر الموديل والعدد والسعر وسطر العمل إن طلبته. لا نجمع الكاميرا والقرص والكيبل في رقم واحد ثم نسميه باقة. إذا تغيّر المشهد بعد المعاينة نبدّل السطر ونبيّن السبب قبل الشراء ثم نعتمد القائمة معك قبل الشراء.",
          ],
        },
      ],
    },
    maintenance: {
      sections: [
        {
          heading: "المدن وما يُجهَّز قبل الزيارة",
          body: [
            `زيارات الأعطال تخرج من الملز إلى الرياض والدمام: مكاتب وفلل وعيادات وساحات. ${arDesk}`,
            "قل ما الذي توقف: كاميرا انطفأت، جهاز لم يعد يسجّل، قارئ يصفر، جرس لا يُسكت، أو كيبل قطعه عمل آخر. إذا كانت كلمة المرور عندك فجهّزها. إذا لم تكن، فقل ذلك أيضًا. لن نخترع تقرير سلامة للوحة لم نستطع فتحها.",
          ],
        },
      ],
    },
  },
};
