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
    siteTitle: "Sysnet — CCTV, fire alarm, and cabling in Riyadh",
    siteDescription:
      "Sysnet, Adam Al Arabia Company, surveys and installs CCTV, intercom, fire alarm, access control, and network cabling from a desk in Malaz, Riyadh.",
    ogTitle: "Sysnet — CCTV, fire alarm, and cabling in Riyadh",
    ogDescription:
      "Site surveys, parts lists, and installation for cameras, alarms, and structured cabling in Riyadh.",
    homeTitle: "CCTV, fire alarm, and cabling in Riyadh",
    homeDescription:
      "Sysnet installs CCTV, intercom, fire alarm, access control, and network cabling for offices, warehouses, and villas in Riyadh. Desk in Malaz.",
    aboutTitle: "About Us",
    aboutDescription:
      "Sysnet is Adam Al Arabia Company, affiliated with NetPro, installing CCTV, alarms, and cabling from Malaz, Riyadh.",
    servicesTitle: "Services",
    servicesDescription:
      "CCTV, intercom, network cabling, computers, biometric access, fire alarm, fire safety, home and office projects, smart office, product sales, and maintenance in Riyadh.",
    projectsTitle: "Projects",
    projectsDescription:
      "Typical Sysnet scopes in Riyadh: warehouse CCTV, Olaya cabling, a Malaz villa gate, and a clinic fire panel.",
    contactTitle: "Contact",
    contactDescription:
      "Request a Sysnet site survey in Riyadh. Malaz desk, sales@sysnet-ksa.com, +966 53 298 0149.",
    privacyTitle: "Privacy",
    privacyDescription: "How Sysnet handles survey requests sent from this website.",
    termsTitle: "Terms",
    termsDescription: "How a Sysnet quote becomes a confirmed job.",
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
  },
  company: {
    legal: "Adam Al Arabia Company",
    address: "Malaz, Riyadh, Saudi Arabia",
    hours: "Saturday–Thursday, 9:00–18:00",
    copyright: "© 2026 Sysnet. Adam Al Arabia Company.",
  },
  hero: {
    title: "Cameras, alarms, and cabling for Riyadh buildings.",
    lede: "Sysnet, of Adam Al Arabia and affiliated with NetPro, surveys the site, writes the parts list, and installs CCTV, intercom, fire alarm, and network cable. The desk is in Malaz.",
    explore: "Explore services",
    contact: "Contact the desk",
    photoAlt: "Two bullet cameras with conduit and junction boxes on a concrete wall",
    cardTitle: "Door, window, and gate cameras",
    cardBody:
      "A dome at the parking, a station at the gate, and a recorder in the cabinet. Angles are marked on a sketch before anyone drills.",
    cardAlt: "White dome camera mounted on a rendered exterior wall",
    cardLink: "See CCTV scopes",
  },
  supply: {
    label: "Supply lines",
    text: "Affiliated with NetPro. j5create docks are specified when a desk needs them.",
  },
  crew: {
    title: "One crew for the camera, the alarm, and the cable.",
    body: "Facility managers and villa owners in Riyadh often end up with three contractors who will not share a cabinet. Sysnet puts CCTV, intrusion, fire alarm, access control, and structured cabling on one drawing and one visit plan. Adam Al Arabia Company. Desk in Malaz, Riyadh, Saudi Arabia.",
    points: [
      "Floor plan marked before hardware is ordered",
      "Recorders, readers, and patch panels in one cabinet",
      "Handover with labels, passwords, and a test sheet",
      "Fault calls return to +966 53 298 0149",
    ],
    alt: "Two white bullet cameras on a corrugated metal facade",
  },
  sectorsTitle: "Booked across offices, yards, and villas.",
  industries: [
    {
      title: "Commercial offices",
      text: "Olaya and King Fahd Road fit-outs: cameras at reception, data to the desks.",
    },
    {
      title: "Warehouses & logistics",
      text: "Aisle, dock, and yard coverage, with retention long enough for a dispute.",
    },
    {
      title: "Clinics & schools",
      text: "Corridors, stores, and a fire panel the supervisor can actually silence.",
    },
    {
      title: "Villas & compounds",
      text: "Gate station, parking dome, and a monitor inside the house.",
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
    allLines: "All 11 service lines",
    parts: "Ask for a parts list",
  },
  stepsTitle: "Five steps from the phone call to the handover sheet.",
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
  faqTitle: "Before you send the form.",
  faqs: [
    {
      q: "Do you only work in Malaz?",
      a: "The desk is in Malaz. Survey crews cover Riyadh, including Olaya, Al Nakheel, Al Sulay, and the industrial yards on the south side. If the site is outside the city, say so on the form and we will tell you whether we can attend.",
    },
    {
      q: "Can you take over a system another company installed?",
      a: "Yes, when we can reach the recorder and the cables are identifiable. If a run has to be pulled again, that is written on the survey before any invoice.",
    },
    {
      q: "Can I buy equipment without installation?",
      a: "Yes. Ask for product sales and the quote will list parts separately from labour. j5create docks are included when a desk needs them.",
    },
    {
      q: "Who reads the form?",
      a: "The Malaz desk, on sales@sysnet-ksa.com. If the matter is urgent, call +966 53 298 0149. Saturday to Thursday, 9:00 to 18:00.",
    },
  ],
  book: {
    title: "Book the visit before the ceiling closes.",
    body: "Send the district and the building type. The Malaz desk replies from sales@sysnet-ksa.com, or call +966 53 298 0149.",
    survey: "Request a survey",
    call: "Call the desk",
  },
  footer: {
    blurb:
      "CCTV, fire alarm, access control, and network cabling for buildings in Riyadh. The desk is in Malaz.",
  },
  services: {
    cctv: {
      title: "CCTV Camera",
      summary:
        "Dome and bullet cameras, with the recorder sized to the rooms you actually need to keep.",
      detail:
        "We walk the site and mark each view on the floor plan before a bracket is drilled. A warehouse dock, a villa gate, and a clinic corridor do not get the same lens. Retention is set on the recorder — often 30 days — and the cabinet is labeled so the next person can find the right channel.",
      alt: "Two bullet cameras with conduit and junction boxes on a concrete wall",
    },
    intercom: {
      title: "Intercom System",
      summary: "Video door stations for villa gates and building lobbies, wired to a monitor inside.",
      detail:
        "A gate station that only rings a phone will fail the day the phone is in another room. We run cable from the gate or lobby to a monitor at reception or in the majlis, and we test the lock release before we leave.",
      alt: "Stainless steel video door station with a camera, two call buttons, and a speaker grille",
    },
    cabling: {
      title: "Network Cabling",
      summary: "Cat6 and fiber between the main cabinet and each floor, tested and labeled.",
      detail:
        "Every run is numbered at both ends. After termination we hand over a test sheet, not a bundle of unlabeled blue cable. Floor cabinets are dressed so a later camera or access reader can land in the same rack.",
      alt: "Close view of blue and grey network cables plugged into a numbered patch panel",
    },
    computers: {
      title: "Computers & Accessories",
      summary:
        "Desktops, monitors, and docks for office fit-outs, including j5create where a USB-C dock is the right part.",
      detail:
        "We specify the desk hardware with the cabling, so a new row of workstations is not waiting on a separate supplier for monitors and docks. j5create docks and adapters are used when the desk needs them.",
      alt: "Server cabinets with dense yellow and blue patch leads behind mesh doors",
    },
    access: {
      title: "Biometric & Access Control",
      summary: "Card and fingerprint readers on staff doors, server rooms, and clinic stores.",
      detail:
        "The controller records who passed and when. We put readers only on the doors that need them — a pharmacy store and a server room, not every corridor — and we leave the admin password with the facility manager, written on the handover sheet.",
      alt: "Hand holding a phone beside a silver smart lock mounted on a white door",
    },
    "fire-alarm": {
      title: "Fire Alarm & Intrusion Alarm",
      summary:
        "Addressable fire panels, detectors, call points, and door contacts on the same visit plan.",
      detail:
        "Smoke and heat detectors, manual call points, and sounders are placed against the drawing. Intrusion contacts on doors and glass sit on a separate circuit, so a night alarm does not look like a fire alarm. We test both before handover.",
      alt: "White smoke detector mounted on a pale ceiling",
    },
    "fire-safety": {
      title: "Fire & Safety Systems",
      summary: "Extinguishers, hose reels, and emergency lights placed where the drawing puts them.",
      detail:
        "Hardware is mounted to the schedule, not where there happens to be a free screw. We note the service date on each extinguisher location and leave that list with the building supervisor.",
      alt: "Red fire extinguisher mounted on a painted wooden wall",
    },
    "home-office": {
      title: "Home & Office Projects",
      summary: "A villa or a small office on one drawing: cameras, intercom, data points, and the rack.",
      detail:
        "Homeowners in Malaz and office managers in Olaya usually need the same four things: a gate or door view, a recorder, a few data points, and a cabinet that is not a tangle. We price that as one scope.",
      alt: "White bullet camera on a bracket against a concrete wall",
    },
    "smart-office": {
      title: "Smart Office Installation",
      summary: "Meeting-room displays, desk connectivity, and door access landing in one cabinet.",
      detail:
        "The display, the camera, and the door reader should not be three vendors blaming the cable. We terminate them in the same rack and leave a port map on the cabinet door.",
      alt: "Server cabinets with dense yellow and blue patch leads behind mesh doors",
    },
    products: {
      title: "Product Sales",
      summary: "Cameras, recorders, readers, cable, and racks, quoted as a parts list you can check.",
      detail:
        "You can buy the hardware without the labour. The quote separates parts from installation, with model lines written out so your procurement team can compare them.",
      alt: "White PTZ dome camera on a bracket beside a pole and a junction box",
    },
    maintenance: {
      title: "Installation & Maintenance",
      summary: "Our technicians install, then the same desk books the maintenance visit.",
      detail:
        "Fault calls come to +966 53 298 0149. If we did not install the system, we still take it on when we can reach the recorder and identify the cables. If a run has to be replaced, we say that on the survey.",
      alt: "A technician in a yellow hard hat terminating wires at a wall-mounted panel",
    },
  },
  projects: {
    "sulay-store": {
      title: "Aisle and dock cameras for a south Riyadh store",
      summary:
        "A logistics store in Al Sulay: 22 bullet cameras, two recorders, and 30 days of retention on the aisles, the dispatch dock, and the yard gate.",
      alt: "Two white bullet cameras mounted on a dark corrugated metal wall",
      facts: ["22 bullet cameras", "2 recorders", "Yard gate included"],
    },
    "olaya-fitout": {
      title: "Labeled Cat6 for an Olaya office fit-out",
      summary:
        "Forty-six data points across two floors, two cabinets, and a test sheet. Meeting rooms share the same rack as the reception camera.",
      alt: "Numbered patch panel with blue and grey Ethernet leads",
      facts: ["46 data points", "2 cabinets", "Test sheet at handover"],
    },
    "malaz-villa": {
      title: "Gate camera and four readers for a Malaz villa",
      summary:
        "A video station at the gate, a dome over the parking, and card readers on four doors. The monitor sits inside, not only on a phone.",
      alt: "Stainless steel video door station with a camera, two call buttons, and a speaker grille",
      facts: ["Gate station", "4 card readers", "Parking dome"],
    },
    "salah-aldin-clinic": {
      title: "Addressable panel for a clinic off Salah Al-Din",
      summary:
        "Fourteen detectors, manual call points at the stairs, and sounders the nurses’ station can hear. Intrusion contacts on the store stay on a separate circuit.",
      alt: "Technician wearing a hard hat while wiring a wall panel",
      facts: ["14 detectors", "1 addressable panel", "Separate intrusion circuit"],
    },
  },
  stats: [
    "Service lines on the rate card",
    "Data points on a recent Olaya fit-out",
    "Cameras on a typical Al Sulay store scope",
  ],
  about: {
    title: "A Malaz desk for the whole ELV scope.",
    lede: "Sysnet is the name on the van and the invoice. The company is Adam Al Arabia, affiliated with NetPro. The work is cameras, alarms, access control, and the cable that joins them.",
    heading: "Based in Riyadh, not a catalogue with a PO box.",
    p1: "The desk is in Malaz. Calls go to +966 53 298 0149. Mail goes to sales@sysnet-ksa.com. Survey crews cover the city: Olaya towers, villas in the north, and stores in Al Sulay.",
    p2: "Procurement teams get a parts list they can read. Facility managers get one cabinet instead of three vendors pointing at each other. Homeowners get a gate station that rings a monitor inside the house.",
    rows: [
      ["Company", "Adam Al Arabia Company"],
      ["Affiliate", "NetPro"],
      ["Desk", "Malaz, Riyadh, Saudi Arabia"],
      ["Hours", "Saturday–Thursday, 9:00–18:00"],
    ],
    workTitle: "What the technicians actually do on site.",
    work: [
      "They photograph the rooms, mark camera views, and count cable runs before an order is placed. On install day they terminate, label, and test. A fire sounder is proved. A door reader writes a log. A recorder plays back the gate.",
      "Maintenance stays with the same phone number. If another company left the system, we take it when the recorder is reachable and the cables can be identified.",
    ],
    skylineAlt: "Riyadh skyline with the Kingdom Centre tower under a clear sky",
    techAlt: "A technician in a yellow hard hat wiring a wall-mounted panel",
  },
  servicesPage: {
    title: "Eleven lines. One survey if the building needs more than one.",
    lede: "Each scope below is something we price on its own. Most Riyadh jobs combine two or three: a camera, a reader, and the cable between them.",
  },
  projectsPage: {
    title: "Scopes with counts, not a wall of logos.",
    lede: "These are the jobs we price in Riyadh: how many cameras, how many data points, what the cabinet has to hold. They are typical scopes, not a claim that a named tenant hired us.",
    prompt: "Have a building that looks like one of these?",
    link: "Send the district and we will survey it.",
  },
  contact: {
    title: "Tell us the district and the building.",
    lede: "The form is read by the Malaz desk. For a survey this week, call the number. Hours are Saturday to Thursday, 9:00 to 18:00.",
    heading: "Malaz desk",
    address: "Address",
    phone: "Phone",
    email: "Email",
    hours: "Hours",
  },
  privacy: {
    title: "What we keep from the survey form.",
    lede: "Name, email, phone, the service you picked, and the message. That is the whole record.",
    paragraphs: [
      "Requests are stored so the Malaz desk can reply from sales@sysnet-ksa.com. We do not sell the list, and we do not add you to a newsletter from this form.",
      "To ask for a record to be deleted, email sales@sysnet-ksa.com with the same address you used on the form.",
      "The desk address is Malaz, Riyadh, Saudi Arabia.",
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
    title: "That page is not on the rate card.",
    body: "The address does not match a Sysnet page. Go back to the desk, or open the service list.",
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
    submit: "Request a survey",
    sending: "Sending the request",
    honeypot: "Company website",
    received: "Request received. The Malaz desk will reply from sales@sysnet-ksa.com.",
    saved:
      "Request saved for the Malaz desk. If you need a survey this week, call +966 53 298 0149.",
    check: "Check the fields below, then send it again.",
    store: "We could not store that request. Call +966 53 298 0149.",
    errors: {
      name: "Enter the name we should ask for.",
      email: "Enter a work or personal email we can reply to.",
      phone: "Enter a phone number with at least 9 digits.",
      service: "Choose a service from the list.",
      message: "Add the district, the building type, and what you need installed.",
    },
  },
};

export type Copy = Widen<typeof en>;
