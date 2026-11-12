import type { Locale } from "@/lib/locale";
import { guideExtras } from "./guides-more";

export type Guide = {
  h1: string;
  seoTitle: string;
  seoDescription: string;
  sections: { heading: string; body: string[] }[];
  faq: { q: string; a: string }[];
  related: string[];
};

const en = {
  cctv: {
    h1: "CCTV installation in Riyadh",
    seoTitle: "CCTV installation in Riyadh for your site",
    seoDescription:
      "See gates, docks and corridors, with playback your team can find. Cameras are surveyed, installed and tested with you in Riyadh. Request a free site survey.",
    related: ["cabling", "access", "intercom"],
    sections: [
      {
        heading: "CCTV installation in Riyadh starts with the views you need",
        body: [
          "A gate, a loading dock, or a corridor only helps when you can see it and play it back later. CCTV installation in Riyadh puts a fitting camera on each of those points and connects it to a recorder your team can search.",
          "Storage matches the days you need, channels are labelled, and every view is played back with you before we leave.",
        ],
      },
      {
        heading: "What you gain once the cameras are live",
        body: [
          "Live video and past footage open on the phones you name, whether you are in the building or away for the day.",
          "Offices and villas are often kept for about 30 days, and a warehouse recorder is sized when a shipment question needs a longer record.",
          "The gate, the dock, or the store is a labelled channel, so a manager finds it without opening every feed.",
          "One team surveys, cables, and commissions the recorder, then proves each picture with you before the job is finished.",
        ],
      },
      {
        heading: "Buildings that need this coverage",
        body: [
          "Villa and compound owners need the gate, the parking, and a record of who arrived.",
          "Office managers need reception, the lift lobby, and the door staff use after hours.",
          "Warehouse teams need the aisle, the dispatch dock, and the yard gate.",
          "Clinics, schools, and shops need corridors and stores, aimed so private rooms stay private.",
        ],
      },
      {
        heading: "From the site walk to everyday use",
        body: [
          "The survey marks every view on the floor plan, so each lens matches the door, the yard, or the room.",
          "Design and an itemised quotation list cameras, the recorder, cable, and labour as separate lines you can approve.",
          "Installation mounts the cameras and numbers both ends of the cable back to the cabinet.",
          "Testing plays every view on site, including the gate and the dock, with you beside the recorder.",
          "Training shows your team the app, the search, and how to save a clip.",
          "Ongoing support is a booked check or repair, using the same channel list and cabinet labels.",
        ],
      },
      {
        heading: "Camera brands we install",
        body: [
          "We install Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, chosen for the light, the distance, and the recorder. Each model is a line on the quotation, so you see it before anything is ordered.",
        ],
      },
    ],
    faq: [
      {
        q: "What changes the cost of a camera system?",
        a: "Cost follows the number of views, the cable routes, the days you keep, and whether the building is a villa, an office, or a warehouse. The quotation lists cameras, recorder, cable, and labour separately, so you approve only the scope this site needs.",
      },
      {
        q: "How long does installation take?",
        a: "A villa with a gate and a few cameras is a shorter visit once the equipment is on site. A warehouse or a multi-floor office takes longer. The quotation includes a practical schedule before any bracket is drilled.",
      },
      {
        q: "Can you add cameras to a system we already have?",
        a: "Yes. We inspect the recorder, the free disk space, and the cabling, then show which cameras can stay and where new views should go. You keep what still serves the building, and the quotation covers only the extra views and parts the site needs.",
      },
      {
        q: "Can I watch the cameras on my phone?",
        a: "Yes. During setup we connect the recorder to the mobile app and add the phones you name, such as the owner or the facility manager. Before we leave we open a live view together, so you can watch the site and find a recording.",
      },
      {
        q: "How many days of recording should we keep?",
        a: "Most offices and villas keep about 30 days. A warehouse that must answer a shipment question may need longer, and the recorder is sized for that before it is ordered. You choose the period on the quotation.",
      },
    ],
  },
  intercom: {
    h1: "Video intercom installation in Riyadh",
    seoTitle: "Video intercom installation in Riyadh villas",
    seoDescription:
      "See visitors and open the gate from a monitor inside your villa or lobby. Video door stations are cabled and tested across Riyadh. Request a free site survey.",
    related: ["cctv", "access", "home-office"],
    sections: [
      {
        heading: "Video intercom installation in Riyadh for the gate and the lobby",
        body: [
          "Someone at the gate should be seen and let in from inside the house. Video intercom installation in Riyadh runs a station to a monitor where people actually sit.",
          "You get a picture of the visitor, a lock release tested from that monitor, and a cable route agreed before anything is fixed. Two households or two tenants can each have a button and a screen.",
        ],
      },
      {
        heading: "What a wired door station gives you",
        body: [
          "You see the visitor and speak to them from the majlis, the reception desk, or another monitor you choose.",
          "The lock opens from that screen, tested on the strike or maglock already on the door when it can be released safely.",
          "A second button calls a second monitor when one entrance is shared.",
          "The station, the screen, and the lock sit on one drawing, so the route is known before the conduit goes in.",
        ],
      },
      {
        heading: "Who this door station is for",
        body: [
          "Villa owners need a gate station and a monitor inside, so the family can answer without walking to the wall.",
          "Compound gates need one station when several homes share the entrance.",
          "Office lobbies need the station to call reception, where a visitor is greeted and signed in.",
          "Clinics and small retail units need the front door on a screen at the staffed reception.",
        ],
      },
      {
        heading: "How a gate survey becomes a working door",
        body: [
          "The survey photographs the gate, measures the cable, and notes where you want to answer.",
          "Design and an itemised quotation separate the station, the monitor, the power supply, the lock interface, and labour.",
          "Installation pulls the cable and mounts the station and the indoor screen in the places you approved.",
          "Testing opens the lock from the monitor with you watching, including a second button if you have one.",
          "Training shows who answers which button, and how to add a user if the station asks for one.",
          "Ongoing support is a booked visit if the lock, the screen, or the station needs attention later.",
          "The station and monitor are proven, widely supported brands chosen for your site, and each model is named before you approve it.",
        ],
      },
    ],
    faq: [
      {
        q: "Can the gate ring a monitor inside, as well as a phone?",
        a: "Yes. The usual villa scope is a station at the gate, cable to a monitor in the house, and a lock release tested before we leave. A phone can be added as well. The indoor screen still works when the phone is elsewhere.",
      },
      {
        q: "Will you use the lock already on the gate?",
        a: "Yes, when it can be released safely from the monitor. The survey checks the strike or maglock and includes the right interface on the quotation. If the present lock needs a different part, that part is a line you can see before work starts.",
      },
      {
        q: "Can two families share one entrance?",
        a: "Yes. A second button calls a second monitor, and both are drawn on the same plan. Each household answers its own call. The extra screen is listed on its own line, so you can see it before you approve.",
      },
      {
        q: "Should the gate also have a recording camera?",
        a: "Add one when you want a record of the gate at times nobody answers. The intercom shows the visitor and opens the door. A camera keeps the approach on the recorder. Many villas take both on a single survey.",
      },
      {
        q: "Is a lobby station different from a villa gate?",
        a: "The method is the same and the scale changes. A villa calls a monitor in the house. A lobby station calls reception, or a second desk if two tenants share the door. Tell us which one it is and the quotation follows that layout.",
      },
    ],
  },
  cabling: {
    h1: "Structured Network Cabling Installation in Riyadh",
    seoTitle: "Cat6 Structured Network Cabling Installation in Riyadh | Sysnet",
    seoDescription:
      "Certified Cat6, Cat6a, and fiber optic network cabling installation for offices and warehouses in Riyadh and Dammam. Tested, labeled, and certified. Call +966 53 298 0149.",
    related: ["cctv", "smart-office", "computers"],
    sections: [
      {
        heading: "Network cabling in Riyadh that you can trace later",
        body: [
          "A new floor fails on Monday when desks, cameras, and door readers have nowhere labelled to land. Network cabling in Riyadh is the permanent link from the main cabinet to each outlet, tested and numbered while the ceiling is still open.",
          "You receive a test report that matches the numbers on the panel and the faceplate. Later cameras or readers can land in the same cabinet because space and labels were planned with the cable.",
        ],
      },
      {
        heading: "What labelled cabling changes day to day",
        body: [
          "Each desk, camera, and reader has a number you can read at both ends, so a move or a fault starts at the right outlet.",
          "The test report is yours to keep, with the result of every cable written against its number.",
          "Floor cabinets are left tidy, with room for the next device instead of a second pile of cable.",
          "Cameras, door readers, and desk data can share one cabinet when they are part of the same fit-out.",
        ],
      },
      {
        heading: "Sites that book cabling with the fit-out",
        body: [
          "Offices need an outlet per seat, plus the meeting room and the reception desk.",
          "Warehouses need data at the dock office, the gate, and the cabinets that will hold recorders.",
          "Clinics and schools need outlets at reception, the stores, and the rooms that will hold a panel.",
          "Villas and small offices need a short set of points and one cabinet the landlord will accept.",
        ],
      },
      {
        heading: "How a cabling job is carried through",
        body: [
          "The survey counts outlets per room, photographs the riser, and agrees where the cabinet will stand.",
          "Design and an itemised quotation separate cable, panels, faceplates, fibre where the building needs it, and labour.",
          "Installation pulls and terminates while the routes are still visible, with both ends numbered as we go.",
          "Testing produces the report you keep, one result for every outlet on the drawing.",
          "Training walks your facility lead through the port map fixed to the cabinet door.",
          "Ongoing support is a booked visit when a desk moves or a later device needs a free port.",
          "Cable, panels, and faceplates are proven, widely supported brands chosen for your site, listed line by line.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you install Cat6, fibre, or both?",
        a: "Cat6 out to desks is the usual office scope. Fibre is used between cabinets when the distance or the building’s existing riser calls for it. The survey says which one each route needs, and both appear as their own lines if the floor uses them.",
      },
      {
        q: "When should we book the survey?",
        a: "Book it while the ceiling is still open. Routes marked then stay out of the way of furniture and finished ceilings. Send the district, the floor count, and the seat count, and the visit is planned around the fit-out programme you already have.",
      },
      {
        q: "Can cameras and door readers use this cabinet?",
        a: "Yes. We leave labelled space so a camera or a reader lands in the same rack. Tell us during the survey if those systems are part of the fit-out. Their cables are numbered with those outlets and shown on the same port map.",
      },
      {
        q: "What sets the price of a cabling job?",
        a: "Price follows the number of outlets, the floors, the length of the routes, and whether fibre is required between cabinets. Labour is a separate line from materials. You see both before the work is booked, and a change in seat count changes the lines rather than a lump sum.",
      },
      {
        q: "Do you survey offices in Dammam?",
        a: "Yes. Cabling surveys cover Dammam and the Eastern Province as well as the capital, for offices still being fitted out and for smaller rooms adding a cabinet. Tell us the city and the district. Other Saudi cities are arranged on request.",
      },
    ],
  },
  computers: {
    h1: "Office computers and accessories in Riyadh",
    seoTitle: "Office computers and accessories in Riyadh",
    seoDescription:
      "Open a ready desk, with a screen, a dock and a live data point at every seat. Office fit-outs are supplied and set across Riyadh. Request a free site survey.",
    related: ["cabling", "smart-office", "products"],
    sections: [
      {
        heading: "Office computers and accessories in Riyadh, ready with the cable",
        body: [
          "A row of new desks still sits idle when the screens and docks arrive from somewhere else, weeks after the cable. Office computers and accessories in Riyadh are specified with that cable, so each seat has power, data, a screen, and a dock on the day you open.",
          "You see every part on its own line: computers, monitors, mounts, and docks. Labour to set them is separate, and each seat is tied to a numbered outlet.",
        ],
      },
      {
        heading: "What a ready desk row gives the office",
        body: [
          "People sit down to a screen and a network link that already matches the cabling sheet.",
          "Laptops you already own connect through a dock only where USB-C is the right fit.",
          "Procurement can compare monitors, mounts, and docks because none of them is hidden in a single total.",
          "The same visit can set each seat and prove the outlets, so Monday is a workday rather than a chase.",
        ],
      },
      {
        heading: "Offices that ask for the full desk",
        body: [
          "New fit-outs need a complete seat: screen, dock or desktop, and a numbered point.",
          "Growing teams need extra seats that match the row already in the room.",
          "Meeting rooms need a screen and a connection kept separate from the staff seats.",
        ],
      },
      {
        heading: "How each seat is specified and set",
        body: [
          "The survey confirms the seat count, who brings a laptop, and which monitors you have already chosen.",
          "Design and an itemised quotation split computers, screens, mounts, docks, and labour into lines you can check.",
          "Installation sets each seat against its numbered outlet and connects the screen and the dock.",
          "Testing confirms a network link and a picture at every place on the list.",
          "Training is a short walk-through of the dock, the monitor input, and who to call if a seat is added.",
          "Ongoing support is a booked visit when a dock, a screen, or a new seat needs attention.",
        ],
      },
      {
        heading: "Docks and brands on the seat list",
        body: [
          "j5create docks and adapters are specified when a laptop needs USB-C at the seat. They are a line of their own, added only for the seats that need them. Screens and computers are named the same way.",
        ],
      },
    ],
    faq: [
      {
        q: "Can we bring our own laptops?",
        a: "Yes. Tell us the seat count and that people bring laptops. We then specify screens, mounts, and a dock where USB-C is the right connection. Desktops are added only for seats that need them, and each choice is visible on the quotation.",
      },
      {
        q: "When do you include a j5create dock?",
        a: "A j5create dock is included when the laptop needs a USB-C connection to the screen and the network. It appears as its own line. Seats that already have the right ports are quoted without one, so you pay for the adapter only where that seat needs it.",
      },
      {
        q: "Can the seats be set on the same visit as the cabling?",
        a: "Yes, and that is the smoother sequence. The outlet and the dock are checked together, and each seat is written against its outlet number. If the furniture is arriving later, we agree a second day for the screens so the cable work is finished first.",
      },
      {
        q: "What changes the cost of a desk fit-out?",
        a: "Cost follows the seat count, the screen size, whether docks are required, and whether you need desktops or only accessories for laptops you own. Labour is separate from the hardware. A change in headcount changes those lines before you approve the order.",
      },
      {
        q: "How long does it take to set a row of desks?",
        a: "The schedule follows the seat count and whether the cable and furniture are already in place. A single room is a short setting visit. A multi-floor fit-out is sequenced with the cabling. You see the timing on the quotation before the hardware is ordered.",
      },
    ],
  },
  access: {
    h1: "Access control and biometric systems in Riyadh",
    seoTitle: "Access control and biometric systems in Riyadh",
    seoDescription:
      "Know who came through the doors that matter, and when. Card and fingerprint readers are surveyed and tested for Riyadh buildings. Request a free site survey.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "Access control and biometric systems in Riyadh for the doors that matter",
        body: [
          "A staff entrance, a server room, or a clinic store should show who passed and when, without a reader on every corridor. Access control and biometric systems in Riyadh put a card or fingerprint reader only on the doors that need a record.",
          "The controller sits in the cabinet with your other systems. You keep the admin password, the first people are enrolled with you, and the door is tested from both sides.",
        ],
      },
      {
        heading: "What a controlled door gives you",
        body: [
          "A log shows who entered and when, readable by the person who manages the building.",
          "Cards suit busy doors, gloves, and wet hands. Fingerprint suits doors where a shared card would be passed around.",
          "The admin password stays with your facility manager, written down for the person who will use it.",
          "Doors that must release on a fire alarm are checked so the lock and the exit agree.",
        ],
      },
      {
        heading: "Where readers earn a place",
        body: [
          "Offices need the after-hours entrance, the server room, and sometimes reception.",
          "Clinics and pharmacies need the store and the room that holds medicine or records.",
          "Warehouses need the dock office and any internal door that should keep a log.",
          "Villas and compounds often need the gate and one internal door, not a reader on every room.",
        ],
      },
      {
        heading: "How readers are chosen, fitted, and handed over",
        body: [
          "The survey walks the doors with you and notes who must enter after hours.",
          "Design and an itemised quotation name the reader type, the lock, the controller, and labour for each door.",
          "Installation fits the readers and brings the cable back to a labelled controller in the cabinet.",
          "Testing opens each door from the safe side and the outside, and checks a fire release where the leaf has one.",
          "Training enrols the first users with you and shows how to add or remove a person.",
          "Ongoing support is a booked visit when staff change or a door needs another look.",
          "Readers and controllers are proven, widely supported brands chosen for your site, named on the quotation for each door.",
        ],
      },
    ],
    faq: [
      {
        q: "Should a door use a card or a fingerprint?",
        a: "The survey picks one per door. Fingerprint is used where a shared card would be lost or handed around. Cards are used on busy doors, and where people wear gloves or have wet hands. You see the reason on the door list before you approve the readers.",
      },
      {
        q: "Who keeps the admin password?",
        a: "Your facility manager does. We enrol the first users with you, then leave the admin password with the person who will add and remove staff. A short walkthrough covers that step, so day-to-day changes stay inside your team.",
      },
      {
        q: "Can a villa have readers as well as an office?",
        a: "Yes. A villa or compound often needs the gate and one internal door. An office may need reception after hours and a server room. The survey lists only those doors, so you are paying for records you will actually use.",
      },
      {
        q: "What if the door must open during a fire alarm?",
        a: "Tell us during the survey. We check the fire release with the lock, so people can leave when the alarm sounds. That interface is a line on the quotation when the door needs it, and it is tested with the reader before we finish.",
      },
      {
        q: "Can you add readers to doors that already have locks?",
        a: "Yes. We look at the existing lock, the frame, and the cable route, then say which doors can take a reader as they are. Where a lock or a cable needs replacing, that work is written on the quotation before installation is booked.",
      },
    ],
  },
  "fire-alarm": {
    h1: "Fire alarm and intrusion alarm systems in Riyadh",
    seoTitle: "Fire alarm and intrusion alarm systems in Riyadh",
    seoDescription:
      "Hear a fire alarm your duty team can identify, with night alarms kept separate. Panels, detectors and sounders are tested in Riyadh. Request a free site survey.",
    related: ["fire-safety", "access", "cctv"],
    sections: [
      {
        heading: "Fire alarm and intrusion alarm systems in Riyadh that your team can use",
        body: [
          "A panel in a locked room, or a night alarm that sounds like a fire, leaves the person on duty unsure what to do. Fire alarm and intrusion alarm systems in Riyadh place detectors, call points, and sounders where people actually move, with intrusion on its own circuit.",
          "You get an addressable panel the supervisor can reach, a test of both circuits, and a device list.",
        ],
      },
      {
        heading: "What a clear alarm system changes",
        body: [
          "Smoke and heat detectors match the room, so a kitchen, a ward corridor, and a warehouse are treated differently.",
          "Manual call points sit on the exits people use, and sounders are proved where the duty team can hear them.",
          "Door and glass contacts for the night stay on a separate circuit, so a night event is read as intrusion.",
          "The supervisor can silence a test and see which device called, from a panel placed where the shift can reach it.",
        ],
      },
      {
        heading: "Buildings that need detection and a night alarm",
        body: [
          "Clinics need detectors in corridors and rooms, call points at the stairs, and a panel the station can hear.",
          "Schools need coverage on classrooms, corridors, and the exits used at the end of the day.",
          "Offices need the floors occupied by staff, with the panel outside a locked plant room.",
          "Warehouses need detection suited to the volume of the hall, plus contacts on the doors that matter at night.",
        ],
      },
      {
        heading: "How the alarm is designed and proved",
        body: [
          "The survey marks detectors, call points, and sounders, using your drawing when you have one.",
          "Design and an itemised quotation list the panel, the devices, the intrusion circuit, and labour separately.",
          "Installation places each device against that drawing and identifies the fire cable in the cabinet.",
          "Testing sounds the alarms with the supervisor present and proves the intrusion circuit on its own.",
          "Training shows how to read a device address and how to silence a test on the panel they will use.",
          "Ongoing support is a booked visit for a device fault, a change of layout, or a scheduled check.",
          "Panels, detectors, and sounders are proven, widely supported brands chosen for your site, listed against the drawing.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you install addressable fire panels?",
        a: "Yes. Detectors, call points, and sounders are placed against the drawing and given addresses the panel can show. During the test we trigger points with the supervisor there, so they can see which device called and how to silence the test before we leave.",
      },
      {
        q: "How is the night alarm kept distinct from fire?",
        a: "Door and glass contacts sit on their own circuit. A night event is shown as intrusion, and a fire event stays on the fire panel. Both are tested separately before we finish. You hear each one with the person who will be on duty.",
      },
      {
        q: "Can you work with a system already in the building?",
        a: "Yes. We inspect the panel, the devices, and the wiring, then tell you what can stay and what should be replaced. The quotation covers the gaps. Extinguishers and emergency lights can be surveyed the same day, on their own lines.",
      },
      {
        q: "What affects the cost and the time on site?",
        a: "Cost and time follow the number of devices, the size of the building, whether a drawing already exists, and whether intrusion contacts are included. You receive an itemised quotation and a schedule after the survey, before equipment is ordered or ceilings are closed.",
      },
      {
        q: "Do you cover clinics and warehouses in Dammam?",
        a: "Yes. Alarm surveys cover Dammam and the Eastern Province as well as the capital, including clinics, schools, offices, and warehouses. Tell us the city and the district. Sites elsewhere in Saudi Arabia are arranged on request.",
      },
    ],
  },
  "fire-safety": {
    h1: "Fire safety equipment in Riyadh",
    seoTitle: "Fire safety equipment in Riyadh buildings",
    seoDescription:
      "Find extinguishers, hose reels and emergency lights on the exit path. Equipment is placed and recorded for buildings in Riyadh. Request a free site survey.",
    related: ["fire-alarm", "maintenance", "home-office"],
    sections: [
      {
        heading: "Fire safety equipment in Riyadh, placed on the way out",
        body: [
          "An extinguisher behind an open door, or an emergency light nobody sees from the stair, is in the building and still hard to use. Fire safety equipment in Riyadh is mounted where the exit drawing puts it: extinguishers, hose reels, and emergency lights on the route people walk.",
          "You keep a list of each location and the service date. The next inspection starts from that list, and the supervisor knows where every piece stands.",
        ],
      },
      {
        heading: "What correctly placed equipment gives you",
        body: [
          "Extinguishers sit where they can be reached, clear of doors that would hide them.",
          "Hose reels are checked for reach along the route people actually walk.",
          "Emergency lights are placed so the exit stair can still be seen, and each fitting is tested from its own supply.",
          "A written list names every location and service date for the person who runs the building.",
        ],
      },
      {
        heading: "Sites that need a safety schedule",
        body: [
          "Offices need a short list on each floor, matched to the exits staff use.",
          "Warehouses need coverage along the aisles and at the dock, where a reel has to reach.",
          "Clinics and schools need equipment at the stairs and the corridors, visible to the people on duty.",
          "Small villas and neighbourhood offices need a counted set, written down, rather than a corridor full of spare units.",
        ],
      },
      {
        heading: "How the equipment is chosen and recorded",
        body: [
          "The survey walks the exits, photographs what is already on the walls, and notes what is missing.",
          "Design and an itemised quotation name each extinguisher, reel, and light, separate from any alarm panel.",
          "Installation mounts each piece to the agreed spot and records the service date as it goes up.",
          "Testing checks reel reach and drops the supply to each emergency fitting.",
          "Training walks the supervisor through the list, so the next check has a starting point.",
          "Ongoing support is a booked visit when a service date comes due or a layout changes.",
          "Extinguishers, reels, and emergency lights are proven, widely supported brands chosen for your site, named on the list you approve.",
        ],
      },
    ],
    faq: [
      {
        q: "Is this the same job as the fire alarm panel?",
        a: "They are different scopes that can share one survey. The panel detects and warns. Extinguishers, hose reels, and emergency lights are what people use on the way out or on a small fire. Each is priced on its own lines, so you can approve one without the other.",
      },
      {
        q: "Can a small office book this on its own?",
        a: "Yes. Tell us the district and send photos of what is already on the walls. A short office often needs a counted set of extinguishers and lights, plus a list of service dates. The visit is scaled to that list.",
      },
      {
        q: "What do we receive when the work is finished?",
        a: "You receive the equipment in the agreed places, a location list, and the service date for each extinguisher. The supervisor walks the route with us. That list is what the next inspection uses, and it stays with the building.",
      },
      {
        q: "What changes the cost?",
        a: "Cost follows the number of extinguishers, reels, and lights, and how far the exit routes run. Existing pieces that are still in date and in the right place stay on the list. New pieces are quoted only where the walk shows a gap.",
      },
      {
        q: "Do you check emergency lights as well as extinguishers?",
        a: "Yes. We place them where the exit needs them and test each fitting by dropping its supply. A light that only looks fine under the room lighting is proved on its own. The result is noted with the location list you keep.",
      },
    ],
  },
  "home-office": {
    h1: "Home and office security systems in Riyadh",
    seoTitle: "Home and office security systems in Riyadh",
    seoDescription:
      "Cameras, a door station, data points and one cabinet, planned on one visit for a villa or small office in Riyadh. Request a free site survey.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "Home and office security systems in Riyadh on a single drawing",
        body: [
          "A villa or a small office needs a door view, a recorder, a few data points, and a cabinet. Home and office security systems in Riyadh put them on one drawing and one visit plan.",
          "You still see cameras, the door station, cable, and labour as separate lines. The holes, the cabinet, and the test happen together.",
        ],
      },
      {
        heading: "What one coordinated visit gives you",
        body: [
          "The gate or the front door is both a live picture and a recorded view.",
          "A monitor inside the villa answers the station, so the household is not depending on one phone.",
          "Data points and the recorder share a cabinet that is labelled and small enough for the room you have.",
          "You approve one quotation, with every part visible, instead of matching three invoices after the fact.",
        ],
      },
      {
        heading: "Homes and offices this scope is written for",
        body: [
          "Villas need the gate, the parking, a monitor inside, and a recorder the family can open.",
          "Compounds need a shared gate plus the points that belong to one home.",
          "Small offices need reception coverage, a handful of data points, and a cabinet the landlord accepts.",
          "Clinics in a villa or a small block need the door, the store, and a tidy rack in one room.",
        ],
      },
      {
        heading: "How the combined scope is delivered",
        body: [
          "The survey lists what you already have and what is missing, including any rule the landlord sets for the cabinet.",
          "Design and an itemised quotation price only the lines you need, still shown separately.",
          "Installation pulls the shared routes once and lands them in one labelled cabinet.",
          "Testing checks the picture, the lock release, and the data outlet on the same visit when the site allows it.",
          "Training covers the app, the door monitor, and the labels on the cabinet.",
          "Ongoing support is a booked visit for any of those systems, with the original drawing to hand.",
        ],
      },
      {
        heading: "Brands used on home and office systems",
        body: [
          "Cameras are Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, chosen for the gate, the parking, or the reception desk and written as model lines.",
          "The door station and the cable are named on the same quotation, so the whole villa or office is one list you can read.",
        ],
      },
    ],
    faq: [
      {
        q: "Can one survey cover the gate, the cameras, and the data points?",
        a: "Yes. That is the usual home project: one drawing, one cabinet, and a quotation that still separates cameras, the door station, cable, and labour. You see each part before work starts, and the routes are drilled once.",
      },
      {
        q: "Do I have to take every system?",
        a: "Take the lines the building needs. If you only want cameras, the quotation is for cameras. This scope is for sites that want more than one system planned together, and the price follows the list.",
      },
      {
        q: "Is a small office treated like a villa?",
        a: "The method is the same. A villa is centred on the gate and a monitor inside. A small office is centred on reception, a few outlets, and a cabinet position the landlord will accept. Say which building it is and the survey follows that.",
      },
      {
        q: "What should we have ready for the visit?",
        a: "The district, whether it is a villa or an office, and which of the four pieces you already have: door station, cameras, data outlets, or cabinet. A floor sketch helps. If the office is leased, bring the landlord’s rule on where the cabinet may stand.",
      },
      {
        q: "Can the same team look after it later?",
        a: "Yes. A later check or repair is a booked visit, and the original drawing and labels come with it. Camera and alarm alerts are set to the phones you choose. You decide who receives them, and we confirm a test alert before we leave.",
      },
    ],
  },
  "smart-office": {
    h1: "Smart office installation in Riyadh",
    seoTitle: "Smart office installation in Riyadh workplaces",
    seoDescription:
      "Walk into a meeting room where the display, the door and every desk already work. Smart office fit-outs are surveyed across Riyadh. Request a free site survey.",
    related: ["cabling", "access", "computers"],
    sections: [
      {
        heading: "Smart office installation in Riyadh that works on the first meeting",
        body: [
          "A meeting room fails in the first week when the display, the door, and desks were left to three different people. Smart office installation in Riyadh lands the screen, the data, and the reader in one cabinet, with a port map on the door.",
          "You can play the display, open the door, and use the table outlet on the day the room is handed over. The map says which port is which.",
        ],
      },
      {
        heading: "What a finished meeting floor feels like",
        body: [
          "The display has a labelled route, so the picture comes on without a search above the ceiling.",
          "Desk rows have a numbered outlet and, where laptops need it, a dock specified with the seat.",
          "The door reader terminates in the same cabinet as the data, and the port map includes it.",
          "One crew tests the screen, the badge, and the table point before the room is called finished.",
        ],
      },
      {
        heading: "Floors this work is planned for",
        body: [
          "Headquarters need several meeting rooms and a desk row on the same cabinet plan.",
          "Branch offices need one meeting room and a short run of seats, labelled the same way.",
          "Clinics and training rooms need a display the presenter can trust and a door that keeps a log.",
          "Fitted-out towers need the work done before furniture fixes outlets in the wrong place.",
        ],
      },
      {
        heading: "How the rooms are surveyed and proved",
        body: [
          "The survey counts rooms and seats, checks the riser, and notes any screen you have already bought.",
          "Design and an itemised quotation name the display path, the outlets, the reader, and labour as separate lines.",
          "Installation terminates those cables in one cabinet and fixes the port map to the door.",
          "Testing plays the display, badges the door, and confirms the table outlet.",
          "Training walks your team through the map, the display input, and the door admin.",
          "Ongoing support is a booked visit when a room changes or a seat is added.",
        ],
      },
      {
        heading: "Brands on a smart office list",
        body: [
          "Where a room includes a camera, we install Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, chosen for that view and named on the quotation.",
          "Desk docks are j5create when a laptop needs USB-C. The dock is its own line, added for the seats that use it.",
        ],
      },
    ],
    faq: [
      {
        q: "What do you mean by a smart office?",
        a: "A meeting room and a desk floor that work: display, data, and door access, tested from one cabinet. A port map names every outlet. A controller is added only when the quotation names the model.",
      },
      {
        q: "Can door access be included on the same visit?",
        a: "Yes. The reader terminates in the same cabinet, and the port map includes it. We test the badge from both sides before the room is finished. If only some doors need a reader, those doors alone are on the list.",
      },
      {
        q: "We already bought the meeting-room screen. Can you connect it?",
        a: "Yes. Tell us the model during the survey. We test the path to that screen and include the cable, the outlet, and the labour. The screen you own stays on the job, and the quotation shows the work around it.",
      },
      {
        q: "When should the survey happen?",
        a: "Before furniture fixes the outlets. Send the floor, the number of meeting rooms, and the seat count. Routes agreed then match the tables and the door. A later survey is still useful, and it will say where a route has to work around finishes already in place.",
      },
      {
        q: "What drives the cost?",
        a: "Cost follows the number of rooms and seats, the display paths, and how many doors need a reader. Docks are listed only for laptops that need them. You approve an itemised quotation, and a change in room count changes the lines.",
      },
    ],
  },
  products: {
    h1: "CCTV and security equipment supplier in Riyadh",
    seoTitle: "CCTV and security equipment supplier in Riyadh",
    seoDescription:
      "Compare cameras, recorders, readers and cable by model before you buy. Equipment is quoted line by line for Riyadh and Dammam. Request a free site survey.",
    related: ["cctv", "cabling", "maintenance"],
    sections: [
      {
        heading: "CCTV and security equipment supplier in Riyadh, quoted line by line",
        body: [
          "A single package price hides the lens, the disk, and the reader type. A CCTV and security equipment supplier in Riyadh should give you model lines you can check, with labour left off until you ask for it.",
          "You can buy the hardware on its own, or add installation as a separate line. Either way the models stay visible.",
        ],
      },
      {
        heading: "What a parts quotation lets you do",
        body: [
          "Compare cameras, recorders, readers, cable, and racks by model, quantity, and price.",
          "Share the list with your contractor, or ask us to install it under a separate labour line.",
          "See disk size, lens, and reader type before you approve, because each one is written out.",
          "Change one line after a survey, and the rest of the list stays as you approved it.",
        ],
      },
      {
        heading: "Who orders equipment this way",
        body: [
          "Procurement teams need lines they can compare before a purchase order.",
          "Facility managers need a recorder, a reader, or a reel of cable matched to a site they already run.",
          "Contractors need parts for a building they are fitting, with the model written down.",
          "Villa owners need a short list for a gate and a recorder, without a packaged total.",
        ],
      },
      {
        heading: "How an equipment order is prepared",
        body: [
          "The survey, or the list you already have, sets the views, the doors, and the cable lengths.",
          "Design and an itemised quotation name the model, the quantity, and the price of each line.",
          "Supply is the delivery of those parts, with labour omitted until you add it.",
          "Testing applies when you ask us to install: every device on the list is proved on site.",
          "Training applies on installed orders, so your team can open the recorder or the reader.",
          "Ongoing support is available once the equipment is in, as a booked maintenance visit.",
        ],
      },
      {
        heading: "Brands we supply",
        body: [
          "Camera lines are Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, chosen for the view and written as models you can compare.",
          "j5create appears when the line is a dock or an adapter. If a listed model is the wrong part for the view, we say which line we would change, and why, before you approve the order.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I buy cameras without installation?",
        a: "Yes. The quotation is a parts list with model lines, and labour stays off it until you add installation. You can use your own contractor or ask us to fit the equipment later. The models on the list stay the same either way.",
      },
      {
        q: "Will the brands match what you install?",
        a: "Yes. Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung are the camera brands we specify, chosen per view. j5create is used for docks and adapters. Each model is a line of its own, so purchasing can compare it with another offer.",
      },
      {
        q: "Can our procurement team compare the lines?",
        a: "Yes. That is why they are written out. You see the model, the quantity, and the price, including disk size and lens where they matter. A single package figure is not how we quote. Your team can approve, drop, or swap a line.",
      },
      {
        q: "What if we already have a bill of materials?",
        a: "Send it, including any disk size or lens someone else proposed. We answer with model lines and note any line we would change for the view or the door, with the reason beside it. You approve the list before an order is placed.",
      },
      {
        q: "Do you supply equipment for Dammam sites?",
        a: "Yes. Parts are quoted for the capital and for Dammam and the Eastern Province. Supply to other cities in Saudi Arabia is agreed on the quotation. Tell us the city and whether you want equipment only or equipment plus installation.",
      },
    ],
  },
  maintenance: {
    h1: "Low Current & Security Systems Installation and Maintenance in Riyadh",
    seoTitle: "Security Systems & CCTV Installation and Maintenance in Riyadh | Sysnet",
    seoDescription:
      "Certified installation, repair, and preventive maintenance visits for CCTV cameras, access control, fire alarms, and network cabling in Riyadh. Call +966 53 298 0149.",
    related: ["cctv", "fire-alarm", "cabling"],
    sections: [
      {
        heading: "CCTV and security system maintenance in Riyadh, booked as a visit",
        body: [
          "A dark camera, a recorder that has stopped, or a reader that beeps and stays shut needs a visit with a clear brief. CCTV and security system maintenance in Riyadh is that visit: we find the fault, tell you what it will take to restore it, and prove the result with you.",
          "Alerts stay on the phones you choose. We also take on systems another company installed, once we can open the recorder and follow the cabling.",
        ],
      },
      {
        heading: "What a maintenance visit returns to you",
        body: [
          "A written note of what stopped, what we restored, and what still needs a part.",
          "App access refreshed for the people who should see the cameras or the alarm.",
          "Labels and a simple channel list when the cabinet was unmarked.",
          "A quotation for any cable or device that has to be replaced, before that work is booked.",
        ],
      },
      {
        heading: "Sites that book a repair or a check",
        body: [
          "Offices call when reception goes dark or a door reader stops logging.",
          "Warehouses call when a dock camera or a yard view drops out before a dispute.",
          "Villas call when the gate picture or the indoor monitor stops answering.",
          "Clinics and schools call when a sounder, a detector, or a store reader needs attention.",
        ],
      },
      {
        heading: "How a fault visit runs",
        body: [
          "The survey starts from what you tell us: a dark camera, a full disk, a reader, a sounder, or a cable damaged by other work.",
          "Design and an itemised quotation follow if parts or new cable are required, with those costs shown before the work.",
          "Installation replaces only the devices or cable the visit has identified.",
          "Testing proves the restored view, the door, or the sounder with you present.",
          "Training covers any new password, the app, and how to reach the right channel.",
          "Ongoing support is the next booked visit, using the notes from this one.",
        ],
      },
      {
        heading: "Systems and brands we look after",
        body: [
          "We service Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, and we take on another make when we can open the recorder and identify the cabling.",
          "Fire alarm, access, intercom, and data can share the same visit. If a part sits outside what we carry, the report says so and names the next step.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you service a system another company installed?",
        a: "Yes. We inspect the cameras, the recorder, and the cabling, restore access where we can, and report what can be kept and what needs replacing. After you approve it, you pay only for the parts the site still needs.",
      },
      {
        q: "Will alerts come to my phone?",
        a: "Yes. During setup we connect your cameras and alarm to the system’s mobile app and add the phones you choose, such as the owner, the facility manager, or the security team. Before we leave we send a test alert so you can see it arrive.",
      },
      {
        q: "What should we prepare before the visit?",
        a: "Tell us what stopped, the district, and the building type. If you have the passwords, have them ready. If the passwords are missing, say that and we will start from the recorder and the cabinet. A photo of the equipment room helps us bring the right parts.",
      },
      {
        q: "Do you replace cable, or only restart the recorder?",
        a: "We restore the recorder or the settings when they are the cause, and prove the picture with you. If the cable is damaged, the replacement is priced on the quotation and carried out once you approve.",
      },
      {
        q: "Can one visit cover cameras and the fire alarm?",
        a: "Yes. Cameras, access, intercom, and fire alarm can be booked together. Say which systems are misbehaving and we will plan the visit around them. Dammam and the Eastern Province are covered as well as the capital, and other Saudi cities are arranged on request.",
      },
    ],
  },
} satisfies Record<string, Guide>;
const ar: Record<keyof typeof en, Guide> = {
  cctv: {
    h1: "تركيب كاميرات مراقبة في الرياض",
    seoTitle: "تركيب كاميرات مراقبة في الرياض لموقعك",
    seoDescription:
      "راقب بوابة المبنى والرصيف والممرات، وارجع إلى التسجيل وقت الحاجة. نعاين الكاميرات ونركّبها معك في الرياض قبل التشغيل. اطلب معاينة مجانية للموقع.",
    related: ["cabling", "access", "intercom"],
    sections: [
      {
        heading: "تركيب كاميرات مراقبة في الرياض يبدأ من المشهد الذي تحتاجه",
        body: [
          "بوابة أو رصيف تحميل أو ممر لا يفيدك إلا إذا رأيته ورجعت إلى التسجيل لاحقًا. تركيب كاميرات مراقبة في الرياض يضع كاميرا مناسبة على كل نقطة ويربطها بجهاز تسجيل NVR/DVR يستطيع فريقك البحث فيه.",
          "تُضبط مدة الحفظ على الأيام التي تحتاجها، وتُعلَّم القنوات، ويُعاد عرض كل مشهد معك قبل المغادرة.",
        ],
      },
      {
        heading: "ماذا يتغيّر عندما تعمل الكاميرات",
        body: [
          "تشاهد البث المباشر والتسجيل على الجوالات التي تسميها، وأنت في المبنى أو خارجه.",
          "المكاتب والفلل تُضبط غالبًا على نحو 30 يومًا، ويُحدَّد حجم جهاز المستودع إذا احتاج سؤال الشحنة مدة أطول.",
          "البوابة والرصيف والمخزن قنوات مُعلَّمة، فيصل إليها المسؤول من غير فتح كل المشاهد.",
          "فريق واحد يعاين ويمد الكابلات ويشغّل الجهاز، ثم يثبت كل صورة معك قبل إنهاء العمل.",
        ],
      },
      {
        heading: "المباني التي تحتاج هذه التغطية",
        body: [
          "أصحاب الفلل والمجمعات السكنية يحتاجون البوابة والمواقف وسجلًا لمن وصل.",
          "مديرو المكاتب يحتاجون الاستقبال وبهو المصعد والباب الذي يُستخدم بعد الدوام.",
          "فرق المستودعات تحتاج الممر ورصيف الشحن وبوابة الساحة.",
          "العيادات والمدارس والمحلات تحتاج الممرات والمخازن، بزاوية تُبقي الغرف الخاصة بعيدة عن العدسة.",
        ],
      },
      {
        heading: "من المعاينة إلى الاستخدام اليومي",
        body: [
          "المعاينة تعلّم كل مشهد على مخطط الدور، فتناسب العدسة الباب أو الساحة أو الغرفة.",
          "التصميم وعرض السعر المفصّل يضعان الكاميرات وجهاز التسجيل والكابلات وأجور التركيب في بنود توافق عليها.",
          "التركيب يثبت الكاميرات ويرقّم طرفي الكابل حتى الخزانة.",
          "الاختبار يعيد كل مشهد في الموقع، بما فيه البوابة والرصيف، وأنت بجانب الجهاز.",
          "التدريب يشرح التطبيق والبحث وطريقة حفظ مقطع.",
          "الدعم المستمر زيارة محجوزة للفحص أو الإصلاح، بالقائمة والملصقات نفسها.",
        ],
      },
      {
        heading: "العلامات التي نركّبها",
        body: [
          "نركّب Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، وتُختار حسب الإضاءة والمسافة وجهاز التسجيل. كل موديل بند في عرض السعر تراه قبل الطلب.",
        ],
      },
    ],
    faq: [
      {
        q: "ما الذي يغيّر تكلفة نظام الكاميرات؟",
        a: "التكلفة تتبع عدد المشاهد ومسارات الكابلات ومدة الحفظ ونوع المبنى، فيلا أو مكتبًا أو مستودعًا. عرض السعر يفصل الكاميرات وجهاز التسجيل والكابلات وأجور التركيب، فتوافق على النطاق الذي يحتاجه موقعك فعلًا. بعد المعاينة تقارن البنود وتوافق على ما يناسب المبنى وحده.",
      },
      {
        q: "كم يستغرق التركيب؟",
        a: "فيلا ببوابة وبضع كاميرات زيارة أقصر بعد وصول الأجهزة. المستودع أو المكتب متعدد الأدوار يحتاج وقتًا أطول. يتضمن عرض السعر جدولًا عمليًا قبل تثبيت أي حامل. وبهذا تعرف موعد العمل قبل أن يُثبَّت أي حامل في الجدار.",
      },
      {
        q: "هل تضيفون كاميرات إلى نظام موجود؟",
        a: "نعم. نفحص جهاز التسجيل والمساحة المتبقية على القرص والكابلات، ثم نبيّن ما يبقى من الكاميرات وأين تُضاف المشاهد الجديدة. تحتفظ بما زال يخدم المبنى، ويغطي العرض الإضافات والقطع التي يحتاجها الموقع. فتدفع مقابل المشاهد الجديدة، وتبقى الكاميرات الصالحة كما هي.",
      },
      {
        q: "هل أشاهد الكاميرات على جوالي؟",
        a: "نعم. أثناء الإعداد نربط جهاز التسجيل بتطبيق الجوال ونضيف الأرقام التي تسميها، مثل المالك أو مدير المنشأة. وقبل المغادرة نفتح بثًا مباشرًا معك لتعرف كيف تشاهد الموقع وتصل إلى التسجيل. وهكذا تتأكد من طريقة المشاهدة والرجوع إلى التسجيل بنفسك.",
      },
      {
        q: "كم يومًا نحتفظ بالتسجيل؟",
        a: "أكثر المكاتب والفلل تحتفظ بنحو 30 يومًا. المستودع الذي يحتاج البت في سؤال شحنة قد يطلب مدة أطول، ويُحدَّد حجم الجهاز قبل طلبه. تختار المدة في عرض السعر. والمدة مكتوبة في العرض، ويسهل تعديلها إذا تغيّر استخدام المبنى.",
      },
    ],
  },
  intercom: {
    h1: "تركيب إنتركم مرئي في الرياض",
    seoTitle: "تركيب إنتركم مرئي في الرياض للفلل",
    seoDescription:
      "شاهد الزائر وتحدّث إليه وافتح البوابة من شاشة داخل الفيلا أو البهو. نمد المحطة ونجرّب القفل معك قبل التسليم في الرياض. اطلب معاينة مجانية للموقع.",
    related: ["cctv", "access", "home-office"],
    sections: [
      {
        heading: "تركيب إنتركم مرئي في الرياض للبوابة والبهو",
        body: [
          "من يقف على البوابة ينبغي أن يُرى ويُسمح له بالدخول من داخل البيت، حتى لو كان الجوال في غرفة أخرى. تركيب إنتركم مرئي في الرياض يوصل محطة عند البوابة أو في البهو بشاشة في المكان الذي يجلس فيه الناس.",
          "تحصل على صورة الزائر، وفتح قفل يُجرَّب من تلك الشاشة، ومسار كابل يُتفق عليه قبل التثبيت. ويمكن لأسرتين أو مستأجرين أن يملك كل منهما زرًا وشاشة.",
        ],
      },
      {
        heading: "ماذا تعطيك محطة الباب السلكية",
        body: [
          "ترى الزائر وتكلمه من المجلس أو من مكتب الاستقبال أو من شاشة أخرى تختارها.",
          "يُفتح القفل من تلك الشاشة، ويُجرَّب على القفل الموجود إذا أمكن تحريره بأمان.",
          "زر ثانٍ يتصل بشاشة ثانية عندما يشترك مدخل واحد بين طرفين.",
          "المحطة والشاشة والقفل على مخطط واحد، فيُعرف المسار قبل تركيب الماسورة.",
        ],
      },
      {
        heading: "لمن تُناسب محطة الباب",
        body: [
          "صاحب الفيلا يحتاج محطة على البوابة وشاشة في الداخل، فيرد الأهل من غير الذهاب إلى السور.",
          "بوابة المجمع السكني تحتاج الصورة نفسها عندما تشترك عدة بيوت في مدخل واحد.",
          "بهو المكتب يحتاج محطة تتصل بالاستقبال، حيث يُستقبل الزائر.",
          "العيادة والمحل الصغير يحتاجان الباب الأمامي على شاشة عند الاستقبال العامل.",
        ],
      },
      {
        heading: "كيف تصبح معاينة البوابة بابًا يعمل",
        body: [
          "المعاينة تصوّر البوابة وتقيس الكابل وتحدد المكان الذي تريد الرد منه.",
          "التصميم وعرض السعر المفصّل يفصلان المحطة والشاشة ومزوّد الطاقة ووصلة القفل وأجور التركيب.",
          "التركيب يمد الكابل ويثبت المحطة والشاشة الداخلية في المواضع التي وافقت عليها.",
          "الاختبار يفتح القفل من الشاشة وأنت تشاهد، ومع الزر الثاني إن وُجد.",
          "التدريب يبيّن من يرد على أي زر، وكيف يُضاف مستخدم إذا طلبت المحطة ذلك.",
          "الدعم المستمر زيارة محجوزة إذا احتاج القفل أو الشاشة أو المحطة متابعة لاحقًا.",
          "المحطة والشاشة من علامات مجرّبة وواسعة الدعم تُختار لموقعك، ويُذكر كل موديل قبل الموافقة.",
        ],
      },
    ],
    faq: [
      {
        q: "هل ترن البوابة على شاشة في الداخل إضافة إلى الجوال؟",
        a: "نعم. النطاق المعتاد للفيلا محطة عند البوابة، وكابل إلى شاشة في البيت، وفتح قفل نجرّبه قبل المغادرة. يمكن إضافة الجوال وسيلة إضافية للرد. وتبقى الشاشة الداخلية تعمل عندما يكون الجوال في مكان آخر. فتجيب العائلة من البيت حتى لو كان الجوال بعيدًا عن الباب.",
      },
      {
        q: "هل تستخدمون القفل الموجود على البوابة؟",
        a: "نعم، إذا أمكن فتحه بأمان من الشاشة. المعاينة تفحص القفل وتدرج الوصلة المناسبة في عرض السعر. وإذا احتاج القفل الحالي قطعة مختلفة ظهرت تلك القطعة بندًا تراه قبل بدء العمل. وترى هذا البند واضحًا ضمن القائمة قبل أن يبدأ التركيب.",
      },
      {
        q: "هل تشترك أسرتان في مدخل واحد؟",
        a: "نعم. زر ثانٍ يتصل بشاشة ثانية، والاثنان على المخطط نفسه. كل أسرة ترد على ندائها. والشاشة الإضافية بند مستقل تراه قبل الموافقة. ويمكن إضافة الشاشة الثانية من غير تغيير مسار الكابل المتفق عليه قبل الاعتماد.",
      },
      {
        q: "هل أضيف كاميرا تسجيل على البوابة مع الإنتركم؟",
        a: "أضفها إذا أردت سجلًا للبوابة في الأوقات التي لا يرد فيها أحد. الإنتركم يُظهر الزائر ويفتح الباب. الكاميرا تحفظ الاقتراب على جهاز التسجيل. وكثير من الفلل تجمع الاثنين في معاينة واحدة. ونضع الاثنين على مخطط واحد إذا رغبت بتغطية البوابة كاملة.",
      },
      {
        q: "هل محطة البهو تختلف عن بوابة الفيلا؟",
        a: "الطريقة واحدة والمقياس يتغير. الفيلا تتصل بشاشة داخل البيت. محطة البهو تتصل بالاستقبال، أو بمكتب ثانٍ إذا اشترك مستأجران في الباب. اذكر أيهما ليُبنى عرض السعر على ذلك التوزيع. ويظهر الفرق في عدد الشاشات ومكان الرد داخل عرض السعر.",
      },
    ],
  },
  cabling: {
    h1: "تمديد كابلات وشبكات الكمبيوتر في الرياض",
    seoTitle: "تمديد شبكات Cat6 وألياف بصرية لمكاتب ومباني الرياض | سيسنت",
    seoDescription:
      "تمديد كابلات شبكة Cat6 وفايبر معتمدة للمكاتب والمستودعات في الرياض والدمام. فحص فلوك وترقيم دقيق للمنافذ. احجز معاينة من مكتب الملز اليوم.",
    related: ["cctv", "smart-office", "computers"],
    sections: [
      {
        heading: "تمديد شبكات وكابلات في الرياض تستطيع تتبعه لاحقًا",
        body: [
          "الدور الجديد يتعطل يوم الاثنين إذا لم تجد المكاتب والكاميرات وقارئات الأبواب نقطة مُعلَّمة. تمديد شبكات وكابلات في الرياض هو الوصل الدائم من الخزانة الرئيسة إلى كل مخرج، مُختبرًا ومرقّمًا والسقف ما يزال مفتوحًا.",
          "تستلم تقرير اختبار يطابق الأرقام على اللوحة وعلى وجه المخرج. والكاميرات أو القارئات اللاحقة تنزل في الخزانة نفسها لأن المكان والملصقات خُططا مع الكابل.",
        ],
      },
      {
        heading: "ماذا يغيّر التمديد المُعلَّم في يوم العمل",
        body: [
          "لكل مكتب وكاميرا وقارئة رقم يُقرأ من الطرفين، فيبدأ النقل أو العطل من المخرج الصحيح.",
          "تقرير الاختبار يبقى عندك، ونتيجة كل كابل مكتوبة مقابل رقمه.",
          "خزائن الأدوار تُترك مرتبة، وفيها متسع للجهاز التالي بدل كومة كابلات ثانية.",
          "كاميرات المراقبة وقارئات الأبواب ونقاط البيانات تجتمع في خزانة واحدة إذا كانت ضمن التجهيز نفسه.",
        ],
      },
      {
        heading: "المواقع التي تحجز التمديد مع التشطيب",
        body: [
          "المكاتب تحتاج مخرجًا لكل مقعد، إضافة إلى غرفة الاجتماع والاستقبال.",
          "المستودعات تحتاج بيانات عند مكتب الرصيف والبوابة والخزائن التي ستحمل أجهزة التسجيل.",
          "العيادات والمدارس تحتاج مخارج عند الاستقبال والمخازن والغرف التي ستحمل لوحة.",
          "الفلل والمكاتب الصغيرة تحتاج مجموعة قصيرة من النقاط وخزانة واحدة يقبلها المؤجّر.",
        ],
      },
      {
        heading: "كيف يمضي عمل التمديد",
        body: [
          "المعاينة تعدّ المخارج في كل غرفة وتصور الصاعد وتتفق على مكان الخزانة.",
          "التصميم وعرض السعر المفصّل يفصلان الكابلات واللوحات والأوجه والألياف حيث يحتاجها المبنى وأجور التركيب.",
          "التركيب يسحب الكابل ويوصّله والمسارات ما تزال ظاهرة، مع ترقيم الطرفين أثناء العمل.",
          "الاختبار ينتج التقرير الذي تحتفظ به، نتيجة لكل مخرج على المخطط.",
          "التدريب يشرح لمسؤول المنشأة خريطة المنافذ المثبتة على باب الخزانة.",
          "الدعم المستمر زيارة محجوزة عندما ينتقل مكتب أو يحتاج جهاز لاحق منفذًا فارغًا.",
          "الكابلات واللوحات والأوجه من علامات مجرّبة وواسعة الدعم تُختار لموقعك وتُذكر بندًا بندًا.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تمدّون Cat6 أم الألياف أم الاثنين؟",
        a: "Cat6 إلى المقاعد هو النطاق المعتاد للمكتب. وتُستخدم الألياف بين الخزائن عندما تطلب المسافة أو الصاعد القائم في المبنى ذلك. المعاينة تحدد ما يحتاجه كل مسار، ويظهر كل نوع في بند إذا استخدمه الدور. ويبقى اختيار الألياف مربوطًا بالمسافة لا برغبة عامة في الترقية.",
      },
      {
        q: "متى نحجز المعاينة؟",
        a: "احجزها والسقف ما يزال مفتوحًا. المسارات التي تُعلَّم حينها تبقى بعيدة عن الأثاث والأسقف المنتهية. أرسل الحي وعدد الأدوار وعدد المقاعد، وتُرتَّب الزيارة على برنامج التشطيب الذي عندك. وكلما بكرت المعاينة قلّ التعديل على الأسقف والأثاث لاحقًا.",
      },
      {
        q: "هل تستخدم الكاميرات وقارئات الأبواب هذه الخزانة؟",
        a: "نعم. نترك مكانًا مُعلَّمًا لتنزل الكاميرا أو القارئة في الرف نفسه. أخبرنا أثناء المعاينة إذا كانت هذه الأنظمة جزءًا من التجهيز. تُرقَّم كابلاتها مع مخارج المقاعد وتظهر على خريطة المنافذ نفسها. فتظهر الكاميرا والقارئة على الخريطة نفسها التي يستلمها المبنى.",
      },
      {
        q: "ما الذي يحدد سعر التمديد؟",
        a: "السعر يتبع عدد المخارج والأدوار وطول المسارات وهل تلزم ألياف بين الخزائن. أجور التركيب بند مستقل عن المواد. ترى الاثنين قبل حجز العمل، وتغيّر عدد المقاعد البنود بدل مبلغ مجمل. وإذا زاد عدد المقاعد نعدّل البنود قبل حجز يوم التركيب.",
      },
      {
        q: "هل تعاينون مكاتب في الدمام؟",
        a: "نعم. معاينات التمديد تشمل الدمام والمنطقة الشرقية إلى جانب العاصمة، للمكاتب التي ما زالت قيد التجهيز وللغرف الصغيرة التي تضيف خزانة. اذكر المدينة والحي. ومدن السعودية الأخرى تُرتَّب عند الطلب. ويُؤكد الموعد بعد معرفة الحي وحالة السقف في المبنى.",
      },
    ],
  },
  computers: {
    h1: "أجهزة كمبيوتر وملحقات للمكاتب في الرياض",
    seoTitle: "أجهزة كمبيوتر وملحقات للمكاتب في الرياض",
    seoDescription:
      "جهّز كل مقعد بشاشة وقاعدة توصيل ونقطة بيانات تعمل مع الكابل. توريد وتركيب لمكاتب الرياض مع قائمة واضحة قبل يوم العمل. اطلب معاينة مجانية للموقع.",
    related: ["cabling", "smart-office", "products"],
    sections: [
      {
        heading: "أجهزة كمبيوتر وملحقات للمكاتب في الرياض مع الكابل نفسه",
        body: [
          "صف المكاتب الجديدة يبقى معطلًا إذا وصلت الشاشات وقواعد التوصيل من جهة أخرى بعد الكابل. أجهزة كمبيوتر وملحقات للمكاتب في الرياض تُحدد مع ذلك الكابل، فيكون لكل مقعد كهرباء وبيانات وشاشة وقاعدة في يوم الافتتاح.",
          "ترى كل قطعة في بند: الأجهزة والشاشات والحوامل والقواعد. وأجور التركيب مستقلة، وكل مقعد مربوط بمخرج مرقّم.",
        ],
      },
      {
        heading: "ماذا يعطي صف المكاتب الجاهز",
        body: [
          "يجلس الموظف أمام شاشة ووصلة شبكة تطابق ورقة التمديد من اليوم الأول.",
          "الحواسيب المحمولة التي تملكها تتصل بقاعدة فقط حيث يكون USB-C هو الوصل المناسب.",
          "المشتريات تقارن الشاشات والحوامل والقواعد لأن أيًا منها ليس مخفيًا داخل إجمالي واحد.",
          "الزيارة نفسها يمكن أن تجهّز المقاعد وتثبت المخارج، فيبدأ الدوام من اليوم الأول.",
        ],
      },
      {
        heading: "المكاتب التي تطلب المقعد كاملًا",
        body: [
          "التشطيب الجديد يحتاج مقعدًا كاملًا: شاشة، وقاعدة أو جهاز مكتبي، ونقطة مرقّمة.",
          "الفرق التي تكبر تحتاج مقاعد إضافية تطابق الصف الموجود في الغرفة.",
          "غرف الاجتماع تحتاج شاشة ووصلة منفصلة عن مقاعد الموظفين.",
        ],
      },
      {
        heading: "كيف يُحدد كل مقعد ويُجهَّز",
        body: [
          "المعاينة تتأكد من عدد المقاعد ومن يحضر حاسوبه المحمول ومن الشاشات التي اخترتها.",
          "التصميم وعرض السعر المفصّل يقسم الأجهزة والشاشات والحوامل والقواعد وأجور التركيب إلى بنود تراجعها.",
          "التركيب يضع كل مقعد على مخرجه المرقّم ويوصل الشاشة والقاعدة.",
          "الاختبار يتأكد من وصلة الشبكة والصورة في كل موضع على القائمة.",
          "التدريب جولة قصيرة على القاعدة ومدخل الشاشة وعلى من يُبلَّغ إذا أُضيف مقعد.",
          "الدعم المستمر زيارة محجوزة إذا احتاجت قاعدة أو شاشة أو مقعد جديد متابعة.",
        ],
      },
      {
        heading: "القواعد والعلامات في قائمة المقاعد",
        body: [
          "قواعد ومحولات j5create تُحدد عندما يحتاج الحاسوب المحمول USB-C عند المقعد. وهي بند مستقل يُضاف للمقاعد التي تحتاجه فقط. والشاشات والأجهزة تُذكر بالطريقة نفسها.",
        ],
      },
    ],
    faq: [
      {
        q: "هل نحضر حواسيبنا المحمولة؟",
        a: "نعم. أخبرنا بعدد المقاعد وأن الموظفين يحضرون حواسيبهم. نحدد حينها الشاشات والحوامل وقاعدة حيث يكون USB-C الوصل المناسب. وتُضاف الأجهزة المكتبية للمقاعد التي تحتاجها فقط، ويظهر كل خيار في عرض السعر. فيبدأ الموظف عمله من غير انتظار شاشة أو قاعدة من مورّد آخر.",
      },
      {
        q: "متى تُدرجون قاعدة j5create؟",
        a: "تُدرج قاعدة j5create عندما يحتاج الحاسوب المحمول وصلة USB-C إلى الشاشة والشبكة. وتظهر في بند مستقل. المقاعد التي تملك المنافذ المناسبة تُسعَّر من غير قاعدة، فتدفع ثمن المحول حيث يحتاجه المقعد فقط. وهكذا تدفع ثمن القاعدة فقط للمقعد الذي يحتاج وصلة USB-C.",
      },
      {
        q: "هل تُجهَّز المقاعد في زيارة التمديد نفسها؟",
        a: "نعم، وهذا التسلسل الأسهل. يُفحص المخرج والقاعدة معًا، ويُكتب كل مقعد مقابل رقم مخرجه. وإذا تأخر الأثاث اتفقنا على يوم ثانٍ للشاشات بعد انتهاء عمل الكابلات. ونربط رقم المخرج بالمقعد حتى يسهل تتبع أي مقعد لاحقًا.",
      },
      {
        q: "ما الذي يغيّر تكلفة تجهيز المقاعد؟",
        a: "التكلفة تتبع عدد المقاعد ومقاس الشاشة وهل تلزم قواعد، وهل تحتاج أجهزة مكتبية أو ملحقات فقط لحواسيب تملكها. أجور التركيب مستقلة عن الأجهزة. وتغيّر العدد يغيّر البنود قبل اعتماد الطلب. وتراجع المشتريات كل بند قبل إصدار أمر الشراء للمكتب.",
      },
      {
        q: "كم يستغرق تجهيز صف من المقاعد؟",
        a: "الجدول يتبع عدد المقاعد وهل الكابل والأثاث موجودان. الغرفة الواحدة زيارة تجهيز قصيرة. التشطيب متعدد الأدوار يُرتَّب مع التمديد. وترى التوقيت في عرض السعر قبل طلب الأجهزة. ويُذكر هذا التوقيت كتابةً مع قائمة الأجهزة المعتمدة.",
      },
    ],
  },
  access: {
    h1: "أنظمة التحكم في الدخول والبصمة في الرياض",
    seoTitle: "أنظمة التحكم في الدخول والبصمة في الرياض",
    seoDescription:
      "اعرف من دخل من الأبواب المهمة ومتى، ببطاقة أو بصمة حسب استخدام الباب. نعاين النظام ونجرّبه معك في الرياض قبل التشغيل. اطلب معاينة مجانية للموقع.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "أنظمة التحكم في الدخول والبصمة في الرياض للأبواب التي تهم",
        body: [
          "مدخل الموظفين أو غرفة الخوادم أو مخزن العيادة ينبغي أن يُظهر من عبر ومتى، من غير قارئ على كل ممر. أنظمة التحكم في الدخول والبصمة في الرياض تضع قارئ بطاقة أو بصمة على الأبواب التي تحتاج سجلًا فقط.",
          "وحدة التحكم تجلس في الخزانة مع أنظمتك الأخرى. وتحتفظ بكلمة إدارة النظام، ويُسجَّل أول الأشخاص معك، ويُختبر الباب من الجهتين.",
        ],
      },
      {
        heading: "ماذا يعطيك الباب المُدار",
        body: [
          "سجل يبيّن من دخل ومتى، يقرأه من يدير المبنى.",
          "البطاقة تناسب الأبواب المزدحمة والقفازات والأيدي المبللة. والبصمة تناسب الأبواب التي قد تُتداول فيها بطاقة واحدة.",
          "كلمة إدارة النظام تبقى عند مدير المنشأة، مكتوبة لمن سيستخدمها.",
          "الأبواب التي يجب أن تُفتح مع إنذار الحريق تُراجع حتى يتفق القفل مع مسار الخروج.",
        ],
      },
      {
        heading: "أين يستحق القارئ مكانه",
        body: [
          "المكاتب تحتاج مدخل ما بعد الدوام وغرفة الخوادم، وأحيانًا الاستقبال.",
          "العيادات والصيدليات تحتاج المخزن والغرفة التي تحفظ الدواء أو الملفات.",
          "المستودعات تحتاج مكتب الرصيف وأي باب داخلي ينبغي أن يحتفظ بسجل.",
          "الفلل والمجمعات السكنية غالبًا تحتاج البوابة وبابًا داخليًا واحدًا.",
        ],
      },
      {
        heading: "كيف تُختار القارئات وتُسلَّم",
        body: [
          "المعاينة تمشي الأبواب معك وتسجل من يجب أن يدخل بعد الدوام.",
          "التصميم وعرض السعر المفصّل يسمي نوع القارئ والقفل ووحدة التحكم وأجور التركيب لكل باب.",
          "التركيب يثبّت القارئات ويعيد الكابل إلى وحدة مُعلَّمة في الخزانة.",
          "الاختبار يفتح كل باب من الجهة الآمنة ومن الخارج، ويراجع تحرير الحريق إذا كان الباب مزودًا به.",
          "التدريب يسجّل أول المستخدمين معك ويشرح إضافة شخص أو حذفه.",
          "الدعم المستمر زيارة محجوزة عندما يتغيّر الموظفون أو يحتاج باب مراجعة.",
          "القارئات ووحدات التحكم من علامات مجرّبة وواسعة الدعم تُختار لموقعك وتُذكر في العرض لكل باب.",
        ],
      },
    ],
    faq: [
      {
        q: "أيهما أنسب للباب، البطاقة أم البصمة؟",
        a: "المعاينة تختار نوعًا لكل باب. البصمة تُستخدم حيث قد تُفقد البطاقة المشتركة أو تُتداول. والبطاقة تُستخدم على الأبواب المزدحمة وحيث يلبس الناس قفازات أو تكون أيديهم مبللة. وترى السبب في قائمة الأبواب قبل اعتماد القارئات. وتبقى كلمة الإدارة مع مدير المنشأة لا مع فريق التركيب.",
      },
      {
        q: "من يحتفظ بكلمة إدارة النظام؟",
        a: "مدير منشأتك. نسجّل أول المستخدمين معك، ثم نترك كلمة الإدارة عند الشخص الذي سيضيف الموظفين ويحذفهم. وجولة قصيرة تغطي هذه الخطوة، فتبقى التغييرات اليومية داخل فريقك. فتدفع مقابل الأبواب التي ستراجع سجلها فعلًا في العمل اليومي.",
      },
      {
        q: "هل تُركَّب القارئات في الفيلا كما في المكتب؟",
        a: "نعم. الفيلا أو المجمع السكني غالبًا يحتاج البوابة وبابًا داخليًا. والمكتب قد يحتاج الاستقبال بعد الدوام وغرفة خوادم. المعاينة تذكر هذه الأبواب فقط، فتدفع مقابل سجلات ستستخدمها. ويُختبر هذا التحرير مع القارئ قبل تسليم الباب للمناوب.",
      },
      {
        q: "ماذا لو وجب أن يُفتح الباب مع إنذار الحريق؟",
        a: "أخبرنا أثناء المعاينة. نراجع تحرير الحريق مع القفل حتى يتمكن الناس من الخروج عندما يصدُر الإنذار. وتظهر هذه الوصلة بندًا في عرض السعر إذا احتاجها الباب، وتُختبر مع القارئ قبل إنهاء العمل. وتظهر تكلفة الاستبدال، إن لزم، بندًا مستقلًا قبل التنفيذ.",
      },
      {
        q: "هل تضيفون قارئًا إلى أبواب عليها أقفال؟",
        a: "نعم. ننظر إلى القفل الحالي والإطار ومسار الكابل، ثم نبيّن أي الأبواب يقبل قارئًا كما هو. وإذا احتاج قفل أو كابل إلى استبدال كُتب ذلك في عرض السعر قبل حجز التركيب. ويرى المشرف عنوان الجهاز وطريقة الإسكات قبل مغادرة الموقع.",
      },
    ],
  },
  "fire-alarm": {
    h1: "أنظمة إنذار الحريق والسرقة في الرياض",
    seoTitle: "أنظمة إنذار الحريق والسرقة في الرياض",
    seoDescription:
      "إنذار حريق يفهمه فريق المناوبة، وإنذار ليلي على دائرة خاصة به. نختبر اللوحة والكواشف والأجراس في الرياض قبل التسليم. اطلب معاينة مجانية للموقع.",
    related: ["fire-safety", "access", "cctv"],
    sections: [
      {
        heading: "أنظمة إنذار الحريق والسرقة في الرياض يستخدمها فريقك",
        body: [
          "لوحة في غرفة مقفلة، أو إنذار ليلي يبدو كإنذار حريق، يترك المناوب غير مطمئن لما يفعله. أنظمة إنذار الحريق والسرقة في الرياض تضع الكواشف ونقاط النداء والأجراس حيث يتحرك الناس، مع السرقة على دائرتها.",
          "تحصل على لوحة معنونة يصل إليها المشرف، واختبار للدائرتين، وقائمة بالأجهزة. وتُعرض خطوة الإسكات على اللوحة التي سيستخدمها.",
        ],
      },
      {
        heading: "ماذا يغيّر نظام إنذار واضح",
        body: [
          "كواشف الدخان والحرارة تناسب الغرفة، فالمطبخ وممر العيادة والمستودع تُعامل بمعايير مختلفة.",
          "نقاط النداء اليدوية على المخارج التي يستخدمها الناس، والأجراس تُجرَّب حيث يسمعها فريق المناوبة.",
          "تماسات الأبواب والزجاج لليل تبقى على دائرة مستقلة، فيُقرأ حدث الليل على أنه سرقة.",
          "يستطيع المشرف إسكات الاختبار ورؤية الجهاز الذي نادى، من لوحة في مكان تصل إليه الوردية.",
        ],
      },
      {
        heading: "المباني التي تحتاج كشفًا وإنذار ليل",
        body: [
          "العيادات تحتاج كواشف في الممرات والغرف، ونقاط نداء عند السلالم، ولوحة يسمعها المكتب.",
          "المدارس تحتاج تغطية للفصول والممرات والمخارج التي تُستخدم آخر النهار.",
          "المكاتب تحتاج الأدوار التي يعمل فيها الموظفون، واللوحة خارج غرفة مغلقة.",
          "المستودعات تحتاج كشفًا يناسب حجم الصالة، وتماسات على الأبواب المهمة ليلًا.",
        ],
      },
      {
        heading: "كيف يُصمَّم الإنذار ويُثبَت",
        body: [
          "المعاينة تعلّم الكواشف ونقاط النداء والأجراس، وتعتمد مخططك إن كان موجودًا.",
          "التصميم وعرض السعر المفصّل يذكر اللوحة والأجهزة ودائرة السرقة وأجور التركيب كلًا على حدة.",
          "التركيب يضع كل جهاز وفق ذلك المخطط ويميّز كابل الحريق في الخزانة.",
          "الاختبار يشغّل الأجراس بحضور المشرف ويثبت دائرة السرقة وحدها.",
          "التدريب يشرح قراءة عنوان الجهاز وإسكات الاختبار على اللوحة التي ستُستخدم.",
          "الدعم المستمر زيارة محجوزة لعطل جهاز أو تغيّر في التوزيع أو فحص دوري.",
          "اللوحات والكواشف والأجراس من علامات مجرّبة وواسعة الدعم تُختار لموقعك وتُذكر مقابل المخطط.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تركّبون لوحات حريق معنونة؟",
        a: "نعم. الكواشف ونقاط النداء والأجراس توضع وفق المخطط وتأخذ عناوين تظهر على اللوحة. وأثناء الاختبار نفعّل نقاطًا بحضور المشرف، ليرى أي جهاز نادى وكيف يُسكت الاختبار قبل أن نغادر. ويسمع المناوب الفرق بين الحدثين أثناء الاختبار في الموقع.",
      },
      {
        q: "كيف يبقى إنذار الليل مستقلًا عن الحريق؟",
        a: "تماسات الأبواب والزجاج على دائرتها. حدث الليل يظهر سرقة، وحدث الحريق يبقى على لوحة الحريق. وتُختبر الدائرتان كلٌّ على حدة قبل إنهاء العمل. وتسمعهما مع الشخص الذي سيناوب. فتوافق على الفجوات فقط، وتبقى الأجهزة السليمة في الخدمة.",
      },
      {
        q: "هل تعملون على نظام موجود في المبنى؟",
        a: "نعم. نفحص اللوحة والأجهزة والتمديد، ثم نبيّن ما يبقى وما يُستبدل. عرض السعر يغطي الفجوات. ويمكن معاينة الطفايات وإضاءة الطوارئ في اليوم نفسه وعلى بنود مستقلة. وبعد المعاينة يصبح وقت التنفيذ وعدد الأجهزة واضحين للجميع.",
      },
      {
        q: "ما الذي يؤثر في التكلفة ووقت التنفيذ؟",
        a: "التكلفة والوقت يتبعان عدد الأجهزة وحجم المبنى ووجود مخطط، وهل تُدرج تماسات السرقة. تستلم عرض سعر مفصّلًا وجدولًا بعد المعاينة، قبل طلب الأجهزة أو إغلاق الأسقف. ويُحدد موعد الزيارة بعد معرفة الحي ونوع المبنى في العرض.",
      },
      {
        q: "هل تغطون العيادات والمستودعات في الدمام؟",
        a: "نعم. معاينات الإنذار تشمل الدمام والمنطقة الشرقية إلى جانب العاصمة، ومنها العيادات والمدارس والمكاتب والمستودعات. اذكر المدينة والحي. والمواقع في بقية السعودية تُرتَّب عند الطلب. ونسلّم قائمة قصيرة تناسب المكتب بدل تعبئة الممر بمعدات زائدة.",
      },
    ],
  },
  "fire-safety": {
    h1: "معدات السلامة ومكافحة الحريق في الرياض",
    seoTitle: "معدات السلامة ومكافحة الحريق في الرياض",
    seoDescription:
      "طفايات وبكرات خراطيم وإضاءة طوارئ على مسار الخروج الذي يسلكه الناس. نضع المعدات ونسلّم قائمة بمواقع كل قطعة في الرياض. اطلب معاينة مجانية للموقع.",
    related: ["fire-alarm", "maintenance", "home-office"],
    sections: [
      {
        heading: "معدات السلامة ومكافحة الحريق في الرياض على طريق الخروج",
        body: [
          "طفاية خلف باب مفتوح، أو إضاءة طوارئ لا تُرى من السلم، موجودة في المبنى ويصعب استخدامها. معدات السلامة ومكافحة الحريق في الرياض تُثبَّت حيث يضع مخطط الخروج: طفايات وبكرات خراطيم وإضاءة على المسار الذي يمشي فيه الناس.",
          "تحتفظ بقائمة لكل موقع وتاريخ الصيانة. والفحص التالي يبدأ من هذه القائمة، والمشرف يعرف مكان كل قطعة.",
        ],
      },
      {
        heading: "ماذا يعطيك وضع المعدات في مكانها",
        body: [
          "الطفايات في موضع تُناول منه، بعيدة عن الأبواب التي تخفيها.",
          "بكرات الخراطيم تُراجع لمدى الوصول على المسار الذي يمشي فيه الناس.",
          "إضاءة الطوارئ توضع بحيث يُرى سلم الخروج، ويُختبر كل جهاز من تغذيته.",
          "قائمة مكتوبة تسمي كل موقع وتاريخ الصيانة لمن يدير المبنى.",
        ],
      },
      {
        heading: "المواقع التي تحتاج جدول سلامة",
        body: [
          "المكاتب تحتاج قائمة قصيرة في كل دور، موافقة لمخارج الموظفين.",
          "المستودعات تحتاج تغطية على الممرات وعند الرصيف، حيث يجب أن تصل البكرة.",
          "العيادات والمدارس تحتاج المعدات عند السلالم والممرات، ظاهرة لمن يناوب.",
          "الفلل الصغيرة والمكاتب تحتاج مجموعة معدودة ومكتوبة، بدل ممر مليء بوحدات فائضة.",
        ],
      },
      {
        heading: "كيف تُختار المعدات وتُسجَّل",
        body: [
          "المعاينة تمشي المخارج وتصور ما هو على الجدران وتلاحظ الناقص.",
          "التصميم وعرض السعر المفصّل يسمي كل طفاية وبكرة وإضاءة، مستقلة عن لوحة الإنذار.",
          "التركيب يثبت كل قطعة في الموضع المتفق عليه ويسجّل تاريخ الصيانة أثناء التثبيت.",
          "الاختبار يراجع مدى البكرة ويفصل التغذية عن كل جهاز إضاءة طوارئ.",
          "التدريب يمشي المشرف على القائمة، فيبدأ الفحص التالي من نقطة معروفة.",
          "الدعم المستمر زيارة محجوزة عندما يحين تاريخ الصيانة أو يتغيّر التوزيع.",
          "الطفايات والبكرات وإضاءة الطوارئ من علامات مجرّبة وواسعة الدعم تُختار لموقعك وتُذكر في القائمة التي تعتمدها.",
        ],
      },
    ],
    faq: [
      {
        q: "هل هذا العمل نفسه لوحة إنذار الحريق؟",
        a: "هما نطاقان مختلفان يمكن أن يشتركا في معاينة واحدة. اللوحة تكشف وتنبّه. والطفايات وبكرات الخراطيم وإضاءة الطوارئ هي ما يستخدمه الناس في طريق الخروج أو على حريق صغير. وكل منها مُسعَّر في بنوده، فتوافق على واحد من غير الآخر.",
      },
      {
        q: "هل يحجز مكتب صغير هذا العمل وحده؟",
        a: "نعم. اذكر الحي وأرسل صور ما هو موجود على الجدران. المكتب القصير غالبًا يحتاج مجموعة معدودة من الطفايات والإضاءة، مع قائمة بتواريخ الصيانة. وتُقاس الزيارة على هذه القائمة. ويعرف المشرف من القائمة أين يقف كل جهاز عند الفحص التالي.",
      },
      {
        q: "ماذا نستلم عند انتهاء العمل؟",
        a: "تستلم المعدات في المواضع المتفق عليها، وقائمة بالمواقع، وتاريخ الصيانة لكل طفاية. ويمشي المشرف المسار معنا. هذه القائمة هي ما يستخدمه الفحص التالي، وتبقى مع المبنى. فتُستبدل القطعة الناقصة فقط، ويبقى الصالح في مكانه على القائمة.",
      },
      {
        q: "ما الذي يغيّر التكلفة؟",
        a: "التكلفة تتبع عدد الطفايات والبكرات ووحدات الإضاءة وطول مسارات الخروج. القطع القائمة التي ما زالت ضمن المدة وفي المكان الصحيح تبقى على القائمة. والقطع الجديدة تُسعَّر حيث تُظهر الجولة فراغًا. وتُكتب نتيجة كل جهاز مع موقعه في القائمة التي تبقى لديكم.",
      },
      {
        q: "هل تفحصون إضاءة الطوارئ مع الطفايات؟",
        a: "نعم. نضعها حيث يحتاجها المخرج ونختبر كل جهاز بفصل تغذيته. والإضاءة التي تبدو سليمة تحت نور الغرفة تُثبَت على تغذيتها. وتُدوَّن النتيجة مع قائمة المواقع التي تحتفظ بها. فترى سعر كل جزء قبل أن يُحفر الجدار أو تُطلب الأجهزة.",
      },
    ],
  },
  "home-office": {
    h1: "أنظمة أمن المنازل والمكاتب في الرياض",
    seoTitle: "أنظمة أمن المنازل والمكاتب في الرياض",
    seoDescription:
      "كاميرات ومحطة باب ونقاط بيانات وخزانة واحدة في مخطط واحد لفيلا أو مكتب صغير في الرياض، قبل بدء الحفر داخل الجدران. اطلب معاينة مجانية للموقع.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "أنظمة أمن المنازل والمكاتب في الرياض على مخطط واحد",
        body: [
          "الفيلا أو المكتب الصغير غالبًا يحتاج مشهد الباب وجهاز تسجيل وبضع نقاط بيانات وخزانة، وهذه القطع تتعارض إذا حفر ثلاثة مقاولين الجدار نفسه. أنظمة أمن المنازل والمكاتب في الرياض تجمعها على مخطط واحد وخطة زيارة واحدة.",
          "وتبقى الكاميرات ومحطة الباب والكابلات وأجور التركيب بنودًا منفصلة. والثقوب والخزانة والاختبار تتم معًا.",
        ],
      },
      {
        heading: "ماذا تعطيك زيارة واحدة منسّقة",
        body: [
          "البوابة أو الباب الأمامي صورة مباشرة ومشهد محفوظ في الوقت نفسه.",
          "شاشة داخل الفيلا ترد على المحطة، فالأسرة ليست معلقة على جوال واحد.",
          "نقاط البيانات وجهاز التسجيل يشتركان في خزانة مُعلَّمة ومناسبة للغرفة.",
          "توافق على عرض سعر واحد، كل جزء فيه ظاهر، بدل مطابقة ثلاث فواتير بعد العمل.",
        ],
      },
      {
        heading: "المنازل والمكاتب التي يُكتب لها هذا النطاق",
        body: [
          "الفلل تحتاج البوابة والمواقف وشاشة في الداخل وجهاز تسجيل تفتحه الأسرة.",
          "المجمعات السكنية تحتاج بوابة مشتركة والنقاط التي تخص بيتًا واحدًا.",
          "المكاتب الصغيرة تحتاج تغطية الاستقبال وبضع نقاط بيانات وخزانة يقبلها المؤجّر.",
          "العيادة في فيلا أو مبنى صغير تحتاج الباب والمخزن ورفًا مرتبًا في غرفة واحدة.",
        ],
      },
      {
        heading: "كيف يُسلَّم النطاق المجمّع",
        body: [
          "المعاينة تسرد ما هو موجود وما ينقص، بما فيه شرط المؤجّر لمكان الخزانة.",
          "التصميم وعرض السعر المفصّل يسعّر البنود التي تحتاجها فقط، وما زالت ظاهرة منفصلة.",
          "التركيب يسحب المسارات المشتركة مرة واحدة وينزلها في خزانة مُعلَّمة.",
          "الاختبار يراجع الصورة وفتح القفل ومخرج البيانات في الزيارة نفسها إذا سمح الموقع.",
          "التدريب يغطي التطبيق وشاشة الباب وملصقات الخزانة.",
          "الدعم المستمر زيارة محجوزة لأي من هذه الأنظمة، والمخطط الأصلي معك.",
        ],
      },
      {
        heading: "العلامات في أنظمة المنزل والمكتب",
        body: [
          "كاميرات المراقبة من Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، تُختار للبوابة أو المواقف أو الاستقبال وتُكتب موديلات.",
          "محطة الباب والكابل مذكوران في عرض السعر نفسه، فتكون الفيلا أو المكتب قائمة واحدة تُقرأ.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تغطي معاينة واحدة البوابة والكاميرات ونقاط البيانات؟",
        a: "نعم. هذا مشروع المنزل المعتاد: مخطط واحد، وخزانة واحدة، وعرض سعر ما زال يفصل الكاميرات ومحطة الباب والكابلات وأجور التركيب. ترى كل جزء قبل بدء العمل، وتُحفر المسارات مرة واحدة. ويمكن إسقاط أي بند، فيتغير السعر وفق القائمة الجديدة فقط.",
      },
      {
        q: "هل يجب أن آخذ كل الأنظمة؟",
        a: "خذ البنود التي يحتاجها المبنى. إذا أردت الكاميرات فقط فالعرض للكاميرات. هذه الصفحة للمواقع التي تريد أكثر من نظام يُخطَّط معًا، والسعر يتبع القائمة. ونكتب موضع الخزانة في المخطط إذا كان للمؤجر شرط خاص بالموقع.",
      },
      {
        q: "هل يُعامل المكتب الصغير مثل الفيلا؟",
        a: "الطريقة واحدة. الفيلا تدور حول البوابة وشاشة في الداخل. والمكتب الصغير يدور حول الاستقبال وبضع مخارج وموضع خزانة يقبله المؤجّر. اذكر نوع المبنى لتتبع المعاينة ذلك. ومخطط بسيط للدور يكفي لنحدد المسارات قبل الزيارة بوضوح.",
      },
      {
        q: "ماذا نجهّز قبل الزيارة؟",
        a: "الحي، وهل المبنى فيلا أو مكتبًا، وأي القطع الأربع موجودة: محطة الباب أو الكاميرات أو مخارج البيانات أو الخزانة. مخطط تقريبي يفيد. وإذا كان المكتب مستأجرًا فأحضر شرط المؤجّر عن مكان الخزانة. ونرسل تنبيهًا تجريبيًا حتى ترى من يصله البلاغ فعلًا.",
      },
      {
        q: "هل يتابع الفريق نفسه النظام لاحقًا؟",
        a: "نعم. الفحص أو الإصلاح اللاحق زيارة محجوزة، ومعها المخطط والملصقات الأصلية. وتنبيهات الكاميرات والإنذار تُضبط على الجوالات التي تختارها. وأنت تحدد من يستقبلها، ونؤكد تنبيهًا تجريبيًا قبل المغادرة. وإذا احتاج باب واحد فقط قارئًا بقي بقية الدور على البيانات.",
      },
    ],
  },
  "smart-office": {
    h1: "تجهيز المكاتب الذكية في الرياض",
    seoTitle: "تجهيز المكاتب الذكية في الرياض",
    seoDescription:
      "ادخل غرفة اجتماع تعمل فيها الشاشة والباب والمقاعد من أول يوم. نخطط الخزانة والمنافذ لمكاتب الرياض قبل وصول الأثاث. اطلب معاينة مجانية للموقع.",
    related: ["cabling", "access", "computers"],
    sections: [
      {
        heading: "تجهيز المكاتب الذكية في الرياض يعمل من أول اجتماع",
        body: [
          "غرفة الاجتماع تتعثر في الأسبوع الأول إذا تُركت الشاشة والباب والمقاعد لثلاثة أطراف. تجهيز المكاتب الذكية في الرياض ينزل الشاشة والبيانات والقارئ في خزانة واحدة، مع خريطة منافذ على الباب.",
          "تشغّل الشاشة وتفتح الباب وتستخدم مخرج الطاولة يوم تسليم الغرفة. والخريطة تقول أي منفذ لأي جهاز.",
        ],
      },
      {
        heading: "كيف يبدو الدور بعد اكتماله",
        body: [
          "للشاشة مسار مُعلَّم، فتظهر الصورة من غير بحث فوق السقف.",
          "صفوف المقاعد لها مخرج مرقّم، وقاعدة تُحدد مع المقعد إذا احتاجها الحاسوب المحمول.",
          "قارئ الباب ينتهي في الخزانة نفسها مع البيانات، وخريطة المنافذ تشمله.",
          "فريق واحد يختبر الشاشة والبطاقة ومخرج الطاولة قبل اعتبار الغرفة منتهية.",
        ],
      },
      {
        heading: "الأدوار التي يُخطَّط لها هذا العمل",
        body: [
          "المقرات تحتاج عدة غرف اجتماع وصف مقاعد على خطة الخزانة نفسها.",
          "الفروع تحتاج غرفة اجتماع واحدة وصفًا قصيرًا من المقاعد، بالملصقات نفسها.",
          "العيادات وقاعات التدريب تحتاج شاشة يعتمد عليها المقدّم وبابًا يحتفظ بسجل.",
          "الأبراج قيد التشطيب تحتاج العمل قبل أن يثبت الأثاث المخارج في موضع غير مناسب.",
        ],
      },
      {
        heading: "كيف تُعاين الغرف وتُثبَت",
        body: [
          "المعاينة تعدّ الغرف والمقاعد وتفحص الصاعد وتلاحظ أي شاشة اشتريتها.",
          "التصميم وعرض السعر المفصّل يسمي مسار الشاشة والمخارج والقارئ وأجور التركيب بنودًا منفصلة.",
          "التركيب يوصّل هذه الكابلات في خزانة واحدة ويثبت خريطة المنافذ على الباب.",
          "الاختبار يشغّل الشاشة ويجرّب البطاقة ويتأكد من مخرج الطاولة.",
          "التدريب يشرح للفريق الخريطة ومدخل الشاشة وإدارة الباب.",
          "الدعم المستمر زيارة محجوزة إذا تغيّرت غرفة أو أُضيف مقعد.",
        ],
      },
      {
        heading: "العلامات في قائمة المكتب الذكي",
        body: [
          "إذا تضمنت الغرفة كاميرا نركّب Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، تُختار للمشهد وتُذكر في عرض السعر.",
          "قواعد المقاعد من j5create عندما يحتاج الحاسوب المحمول USB-C. والقاعدة بند مستقل يُضاف للمقاعد التي تستخدمها.",
        ],
      },
    ],
    faq: [
      {
        q: "ماذا تقصدون بالمكتب الذكي؟",
        a: "غرفة اجتماع وأرضية مقاعد تعملان: شاشة وبيانات وتحكم في الدخول، مُختبرة من خزانة واحدة. خريطة المنافذ على الباب تسمي كل مخرج. ويُضاف متحكّم فقط إذا سمّى عرض السعر الموديل. والنتيجة غرفة يستخدمها فريقك من اليوم الأول.",
      },
      {
        q: "هل يُدرج التحكم في الدخول في الزيارة نفسها؟",
        a: "نعم. ينتهي القارئ في الخزانة نفسها، وخريطة المنافذ تشمله. نختبر البطاقة من الجهتين قبل إنهاء الغرفة. وإذا احتاجت بعض الأبواب فقط قارئًا فهذه الأبواب وحدها على القائمة. وتبقى الشاشة التي اشتريتها، ويُسعَّر الكابل والتركيب حولها.",
      },
      {
        q: "اشترينا شاشة غرفة الاجتماع. هل توصلونها؟",
        a: "نعم. اذكر الموديل أثناء المعاينة. نختبر المسار إلى تلك الشاشة وندرج الكابل والمخرج وأجور التركيب. الشاشة التي تملكها تبقى في العمل، وعرض السعر يُظهر العمل حولها. وإذا كان الأثاث قد ثُبّت بيّنا كيف يمر المسار حوله.",
      },
      {
        q: "متى تكون المعاينة أنسب؟",
        a: "قبل أن يثبت الأثاث المخارج. أرسل الدور وعدد غرف الاجتماع وعدد المقاعد. المسارات المتفق عليها حينها تطابق الطاولات والباب. والمعاينة المتأخرة تظل مفيدة، وتبيّن أين يلتف المسار حول التشطيب القائم. ويظهر كل باب وغرفة في بند مستقل داخل عرض السعر.",
      },
      {
        q: "ما الذي يحرّك التكلفة؟",
        a: "التكلفة تتبع عدد الغرف والمقاعد ومسارات الشاشات وعدد الأبواب التي تحتاج قارئًا. والقواعد تُذكر فقط للحواسيب المحمولة التي تحتاجها. توافق على عرض سعر مفصّل، وتغيّر عدد الغرف يغيّر البنود. ويمكنك لاحقًا إضافة التركيب بندًا منفصلًا على الموديلات نفسها.",
      },
    ],
  },
  products: {
    h1: "بيع كاميرات المراقبة وأجهزة الأمن في الرياض",
    seoTitle: "بيع كاميرات المراقبة وأجهزة الأمن في الرياض",
    seoDescription:
      "قارن الكاميرات وأجهزة التسجيل والقارئات والكابلات بالموديل والسعر قبل الشراء. عرض سعر مفصّل ببنود واضحة لمواقع الرياض والدمام. اطلب معاينة مجانية للموقع.",
    related: ["cctv", "cabling", "maintenance"],
    sections: [
      {
        heading: "بيع كاميرات المراقبة وأجهزة الأمن في الرياض بندًا بندًا",
        body: [
          "سعر الحزمة الواحدة يخفي العدسة والقرص ونوع القارئ، فيصعب على المشتريات المقارنة. بيع كاميرات المراقبة وأجهزة الأمن في الرياض ينبغي أن يعطيك بنود موديلات تراجعها، وأجور التركيب تبقى خارج العرض حتى تطلبها.",
          "يمكنك شراء الأجهزة وحدها، أو إضافة التركيب بندًا مستقلًا. وفي الحالتين تبقى الموديلات ظاهرة.",
        ],
      },
      {
        heading: "ماذا يتيح لك عرض القطع",
        body: [
          "قارن الكاميرات وأجهزة التسجيل والقارئات والكابلات والرفوف بالموديل والعدد والسعر.",
          "شارك القائمة مع مقاولك، أو اطلب منا التركيب تحت بند أجور مستقل.",
          "ترى حجم القرص والعدسة ونوع القارئ قبل الموافقة، لأن كلًا منها مكتوب.",
          "غيّر بندًا بعد المعاينة وتبقى بقية القائمة كما وافقت عليها.",
        ],
      },
      {
        heading: "من يطلب الأجهزة بهذه الطريقة",
        body: [
          "فرق المشتريات تحتاج بنودًا تقارنها قبل أمر الشراء.",
          "مديرو المنشآت يحتاجون جهاز تسجيل أو قارئًا أو بكرة كابل تناسب موقعًا يديرونه.",
          "المقاولون يحتاجون قطعًا لمبنى يجهّزونه، والموديل مكتوب.",
          "أصحاب الفلل يحتاجون قائمة قصيرة للبوابة وجهاز التسجيل، من غير إجمالي مغلق.",
        ],
      },
      {
        heading: "كيف يُجهَّز طلب الأجهزة",
        body: [
          "المعاينة، أو القائمة التي عندك، تحدد المشاهد والأبواب وأطوال الكابلات.",
          "التصميم وعرض السعر المفصّل يسمي الموديل والعدد وسعر كل بند.",
          "التوريد هو تسليم هذه القطع، وأجور التركيب تبقى محذوفة حتى تضيفها.",
          "الاختبار يكون عندما تطلب التركيب: كل جهاز في القائمة يُثبَت في الموقع.",
          "التدريب يكون مع طلبات التركيب، ليفتح فريقك جهاز التسجيل أو القارئ.",
          "الدعم المستمر متاح بعد وجود الأجهزة، كزيارة صيانة محجوزة.",
        ],
      },
      {
        heading: "العلامات التي نورّدها",
        body: [
          "خطوط الكاميرات هي Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، تُختار للمشهد وتُكتب موديلات تقارنها.",
          "تظهر j5create عندما يكون البند قاعدة أو محولًا. وإذا كان موديل مدرج غير مناسب للمشهد قلنا أي بند نغيّره ولماذا قبل اعتماد الطلب.",
        ],
      },
    ],
    faq: [
      {
        q: "هل أشتري الكاميرات من غير تركيب؟",
        a: "نعم. عرض السعر قائمة قطع ببنود الموديلات، وأجور التركيب تبقى خارجه حتى تضيف التركيب. يمكنك استخدام مقاولك أو طلب التركيب منا لاحقًا. والموديلات في القائمة تبقى هي في الحالتين. فتقارن المشتريات الموديل بموديل مقابل أي عرض آخر وصلها.",
      },
      {
        q: "هل العلامات هي ما تركّبونه؟",
        a: "نعم. Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung هي علامات الكاميرات التي نحددها، وتُختار لكل مشهد. وتُستخدم j5create للقواعد والمحولات. كل موديل بند مستقل، فتقدر المشتريات مقارنته بعرض آخر. ويمكن إسقاط بند أو استبداله من غير إعادة تسعير القائمة كلها.",
      },
      {
        q: "هل يستطيع فريق المشتريات مقارنة البنود؟",
        a: "نعم. لهذا تُكتب مفصّلة. ترى الموديل والعدد والسعر، ومعهما حجم القرص والعدسة حيث يهمان. ورقم الحزمة الواحدة ليس طريقتنا في التسعير. ويمكن لفريقك اعتماد بند أو إسقاطه أو استبداله. ونذكر سبب أي تغيير بجانب البند قبل أن تعتمد الشراء.",
      },
      {
        q: "ماذا لو كانت لدينا قائمة مواد؟",
        a: "أرسلها، بما فيها حجم القرص أو العدسة إذا اقترحها طرف آخر. نرد ببنود موديلات ونذكر أي بند نغيّره للمشهد أو للباب، والسبب بجانبه. وتعتمد القائمة قبل إصدار الطلب. ويُذكر في العرض هل التسليم أجهزة فقط أم مع تركيب.",
      },
      {
        q: "هل تورّدون أجهزة لمواقع الدمام؟",
        a: "نعم. تُسعَّر القطع للعاصمة وللدمام والمنطقة الشرقية. والتوريد إلى مدن السعودية الأخرى يُتفق عليه في عرض السعر. اذكر المدينة وهل تريد أجهزة فقط أو أجهزة مع تركيب. ويوضح التقرير ما يبقى وما يُستبدل قبل الموافقة على أي قطعة.",
      },
    ],
  },
  maintenance: {
    h1: "تركيب وصيانة الأنظمة الأمنية وشبكات المراقبة في الرياض",
    seoTitle: "صيانة وتركيب كاميرات المراقبة والأنظمة الأمنية بالرياض | سيسنت",
    seoDescription:
      "خدمات تركيب وصيانة وفحص فني دوري لكاميرات المراقبة والإنذار وأجهزة البصمة وشبكات الكابلات في الرياض والدمام من مكتب الملز. اتصل الآن على 0532980149.",
    related: ["cctv", "fire-alarm", "cabling"],
    sections: [
      {
        heading: "صيانة كاميرات المراقبة وأنظمة الأمن في الرياض بزيارة محجوزة",
        body: [
          "كاميرا انطفأت، أو جهاز توقف عن التسجيل، أو قارئ يصفر ويبقى مغلقًا، تحتاج زيارة بطلب واضح. صيانة كاميرات المراقبة وأنظمة الأمن في الرياض هي هذه الزيارة: نحدد العطل، ونبيّن ما يلزم لإعادته، ونثبت النتيجة معك.",
          "التنبيهات تبقى على الجوالات التي تختارها. ونستلم أيضًا أنظمة ركّبتها شركة أخرى، متى استطعنا فتح جهاز التسجيل وتتبع الكابلات.",
        ],
      },
      {
        heading: "ماذا تعيد إليك زيارة الصيانة",
        body: [
          "ملاحظة مكتوبة بما توقف، وما أُعيد تشغيله، وما زال يحتاج قطعة.",
          "صلاحيات التطبيق لمن ينبغي أن يرى الكاميرات أو الإنذار.",
          "ملصقات وقائمة قنوات بسيطة إذا كانت الخزانة من غير أسماء.",
          "عرض سعر لأي كابل أو جهاز يجب استبداله، قبل حجز ذلك العمل.",
        ],
      },
      {
        heading: "المواقع التي تحجز إصلاحًا أو فحصًا",
        body: [
          "المكاتب تتصل عندما ينطفئ الاستقبال أو تتوقف قارئة الباب عن التسجيل.",
          "المستودعات تتصل عندما تسقط كاميرا الرصيف أو الساحة قبل خلاف.",
          "الفلل تتصل عندما تتوقف صورة البوابة أو شاشة الداخل عن الرد.",
          "العيادات والمدارس تتصل عندما يحتاج جرس أو كاشف أو قارئ مخزن متابعة.",
        ],
      },
      {
        heading: "كيف تسير زيارة العطل",
        body: [
          "تبدأ المعاينة مما تخبرنا به: كاميرا منطفئة، أو قرص ممتلئ، أو قارئ، أو جرس، أو كابل تضرر من عمل آخر.",
          "التصميم وعرض السعر المفصّل يأتيان إذا لزم قطع أو كابل جديد، وتظهر التكلفة قبل العمل.",
          "التركيب يستبدل الأجهزة أو الكابل الذي حددته الزيارة فقط.",
          "الاختبار يثبت المشهد أو الباب أو الجرس المعاد وأنت حاضر.",
          "التدريب يغطي أي كلمة مرور جديدة والتطبيق وطريقة الوصول إلى القناة الصحيحة.",
          "الدعم المستمر هو الزيارة المحجوزة التالية، بملاحظات هذه الزيارة.",
        ],
      },
      {
        heading: "الأنظمة والعلامات التي نتابعها",
        body: [
          "نصون Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، ونستلم علامة أخرى متى استطعنا فتح جهاز التسجيل وتمييز الكابلات.",
          "إنذار الحريق والدخول والإنتركم والبيانات يمكن أن تشترك في الزيارة نفسها. وإذا خرجت قطعة عما نورّده قال التقرير ذلك وسمّى الخطوة التالية.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تقومون بصيانة نظام ركّبته شركة أخرى؟",
        a: "نعم. نفحص الكاميرات وجهاز التسجيل والكابلات، ونستعيد صلاحيات الدخول متى أمكن، ثم نقدّم تقريرًا واضحًا بما يمكن الاحتفاظ به وما يحتاج إلى استبدال. وبعد موافقتك تدفع فقط مقابل القطع التي ما زال موقعك يحتاجها. وترى التنبيه يصل إلى الجوال الذي اخترته قبل مغادرتنا.",
      },
      {
        q: "هل تصلني التنبيهات على جوالي؟",
        a: "نعم. أثناء الإعداد نربط الكاميرات والإنذار بتطبيق الجوال ونضيف الأرقام التي تختارها، مثل المالك أو مدير المنشأة أو فريق الأمن. وقبل المغادرة نرسل تنبيهًا تجريبيًا لتتأكد من وصوله. وصورة لغرفة الأجهزة تكفي لنحضر العدسة أو القطعة الأرجح.",
      },
      {
        q: "ماذا نجهّز قبل الزيارة؟",
        a: "أخبرنا بما توقف والحي ونوع المبنى. إذا كانت كلمات المرور لديك فجهّزها. وإذا كانت مفقودة فقل ذلك ونبدأ من جهاز التسجيل والخزانة. وصورة لغرفة الأجهزة تساعدنا على إحضار القطع المناسبة. وترى في التقرير هل العطل إعداد أم كابل قبل أي استبدال.",
      },
      {
        q: "هل تستبدلون الكابل أم تعيدون تشغيل الجهاز؟",
        a: "نعيد جهاز التسجيل أو الإعدادات إذا كانا سبب العطل، ونثبت الصورة معك. وإذا كان الكابل تالفًا سُعّر الاستبدال في عرض السعر ونُفّذ بعد موافقتك. ونرتب الزيارة على الأنظمة التي ذكرتها حتى تُختبر في اليوم نفسه.",
      },
      {
        q: "هل تغطي زيارة واحدة الكاميرات وإنذار الحريق؟",
        a: "نعم. الكاميرات والدخول والإنتركم وإنذار الحريق يمكن حجزها معًا. اذكر الأنظمة التي تتعطل لنرتب الزيارة حولها. والدمام والمنطقة الشرقية ضمن النطاق مع العاصمة، ومدن السعودية الأخرى تُرتَّب عند الطلب بعد أن نؤكد موعد الزيارة معكم.",
      },
    ],
  },
};

export const guides: Record<Locale, Record<keyof typeof en, Guide>> = { en, ar };

export function guideFor(locale: Locale, slug: string) {
  const table = guides[locale];
  if (!(slug in table)) return undefined;
  const guide = table[slug as keyof typeof en];
  const extra = guideExtras[locale]?.[slug];
  if (!extra) return guide;
  return { ...guide, sections: [...guide.sections, ...extra.sections] };
}
