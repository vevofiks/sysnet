type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export const en = {
  meta: {
    brand: "Sysnet",
    siteTitle: "CCTV Installation in Riyadh & Dammam | Sysnet",
    siteDescription:
      "Security camera installers and an ELV company in Riyadh and Dammam. CCTV installation, fire alarm systems, access control, and structured cabling. Malaz desk: +966 53 298 0149.",
    ogTitle: "CCTV Installation in Riyadh & Dammam | Sysnet",
    ogDescription:
      "Commercial CCTV, addressable fire alarms, biometric access control, and fiber optic cabling for buildings in Riyadh and Dammam.",
    homeTitle: "CCTV Installation in Riyadh & Dammam",
    homeDescription:
      "Security camera installers and an ELV company in Riyadh and Dammam. CCTV installation, fire alarm systems, access control, and structured cabling. Malaz desk: +966 53 298 0149.",
    aboutTitle: "ELV & Security Systems Company in Riyadh",
    aboutDescription:
      "Sysnet Technologies is an ELV and security system company in Saudi Arabia. Crews from Malaz install CCTV, fire alarms, and structured cabling in Riyadh and Dammam.",
    servicesTitle: "CCTV, Fire Alarm & Cabling Services in Riyadh",
    servicesDescription:
      "Commercial CCTV, video intercom, biometric access control, addressable fire alarms, fiber optic cabling, and CCTV maintenance contracts in Riyadh and Dammam.",
    projectsTitle: "CCTV & Structured Cabling Projects in Riyadh",
    projectsDescription:
      "Commercial CCTV in Al Sulay, structured cabling in Olaya, villa intercom in Malaz, and an addressable fire alarm panel for a clinic in Riyadh.",
    contactTitle: "Book CCTV Installation in Riyadh & Dammam",
    contactDescription:
      "Request a survey from security camera installers in Riyadh. The Malaz desk also surveys Dammam. Call +966 53 298 0149.",
    privacyTitle: "How Sysnet Handles Survey Requests in Riyadh",
    privacyDescription:
      "Read how Sysnet uses a survey request from this site: the name, phone, and message that open WhatsApp. We do not sell that form. Ask us for a copy.",
    termsTitle: "Terms for a Sysnet Survey Quote in Riyadh",
    termsDescription:
      "Read how a Sysnet quote from the Malaz office becomes a confirmed job in Riyadh, including what the survey covers before work starts on the site.",
  },
  a11y: {
    skip: "Skip to content",
    home: "Sysnet home",
    primary: "Primary",
    mobile: "Mobile",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    serviceLines: "Service lines",
    prevServices: "Previous services",
    nextServices: "Next services",
    prevProject: "Previous project",
    nextProject: "Next project",
    prevSlide: "Previous slide",
    nextSlide: "Next slide",
    mapTitle: "Map showing Malaz, Riyadh",
    mapHeading: "Map of Malaz, Riyadh",
    switchToArabic: "التبديل إلى العربية",
    switchToEnglish: "Switch to English",
    language: "Language",
    heroSlides: "Company scopes",
    pause: "Pause slides",
    play: "Play slides",
    breadcrumb: "Breadcrumb",
  },
  nav: {
    home: "Home",
    about: "About Us",
    services: "Services",
    projects: "Projects",
    contact: "Contact",
    quote: "Get a quote",
    quoteShort: "Quote",
    privacy: "Privacy",
    terms: "Terms",
    company: "Company",
    desk: "Desk",
    servicesHeading: "Services",
    allServices: "All services",
  },
  company: {
    legal: "Sysnet Technologies",
    address: "Malaz, Riyadh, Saudi Arabia",
    hours: "Saturday–Thursday, 9:00–18:00",
    copyright: "© 2026 Sysnet Technologies.",
  },
  hero: {
    title: "CCTV installation in Riyadh and Dammam.",
    lede: "Sysnet Technologies is an ELV and security system company. We survey and install CCTV, video intercom, fire alarms, access control, and structured cabling. The office is in Malaz, and the same crew surveys Dammam.",
    explore: "Explore services",
    contact: "Contact us",
    photoAlt: "Two bullet cameras with conduit and junction boxes on a concrete wall",
    cardTitle: "Door, window, and gate cameras",
    cardBody:
      "A dome at the parking, a station at the gate, and a recorder in the cabinet. Angles are marked on a sketch before anyone drills.",
    cardAlt: "White dome camera mounted on a rendered exterior wall",
    cardLink: "See CCTV scopes",
  },
  supply: {
    label: "Camera brands",
  },
  crew: {
    title: "One crew for the camera, the alarm, and the cable.",
    body: "Facility managers and villa owners in Riyadh often end up with three contractors who will not share a cabinet. Sysnet puts commercial CCTV, fire alarm installation, access control, and structured cabling on one drawing and one visit plan. Sysnet Technologies. Desk in Malaz, Riyadh, Saudi Arabia.",
    points: [
      "Floor plan marked before hardware is ordered",
      "Recorders, readers, and patch panels in one cabinet",
      "Handover with labels, passwords, and a test sheet",
      "Camera and alarm alerts go to the building admin",
    ],
    alt: "Two white outdoor CCTV cameras mounted on a pole with conduit",
  },
  sectorsTitle: "Booked across offices, yards, and villas.",
  industries: [
    {
      title: "Commercial offices",
      text: "Office CCTV and access control for Olaya and King Fahd Road, with data to each desk.",
    },
    {
      title: "Warehouses & logistics",
      text: "Commercial CCTV for the aisle, the dock, and the yard, with retention long enough for a dispute.",
    },
    {
      title: "Clinics & schools",
      text: "Corridors, stores, and a fire panel the supervisor can actually silence.",
    },
    {
      title: "Villas & compounds",
      text: "Home CCTV and a villa intercom: gate station, parking dome, and a monitor inside.",
    },
    {
      title: "Hospitality",
      text: "Lobby, corridor, and the back door the night shift uses.",
    },
  ],
  priced: {
    title: "Priced as a scope, not a shelf of boxes.",
    lede: "Pick the line that matches the building. If the job needs cameras, a fire panel, and cable, the survey covers all three in one visit.",
    seeScope: "See this scope",
    allLines: "All 15 service lines",
    parts: "Ask for a parts list",
  },
  stepsTitle: "Five steps from the phone call to the test report.",
  steps: [
    { title: "Call Malaz", text: "Phone or the form. Tell us the district and the building type." },
    { title: "Site survey", text: "We photograph the rooms, the gate, and the cabinet location." },
    {
      title: "Parts list",
      text: "Camera schedule, cable runs, and a price split into parts and labour.",
    },
    {
      title: "Install and test",
      text: "One crew terminates, labels, and proves each view and each sounder.",
    },
    {
      title: "Handover",
      text: "Passwords, a test sheet, and a maintenance slot on the same desk.",
    },
  ],
  survey: {
    title: "Written the way a survey comes back.",
    lede: "Camera counts, retention, and what the cabinet has to hold. These are typical Riyadh scopes, not borrowed client logos.",
  },
  faqTitle: "Questions before you book",
  faqs: [
    {
      q: "Do you only work in Malaz?",
      a: "The office is in Malaz. Survey crews cover Riyadh, including Olaya, Al Nakheel, Al Sulay, and the industrial yards on the south side. If the site is outside the city, say so on the form and we will tell you whether we can attend.",
    },
    {
      q: "Can you take over a system another company installed?",
      a: "Yes, when we can reach the recorder and the cables are identifiable. If a cable has to be pulled again, that is written on the survey before any invoice.",
    },
    {
      q: "Can I buy equipment without installation?",
      a: "Yes. Ask for product sales and the quote will list parts separately from labour. j5create docks are included when a desk needs them.",
    },
    {
      q: "Who reads the form?",
      a: "The Malaz office, on sales@sysnet-ksa.com. If the matter is urgent, call +966 53 298 0149. Saturday to Thursday, 9:00 to 18:00.",
    },
  ],
  book: {
    title: "Book a free site survey.",
    body: "Tell us the district and the building type. We reply from sales@sysnet-ksa.com, or call +966 53 298 0149, Saturday–Thursday, 9:00–18:00.",
    survey: "Request a survey",
    call: "Call us",
  },
  footer: {
    blurb:
      "ELV contractor for CCTV installation, fire alarms, access control, and structured cabling in Riyadh and Dammam. The office is in Malaz.",
  },
  areas: {
    title: "CCTV installation in Riyadh and Dammam",
    body: "Security camera installers based in Malaz, Riyadh. The same ELV crew surveys offices, villas, and warehouses in Riyadh and Dammam, and arranges the rest of Saudi Arabia when you ask.",
    places: [
      { name: "Saudi Arabia", detail: "Cities beyond Riyadh and Dammam are scheduled when you need a visit there." },
      { name: "Riyadh", detail: "Villas, offices, warehouses, clinics, schools, and compounds across the city." },
      { name: "Dammam", detail: "Eastern Province offices, warehouses, and compounds, surveyed by the same team." },
    ],
  },
  services: {
    cctv: {
      title: "CCTV Installation",
      summary: "Home and commercial CCTV installation in Riyadh and Dammam, with playback when you need it.",
      detail:
        "Each view is marked on the floor plan before a bracket is drilled, so a dock, a villa gate, and a clinic corridor each get the right camera. The recorder is sized for the days you want to keep, and the cabinet is labelled for the next person. You watch every view play back before we leave.",
      alt: "Two outdoor cameras with conduit and junction boxes fixed to a concrete wall",
      includes: [
        "Each camera view marked on the floor plan",
        "A camera chosen for that gate, dock, or room",
        "Recorder storage set for the days you keep",
        "Phone access for the people you name",
        "Labelled channels in a tidy cabinet",
        "Every view played back with you on site",
      ],
      leaves: [
        "Admin passwords and app access",
        "Labelled cabinet and channel list",
        "Test report for every camera",
        "A short walkthrough for your team",
      ],
    },
    intercom: {
      title: "Video Intercom",
      summary: "Video intercom installation for villa gates and lobbies, answered from a monitor inside.",
      detail:
        "A station at the gate or in the lobby connects by cable to a monitor where people actually sit, in the majlis or at reception. You see the visitor, speak to them, and release the lock from that screen. A second button is added when two households or two tenants share the entrance.",
      alt: "Sleek modern smart video intercom door station with illuminated keypad mounted on an entrance wall",
      includes: [
        "A video station at the gate or in the lobby",
        "Cable to a monitor inside the building",
        "Lock release tested from that monitor",
        "A second button when two parties share the door",
        "Station, monitor, and lock on one drawing",
      ],
      leaves: [
        "A working monitor inside",
        "A tested lock release",
        "A short walkthrough for your household or reception",
      ],
    },
    cabling: {
      title: "Structured Cabling",
      summary: "Structured cabling and fiber optic installation from the cabinet to every desk, camera, and door.",
      detail:
        "Every outlet is numbered at the cabinet and at the faceplate, then tested before we leave. You keep a report that matches those numbers, so a later move or a new camera starts at the right point. Floor cabinets are left tidy, with room for the next device.",
      alt: "Blue and grey network cables plugged into a numbered patch panel",
      includes: [
        "Outlets counted from the cabinet to each floor",
        "Both ends of every cable numbered",
        "A test report that matches those numbers",
        "Space left for a later camera or reader",
        "A port map fixed to the cabinet door",
      ],
      leaves: [
        "The test report",
        "A labelled cabinet and port map",
        "Numbered outlets at the panel and the seat",
      ],
    },
    computers: {
      title: "Office Computers",
      summary: "Desks that are ready to work, with screens, docks, and a data point for each seat.",
      detail:
        "Screens, docks, and computers are specified with the cabling, so a new row of seats is ready when the outlets are. j5create docks are included where a laptop needs USB-C, and each one is its own line. Every seat is tied to a numbered data point.",
      alt: "A laptop open on a long counter beside a window in a bright office",
      includes: [
        "Screens, docks, and computers listed with the cable",
        "A j5create dock where the laptop needs USB-C",
        "Each seat tied to a numbered data point",
        "Hardware priced separately from labour",
        "One list for the whole row of seats",
      ],
      leaves: [
        "A list of what sits at each seat",
        "Which outlet serves which seat",
        "A short walkthrough for your team",
      ],
    },
    access: {
      title: "Access Control",
      summary: "Access control and biometric attendance, with card or fingerprint readers on the doors that matter.",
      detail:
        "Readers go on the doors that need a record: a staff entrance, a server room, or a clinic store. Card or fingerprint is chosen for how that door is used, and the controller keeps the log. Your facility manager keeps the admin password, and the first people are enrolled with you.",
      alt: "A hand holding a phone beside a silver lock mounted on a white door",
      includes: [
        "Readers only on the doors that need a record",
        "Card or fingerprint chosen for that door",
        "A log of who passed, and when",
        "Admin password left with your facility manager",
        "Each door tested from both sides",
      ],
      leaves: [
        "Admin passwords and app access",
        "A list of the controlled doors",
        "A short walkthrough for your team",
      ],
    },
    "fire-alarm": {
      title: "Fire Alarm Systems",
      summary: "Addressable fire alarm installation in Riyadh and Dammam, with a separate night alarm for intrusion.",
      detail:
        "Detectors, call points, and sounders are placed against the drawing, with an addressable panel the supervisor can reach. Intrusion contacts on doors and glass sit on their own circuit, so a night event reads as intrusion. Both circuits are tested with the person who will be on duty.",
      alt: "A white smoke detector mounted on a pale ceiling",
      includes: [
        "An addressable panel, detectors, call points, and sounders",
        "Devices placed against your drawing",
        "Intrusion contacts on their own circuit",
        "Both circuits tested with the supervisor",
        "A written list of device addresses",
      ],
      leaves: [
        "A tested fire circuit",
        "A tested intrusion circuit",
        "The device address list",
        "A short walkthrough for the duty team",
      ],
    },
    "fire-safety": {
      title: "Fire Safety",
      summary: "Fire safety equipment for Riyadh and Dammam: extinguishers, hose reels, and emergency lights on the exit path.",
      detail:
        "Extinguishers, hose reels, and emergency lights are mounted on the exit route, where people can reach them. Each extinguisher location is written down with its service date. The supervisor walks that route with us and keeps the list.",
      alt: "A red fire extinguisher mounted on a painted wooden wall",
      includes: [
        "Extinguishers, hose reels, and emergency lights",
        "Each piece placed on the exit route",
        "A service date noted for every extinguisher",
        "The location list left with the supervisor",
        "A walk of the exits when the work is finished",
      ],
      leaves: [
        "The location list",
        "Service dates for the extinguishers",
        "A short walkthrough for the supervisor",
      ],
    },
    "home-office": {
      title: "Home CCTV",
      summary: "Home CCTV and a villa intercom in Riyadh and Dammam, with data points and one cabinet.",
      detail:
        "A villa or a small office can have the gate view, the recorder, a few data points, and the cabinet planned on one drawing. You still see each part as its own line. The routes are pulled once, and the picture, the door, and the outlets are tested together.",
      alt: "A white outdoor camera on a bracket against a concrete wall",
      includes: [
        "A door view, a recorder, data points, and one cabinet",
        "One drawing for the villa or the small office",
        "Each part visible on the quotation",
        "A monitor inside, as well as the phone app",
        "Labels and a test report when we finish",
      ],
      leaves: [
        "Admin passwords and app access",
        "A labelled cabinet",
        "A short walkthrough for your household or team",
      ],
    },
    "smart-office": {
      title: "Smart Office",
      summary: "Smart office solutions for meeting rooms in Riyadh, with access and cabling in one cabinet.",
      detail:
        "The meeting-room display, desk outlets, and the door reader land in one cabinet, with a port map on the door. You can play the screen, badge the door, and use the table point before we call the room finished. Seats that need a dock are listed with the computers for that floor.",
      alt: "Server cabinets with yellow and blue patch leads behind mesh doors",
      includes: [
        "Display, data, and door reader in one cabinet",
        "Desk connections on the same visit",
        "A port map on the cabinet door",
        "A test of the screen, the door, and the table",
        "Room and seat counts priced as separate lines",
      ],
      leaves: [
        "A labelled cabinet and port map",
        "A test of the display and the reader",
        "A short walkthrough for your team",
      ],
    },
    products: {
      title: "Security Equipment",
      summary: "Cameras, recorders, readers, and cable, listed by model so you can compare before you buy.",
      detail:
        "You can buy the hardware on its own. The quotation names each model, so procurement can compare the lens, the disk, and the reader type. Installation stays a separate line until you add it.",
      alt: "A white PTZ camera on a bracket beside a pole and a junction box",
      includes: [
        "A parts list with each model written out",
        "Cameras, recorders, readers, cable, and racks",
        "Parts priced separately from labour",
        "Hardware you can buy without installation",
        "Lines a procurement team can compare",
      ],
      leaves: [
        "The itemised parts list",
        "Model names and quantities",
        "A labour line if you add installation",
      ],
    },
    maintenance: {
      title: "CCTV Maintenance",
      summary: "CCTV maintenance contracts and fire alarm repair visits in Riyadh and Dammam, including systems another company installed.",
      detail:
        "Tell us what stopped and we will inspect the cameras, recorder, readers, or alarm and restore what we can. If another company installed the system, we still take it on when we can open the recorder and follow the cabling. Any replacement is quoted before that work goes ahead.",
      alt: "Professional systems technician in uniform servicing a modern network cabinet in a bright commercial office",
      includes: [
        "A booked visit for the fault you describe",
        "Cameras, recorders, readers, and alarms",
        "Systems another company installed, after inspection",
        "Alerts set to the phones you choose",
        "A report of what was restored and what needs a part",
      ],
      leaves: [
        "A written note of the fault and the fix",
        "Admin passwords and app access",
        "A test alert on the phones you named",
      ],
    },
    "software-sales": {
      title: "Software Sales",
      summary: "Licensed business software quoted as clear lines you can approve before purchase.",
      detail:
        "You receive a written list of the software lines for your office or store, with each product and licence as its own item. Training and setup stay separate until you add them, so procurement can compare and approve before anything is ordered.",
      alt: "Laptop on an office desk showing a business software dashboard",
      includes: [
        "A written list of software products and licences",
        "Each line priced so procurement can compare",
        "Setup and training listed separately when needed",
        "A short demo of the software you are considering",
        "Supply for offices and stores in Riyadh and Dammam",
      ],
      leaves: [
        "The approved software list",
        "Licence details for each product",
        "A short walkthrough for your team",
      ],
    },
    "pharmacy-software": {
      title: "Pharmacy Software",
      summary: "Pharmacy software for stock, sales, and daily counter work in Riyadh pharmacies.",
      detail:
        "We survey how your pharmacy sells and stores medicines, then quote software that matches those workflows. Stock, sales, and the reports you need sit in one system your team can use after a short walkthrough.",
      alt: "Pharmacist at a pharmacy counter using pharmacy management software",
      includes: [
        "A survey of counter, store, and sales workflows",
        "Stock and sales modules matched to your pharmacy",
        "Reports your pharmacist can open every day",
        "User accounts for the people who run the counter",
        "Training on the tasks your team uses most",
      ],
      leaves: [
        "Admin passwords and user accounts",
        "A short walkthrough for pharmacy staff",
        "A written note of the modules you approved",
      ],
    },
    erp: {
      title: "ERP",
      summary: "ERP software that links stock, sales, and accounts for your Riyadh business.",
      detail:
        "An ERP survey maps the processes you already run, then quotes modules that match those steps. Stock, sales, purchasing, and accounts share one database, with a written scope your managers can approve before go-live.",
      alt: "Hands typing on a laptop with an ERP software dashboard overlay",
      includes: [
        "A survey of stock, sales, purchasing, and accounts",
        "Modules quoted as separate lines you can approve",
        "One shared database for the teams that need it",
        "User roles for managers and daily operators",
        "Training before the system goes live",
      ],
      leaves: [
        "Admin access and user roles",
        "A written module list you approved",
        "A short walkthrough for each team",
      ],
    },
    "pharmacy-hms": {
      title: "Pharmacy & HMS",
      summary: "Pharmacy software plus hospital management (HMS) for clinics and healthcare sites.",
      detail:
        "Pharmacy & HMS means pharmacy counter software together with a Hospital Management System for clinics and hospitals. We survey the pharmacy or healthcare site, quote both sides in clear lines, and train the teams who will use it every day.",
      alt: "Healthcare staff using hospital management software on dual monitors",
      includes: [
        "Pharmacy and HMS modules on one quotation",
        "A survey of the pharmacy or clinic workflows",
        "Stock, sales, and hospital patient records",
        "User accounts for pharmacy and clinical staff",
        "Training for the teams who work the system",
      ],
      leaves: [
        "Admin passwords and user accounts",
        "A module list matched to your site",
        "A short walkthrough for your teams",
      ],
    },
  },

  projects: {
    "sulay-store": {
      title: "Aisle and dock cameras for a south Riyadh store",
      summary:
        "A logistics store in Al Sulay: 22 bullet cameras, two recorders, and 30 days of retention on the aisles, the dispatch dock, and the yard gate.",
      alt: "Commercial high-pole security camera cluster with multi-angle bullet and PTZ cameras for logistics yard coverage",
      sceneAlt: "Warehouse aisles lined with yellow bins and tall pallet racking",
      facts: ["22 bullet cameras", "2 recorders", "Yard gate included"],
    },
    "olaya-fitout": {
      title: "Labeled Cat6 for an Olaya office fit-out",
      summary:
        "Forty-six data points across two floors, two cabinets, and a test sheet. Meeting rooms share the same rack as the reception camera.",
      alt: "Enterprise network switch racks with high-density Cat6 patch cabling and port termination",
      sceneAlt: "Long office corridor with glass meeting rooms",
      facts: ["46 data points", "2 cabinets", "Test sheet at handover"],
    },
    "malaz-villa": {
      title: "Gate camera and four readers for a Malaz villa",
      summary:
        "A video station at the gate, a dome over the parking, and card readers on four doors. The monitor sits inside, not only on a phone.",
      alt: "Sleek modern smart video intercom door station with illuminated keypad mounted on an entrance wall",
      sceneAlt: "Modern house at dusk with a lit dining room and a garden",
      facts: ["Gate station", "4 card readers", "Parking dome"],
    },
    "salah-aldin-clinic": {
      title: "Addressable panel for a clinic off Salah Al-Din",
      summary:
        "Fourteen detectors, manual call points at the stairs, and sounders the nurses’ station can hear. Intrusion contacts on the store stay on a separate circuit.",
      alt: "Illuminated commercial emergency strobe alarm and sounder on clinic corridor wall",
      sceneAlt: "White smoke detector mounted on a pale ceiling",
      facts: ["14 detectors", "1 addressable panel", "Separate intrusion circuit"],
    },
  },
  stats: [
    "Service lines on the service list",
    "Data points on a recent Olaya fit-out",
    "Cameras on a typical Al Sulay store scope",
  ],
  about: {
    title: "ELV and CCTV installation from Malaz, Riyadh.",
    lede: "Sysnet Technologies is a security system company in Saudi Arabia. The work is CCTV installation, fire alarms, access control, and the structured cabling that joins them.",
    heading: "Based in Riyadh, not a catalogue with a PO box.",
    p1: "The office is in Malaz. Calls go to +966 53 298 0149. Mail goes to sales@sysnet-ksa.com. Survey crews cover the city: Olaya towers, villas in the north, and stores in Al Sulay.",
    p2: "Procurement teams get a parts list they can read. Facility managers get one cabinet instead of three vendors pointing at each other. Homeowners get a gate station that rings a monitor inside the house.",
    rows: [
      ["Company", "Sysnet Technologies"],
      ["Desk", "Malaz, Riyadh, Saudi Arabia"],
      ["Hours", "Saturday–Thursday, 9:00–18:00"],
    ],
    workTitle: "What the technicians actually do on site.",
    work: [
      "They photograph the rooms, mark camera views, and count cable runs before an order is placed. On install day they terminate, label, and test. A fire sounder is proved. A door reader writes a log. A recorder plays back the gate.",
      "A repair visit is booked with the Malaz office. Camera and alarm alerts are set to the building admin's phone or that site's alarm system. If another company left the system, we take it when the recorder is reachable and the cables can be identified.",
    ],
    skylineAlt: "Riyadh skyline with the Kingdom Centre tower under a clear sky",
    techAlt: "Professional systems technician in uniform servicing a modern network cabinet in a bright commercial office",
  },
  servicesPage: {
    title: "CCTV, fire alarm, and cabling in Riyadh.",
    lede: "Each scope below is something we price on its own. Most Riyadh and Dammam jobs combine commercial CCTV, access control, and the structured cabling between them.",
    other: "Other services for this building",
    includes: "What's included",
    leaves: "What you receive at completion",
  },
  projectsPage: {
    title: "CCTV and structured cabling projects in Riyadh.",
    lede: "These are the jobs we price in Riyadh: how many cameras, how many data points, what the cabinet has to hold. They are typical scopes, not a claim that a named tenant hired us.",
    prompt: "Have a building that looks like one of these?",
    link: "Send the district and we will survey it.",
  },
  contact: {
    title: "Book CCTV installation in Riyadh.",
    lede: "The form opens WhatsApp to the Malaz office for a Riyadh or Dammam survey. Hours are Saturday to Thursday, 9:00 to 18:00.",
    heading: "Malaz office",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
  },
  privacy: {
    title: "What we keep from the survey form.",
    lede: "Name, email, phone, the service you picked, and the message. That is the whole record.",
    paragraphs: [
      "The form opens WhatsApp to +966 53 298 0149 with your name, email, phone, the service, and the message. We do not sell that information, and we do not add you to a newsletter from this form.",
      "To ask for a record to be deleted, email sales@sysnet-ksa.com with the same address you used on the form.",
      "The office address is Malaz, Riyadh, Saudi Arabia.",
    ],
  },
  terms: {
    title: "A form is a request for a survey, not a contract.",
    lede: "Work starts when both sides have the parts list, the labour fee, and a date.",
    paragraphs: [
      "Prices discussed by phone or on this form are an invitation to survey the building. They change if the room count, the cable route, or the retention period changes after we see the site.",
      "Hardware and labour are quoted separately. Product sales do not include installation unless the quote says they do.",
      "Project descriptions on this site are typical Riyadh scopes. They are not a statement that a named tenant is a client.",
    ],
  },
  notFound: {
    title: "That page is not on the service list.",
    body: "The address does not match a Sysnet page. Go back home, or open the service list.",
    home: "Back to the home page",
    services: "See services",
  },
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    service: "Service of interest",
    select: "Select a service",
    message: "Message",
    placeholder: "District, building type, and what you want installed.",
    intro: "Survey request — Sysnet",
    submit: "Send on WhatsApp",
    sending: "Opening WhatsApp",
    open: "Open WhatsApp",
    honeypot: "Company website",
    received: "Request received. The Malaz office will reply from sales@sysnet-ksa.com.",
    saved: "WhatsApp is open with your request. Send it to the Malaz office on +966 53 298 0149.",
    check: "Check the fields below, then send it again.",
    store: "We could not store that request. Call +966 53 298 0149.",
    errors: {
      name: "Enter the name we should ask for.",
      email: "Enter a work or personal email we can reply to.",
      phone: "Enter a phone number with at least 9 digits.",
      service: "Choose a service from the list.",
      message: "Write what you need installed.",
    },
  },
};

export type Copy = Widen<typeof en>;
