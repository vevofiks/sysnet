import { client, isSanityConfigured } from "./client";
import { urlFor } from "./image";
import type { Locale } from "@/lib/locale";

// --- 404 Page Query ---
export interface SanityNotFoundData {
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;
  backgroundImageUrl?: string | null;
  homeButtonTextEn?: string;
  homeButtonTextAr?: string;
  productsButtonTextEn?: string;
  productsButtonTextAr?: string;
}

export async function getNotFoundData(): Promise<SanityNotFoundData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "notFoundPage"][0]{
        titleEn,
        titleAr,
        subtitleEn,
        subtitleAr,
        backgroundImage,
        homeButtonTextEn,
        homeButtonTextAr,
        productsButtonTextEn,
        productsButtonTextAr
      }`
    );
    if (!data) return null;

    let backgroundImageUrl: string | null = null;
    if (data.backgroundImage) {
      const builder = urlFor(data.backgroundImage);
      if (builder) backgroundImageUrl = builder.width(1920).quality(85).url();
    }

    return { ...data, backgroundImageUrl };
  } catch (error) {
    console.warn("Notice: Sanity query error for notFoundPage:", error);
    return null;
  }
}

// --- Home Page Query ---
export interface SanityHomePageData {
  heroTitle?: string;
  heroLede?: string;
  heroImageUrl?: string | null;
  heroExploreBtn?: string;
  heroContactBtn?: string;
  crewTitle?: string;
  crewBody?: string;
  crewImageUrl?: string | null;
  sectorsTitle?: string;
  stepsTitle?: string;
  faqTitle?: string;
  bookTitle?: string;
  bookBody?: string;
}

export async function getHomePageData(locale: Locale): Promise<SanityHomePageData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "homePage"][0]{
        heroTitleEn, heroTitleAr,
        heroLedeEn, heroLedeAr,
        heroImage,
        heroExploreBtnEn, heroExploreBtnAr,
        heroContactBtnEn, heroContactBtnAr,
        crewTitleEn, crewTitleAr,
        crewBodyEn, crewBodyAr,
        crewImage,
        sectorsTitleEn, sectorsTitleAr,
        stepsTitleEn, stepsTitleAr,
        faqTitleEn, faqTitleAr,
        bookTitleEn, bookTitleAr,
        bookBodyEn, bookBodyAr
      }`
    );
    if (!data) return null;

    const isAr = locale === "ar";
    let heroImageUrl: string | null = null;
    if (data.heroImage) {
      const b = urlFor(data.heroImage);
      if (b) heroImageUrl = b.width(1920).quality(85).url();
    }
    let crewImageUrl: string | null = null;
    if (data.crewImage) {
      const b = urlFor(data.crewImage);
      if (b) crewImageUrl = b.width(1200).quality(85).url();
    }

    return {
      heroTitle: isAr ? (data.heroTitleAr || data.heroTitleEn) : (data.heroTitleEn || data.heroTitleAr),
      heroLede: isAr ? (data.heroLedeAr || data.heroLedeEn) : (data.heroLedeEn || data.heroLedeAr),
      heroImageUrl,
      heroExploreBtn: isAr ? (data.heroExploreBtnAr || data.heroExploreBtnEn) : (data.heroExploreBtnEn || data.heroExploreBtnAr),
      heroContactBtn: isAr ? (data.heroContactBtnAr || data.heroContactBtnEn) : (data.heroContactBtnEn || data.heroContactBtnAr),
      crewTitle: isAr ? (data.crewTitleAr || data.crewTitleEn) : (data.crewTitleEn || data.crewTitleAr),
      crewBody: isAr ? (data.crewBodyAr || data.crewBodyEn) : (data.crewBodyEn || data.crewBodyAr),
      crewImageUrl,
      sectorsTitle: isAr ? (data.sectorsTitleAr || data.sectorsTitleEn) : (data.sectorsTitleEn || data.sectorsTitleAr),
      stepsTitle: isAr ? (data.stepsTitleAr || data.stepsTitleEn) : (data.stepsTitleEn || data.stepsTitleAr),
      faqTitle: isAr ? (data.faqTitleAr || data.faqTitleEn) : (data.faqTitleEn || data.faqTitleAr),
      bookTitle: isAr ? (data.bookTitleAr || data.bookTitleEn) : (data.bookTitleEn || data.bookTitleAr),
      bookBody: isAr ? (data.bookBodyAr || data.bookBodyEn) : (data.bookBodyEn || data.bookBodyAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for homePage:", error);
    return null;
  }
}

// --- About Page Query ---
export interface SanityAboutPageData {
  title?: string;
  lede?: string;
  heading?: string;
  p1?: string;
  p2?: string;
  skylineImageUrl?: string | null;
  techImageUrl?: string | null;
  workTitle?: string;
  workText1?: string;
}

export async function getAboutPageData(locale: Locale): Promise<SanityAboutPageData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "aboutPage"][0]{
        titleEn, titleAr,
        ledeEn, ledeAr,
        headingEn, headingAr,
        p1En, p1Ar,
        p2En, p2Ar,
        skylineImage,
        techImage,
        workTitleEn, workTitleAr,
        workText1En, workText1Ar
      }`
    );
    if (!data) return null;

    const isAr = locale === "ar";
    let skylineImageUrl: string | null = null;
    if (data.skylineImage) {
      const b = urlFor(data.skylineImage);
      if (b) skylineImageUrl = b.width(1200).quality(85).url();
    }
    let techImageUrl: string | null = null;
    if (data.techImage) {
      const b = urlFor(data.techImage);
      if (b) techImageUrl = b.width(1200).quality(85).url();
    }

    return {
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      heading: isAr ? (data.headingAr || data.headingEn) : (data.headingEn || data.headingAr),
      p1: isAr ? (data.p1Ar || data.p1En) : (data.p1En || data.p1Ar),
      p2: isAr ? (data.p2Ar || data.p2En) : (data.p2En || data.p2Ar),
      skylineImageUrl,
      techImageUrl,
      workTitle: isAr ? (data.workTitleAr || data.workTitleEn) : (data.workTitleEn || data.workTitleAr),
      workText1: isAr ? (data.workText1Ar || data.workText1En) : (data.workText1En || data.workText1Ar),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for aboutPage:", error);
    return null;
  }
}

// --- Services Page Query ---
export interface SanityServicesPageData {
  title?: string;
  lede?: string;
}

export async function getServicesPageData(locale: Locale): Promise<SanityServicesPageData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "servicesPage"][0]{
        titleEn, titleAr,
        ledeEn, ledeAr
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    return {
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for servicesPage:", error);
    return null;
  }
}

// --- Projects Page Query ---
export interface SanityProjectsPageData {
  title?: string;
  lede?: string;
  prompt?: string;
}

export async function getProjectsPageData(locale: Locale): Promise<SanityProjectsPageData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "projectsPage"][0]{
        titleEn, titleAr,
        ledeEn, ledeAr,
        promptEn, promptAr
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    return {
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      prompt: isAr ? (data.promptAr || data.promptEn) : (data.promptEn || data.promptAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for projectsPage:", error);
    return null;
  }
}

// --- Contact Page Query ---
export interface SanityContactPageData {
  title?: string;
  lede?: string;
  officeHeading?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  formSubmitBtn?: string;
}

export async function getContactPageData(locale: Locale): Promise<SanityContactPageData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "contactPage"][0]{
        titleEn, titleAr,
        ledeEn, ledeAr,
        officeHeadingEn, officeHeadingAr,
        addressEn, addressAr,
        phone,
        email,
        hoursEn, hoursAr,
        formSubmitBtnEn, formSubmitBtnAr
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    return {
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      officeHeading: isAr ? (data.officeHeadingAr || data.officeHeadingEn) : (data.officeHeadingEn || data.officeHeadingAr),
      address: isAr ? (data.addressAr || data.addressEn) : (data.addressEn || data.addressAr),
      phone: data.phone,
      email: data.email,
      hours: isAr ? (data.hoursAr || data.hoursEn) : (data.hoursEn || data.hoursAr),
      formSubmitBtn: isAr ? (data.formSubmitBtnAr || data.formSubmitBtnEn) : (data.formSubmitBtnEn || data.formSubmitBtnAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for contactPage:", error);
    return null;
  }
}

// --- Navigation & Site Settings Query ---
export interface SanityNavigationData {
  brandName?: string;
  homeLabel?: string;
  aboutLabel?: string;
  servicesLabel?: string;
  projectsLabel?: string;
  contactLabel?: string;
  ctaButton?: string;
}

export async function getNavigationData(locale: Locale): Promise<SanityNavigationData | null> {
  if (!isSanityConfigured || !client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "navigation"][0]{
        brandName,
        homeLabelEn, homeLabelAr,
        aboutLabelEn, aboutLabelAr,
        servicesLabelEn, servicesLabelAr,
        projectsLabelEn, projectsLabelAr,
        contactLabelEn, contactLabelAr,
        ctaButtonEn, ctaButtonAr
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    return {
      brandName: data.brandName,
      homeLabel: isAr ? (data.homeLabelAr || data.homeLabelEn) : (data.homeLabelEn || data.homeLabelAr),
      aboutLabel: isAr ? (data.aboutLabelAr || data.aboutLabelEn) : (data.aboutLabelEn || data.aboutLabelAr),
      servicesLabel: isAr ? (data.servicesLabelAr || data.servicesLabelEn) : (data.servicesLabelEn || data.servicesLabelAr),
      projectsLabel: isAr ? (data.projectsLabelAr || data.projectsLabelEn) : (data.projectsLabelEn || data.projectsLabelAr),
      contactLabel: isAr ? (data.contactLabelAr || data.contactLabelEn) : (data.contactLabelEn || data.contactLabelAr),
      ctaButton: isAr ? (data.ctaButtonAr || data.ctaButtonEn) : (data.ctaButtonEn || data.ctaButtonAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for navigation:", error);
    return null;
  }
}
