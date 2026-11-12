export const company = {
  name: "Sysnet",
  legal: "Adam Al Arabia Company",
  phoneDisplay: "+966 53 298 0149",
  phoneTel: "+966532980149",
  whatsapp: "966532980149",
  email: "sales@sysnet-ksa.com",
  address: "Malaz, Riyadh, Saudi Arabia",
  mapsQuery: "Malaz, Riyadh, Saudi Arabia",
  url: "https://www.sysnet-ksa.com",
  hours: "Saturday–Thursday, 9:00–18:00",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
  featured?: boolean;
  highlight?: boolean;
};

export const services: Service[] = [
  {
    slug: "cctv",
    title: "CCTV Camera",
    icon: "cctv",
    featured: true,
    summary:
      "Dome and bullet cameras, with the recorder sized to the rooms you actually need to keep.",
    detail:
      "We walk the site and mark each view on the floor plan before a bracket is drilled. A warehouse dock, a villa gate, and a clinic corridor do not get the same lens. Retention is set on the recorder — often 30 days — and the cabinet is labeled so the next person can find the right channel.",
    image: "/images/cctv-featured.jpg",
    alt: "Hikvision bullet and dome surveillance cameras mounted with stainless-steel conduit on limestone corporate facade",
  },
  {
    slug: "intercom",
    title: "Intercom System",
    icon: "intercom",
    summary:
      "Video door stations for villa gates and building lobbies, wired to a monitor inside.",
    detail:
      "A gate station that only rings a phone will fail the day the phone is in another room. We run cable from the gate or lobby to a monitor at reception or in the majlis, and we test the lock release before we leave.",
    image: "/images/intercom-modern.jpg",
    alt: "Sleek modern smart video intercom door station with illuminated keypad mounted on an entrance wall",
  },
  {
    slug: "cabling",
    title: "Network Cabling",
    icon: "cabling",
    summary:
      "Cat6 and fiber between the main cabinet and each floor, tested and labeled.",
    detail:
      "Every run is numbered at both ends. After termination we hand over a test sheet, not a bundle of unlabeled blue cable. Floor cabinets are dressed so a later camera or access reader can land in the same rack.",
    image: "/images/network-switchers.jpg",
    alt: "Enterprise rack switches with cleanly terminated high-density blue Cat6 patch cables",
  },
  {
    slug: "computers",
    title: "Computers & Accessories",
    icon: "computers",
    summary:
      "Desktops, monitors, and docks for office fit-outs, including j5create where a USB-C dock is the right part.",
    detail:
      "We specify desk hardware with the cabling, so a new row of workstations is not waiting on a separate supplier for monitors and docks. j5create docks and adapters are used when a seat needs them.",
    image: "/images/workstations.jpg",
    alt: "Laptop open on a long counter beside a window in a bright office",
  },
  {
    slug: "access",
    title: "Biometric & Access Control",
    icon: "access",
    featured: true,
    summary:
      "Card and fingerprint readers on staff doors, server rooms, and clinic stores.",
    detail:
      "The controller records who passed and when. We put readers only on the doors that need them — a pharmacy store and a server room, not every corridor — and we leave the admin password with the facility manager, written on the handover sheet.",
    image: "/images/biometric-scan.jpg",
    alt: "Commercial biometric fingerprint reader and RFID card access control terminal in corporate office",
  },
  {
    slug: "fire-alarm",
    title: "Fire Alarm & Intrusion Alarm",
    icon: "fire-alarm",
    featured: true,
    highlight: true,
    summary:
      "Addressable fire panels, detectors, call points, and door contacts on the same visit plan.",
    detail:
      "Smoke and heat detectors, manual call points, and sounders are placed against the drawing. Intrusion contacts on doors and glass sit on a separate circuit, so a night alarm does not look like a fire alarm. We test both before handover.",
    image: "/images/fire-alarm-pro.jpg",
    alt: "Commercial addressable fire alarm control panel and emergency voice evacuation station with certified conduit",
  },
  {
    slug: "fire-safety",
    title: "Fire & Safety Systems",
    icon: "fire-safety",
    summary:
      "Extinguishers, hose reels, and emergency lights placed where the drawing puts them.",
    detail:
      "Hardware is mounted to the schedule, not where there happens to be a free screw. We note the service date on each extinguisher location and leave that list with the building supervisor.",
    image: "/images/fire-protection.jpg",
    alt: "Commercial fire protection setup with fire extinguisher, hose reel cabinet, and safety signage",
  },
  {
    slug: "home-office",
    title: "Home & Office Projects",
    icon: "home-office",
    featured: true,
    summary:
      "A villa or a small office on one drawing: cameras, intercom, data points, and the rack.",
    detail:
      "Homeowners in Malaz and office managers in Olaya usually need the same four things: a gate or door view, a recorder, a few data points, and a cabinet that is not a tangle. We price that as one scope.",
    image: "/images/home-office-pro.jpg",
    alt: "Modern smart villa gate video intercom station and dome security camera on private compound entrance",
  },
  {
    slug: "smart-office",
    title: "Smart Office Installation",
    icon: "smart-office",
    summary:
      "Meeting-room displays, desk connectivity, and door access landing in one cabinet.",
    detail:
      "The display, the camera, and the door reader should not be three vendors blaming the cable. We terminate them in the same rack and leave a port map on the cabinet door.",
    image: "/images/data-center.jpg",
    alt: "State-of-the-art server data center with blue illumination, cable management trays, and server racks",
  },
  {
    slug: "products",
    title: "Product Sales",
    icon: "products",
    summary:
      "Cameras, recorders, readers, cable, and racks, quoted as a parts list you can check.",
    detail:
      "You can buy the hardware without the labour. The quote separates parts from installation, with model lines written out so your procurement team can compare them.",
    image: "/images/product-sales-pro.jpg",
    alt: "White PTZ dome camera on a bracket beside a pole and a junction box",
  },
  {
    slug: "maintenance",
    title: "Installation & Maintenance",
    icon: "maintenance",
    summary:
      "A clear repair visit for cameras and alarms, including systems another company installed.",
    detail:
      "Tell us what stopped and we will inspect the cameras, recorder, readers, or alarm and restore what we can. If another company installed the system, we still take it on when we can open the recorder and follow the cabling. Any replacement is quoted before that work goes ahead.",
    image: "/images/maintenance2.jpg",
    alt: "Field systems technician using digital multimeter to test and verify control panel circuits",
  },
];

export const industries = [
  {
    index: "01",
    title: "Commercial offices",
    text: "Olaya and King Fahd Road fit-outs: cameras at reception, data to desks.",
  },
  {
    index: "02",
    title: "Warehouses & logistics",
    text: "Aisle, dock, and yard coverage, with retention long enough for a dispute.",
  },
  {
    index: "03",
    title: "Clinics & schools",
    text: "Corridors, stores, and a fire panel the supervisor can actually silence.",
  },
  {
    index: "04",
    title: "Villas & compounds",
    text: "Gate station, parking dome, and a monitor inside the house.",
  },
  {
    index: "05",
    title: "Hospitality",
    text: "Lobby, corridor, and the back door the night shift uses.",
  },
];

export const steps = [
  {
    index: "01",
    title: "Call Malaz",
    text: "Phone or the form. Tell us the district and the building type.",
  },
  {
    index: "02",
    title: "Site survey",
    text: "We photograph the rooms, the gate, and the cabinet location.",
  },
  {
    index: "03",
    title: "Parts list",
    text: "Camera schedule, cable runs, and a price split into parts and labour.",
  },
  {
    index: "04",
    title: "Install and test",
    text: "One crew terminates, labels, and proves each view and each sounder.",
  },
  {
    index: "05",
    title: "Handover",
    text: "Passwords, a test sheet, and a maintenance slot on the same desk.",
  },
];

export const projects = [
  {
    slug: "sulay-store",
    tag: "CCTV, logistics",
    title: "Aisle and dock cameras for a south Riyadh store",
    summary:
      "A logistics store in Al Sulay: 22 bullet cameras, two recorders, and 30 days of retention on the aisles, the dispatch dock, and the yard gate.",
    image: "/images/united-security-cameras.jpg",
    scene: "/images/warehouse.jpg",
    alt: "Commercial high-pole security camera cluster with multi-angle bullet and PTZ cameras for logistics yard coverage",
    facts: ["22 bullet cameras", "2 recorders", "Yard gate included"],
  },
  {
    slug: "olaya-fitout",
    tag: "Cabling, offices",
    title: "Labeled Cat6 for an Olaya office fit-out",
    summary:
      "Forty-six data points across two floors, two cabinets, and a test sheet. Meeting rooms share the same rack as the reception camera.",
    image: "/images/network-switchers.jpg",
    scene: "/images/office.jpg",
    alt: "Enterprise network switch racks with high-density Cat6 patch cabling and port termination",
    facts: ["46 data points", "2 cabinets", "Test sheet at handover"],
  },
  {
    slug: "malaz-villa",
    tag: "Intercom, access",
    title: "Gate camera and four readers for a Malaz villa",
    summary:
      "A video station at the gate, a dome over the parking, and card readers on four doors. The monitor sits inside, not only on a phone.",
    image: "/images/intercom-modern.jpg",
    scene: "/images/villa.jpg",
    alt: "Modern smart video door station with illuminated keypad at a villa entrance",
    facts: ["Gate station", "4 card readers", "Parking dome"],
  },
  {
    slug: "salah-aldin-clinic",
    tag: "Fire alarm",
    title: "Addressable panel for a clinic off Salah Al-Din",
    summary:
      "Fourteen detectors, manual call points at the stairs, and sounders the nurses’ station can hear. Intrusion contacts on the store stay on a separate circuit.",
    image: "/images/fire-alarm.jpg",
    scene: "/images/smoke-detector.jpg",
    alt: "Illuminated commercial emergency strobe alarm and sounder on clinic corridor wall",
    facts: ["14 detectors", "1 addressable panel", "Separate intrusion circuit"],
  },
];

export const faqs = [
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
    a: "Our Malaz office, on sales@sysnet-ksa.com. If the matter is urgent, call +966 53 298 0149. Saturday to Thursday, 9:00 to 18:00.",
  },
];

export const stats = [
  { value: 11, suffix: "", label: "Service lines on the list" },
  { value: 46, suffix: "", label: "Data points on a recent Olaya fit-out" },
  { value: 22, suffix: "", label: "Cameras on a typical Al Sulay store scope" },
];
