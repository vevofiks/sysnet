# Product Requirements Document (PRD): Sysnet Corporate Website

## 1. Executive Summary

**Project Name:** Sysnet Corporate Website  

**Company:** Sysnet (Adam Al Arabia Company / NetPro affiliated)  

**Location:** Malaz, Riyadh, Saudi Arabia  

**Website:** [www.sysnet-ksa.com](http://www.sysnet-ksa.com)  

**Primary Objective:** To design and develop a modern, high-performance, and visually striking corporate website that establishes Sysnet as a premier provider of security, IT infrastructure, and safety solutions in Saudi Arabia. The site must evoke trust and technical expertise through a professional UI and fluid GSAP-driven animations.

## 2. Target Audience

*   **B2B Clients:** Facility managers, corporate IT directors, and procurement officers seeking reliable infrastructure and security installations for offices and commercial buildings.

*   **B2C Clients:** Homeowners looking for smart home installations, residential CCTV, and intercom systems.

*   **Contractors & Developers:** Professionals requiring end-to-end fire, safety, and network cabling solutions for new construction projects.

## 3. Design & UI/UX Guidelines

The visual identity will be strictly adhered to, utilizing the brand's core color palette to create a high-contrast, modern aesthetic inspired by the provided Dribbble references.

*   **Color Palette:**

    *   **Primary Base:** Deep Royal Blue `#0B3C5D` / `#003366`) for trust, security, and dark mode sections.

    *   **Secondary Base:** Pure White `#FFFFFF`) and Soft Ice Blue `#EBF5FB`) for clean, readable content sections.

    *   **Accent/Action:** Energetic Orange `#FF5722` or similar vibrant orange) for call-to-action (CTA) buttons, hover states, and critical highlights.

*   **Typography:** A modern, highly legible sans-serif typeface (e.g., Inter, Roboto, or Plus Jakarta Sans) to maintain a corporate and tech-forward feel.

*   **Animation Strategy (GSAP):**

    *   **Hero Section:** Smooth fade-and-slide up for headlines, with a subtle parallax effect on background imagery.

    *   **Scroll Triggers:** Service cards and section headers should reveal on scroll using `gsap.from()` with slight Y-axis offsets and staggered delays.

    *   **Hover States:** Fluid scaling and border-color transitions on service cards and buttons.

    *   **Page Transitions:** Seamless wipe or fade transitions between core pages to prevent jarring reloads.

## 4. Information Architecture & Sitemap

### 4.1 Global Elements

*   **Sticky Header:** Logo, Navigation Links (Home, About Us, Services, Projects, Contact), and a prominent "Get a Quote" CTA button (Energetic Orange).

*   **Footer:** 

    *   Quick links to services.

    *   Contact Information: 

        *   Address: Malaz, Riyadh, Saudi Arabia

        *   Email: [sales@sysnet-ksa.com](mailto:sales@sysnet-ksa.com)

        *   Phone: +966532980149

    *   Social media icons, copyright, and legal links.

### 4.2 Core Pages & Sections

**1. Home Page**

*   **Hero Section:** High-impact headline, subheadline emphasizing security and tech solutions, dual CTAs ("Explore Services", "Contact Us"), and a high-quality abstract or situational background image.

*   **Trust Bar:** Client logos or partner brands (e.g., j5create, NetPro).

*   **About Snippet:** Brief introduction to Sysnet's mission in Riyadh.

*   **Services Overview:** Grid layout showcasing core offerings using vector icons (Lucide or similar).

*   **Why Choose Us:** Bulleted benefits (Expertise, 24/7 Support, Certified Installers).

*   **Testimonials/Stats:** Animated counters (projects completed, active clients).

*   **Final CTA:** Lead generation banner urging visitors to secure their premises.

**2. Services Page**

A comprehensive catalog of Sysnet’s offerings. Each service will have a dedicated card or modal with detailed descriptions.

*   CCTV Camera

*   Intercom System

*   Network Cabling

*   Computers & Accessories

*   Biometric & Access Control

*   Fire Alarm & Intrusion Alarm Systems

*   Fire & Safety Systems

*   Home & Office Projects

*   Smart Office Installation

*   Product Sales

*   Installation & Maintenance

**3. Contact Us Page**

*   **Contact Form:** Fields for Name, Email, Phone, Service of Interest, and Message.

*   **Direct Contact Details:** Reiteration of email, phone, and physical address.

*   **Location Map:** Embedded interactive Google Map pinned to Malaz, Riyadh.

## 5. Functional Requirements

*   **Lead Generation Form:** Must include client-side validation, anti-spam protection (reCAPTCHA), and route submissions directly to `sales@sysnet-ksa.com`.

*   **Responsive Design:** The application must be fully responsive, ensuring parity in user experience across desktop, tablet, and mobile devices.

*   **Multilingual Support (Future-Proofing):** Architecture should allow for easy implementation of an Arabic language toggle (RTL support) given the target market in Saudi Arabia.

## 6. Non-Functional Requirements

*   **Performance:** The site must achieve a Google Lighthouse score of 90+ for Performance. GSAP animations must be optimized to ensure 60fps scrolling without layout thrashing.

*   **SEO:** Implement semantic HTML, proper meta tags, Open Graph tags, and structured data (Local Business schema) to rank well for security services in Riyadh.

*   **Accessibility:** Adhere to WCAG 2.1 AA standards (sufficient color contrast, aria-labels for icons, keyboard navigability).

## 7. Recommended Technology Stack

*   **Frontend Framework:** Next.js (React) or plain React (Vite) for fast rendering and component-based architecture.

*   **Styling:** Tailwind CSS or Shadcn UI for rapid, consistent, and responsive styling aligning with the brand colors.

*   **Animations:** GSAP (GreenSock Animation Platform) and ScrollTrigger plugin for high-performance timeline animations.

*   **Icons:** Lucide React for clean, consistent, and customizable SVG iconography.