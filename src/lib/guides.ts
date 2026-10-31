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
    seoTitle: "CCTV Camera Installation for Riyadh Sites",
    seoDescription:
      "Book a Malaz survey for dome and bullet cameras in Riyadh. We mark each view, size the recorder, and test playback before we leave. Call today.",
    related: ["cabling", "access", "intercom"],
    sections: [
      {
        heading: "What a CCTV installation includes",
        body: [
          "A CCTV installation is the cameras, the cable, the recorder, and the cabinet that lets a building keep a picture of what happened. In Riyadh that is usually a dome over a parking aisle, a bullet on a villa gate or a warehouse dock, and a recorder set to keep about 30 days. Sysnet, Adam Al Arabia Company, does not drop a box of cameras and leave the lens choice to the person holding the drill.",
          "We walk the site and mark each view on the floor plan first. A clinic corridor, a compound gate, and a loading dock are not the same shot. The focal length, the mounting height, and the direction of the sun change the picture. Retention is written on the parts list so the recorder has enough disk for the days you actually need, not a default the box happened to ship with.",
          "The cabinet is part of the job. Channels are labeled, the password is written on the handover sheet, and every view is played back on site before we leave. The next person, whether that is your facility manager or a technician on a fault call, should be able to find the right channel without guessing.",
        ],
      },
      {
        heading: "Where cameras earn their place",
        body: [
          "Offices on Olaya and King Fahd Road usually need a view of reception, the lift lobby, and the door the cleaners use after hours. Warehouses in the south of the city need the aisle, the dock, and the yard, with retention long enough to settle a dispute about a shipment. Villas in Malaz and the north of Riyadh need the gate, the parking, and a monitor inside the house so the picture is not only on a phone that is in another room.",
          "Clinics and schools need corridors and stores, placed so the camera does not point into a room that should stay private. Hospitality needs the lobby, the corridor, and the back door the night shift uses. We put cameras on the doors and yards that matter, not on every ceiling tile.",
        ],
      },
      {
        heading: "How the survey becomes a price",
        body: [
          "Call the Malaz desk on +966 53 298 0149 or send the district and the building type. We photograph the rooms, the gate, and the cabinet location, then write a parts list you can read. The quote separates cameras, recorder, cable, and labour. Brands on that list are the ones already used on these sites: Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, chosen for the view rather than for a logo on the van.",
          "Installation is the same crew. Cable is numbered at both ends, the recorder is racked with the patch panel when the building also has data, and playback is proved before handover. Fault calls come back to the same phone number.",
        ],
      },
    ],
    faq: [
      {
        q: "How many days of CCTV recording should a Riyadh building keep?",
        a: "Most offices and villas keep about 30 days. A warehouse that has to answer a shipment dispute sometimes needs longer, and the recorder is sized for that before it is ordered.",
      },
      {
        q: "Do you install CCTV in villas and warehouses, or only offices?",
        a: "All three. A Malaz villa gate, an Olaya office reception, and a south Riyadh dock are different lenses on the same kind of survey.",
      },
      {
        q: "Can the cameras share a cabinet with the network and the door readers?",
        a: "Yes. We prefer one cabinet. The recorder, the patch panel, and the access controller are labeled in the same rack when the building needs more than cameras.",
      },
      {
        q: "Which camera brands do you specify?",
        a: "Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung, written as model lines on the parts list so procurement can compare them.",
      },
      {
        q: "Do you take on a CCTV system another company left behind?",
        a: "Yes, when we can reach the recorder and identify the cables. If a run has to be replaced, we say that on the survey.",
      },
    ],
  },
  intercom: {
    h1: "Video intercom installation in Riyadh",
    seoTitle: "Video Intercom for Riyadh Gates and Lobbies",
    seoDescription:
      "Gate and lobby video intercoms in Riyadh, cabled to a monitor inside. Request a Malaz survey and we test the lock release before handover. Call today.",
    related: ["cctv", "access", "home-office"],
    sections: [
      {
        heading: "What a video intercom is for",
        body: [
          "A video intercom is a station at the gate or in the lobby, a cable, and a monitor where someone can see the visitor and release the lock. A station that only rings a mobile phone fails the day the phone is in another room, on silent, or with the driver. Villas in Malaz and compounds north of Riyadh need the picture on a monitor in the majlis or at reception.",
          "Office buildings need the same thing at a different scale. The lobby station calls the reception desk, not twelve personal phones. A second button is added when one entrance is shared by two families or two tenants. The station, the monitor, and the lock are drawn on one plan so the cable route is known before the conduit is fixed.",
        ],
      },
      {
        heading: "Why the cable matters more than the brochure",
        body: [
          "Wireless doorbells look simple and then drop the call when the gate is far from the router. We run cable from the gate or lobby to the monitor. The lock release is tested from that monitor before we leave, including the strike or maglock the door already has. If the existing lock cannot be released safely, the parts list says so.",
          "The intercom often lands in the same cabinet as the CCTV recorder and the data patch panel. One crew pulls those cables on the same visit, so the gate camera and the gate station are not two contractors pointing at each other.",
        ],
      },
      {
        heading: "How a gate survey is priced",
        body: [
          "Tell the desk the district, whether it is a villa gate or a building lobby, and how many monitors you need. We measure the cable run, photograph the gate, and write the station, the monitor, the power supply, and the lock interface as separate lines. Installation and a later maintenance visit stay on +966 53 298 0149.",
          "Handover is the password if the station has one, a note of which button calls which monitor, and a test of the lock with you watching. That is the job, not a box left in the majlis.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a villa gate intercom ring a monitor inside instead of a phone?",
        a: "Yes. That is the usual Malaz and north Riyadh scope: a station at the gate, cable to a monitor in the house, and a lock release we test before we leave.",
      },
      {
        q: "Will you use the lock already on the gate?",
        a: "When it can be released safely from the monitor. If it cannot, the survey says what has to change.",
      },
      {
        q: "Can two tenants share one lobby station?",
        a: "Yes. A second button calls the second monitor. Both are on the same drawing.",
      },
      {
        q: "Does the intercom replace CCTV at the gate?",
        a: "No. The station shows who is calling. A camera records the gate when nobody is answering. They are often installed together.",
      },
    ],
  },
  cabling: {
    h1: "Network cabling installation in Riyadh",
    seoTitle: "Structured Network Cabling for Riyadh Offices",
    seoDescription:
      "Cat6 and fiber for Riyadh offices, tested and labeled at both ends. Ask the Malaz desk for a site survey before the ceiling closes. Call now.",
    related: ["cctv", "smart-office", "computers"],
    sections: [
      {
        heading: "What structured cabling covers",
        body: [
          "Structured network cabling is the permanent cable between the main cabinet and each floor, desk, camera, and access reader. In a Riyadh office that is Cat6 to the desks and, where the run is long or the building already has a fiber riser, fiber between cabinets. Every run is numbered at both ends. After termination you get a test sheet, not a bundle of unlabeled blue cable.",
          "Floor cabinets are dressed so a later camera or door reader can land in the same rack. The patch panel, the switch space, and the power are planned together. A fit-out on Olaya that orders furniture before the cable routes are drawn ends up with desks sitting on coils of cable. We want the routes marked while the ceiling is still open.",
        ],
      },
      {
        heading: "Why labeling is the part people skip",
        body: [
          "An unlabeled panel is cheap on day one and expensive the first time a desk moves or a camera fails. We label both ends, record the test, and leave the port map on the cabinet door. The facility manager should not have to tone out a whole floor to find one outlet.",
          "Cabling is also the path for the other services. CCTV, intercom, and access control should not arrive as three vendors with three reels. When Sysnet has the cabling scope, those devices terminate in the cabinet we already dressed.",
        ],
      },
      {
        heading: "How a cabling survey is written",
        body: [
          "We count outlets per room, photograph the riser, and note the cabinet location. The parts list separates cable, patch panels, faceplates, fiber if it is needed, and labour. j5create docks and desk accessories are specified with the computers scope when the fit-out includes workstations, not hidden inside the cable price.",
          "Testing is the last step, not a promise. You get the sheet. Fault calls later come to +966 53 298 0149, and if a run has to be replaced we say that rather than reterminating a crushed cable and hoping.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you install Cat6 or fiber in Riyadh offices?",
        a: "Cat6 to the desks is the usual scope. Fiber is used between cabinets when the riser length or the existing building design calls for it.",
      },
      {
        q: "Will the outlets be labeled?",
        a: "Yes. Both ends are numbered, and the test sheet matches those numbers.",
      },
      {
        q: "Can cameras and door readers use the same cabinet?",
        a: "Yes. We leave space and a labeled port so a later device does not need a second messy rack.",
      },
      {
        q: "When should cabling be surveyed?",
        a: "Before the ceiling closes. Send the district and the floor count to the Malaz desk and we will walk it.",
      },
    ],
  },
  computers: {
    h1: "Office computer fit-out in Riyadh",
    seoTitle: "Office Computer Fit-out and Docks in Riyadh",
    seoDescription:
      "Desktops, monitors, and USB-C docks for Riyadh office fit-outs, specified with the cabling. Request a written parts list from the Malaz desk.",
    related: ["cabling", "smart-office", "products"],
    sections: [
      {
        heading: "What an office computer scope includes",
        body: [
          "Computers and accessories, for this desk, means the desktops, monitors, and docks a new row of workstations needs, bought and installed with the cabling rather than from a second supplier who arrives after the furniture. A Riyadh fit-out that has data outlets and no docks still cannot start work on Monday. We specify the desk hardware on the same parts list as the cable.",
          "j5create docks and adapters are used when a USB-C dock is the right part for the laptop the client already owns. They are not added to every desk by habit. Monitors, mounts, and power are written as their own lines so procurement can see them.",
        ],
      },
      {
        heading: "Why the desk hardware belongs with the cable",
        body: [
          "The outlet, the dock, and the screen are one workplace. If three companies supply them, the last one on site inherits the blame. We set the screens, connect the docks, and confirm each seat gets a network link from the labeled panel. Meeting rooms that need a display are called out separately under the smart office scope when the room is more than a desk.",
          "We do not pretend to be a laptop manufacturer. The job is the workplace: power, data, dock, and screen, checked against the seat count you gave us.",
        ],
      },
      {
        heading: "How the list is priced",
        body: [
          "Send the seat count, the district, and whether people bring laptops or need desktops. The quote separates parts from labour. Installation is booked with the cabling visit when the ceiling and the furniture allow it. The Malaz desk is +966 53 298 0149, Saturday to Thursday, 9:00 to 18:00.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you supply docks as well as cable?",
        a: "Yes. j5create USB-C docks are specified when the desk needs one. They appear as their own line on the parts list.",
      },
      {
        q: "Can this be installed with the network cabling?",
        a: "That is the preferred visit. The outlet and the dock are checked together.",
      },
      {
        q: "Will you buy laptops?",
        a: "Only when they are on the agreed list. The usual scope is desktops, monitors, docks, and the cable that feeds them.",
      },
      {
        q: "Who do we call if a dock fails later?",
        a: "The same Malaz number. If the part has to be replaced, we say so.",
      },
    ],
  },
  access: {
    h1: "Access control installation in Riyadh",
    seoTitle: "Biometric Access Control Systems in Riyadh",
    seoDescription:
      "Card and fingerprint access control for Riyadh staff doors and server rooms. Book a survey and we leave the admin password on the handover sheet.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "What access control covers",
        body: [
          "Access control is the reader, the controller, the lock, and the record of who passed and when. In Riyadh we put card or fingerprint readers on the doors that need them: a staff entrance, a server room, a clinic store, a pharmacy. We do not put a reader on every corridor. A door that should stay open in a fire is not given a lock that traps people, and the fire alarm scope is checked when both are on the same visit.",
          "The controller sits in the cabinet with the recorder and the patch panel. Events are stored so a facility manager can see a door without exporting a mystery file. The admin password is written on the handover sheet and left with the person who will actually use it.",
        ],
      },
      {
        heading: "Readers, not a gadget on every door",
        body: [
          "A villa may only need the gate and one internal door. An office on King Fahd Road may need reception after hours and the comms room. A warehouse may need the dock office and not the yard, because the yard is a camera problem. We write that distinction on the survey so you are not paying for readers that add no record you will ever read.",
          "Biometric readers are used where a shared card would be lost or passed around. Cards are used where gloves, a clinic, or a high-traffic door make a fingerprint a bad idea. The survey says which, and why.",
        ],
      },
      {
        heading: "How the visit is handed over",
        body: [
          "We enroll the first users with you, test the lock from the safe side and the outside, and confirm the door still opens on a fire release if one exists. Cable to the reader is labeled. Later changes of staff are something your admin can do, and if you want us back for that, the same desk books it on +966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you install fingerprint readers or cards?",
        a: "Both. Fingerprint where a card would be shared, cards where the door is busy or people wear gloves. The survey picks one per door.",
      },
      {
        q: "Where is the controller mounted?",
        a: "In the cabinet with the recorder and the network gear, not above a ceiling tile.",
      },
      {
        q: "Who keeps the admin password?",
        a: "The facility manager. It is written on the handover sheet, not left only in a technician's phone.",
      },
      {
        q: "Can access control share a visit with CCTV?",
        a: "Yes. Doors that need a reader and a camera are marked on the same floor plan.",
      },
    ],
  },
  "fire-alarm": {
    h1: "Fire alarm installation in Riyadh",
    seoTitle: "Fire and Intrusion Alarm Systems in Riyadh",
    seoDescription:
      "Addressable fire alarms and separate intrusion circuits for Riyadh buildings. Request a survey and we test both before handover. Call today.",
    related: ["fire-safety", "access", "cctv"],
    sections: [
      {
        heading: "What the fire alarm scope includes",
        body: [
          "A fire alarm installation here is an addressable panel, detectors, manual call points, and sounders, placed against the drawing rather than where a cable happened to reach. Smoke and heat detectors are chosen for the room: a kitchen is not a bedroom, and a warehouse is not a clinic corridor. Call points go at the exits people actually use. Sounders are proved so the supervisor can hear them and can silence a test without a manual we did not leave.",
          "Intrusion alarms are often asked for on the same visit: door contacts and glass contacts for the night. They sit on a separate circuit. A night alarm must not look like a fire alarm, and a fire alarm must not be silenced because someone thought it was the door.",
        ],
      },
      {
        heading: "Why the drawing comes before the devices",
        body: [
          "Detectors added after the ceiling is closed get put in the wrong place and then blamed when they false-alarm. We want the device list and the cable routes marked while we can still see the slab. The panel location is agreed so it is not in a locked room the night guard cannot enter.",
          "The panel, the CCTV recorder, and the access controller can share a cabinet, but the fire cable is identified and the cause-and-effect is written down. We do not mix a lock release and a sounder and hope.",
        ],
      },
      {
        heading: "What you have at handover",
        body: [
          "A test of the detectors we installed, a test of the call point, a test of the sounders, and a separate test of the intrusion circuit if it is in the scope. You get the panel password and a device list. The Malaz desk, +966 53 298 0149, books the next visit. Extinguishers and emergency lights, when the building needs them, are the fire safety scope, priced on their own lines.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you install addressable fire panels in Riyadh?",
        a: "Yes. Detectors, call points, and sounders are placed against the drawing and tested before we leave.",
      },
      {
        q: "Is the intrusion alarm on the same panel as the fire alarm?",
        a: "No. Door and glass contacts are a separate circuit so a night alarm is not mistaken for a fire.",
      },
      {
        q: "Can you also supply extinguishers?",
        a: "Yes, as the fire safety scope, with locations and service dates written down. It is not buried inside the panel price.",
      },
      {
        q: "Who can silence a test?",
        a: "The supervisor. We show them on site and leave the panel password on the handover sheet.",
      },
    ],
  },
  "fire-safety": {
    h1: "Fire safety equipment in Riyadh",
    seoTitle: "Fire Safety Equipment Installation in Riyadh",
    seoDescription:
      "Extinguishers, hose reels, and emergency lights for Riyadh buildings, mounted to the exit drawing. Ask the Malaz desk to book a survey today.",
    related: ["fire-alarm", "maintenance", "home-office"],
    sections: [
      {
        heading: "What fire and safety equipment covers",
        body: [
          "Fire and safety systems, separate from the alarm panel, are the extinguishers, hose reels, and emergency lights a building has to have in the places the drawing names. Hardware is mounted to the schedule, not on the nearest free screw. An extinguisher behind a door that opens onto it is not a location. An emergency light that nobody can see from the exit stair is not a location either.",
          "We note the service date for each extinguisher and leave that list with the building supervisor. The next inspection should not depend on a sticker nobody photographed. Hose reels are checked for reach, and emergency lights are checked on a simulated power cut of the fitting, not by assuming the LED is fine because it looks new.",
        ],
      },
      {
        heading: "How this sits next to the fire alarm",
        body: [
          "The panel detects and warns. The extinguisher and the reel are what people use if they can fight a small fire or need to leave. They are different scopes and different tradesmen if you split them. We would rather price them as separate lines on one visit so the exit route has a sounder, a call point, a light, and an extinguisher that agree with each other.",
          "Homes and small offices in Malaz often need a short list, not a warehouse catalogue. We write the count. We do not fill a corridor to make the invoice longer.",
        ],
      },
      {
        heading: "Booking the survey",
        body: [
          "Send the building type and the district to the Malaz desk. If you already have a fire alarm drawing, send that too. We will say what is missing and what is only due for a service date. Maintenance after installation stays on +966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you only sell extinguishers, or install them?",
        a: "We install them to the drawing and leave a list of locations and service dates with the supervisor.",
      },
      {
        q: "Is this the same job as the fire alarm panel?",
        a: "No. The panel is a separate scope. They can be surveyed on the same visit and are priced on separate lines.",
      },
      {
        q: "Do you check emergency lights?",
        a: "Yes. We confirm they are where the exit needs them and that the fitting responds when its supply is dropped.",
      },
      {
        q: "Can a small office book this without a full alarm replacement?",
        a: "Yes. Tell us the district and what is already on the walls. We will not replace a panel that only needs a service.",
      },
    ],
  },
  "home-office": {
    h1: "Home and office security projects in Riyadh",
    seoTitle: "Home and Office Security Projects in Riyadh",
    seoDescription:
      "One drawing for a Riyadh villa or small office: cameras, intercom, data, and the rack. Request a Malaz site survey before any work starts today.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "What a combined home or office project is",
        body: [
          "Home and office projects are the small buildings that need four things on one drawing: a view of the gate or the door, a recorder, a few data points, and a cabinet that is not a tangle. Homeowners in Malaz and office managers in Olaya usually describe it as separate shopping lists. It is one scope. The gate station, the cameras, and the data outlets share routes and share the rack.",
          "A villa typically gets a gate intercom, a parking dome or bullet, a recorder, and a monitor inside. A small office gets reception coverage, a handful of data points, and a cabinet the landlord will still accept. We do not split that into three quotations that cannot be built together.",
        ],
      },
      {
        heading: "Why one drawing is cheaper than three contractors",
        body: [
          "Three contractors means three visits, three holes in the same wall, and a cabinet nobody owns. We mark the routes once, pull the cable once, and test the picture, the lock release, and the data outlet on the same day when the site allows it. The parts list still separates cameras, intercom, cable, and labour so you can see the money.",
          "If the building only needs one of those lines, we say so. This page is for the sites that need the set. A warehouse dock or a fire panel alone belongs on those service pages, and we will point you there.",
        ],
      },
      {
        heading: "How to start",
        body: [
          "Tell the desk the district, villa or office, and what already exists. We survey before anyone orders hardware. Handover is the labeled cabinet, the passwords, and a short test with you present. The phone number does not change afterwards: +966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "Can one survey cover a villa gate, cameras, and data points?",
        a: "Yes. That is the usual home project: one drawing, one cabinet, and a parts list that still separates the lines.",
      },
      {
        q: "Is a small Olaya office the same kind of job?",
        a: "The same method. Reception, a few outlets, and a cabinet, surveyed before the ceiling closes.",
      },
      {
        q: "Do I have to take every line?",
        a: "No. If you only need cameras, we price cameras. This scope is for sites that need more than one line.",
      },
      {
        q: "Who maintains it later?",
        a: "The Malaz desk. Fault calls come back to the number on the handover sheet.",
      },
    ],
  },
  "smart-office": {
    h1: "Smart office installation in Riyadh",
    seoTitle: "Smart Office Cabling and Access in Riyadh",
    seoDescription:
      "Meeting-room displays, desk data, and door access in one Riyadh cabinet. Book a survey so the room is not three vendors blaming the cable. Call.",
    related: ["cabling", "access", "computers"],
    sections: [
      {
        heading: "What a smart office installation means here",
        body: [
          "Smart office, on this site, is not a gadget catalogue. It is the meeting-room display, the desk connectivity, and the door reader landing in one cabinet with a port map on the door. A Riyadh meeting room that has a screen, no labeled HDMI or USB-C path, and a door that was left to another company will fail in the first week and everyone will blame the cable.",
          "We terminate the display, the camera if the room has one, and the reader in the rack we can still open. The port map says which outlet is the table and which is the screen. Desk rows that need docks are specified with the computers scope so the room and the seats are not two invoices that disagree.",
        ],
      },
      {
        heading: "One cabinet instead of three vendors",
        body: [
          "The display vendor, the camera vendor, and the door vendor will each say the cable is someone else's. If we pull and terminate it, the test is ours. We play the display, badge the door, and ping the outlet. That is a dull definition of smart, and it is the one that still works on a Thursday afternoon.",
          "We do not sell a control app as a substitute for a labeled panel. If a room controller is required, it is a line on the list with a named model, not a phrase.",
        ],
      },
      {
        heading: "Survey before the furniture",
        body: [
          "Send the floor, the number of meeting rooms, and the district. We look at the riser and the cabinet. Olaya fit-outs are the common case. The Malaz desk books the visit on +966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you install meeting-room displays?",
        a: "Yes, with the cable path and the outlet labeled. The display is not left for another contractor to discover there is no route.",
      },
      {
        q: "Can door access be on the same visit?",
        a: "Yes. The reader terminates in the same cabinet, and the port map includes it.",
      },
      {
        q: "Is this a building-automation system?",
        a: "No. It is displays, data, and access, tested. A controller is only added when the parts list names it.",
      },
      {
        q: "When should we call?",
        a: "Before furniture fixes the outlets in the wrong place. Saturday to Thursday, 9:00 to 18:00.",
      },
    ],
  },
  products: {
    h1: "CCTV and alarm equipment sales in Riyadh",
    seoTitle: "CCTV and Alarm Equipment for Riyadh Sites",
    seoDescription:
      "Cameras, recorders, readers, cable, and racks from the Malaz desk, quoted as a parts list you can check. Ask for the lines before you buy today.",
    related: ["cctv", "cabling", "maintenance"],
    sections: [
      {
        heading: "What you can buy without the labour",
        body: [
          "Product sales is the hardware without the installation, for a procurement team that already has a contractor or that wants to compare lines before approving labour. Cameras, recorders, readers, cable, and racks are quoted as a parts list with model lines written out. You can check them. They are not a single lump called 'CCTV system'.",
          "The brands we specify on installed jobs are the same ones on the list: Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung for cameras, plus the cable and cabinet hardware the survey named. j5create appears when the line is a dock or an adapter, not as a camera brand.",
        ],
      },
      {
        heading: "Why a parts list beats a package price",
        body: [
          "A package price hides the disk size, the lens, and the reader type. Your purchasing team cannot compare it. We separate parts from labour even when you later ask us to install. If you only want the parts, the quote says that, and we do not add a visit you did not ask for.",
          "Supply from the Malaz desk still means someone will answer the phone if a line is wrong. The number is +966 53 298 0149. If a model is out of stock, we say which line changed before you approve it.",
        ],
      },
      {
        heading: "How to order",
        body: [
          "Send the list you already have, or describe the building and we will write one. Collection or delivery is agreed on the quote. Installation, if you add it, is a separate line and a separate page. We would rather you see both numbers.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I buy cameras without installation?",
        a: "Yes. The quote is a parts list with model lines. Labour is omitted unless you add it.",
      },
      {
        q: "Will the brands match what you install?",
        a: "Yes. Hikvision, Dahua, EZVIZ, IDIS, IMOU, and Samsung are the camera brands we specify, chosen per view.",
      },
      {
        q: "Can purchasing compare the lines?",
        a: "That is the point of writing them out. A single package price is not how we quote.",
      },
      {
        q: "Who do we call about a wrong line?",
        a: "The Malaz desk, sales@sysnet-ksa.com or +966 53 298 0149.",
      },
    ],
  },
  maintenance: {
    h1: "CCTV and alarm maintenance in Riyadh",
    seoTitle: "CCTV and Alarm Maintenance Visits in Riyadh",
    seoDescription:
      "Installation and later maintenance from the same Malaz desk. Call +966 53 298 0149 for a fault on cameras, alarms, or cabling in Riyadh today.",
    related: ["cctv", "fire-alarm", "cabling"],
    sections: [
      {
        heading: "What maintenance covers",
        body: [
          "Installation and maintenance is the promise that the crew who fitted the system is the crew you call when it fails. Fault calls come to +966 53 298 0149. We look at cameras that have gone dark, recorders that stopped, readers that beep and do not open, and cable that was crushed by someone else's ceiling work. If we did not install the system, we still take it on when we can reach the recorder and identify the cables.",
          "We do not sell a vague annual contract made of visits nobody scheduled. A maintenance visit has a fault or a test list. If a run has to be replaced, the survey says that. Reterminating a dead cable and calling it repaired is how buildings end up with the same fault twice.",
        ],
      },
      {
        heading: "Systems we did not install",
        body: [
          "A lot of Riyadh buildings have a recorder in a cupboard and no passwords. We will try. If the cables are unidentified and the panel is locked with a password nobody has, we say what we could not see. We do not invent a health report. When we can take the system on, the handover from that first visit is the new password, a channel list, and the faults we found.",
          "Fire alarm, access, intercom, and data are in the same phone queue. You do not need a different company for each blinking light, unless the survey shows a specialist part we do not carry. We will say so.",
        ],
      },
      {
        heading: "How to book a fault visit",
        body: [
          "Call the desk or send the district, the building type, and what stopped working. Saturday to Thursday, 9:00 to 18:00. If the site is outside Riyadh, say so on the first call. The desk is in Malaz. We only book a further city when a crew can actually attend. Email remains sales@sysnet-ksa.com.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you maintain a CCTV system you did not install?",
        a: "Yes, when we can reach the recorder and identify the cables. If we cannot, the visit report says what is missing.",
      },
      {
        q: "What number do we call for a fault?",
        a: "+966 53 298 0149. That is the Malaz desk, Saturday to Thursday, 9:00 to 18:00.",
      },
      {
        q: "Do you replace cable or only reset the recorder?",
        a: "If the cable is the fault, we say so and price the replacement. We do not keep resetting a dead run.",
      },
      {
        q: "Is fire alarm maintenance on the same desk?",
        a: "Yes. Alarm, access, intercom, and cameras come back to the same number.",
      },
    ],
  },
} satisfies Record<string, Guide>;

const ar: Record<keyof typeof en, Guide> = {
  cctv: {
    h1: "تركيب كاميرات المراقبة في الرياض",
    seoTitle: "تركيب كاميرات المراقبة لمباني الرياض",
    seoDescription:
      "احجز معاينة من مكتب الملز لكاميرات القبّة والرصاص في الرياض. نعلّم كل مشهد ونضبط جهاز التسجيل ونختبر الإعادة قبل المغادرة. اتصل اليوم من المكتب.",
    related: ["cabling", "access", "intercom"],
    sections: [
      {
        heading: "ماذا تشمل تركيبة كاميرات المراقبة",
        body: [
          "تركيبة كاميرات المراقبة هي الكاميرات والكيبل وجهاز التسجيل والخزانة التي تحفظ للمبنى صورة ما حدث. في الرياض يكون ذلك غالبًا قبّة على ممر المواقف، وكاميرا رصاص على بوابة فيلا أو رصيف مستودع، وجهاز تسجيل يُضبط لحفظ نحو 30 يومًا. سيسنت، شركة آدم العربية، لا تترك صندوق كاميرات وتترك اختيار العدسة لمن يمسك المثقاب.",
          "نمشي الموقع ونعلّم كل مشهد على مخطط الدور أولًا. ممر العيادة وبوابة المجمع ورصيف التحميل ليست اللقطة نفسها. البعد البؤري وارتفاع التثبيت واتجاه الشمس تغيّر الصورة. تُكتب مدة الحفظ في قائمة القطع حتى يكون في الجهاز قرص يكفي للأيام التي تحتاجها فعلًا.",
          "الخزانة جزء من العمل. القنوات تُلصق، وكلمة المرور تُكتب في ورقة التسليم، وكل مشهد يُعاد تشغيله في الموقع قبل أن نغادر. الشخص التالي، سواء كان مدير المنشأة أو فنّيًا في بلاغ عطل، يجد القناة من غير تخمين.",
        ],
      },
      {
        heading: "أين تستحق الكاميرا مكانها",
        body: [
          "مكاتب العليا وطريق الملك فهد تحتاج غالبًا مشهد الاستقبال وبهو المصعد والباب الذي يستخدمه عمال النظافة بعد الدوام. مستودعات جنوب الرياض تحتاج الممر والرصيف والساحة، مع حفظ يكفي لخلاف على شحنة. فلل الملز وشمال الرياض تحتاج البوابة والمواقف وشاشة داخل البيت حتى لا تبقى الصورة على جوال في غرفة أخرى.",
          "العيادات والمدارس تحتاج الممرات والمخازن، من غير أن تشير الكاميرا إلى غرفة يجب أن تبقى خاصة. الضيافة تحتاج البهو والممر والباب الخلفي الذي تستخدمه وردية الليل. نضع الكاميرات على الأبواب والساحات التي تهم، لا على كل بلاطة سقف.",
        ],
      },
      {
        heading: "كيف تصبح المعاينة سعرًا",
        body: [
          "اتصل بمكتب الملز على ‎+966 53 298 0149 أو أرسل الحي ونوع المبنى. نصور الغرف والبوابة ومكان الخزانة، ثم نكتب قائمة قطع تُقرأ. العرض يفصل الكاميرات وجهاز التسجيل والكيبل والعمل. العلامات التي تُكتب هي التي نركّبها: Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، وتُختار للمشهد لا لشعار على السيارة.",
          "التركيب للفريق نفسه. الكيبل مرقّم من الطرفين، وجهاز التسجيل يُركّب مع لوحة التوصيل حين يكون في المبنى بيانات، والإعادة تُثبت قبل التسليم. بلاغات الأعطال ترجع إلى الرقم نفسه.",
        ],
      },
    ],
    faq: [
      {
        q: "كم يومًا يُحفظ تسجيل الكاميرات في مبنى بالرياض؟",
        a: "أكثر المكاتب والفلل تحفظ نحو 30 يومًا. المستودع الذي يبتّ في خلاف شحنة قد يحتاج أطول، ويُحدَّد حجم الجهاز قبل طلبه.",
      },
      {
        q: "هل التركيبة للفلل والمستودعات أم للمكاتب فقط؟",
        a: "للثلاثة. بوابة فيلا في الملز واستقبال مكتب في العليا ورصيف في جنوب الرياض عدسات مختلفة على المعاينة نفسها.",
      },
      {
        q: "هل تشارك الكاميرات خزانة الشبكة وقارئات الأبواب؟",
        a: "نعم. نفضّل خزانة واحدة. جهاز التسجيل ولوحة التوصيل ومتحكم الدخول تُلصق في الرف نفسه حين يحتاج المبنى أكثر من كاميرات.",
      },
      {
        q: "أي علامات كاميرات تكتبونها؟",
        a: "Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung، بأسطر موديلات في قائمة القطع حتى تقارنها المشتريات.",
      },
      {
        q: "هل تستلمون نظامًا ركّبته شركة أخرى؟",
        a: "نعم، إذا وصلنا إلى جهاز التسجيل وعرفنا الكيابل. إذا لزم استبدال تمديد، نقول ذلك في المعاينة.",
      },
    ],
  },
  intercom: {
    h1: "تركيب الإنتركم المرئي في الرياض",
    seoTitle: "تركيب الإنتركم المرئي في الرياض",
    seoDescription:
      "إنتركم مرئي لبوابات وبهو الرياض، موصول بشاشة في الداخل. اطلب معاينة من الملز ونختبر فتح القفل قبل التسليم. اتصل اليوم على ‎+966 53 298 0149.",
    related: ["cctv", "access", "home-office"],
    sections: [
      {
        heading: "لماذا يُركَّب إنتركم مرئي",
        body: [
          "الإنتركم المرئي محطة عند البوابة أو في البهو، وكيبل، وشاشة يرى منها أحد الزائر ويفتح القفل. المحطة التي ترن على الجوال فقط تفشل يوم يكون الجوال في غرفة أخرى أو صامتًا أو مع السائق. فلل الملز والمجمعات شمال الرياض تحتاج الصورة على شاشة في المجلس أو عند الاستقبال.",
          "مباني المكاتب تحتاج الشيء نفسه بمقياس آخر. محطة البهو تتصل بمكتب الاستقبال لا باثني عشر جوالًا. يُضاف زر ثانٍ حين يتشارك مدخل واحد أسرتين أو مستأجرين. المحطة والشاشة والقفل تُرسم على مخطط واحد حتى يُعرف مسار الكيبل قبل تثبيت الماسورة.",
        ],
      },
      {
        heading: "الكيبل أهم من كراسة المنتج",
        body: [
          "أجراس اللاسلكي تبدو سهلة ثم يسقط الاتصال حين تبعد البوابة عن الموجّه. نمد كيبلًا من البوابة أو البهو إلى الشاشة. فتح القفل يُختبر من تلك الشاشة قبل المغادرة، بما فيه القفل الموجود إن كان يُفتح بأمان. إذا لم يمكن ذلك، تقوله قائمة القطع.",
          "الإنتركم غالبًا يصل إلى الخزانة نفسها التي فيها جهاز التسجيل ولوحة البيانات. فريق واحد يسحب هذه الكيابل في الزيارة نفسها، حتى لا تكون كاميرا البوابة ومحطة البوابة شركتين تشير كل منهما إلى الأخرى.",
        ],
      },
      {
        heading: "كيف يُسعَّر مسح البوابة",
        body: [
          "أخبر المكتب بالحي، وهل هي بوابة فيلا أو بهو مبنى، وكم شاشة تحتاج. نقيس التمديد ونصور البوابة ونكتب المحطة والشاشة ومزوّد الطاقة وواجهة القفل أسطرًا منفصلة. التركيب وزيارة الصيانة اللاحقة يبقيان على ‎+966 53 298 0149.",
          "التسليم هو كلمة المرور إن وُجدت، وملاحظة أي زر يتصل بأي شاشة، وتجربة القفل وأنت ترى. هذا هو العمل، لا صندوق يُترك في المجلس.",
        ],
      },
    ],
    faq: [
      {
        q: "هل يرن إنتركم بوابة الفيلا على شاشة في الداخل بدل الجوال؟",
        a: "نعم. هذا النطاق المعتاد في الملز وشمال الرياض: محطة عند البوابة، وكيبل إلى شاشة في البيت، وفتح قفل نختبره قبل المغادرة.",
      },
      {
        q: "هل تستخدمون القفل الموجود على البوابة؟",
        a: "إذا أمكن فتحه بأمان من الشاشة. إذا لم يمكن، تقول المعاينة ما الذي يتغير.",
      },
      {
        q: "هل يتشارك مستأجران محطة بهو واحدة؟",
        a: "نعم. زر ثانٍ يتصل بالشاشة الثانية. الاثنان على الرسم نفسه.",
      },
      {
        q: "هل الإنتركم يغني عن كاميرا على البوابة؟",
        a: "لا. المحطة تُظهر من يتصل. الكاميرا تسجّل البوابة حين لا أحد يجيب. غالبًا يُركَّبان معًا.",
      },
    ],
  },
  cabling: {
    h1: "تمديد الشبكات في الرياض",
    seoTitle: "تمديد الكيابل المنظمة في الرياض",
    seoDescription:
      "Cat6 وألياف لمكاتب الرياض، مختبرة ومرقّمة من الطرفين. اطلب معاينة من مكتب الملز قبل إغلاق السقف. اتصل على ‎+966 53 298 0149 اليوم واذكر الحي.",
    related: ["cctv", "smart-office", "computers"],
    sections: [
      {
        heading: "ماذا يغطي تمديد الشبكات",
        body: [
          "الكيابل المنظمة هي التمديد الثابت بين الخزانة الرئيسية وكل دور ومكتب وكاميرا وقارئ باب. في مكتب بالرياض يكون ذلك Cat6 إلى المكاتب، وأليافًا بين الخزائن حين يطول المسار أو يكون في المبنى صاعد ألياف. كل مسار مرقّم من الطرفين. بعد التلحيم تستلم ورقة فحص لا حزمة كيبل أزرق بلا أرقام.",
          "خزائن الأدوار تُرتَّب حتى تنزل فيها لاحقًا كاميرا أو قارئ من غير رف ثانٍ فوضوي. لوحة التوصيل ومكان المبدّل والتيار تُخطَّط معًا. تجهيز مكتب في العليا يطلب الأثاث قبل رسم المسارات ينتهي بكابلات تحت المكاتب. نريد المسارات معلَّمة والسقف ما يزال مفتوحًا.",
        ],
      },
      {
        heading: "لماذا الترقيم هو الجزء الذي يُهمل",
        body: [
          "اللوحة بلا أرقام رخيصة في اليوم الأول وغالية أول ما يتحرك مكتب أو تعطّل كاميرا. نرقّم الطرفين ونسجّل الفحص ونترك خريطة المنافذ على باب الخزانة. لا ينبغي لمدير المنشأة أن يتتبّع دورًا كاملًا ليجد مقبسًا واحدًا.",
          "التمديد أيضًا مسار الخدمات الأخرى. الكاميرات والإنتركم والتحكم في الدخول لا ينبغي أن تصل كثلاث شركات بثلاث بكرات. حين يكون التمديد عند سيسنت، هذه الأجهزة تُنهى في الخزانة التي رتّبناها.",
        ],
      },
      {
        heading: "كيف تُكتب معاينة التمديد",
        body: [
          "نعدّ المخارج في كل غرفة ونصور الصاعد ونحدد مكان الخزانة. قائمة القطع تفصل الكيبل ولوحات التوصيل والأوجه والألياف إن لزم والعمل. قواعد j5create وملحقات المكتب تُذكر مع نطاق أجهزة الحاسب حين يشمل التجهيز محطات عمل، لا مخفية داخل سعر الكيبل.",
          "الفحص آخر خطوة لا وعدًا. تستلم الورقة. بلاغات الأعطال لاحقًا إلى ‎+966 53 298 0149، وإذا لزم استبدال مسار نقول ذلك بدل إعادة تلحيم كيبل مهروس على أمل.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تمددون Cat6 أم أليافًا في مكاتب الرياض؟",
        a: "Cat6 إلى المكاتب هو النطاق المعتاد. الألياف بين الخزائن حين يطلب طول الصاعد أو تصميم المبنى ذلك.",
      },
      {
        q: "هل تُرقَّم المخارج؟",
        a: "نعم. الطرفان مرقّمان، وورقة الفحص تطابق الأرقام.",
      },
      {
        q: "هل تستخدم الكاميرات وقارئات الأبواب الخزانة نفسها؟",
        a: "نعم. نترك فراغًا ومنفذًا مُلصقًا حتى لا يحتاج جهاز لاحق رفًا آخر.",
      },
      {
        q: "متى تُطلب معاينة التمديد؟",
        a: "قبل إغلاق السقف. أرسل الحي وعدد الأدوار إلى مكتب الملز ونمشي الموقع.",
      },
    ],
  },
  computers: {
    h1: "تجهيز أجهزة المكاتب في الرياض",
    seoTitle: "تجهيز أجهزة المكاتب وقواعدها في الرياض",
    seoDescription:
      "أجهزة مكتبية وشاشات وقواعد USB-C لتجهيز مكاتب الرياض، مع التمديد. اطلب قائمة قطع مكتوبة من مكتب الملز على ‎+966 53 298 0149 واذكر المقاعد اليوم.",
    related: ["cabling", "smart-office", "products"],
    sections: [
      {
        heading: "ماذا يشمل نطاق أجهزة المكتب",
        body: [
          "أجهزة الحاسب وملحقاتها عند هذا المكتب هي الأجهزة والشاشات والقواعد التي يحتاجها صف مكاتب جديد، تُشترى وتُركَّب مع التمديد لا من مورّد ثانٍ يصل بعد الأثاث. تجهيز في الرياض فيه مخارج بيانات وبلا قواعد لا يبدأ العمل يوم الاثنين. نكتب عتاد المكتب في قائمة القطع نفسها مع الكيبل.",
          "قواعد ومحوّلات j5create تُستخدم حين تكون قاعدة USB-C القطعة المناسبة للحاسوب الذي يملكه العميل. لا تُضاف لكل مكتب عادة. الشاشات والحاملات والتيار أسطر مستقلة حتى تراها المشتريات.",
        ],
      },
      {
        heading: "لماذا يُشترى عتاد المكتب مع الكيبل",
        body: [
          "المخرج والقاعدة والشاشة مكان عمل واحد. إذا وفّرتها ثلاث شركات ورث آخر من يصل اللوم. نضبط الشاشات ونوصل القواعد ونتأكد أن كل مقعد يأخذ ربطًا من اللوحة المرقّمة. غرف الاجتماع التي تحتاج شاشة تُذكر في نطاق المكتب الذكي حين تكون الغرفة أكثر من مكتب.",
          "لا ندّعي أننا نصنّع الحواسيب المحمولة. العمل هو مكان العمل: تيار وبيانات وقاعدة وشاشة، تُراجع على عدد المقاعد الذي أعطيتنا إياه.",
        ],
      },
      {
        heading: "كيف تُسعَّر القائمة",
        body: [
          "أرسل عدد المقاعد والحي وهل يحضر الناس حواسيبهم أم يحتاجون أجهزة مكتبية. العرض يفصل القطع عن العمل. التركيب يُحجز مع زيارة التمديد حين يسمح السقف والأثاث. مكتب الملز ‎+966 53 298 0149، من السبت إلى الخميس، 9:00 إلى 18:00.",
        ],
      },
    ],
    faq: [
      {
        q: "هل توفّرون القواعد مع الكيبل؟",
        a: "نعم. قواعد j5create من نوع USB-C تُذكر حين يحتاجها المكتب، في سطر مستقل بقائمة القطع.",
      },
      {
        q: "هل يُركَّب ذلك مع تمديد الشبكة؟",
        a: "هذه الزيارة المفضّلة. المخرج والقاعدة يُفحصان معًا.",
      },
      {
        q: "هل تشترون حواسيب محمولة؟",
        a: "فقط إذا كانت في القائمة المتفق عليها. النطاق المعتاد أجهزة مكتبية وشاشات وقواعد والكيبل الذي يغذيها.",
      },
      {
        q: "من نتصل إذا تعطّلت قاعدة لاحقًا؟",
        a: "رقم الملز نفسه. إذا لزم استبدال القطعة نقول ذلك.",
      },
    ],
  },
  access: {
    h1: "تركيب التحكم في الدخول في الرياض",
    seoTitle: "أنظمة البصمة والتحكم في الدخول في الرياض",
    seoDescription:
      "قارئات بطاقة وبصمة لأبواب الموظفين وغرف الخوادم في الرياض. احجز معاينة ونترك كلمة إدارة النظام في ورقة التسليم. اتصل اليوم واذكر نوع الباب اليوم.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "ماذا يغطي التحكم في الدخول",
        body: [
          "التحكم في الدخول هو القارئ والمتحكم والقفل وسجل من عبر ومتى. في الرياض نضع قارئات بطاقة أو بصمة على الأبواب التي تحتاجها: مدخل الموظفين، غرفة الخوادم، مخزن العيادة، الصيدلية. لا نضع قارئًا في كل ممر. الباب الذي يجب أن يبقى مفتوحًا في الحريق لا يُعطى قفلًا يحبس الناس، ويُراجع نطاق إنذار الحريق حين يكونان في الزيارة نفسها.",
          "المتحكم يجلس في الخزانة مع جهاز التسجيل ولوحة التوصيل. الأحداث تُحفظ حتى يرى مدير المنشأة الباب من غير ملف غامض. كلمة إدارة النظام تُكتب في ورقة التسليم وتُترك لمن سيستخدمها فعلًا.",
        ],
      },
      {
        heading: "قارئات للأبواب التي تستحق سجلًا",
        body: [
          "الفيلا قد تحتاج البوابة وبابًا داخليًا واحدًا. مكتب على طريق الملك فهد قد يحتاج الاستقبال بعد الدوام وغرفة الاتصالات. المستودع قد يحتاج مكتب الرصيف لا الساحة، لأن الساحة مسألة كاميرا. نكتب هذا الفرق في المعاينة حتى لا تدفع لقارئات لن تقرأ سجلها.",
          "البصمة تُستخدم حيث تضيع البطاقة المشتركة أو تُتداول. البطاقات تُستخدم حيث القفازات أو العيادة أو الباب المزدحم يجعل البصمة فكرة سيئة. المعاينة تقول أيهما ولماذا.",
        ],
      },
      {
        heading: "كيف يُسلَّم العمل",
        body: [
          "نسجّل أول المستخدمين معك، ونختبر القفل من الجهة الآمنة ومن الخارج، ونتأكد أن الباب ما يزال يُفتح عند تحرير الحريق إن وُجد. كيبل القارئ مُلصق. تغيير الموظفين لاحقًا شيء يستطيع مديرك عمله، وإذا أردتنا لذلك يحجزه المكتب نفسه على ‎+966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تركّبون بصمة أم بطاقات؟",
        a: "الاثنين. البصمة حيث تُشارَك البطاقة، والبطاقات حيث الباب مزدحم أو الناس بقفازات. المعاينة تختار لكل باب.",
      },
      {
        q: "أين يُركَّب المتحكم؟",
        a: "في الخزانة مع جهاز التسجيل وعتاد الشبكة، لا فوق بلاطة سقف.",
      },
      {
        q: "من يحتفظ بكلمة إدارة النظام؟",
        a: "مدير المنشأة. تُكتب في ورقة التسليم، ولا تبقى في جوال الفنّي فقط.",
      },
      {
        q: "هل يُجمع التحكم في الدخول مع الكاميرات في زيارة واحدة؟",
        a: "نعم. الأبواب التي تحتاج قارئًا وكاميرا تُعلَّم على مخطط الدور نفسه.",
      },
    ],
  },
  "fire-alarm": {
    h1: "تركيب إنذار الحريق في الرياض",
    seoTitle: "أنظمة إنذار الحريق والاقتحام في الرياض",
    seoDescription:
      "إنذار حريق معنّن ودائرة اقتحام منفصلة لمباني الرياض. اطلب معاينة من مكتب الملز ونختبر الاثنين قبل التسليم. اتصل اليوم واذكر نوع المبنى والحي.",
    related: ["fire-safety", "access", "cctv"],
    sections: [
      {
        heading: "ماذا يشمل إنذار الحريق",
        body: [
          "تركيبة إنذار الحريق هنا لوحة معنّنة وكواشف ونقاط نداء وأجراس، توضع وفق المخطط لا حيث وصل الكيبل صدفة. كاشف الدخان والحرارة يُختار للغرفة: المطبخ ليس غرفة نوم، والمستودع ليس ممر عيادة. نقاط النداء عند المخارج التي يستخدمها الناس. الأجراس تُختبر حتى يسمعها المشرف ويستطيع إسكات تجربة من غير دليل لم نتركه.",
          "إنذار الاقتحام يُطلب غالبًا في الزيارة نفسها: تماسات أبواب وزجاج لليل. تكون على دائرة منفصلة. إنذار الليل لا يجوز أن يشبه إنذار الحريق، وإنذار الحريق لا يُسكت لأن أحدًا ظنه الباب.",
        ],
      },
      {
        heading: "لماذا يسبق المخطط الأجهزة",
        body: [
          "الكواشف التي تُضاف بعد إغلاق السقف توضع في المكان الخطأ ثم تُلام حين تطلق إنذارًا كاذبًا. نريد قائمة الأجهزة ومسارات الكيبل معلَّمة ونحن ما نزال نرى السقف. مكان اللوحة يُتفق عليه حتى لا تكون في غرفة مقفلة لا يدخلها حارس الليل.",
          "اللوحة وجهاز التسجيل ومتحكم الدخول يمكن أن تتشارك خزانة، لكن كيبل الحريق يُميَّز وتُكتب علاقة السبب والأثر. لا نخلط فتح قفل وجرسًا ثم نأمل.",
        ],
      },
      {
        heading: "ماذا يكون عند التسليم",
        body: [
          "اختبار للكواشف التي ركّبناها، واختبار لنقطة النداء، واختبار للأجراس، واختبار منفصل لدائرة الاقتحام إن كانت في النطاق. تستلم كلمة اللوحة وقائمة الأجهزة. مكتب الملز، ‎+966 53 298 0149، يحجز الزيارة التالية. الطفايات وإنارة الطوارئ، حين يحتاجها المبنى، نطاق السلامة وتُسعَّر في أسطر مستقلة.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تركّبون لوحات إنذار حريق معنّنة في الرياض؟",
        a: "نعم. الكواشف ونقاط النداء والأجراس توضع وفق المخطط وتُختبر قبل المغادرة.",
      },
      {
        q: "هل إنذار الاقتحام على لوحة الحريق نفسها؟",
        a: "لا. تماسات الباب والزجاج دائرة منفصلة حتى لا يُظن إنذار الليل حريقًا.",
      },
      {
        q: "هل توفّرون الطفايات أيضًا؟",
        a: "نعم، ضمن نطاق السلامة، مع أماكنها وتواريخ خدمتها مكتوبة. لا تُدفن داخل سعر اللوحة.",
      },
      {
        q: "من يستطيع إسكات التجربة؟",
        a: "المشرف. نريه ذلك في الموقع ونترك كلمة اللوحة في ورقة التسليم.",
      },
    ],
  },
  "fire-safety": {
    h1: "معدات السلامة من الحريق في الرياض",
    seoTitle: "تركيب معدات السلامة من الحريق في الرياض",
    seoDescription:
      "طفايات وبكرات خراطيم وإنارة طوارئ لمباني الرياض، تُركَّب وفق مخطط الخروج. اطلب معاينة من مكتب الملز على ‎+966 53 298 0149 واذكر المبنى اليوم.",
    related: ["fire-alarm", "maintenance", "home-office"],
    sections: [
      {
        heading: "ماذا تغطي معدات السلامة",
        body: [
          "أنظمة الحريق والسلامة، منفصلة عن لوحة الإنذار، هي الطفايات وبكرات الخراطيم وإنارة الطوارئ في الأماكن التي يسميها المخطط. الجهاز يُركَّب حسب الجدول لا على أقرب برغي فاضي. طفاية خلف باب يُفتح عليها ليست مكانًا. إنارة طوارئ لا تُرى من درج الخروج ليست مكانًا أيضًا.",
          "نكتب تاريخ خدمة كل طفاية ونترك القائمة عند مشرف المبنى. الفحص التالي لا ينبغي أن يعتمد على ملصق لم يصوره أحد. بكرات الخراطيم تُفحص لمدى وصولها، وإنارة الطوارئ تُفحص بقطع تغذية الوحدة لا بافتراض أن المصباح سليم لأنه جديد.",
        ],
      },
      {
        heading: "كيف يجاور ذلك إنذار الحريق",
        body: [
          "اللوحة تكشف وتنذر. الطفاية والبكرة ما يستخدمه الناس إذا أمكنهم إطفاء حريق صغير أو احتاجوا الخروج. نطاقان مختلفان، وحرفتان مختلفتان إذا فُصلتا. نفضّل تسعيرهما أسطرًا منفصلة في زيارة واحدة حتى يكون في مسار الخروج جرس ونقطة نداء وإنارة وطفاية متفقة.",
          "البيوت والمكاتب الصغيرة في الملز تحتاج غالبًا قائمة قصيرة لا كتالوج مستودع. نكتب العدد. لا نملأ ممرًا ليطول الفاتورة.",
        ],
      },
      {
        heading: "حجز المعاينة",
        body: [
          "أرسل نوع المبنى والحي إلى مكتب الملز. إذا كان عندك مخطط إنذار فأرسله. نقول ما الناقص وما الذي يحتاج تاريخ خدمة فقط. الصيانة بعد التركيب تبقى على ‎+966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تبيعون الطفايات فقط أم تركّبونها؟",
        a: "نركّبها وفق المخطط ونترك قائمة أماكن وتواريخ خدمة عند المشرف.",
      },
      {
        q: "هل هذا عمل لوحة إنذار الحريق نفسه؟",
        a: "لا. اللوحة نطاق مستقل. يمكن معاينتهما في الزيارة نفسها وتُسعَّران في سطرين.",
      },
      {
        q: "هل تفحصون إنارة الطوارئ؟",
        a: "نعم. نتأكد أنها حيث يحتاجها المخرج وأن الوحدة تستجيب عند إسقاط تغذيتها.",
      },
      {
        q: "هل يحجز مكتب صغير هذا من غير استبدال الإنذار كله؟",
        a: "نعم. أخبرنا بالحي وما هو موجود على الجدران. لا نستبدل لوحة تحتاج خدمة فقط.",
      },
    ],
  },
  "home-office": {
    h1: "مشاريع أمن المنازل والمكاتب في الرياض",
    seoTitle: "مشاريع أمن المنازل والمكاتب في الرياض",
    seoDescription:
      "مخطط واحد لفيلا أو مكتب صغير في الرياض: كاميرات وإنتركم وبيانات ورف. اطلب معاينة من مكتب الملز قبل بدء العمل اليوم واذكر الحي ونوع المبنى الآن.",
    related: ["cctv", "intercom", "cabling"],
    sections: [
      {
        heading: "ماذا يجمع مشروع المنزل أو المكتب",
        body: [
          "مشاريع المنازل والمكاتب هي المباني الصغيرة التي تحتاج أربعة أشياء على مخطط واحد: مشهد للبوابة أو الباب، وجهاز تسجيل، وبضع نقاط بيانات، وخزانة ليست خيوطًا. أصحاب الفلل في الملز ومديرو المكاتب في العليا يصفونها غالبًا قوائم شراء منفصلة. هي نطاق واحد. محطة البوابة والكاميرات ومخارج البيانات تتشارك المسارات والرف.",
          "الفيلا عادةً تأخذ إنتركم بوابة وقبّة أو رصاصًا للمواقف وجهاز تسجيل وشاشة في الداخل. المكتب الصغير يأخذ تغطية الاستقبال وبضع نقاط بيانات وخزانة ما يزال المؤجّر يقبلها. لا نقسم ذلك إلى ثلاثة عروض لا تُبنى معًا.",
        ],
      },
      {
        heading: "لماذا مخطط واحد أوفر من ثلاثة مقاولين",
        body: [
          "ثلاثة مقاولين تعني ثلاث زيارات وثلاثة ثقوب في الجدار نفسه وخزانة لا يملكها أحد. نعلّم المسارات مرة ونسحب الكيبل مرة ونختبر الصورة وفتح القفل ومخرج البيانات في اليوم نفسه حين يسمح الموقع. قائمة القطع ما تزال تفصل الكاميرات والإنتركم والكيبل والعمل حتى ترى المال.",
          "إذا كان المبنى يحتاج خطًا واحدًا نقول ذلك. هذه الصفحة للمواقع التي تحتاج المجموعة. رصيف مستودع أو لوحة حريق وحدها مكانها صفحات تلك الخدمات، وسنشير إليك هناك.",
        ],
      },
      {
        heading: "كيف تبدأ",
        body: [
          "أخبر المكتب بالحي، فيلا أو مكتب، وما الموجود. نعاين قبل أن يطلب أحد الأجهزة. التسليم خزانة مُلصقة وكلمات المرور وتجربة قصيرة وأنت حاضر. الرقم لا يتغير بعد ذلك: ‎+966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تغطي معاينة واحدة بوابة الفيلا والكاميرات ونقاط البيانات؟",
        a: "نعم. هذا مشروع المنزل المعتاد: مخطط واحد وخزانة واحدة وقائمة قطع ما تزال تفصل الخطوط.",
      },
      {
        q: "هل مكتب صغير في العليا من النوع نفسه؟",
        a: "الطريقة نفسها. استقبال وبضع مخارج وخزانة، تُعاين قبل إغلاق السقف.",
      },
      {
        q: "هل يجب أخذ كل الخطوط؟",
        a: "لا. إذا احتجت كاميرات فقط سعّرنا الكاميرات. هذا النطاق للمواقع التي تحتاج أكثر من خط.",
      },
      {
        q: "من يصون العمل لاحقًا؟",
        a: "مكتب الملز. بلاغات الأعطال ترجع إلى الرقم المكتوب في ورقة التسليم.",
      },
    ],
  },
  "smart-office": {
    h1: "تركيب المكتب الذكي في الرياض",
    seoTitle: "كيابل المكتب الذكي والدخول في الرياض",
    seoDescription:
      "شاشات اجتماع وبيانات مكاتب ودخول في خزانة واحدة بالرياض. احجز معاينة من الملز حتى لا تلوم ثلاث جهات الكيبل. اتصل اليوم واذكر عدد الغرف الآن.",
    related: ["cabling", "access", "computers"],
    sections: [
      {
        heading: "ماذا يعني المكتب الذكي هنا",
        body: [
          "المكتب الذكي في هذا الموقع ليس كتالوج أجهزة. هو شاشة غرفة الاجتماع وربط المكاتب وقارئ الباب تنزل في خزانة واحدة وعليها خريطة منافذ. غرفة اجتماع في الرياض فيها شاشة وبلا مسار مُلصق لـ HDMI أو USB-C وباب تُرك لشركة أخرى ستفشل في الأسبوع الأول ويلوم الجميع الكيبل.",
          "ننهي الشاشة والكاميرا إن وُجدت والقارئ في رف ما نزال نستطيع فتحه. خريطة المنافذ تقول أي مخرج للطاولة وأيها للشاشة. صفوف المكاتب التي تحتاج قواعد تُذكر مع نطاق الأجهزة حتى لا تختلف فاتورة الغرفة عن فاتورة المقاعد.",
        ],
      },
      {
        heading: "خزانة واحدة بدل ثلاث جهات",
        body: [
          "مورّد الشاشة ومورّد الكاميرا ومورّد الباب سيقول كل منهم إن الكيبل على غيره. إذا سحبناه ولحمناه فالفحص علينا. نشغّل الشاشة ونجرّب البطاقة على الباب ونفحص المخرج. هذا تعريف ممل للذكي، وهو الذي يعمل بعد ظهر الخميس.",
          "لا نبيع تطبيق تحكم بدل لوحة مُلصقة. إذا لزم متحكّم للغرفة فهو سطر في القائمة بموديل مسمّى لا عبارة.",
        ],
      },
      {
        heading: "المعاينة قبل الأثاث",
        body: [
          "أرسل الدور وعدد غرف الاجتماع والحي. ننظر إلى الصاعد والخزانة. تجهيزات العليا هي الحالة الشائعة. مكتب الملز يحجز الزيارة على ‎+966 53 298 0149.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تركّبون شاشات غرف الاجتماع؟",
        a: "نعم، مع مسار الكيبل والمخرج مُلصقين. لا تُترك الشاشة لمقاول آخر يكتشف أنه لا يوجد مسار.",
      },
      {
        q: "هل يكون التحكم في الدخول في الزيارة نفسها؟",
        a: "نعم. القارئ يُنهى في الخزانة نفسها، وخريطة المنافذ تشملها.",
      },
      {
        q: "هل هذا نظام أتمتة مبنى؟",
        a: "لا. هو شاشات وبيانات ودخول، مُختبرة. المتحكم يُضاف فقط حين تسميه قائمة القطع.",
      },
      {
        q: "متى نتصل؟",
        a: "قبل أن يثبت الأثاث المخارج في المكان الخطأ. من السبت إلى الخميس، 9:00 إلى 18:00.",
      },
    ],
  },
  products: {
    h1: "بيع معدات الكاميرات والإنذار في الرياض",
    seoTitle: "بيع معدات الكاميرات والإنذار في الرياض",
    seoDescription:
      "كاميرات وأجهزة تسجيل وقارئات وكيبل ورفوف من مكتب الملز، في قائمة قطع تُراجع. اطلب الأسطر قبل الشراء على ‎+966 53 298 0149 واذكر الموديل اليوم.",
    related: ["cctv", "cabling", "maintenance"],
    sections: [
      {
        heading: "ماذا يمكن شراؤه من غير التركيب",
        body: [
          "بيع المنتجات هو الأجهزة من غير التركيب، لفريق مشتريات عنده مقاول أو يريد مقارنة الأسطر قبل اعتماد العمل. الكاميرات وأجهزة التسجيل والقارئات والكيبل والرفوف تُعرض قائمة قطع بأسطر موديلات مكتوبة. تستطيع مراجعتها. ليست مبلغًا واحدًا اسمه نظام كاميرات.",
          "العلامات التي نركّبها هي التي في القائمة: Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung للكاميرات، مع الكيبل وعتاد الخزانة الذي سمّته المعاينة. j5create يظهر حين يكون السطر قاعدة أو محوّلًا، لا كعلامة كاميرات.",
        ],
      },
      {
        heading: "لماذا قائمة القطع أفضل من سعر حزمة",
        body: [
          "سعر الحزمة يخفي حجم القرص والعدسة ونوع القارئ. فريق المشتريات لا يستطيع المقارنة. نفصل القطع عن العمل حتى لو طلبتم التركيب لاحقًا. إذا أردتم القطع فقط، يقول العرض ذلك ولا نضيف زيارة لم تطلبوها.",
          "التوريد من مكتب الملز يعني أن أحدًا يرد إذا كان سطر خطأ. الرقم ‎+966 53 298 0149. إذا نفد موديل نقول أي سطر تغيّر قبل الاعتماد.",
        ],
      },
      {
        heading: "كيف يُطلب",
        body: [
          "أرسل القائمة التي عندك، أو صف المبنى ونكتب واحدة. الاستلام أو التوصيل يُتفق عليه في العرض. التركيب، إذا أضفته، سطر مستقل وصفحة مستقلة. نفضّل أن ترى الرقمين.",
        ],
      },
    ],
    faq: [
      {
        q: "هل أشتري كاميرات من غير تركيب؟",
        a: "نعم. العرض قائمة قطع بأسطر موديلات. العمل يُحذف إلا إذا أضفته.",
      },
      {
        q: "هل العلامات هي ما تركّبونه؟",
        a: "نعم. Hikvision وDahua وEZVIZ وIDIS وIMOU وSamsung علامات الكاميرات التي نحددها، وتُختار لكل مشهد.",
      },
      {
        q: "هل تستطيع المشتريات مقارنة الأسطر؟",
        a: "هذا سبب كتابتها. سعر الحزمة الواحدة ليس طريقتنا في التسعير.",
      },
      {
        q: "من نتصل بشأن سطر خطأ؟",
        a: "مكتب الملز، sales@sysnet-ksa.com أو ‎+966 53 298 0149.",
      },
    ],
  },
  maintenance: {
    h1: "صيانة الكاميرات والإنذار في الرياض",
    seoTitle: "صيانة الكاميرات والإنذار في الرياض",
    seoDescription:
      "التركيب ثم الصيانة من مكتب الملز نفسه. اتصل على ‎+966 53 298 0149 لعطل كاميرات أو إنذار أو كيابل في الرياض، واذكر الحي ونوع العطل في أول مكالمة.",
    related: ["cctv", "fire-alarm", "cabling"],
    sections: [
      {
        heading: "ماذا تغطي الصيانة",
        body: [
          "التركيب والصيانة وعد بأن الفريق الذي ركّب هو الذي تتصل به حين يتعطل. بلاغات الأعطال إلى ‎+966 53 298 0149. ننظر في كاميرات انطفأت وأجهزة تسجيل توقفت وقارئات تصفر ولا تفتح وكيبل هرسه عمل سقف لغيرنا. إذا لم نركّب النظام نستلمه حين نصل إلى جهاز التسجيل ونعرف الكيابل.",
          "لا نبيع عقدًا سنويًا مبهمًا من زيارات لا أحد جدولها. زيارة الصيانة لها عطل أو قائمة فحص. إذا لزم استبدال مسار، تقوله المعاينة. إعادة تلحيم كيبل ميّت وتسميته إصلاحًا تعيد المبنى إلى العطل نفسه مرة أخرى.",
        ],
      },
      {
        heading: "أنظمة لم نركّبها",
        body: [
          "كثير من مباني الرياض فيها جهاز تسجيل في خزانة وبلا كلمات مرور. نحاول. إذا كانت الكيابل مجهولة واللوحة مقفلة بكلمة لا يملكها أحد، نقول ما لم نستطع رؤيته. لا نخترع تقرير سلامة. حين نستطيع استلام النظام، تسليم تلك الزيارة الأولى هو كلمة المرور الجديدة وقائمة القنوات والأعطال التي وجدناها.",
          "إنذار الحريق والدخول والإنتركم والبيانات في طابور الهاتف نفسه. لا تحتاج شركة لكل ضوء يومض، إلا إذا أظهرت المعاينة قطعة متخصصة لا نحملها. سنقول ذلك.",
        ],
      },
      {
        heading: "كيف تُحجز زيارة عطل",
        body: [
          "اتصل بالمكتب أو أرسل الحي ونوع المبنى وما الذي توقف. من السبت إلى الخميس، 9:00 إلى 18:00. إذا كان الموقع خارج الرياض فقل ذلك في أول اتصال. المكتب في الملز. لا نحجز مدينة أبعد إلا حين يستطيع فريق الحضور فعلًا. البريد يبقى sales@sysnet-ksa.com.",
        ],
      },
    ],
    faq: [
      {
        q: "هل تصونون كاميرات لم تركّبوها؟",
        a: "نعم، حين نصل إلى جهاز التسجيل ونعرف الكيابل. إذا لم نستطع، يقول تقرير الزيارة ما الناقص.",
      },
      {
        q: "أي رقم لعطل؟",
        a: "‎+966 53 298 0149. هذا مكتب الملز، من السبت إلى الخميس، 9:00 إلى 18:00.",
      },
      {
        q: "هل تستبدلون الكيبل أم تعيدون تشغيل الجهاز فقط؟",
        a: "إذا كان الكيبل العطل نقول ذلك ونسعّر الاستبدال. لا نعيد تشغيل مسار ميّت كل مرة.",
      },
      {
        q: "هل صيانة إنذار الحريق على المكتب نفسه؟",
        a: "نعم. الإنذار والدخول والإنتركم والكاميرات ترجع إلى الرقم نفسه.",
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
