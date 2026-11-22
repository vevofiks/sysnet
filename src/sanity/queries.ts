import { getSanityClient, isSanityConfigured } from "./client";
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
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
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
  heroBadge?: string;
  heroTitle?: string;
  heroLede?: string;
  heroImageUrl?: string | null;
  heroExploreBtn?: string;
  heroContactBtn?: string;
  heroScopes?: string[];

  crewBadge?: string;
  crewTitle?: string;
  crewBody?: string;
  crewPoints?: string[];
  crewBtnAllServices?: string;
  crewBtnSurvey?: string;
  crewImageUrl?: string | null;
  crewCardBadge?: string;
  crewCardText?: string;

  sectorsBadge?: string;
  sectorsTitle?: string;
  sectorsLede?: string;
  industriesList?: { index: string; title: string; text: string }[];

  brandLabel?: string;

  scopedBadge?: string;
  scopedTitle?: string;
  scopedLede?: string;
  scopedSeeScopeBtn?: string;
  complementaryBadge?: string;
  complementaryTitle?: string;
  complementaryBtn?: string;
  complementaryContactBtn?: string;

  stepsBadge?: string;
  stepsTitle?: string;
  stepsLede?: string;
  stepsList?: { index: string; title: string; text: string }[];
  trustIndicators?: string[];

  projectsBadge?: string;
  projectsTitle?: string;
  projectsLede?: string;

  areasBadge?: string;
  areasTitle?: string;
  areasBody?: string;

  faqBadge?: string;
  faqTitle?: string;
  faqLede?: string;
  faqCardTitle?: string;
  faqCardLede?: string;
  faqsList?: { q: string; a: string }[];

  bookBadge?: string;
  bookTitle?: string;
  bookBody?: string;
  bookBtnSurvey?: string;
  bookBtnCall?: string;
}

export async function getHomePageData(locale: Locale): Promise<SanityHomePageData | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "homePage"][0]{
        heroBadgeEn, heroBadgeAr,
        heroTitleEn, heroTitleAr,
        heroLedeEn, heroLedeAr,
        heroImage,
        heroExploreBtnEn, heroExploreBtnAr,
        heroContactBtnEn, heroContactBtnAr,
        heroScopesEn, heroScopesAr,

        crewBadgeEn, crewBadgeAr,
        crewTitleEn, crewTitleAr,
        crewBodyEn, crewBodyAr,
        crewPointsEn, crewPointsAr,
        crewBtnAllServicesEn, crewBtnAllServicesAr,
        crewBtnSurveyEn, crewBtnSurveyAr,
        crewImage,
        crewCardBadgeEn, crewCardBadgeAr,
        crewCardTextEn, crewCardTextAr,

        sectorsBadgeEn, sectorsBadgeAr,
        sectorsTitleEn, sectorsTitleAr,
        sectorsLedeEn, sectorsLedeAr,
        industriesList[]{
          _key,
          index,
          titleEn, titleAr,
          textEn, textAr
        },

        brandLabelEn, brandLabelAr,

        scopedBadgeEn, scopedBadgeAr,
        scopedTitleEn, scopedTitleAr,
        scopedLedeEn, scopedLedeAr,
        scopedSeeScopeBtnEn, scopedSeeScopeBtnAr,
        complementaryBadgeEn, complementaryBadgeAr,
        complementaryTitleEn, complementaryTitleAr,
        complementaryBtnEn, complementaryBtnAr,
        complementaryContactBtnEn, complementaryContactBtnAr,

        stepsBadgeEn, stepsBadgeAr,
        stepsTitleEn, stepsTitleAr,
        stepsLedeEn, stepsLedeAr,
        stepsList[]{
          _key,
          index,
          titleEn, titleAr,
          textEn, textAr
        },
        trustIndicator1En, trustIndicator1Ar,
        trustIndicator2En, trustIndicator2Ar,
        trustIndicator3En, trustIndicator3Ar,

        projectsBadgeEn, projectsBadgeAr,
        projectsTitleEn, projectsTitleAr,
        projectsLedeEn, projectsLedeAr,

        areasBadgeEn, areasBadgeAr,
        areasTitleEn, areasTitleAr,
        areasBodyEn, areasBodyAr,

        faqBadgeEn, faqBadgeAr,
        faqTitleEn, faqTitleAr,
        faqLedeEn, faqLedeAr,
        faqCardTitleEn, faqCardTitleAr,
        faqCardLedeEn, faqCardLedeAr,
        faqsList[]{
          _key,
          questionEn, questionAr,
          answerEn, answerAr
        },

        bookBadgeEn, bookBadgeAr,
        bookTitleEn, bookTitleAr,
        bookBodyEn, bookBodyAr,
        bookBtnSurveyEn, bookBtnSurveyAr,
        bookBtnCallEn, bookBtnCallAr
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

    const heroScopes = isAr
      ? (data.heroScopesAr?.length ? data.heroScopesAr : data.heroScopesEn)
      : (data.heroScopesEn?.length ? data.heroScopesEn : data.heroScopesAr);

    const crewPoints = isAr
      ? (data.crewPointsAr?.length ? data.crewPointsAr : data.crewPointsEn)
      : (data.crewPointsEn?.length ? data.crewPointsEn : data.crewPointsAr);

    type IndustryRaw = { index?: string; titleEn?: string; titleAr?: string; textEn?: string; textAr?: string };
    const industriesList = data.industriesList?.map((item: IndustryRaw) => ({
      index: item.index || "01",
      title: isAr ? (item.titleAr || item.titleEn || "") : (item.titleEn || item.titleAr || ""),
      text: isAr ? (item.textAr || item.textEn || "") : (item.textEn || item.textAr || ""),
    }));

    type StepRaw = { index?: string; titleEn?: string; titleAr?: string; textEn?: string; textAr?: string };
    const stepsList = data.stepsList?.map((item: StepRaw) => ({
      index: item.index || "01",
      title: isAr ? (item.titleAr || item.titleEn || "") : (item.titleEn || item.titleAr || ""),
      text: isAr ? (item.textAr || item.textEn || "") : (item.textEn || item.textAr || ""),
    }));

    const trustIndicators = [
      isAr ? (data.trustIndicator1Ar || data.trustIndicator1En) : (data.trustIndicator1En || data.trustIndicator1Ar),
      isAr ? (data.trustIndicator2Ar || data.trustIndicator2En) : (data.trustIndicator2En || data.trustIndicator2Ar),
      isAr ? (data.trustIndicator3Ar || data.trustIndicator3En) : (data.trustIndicator3En || data.trustIndicator3Ar),
    ].filter(Boolean);

    type FaqRaw = { questionEn?: string; questionAr?: string; answerEn?: string; answerAr?: string };
    const faqsList = data.faqsList?.map((item: FaqRaw) => ({
      q: isAr ? (item.questionAr || item.questionEn || "") : (item.questionEn || item.questionAr || ""),
      a: isAr ? (item.answerAr || item.answerEn || "") : (item.answerEn || item.answerAr || ""),
    }));

    return {
      heroBadge: isAr ? (data.heroBadgeAr || data.heroBadgeEn) : (data.heroBadgeEn || data.heroBadgeAr),
      heroTitle: isAr ? (data.heroTitleAr || data.heroTitleEn) : (data.heroTitleEn || data.heroTitleAr),
      heroLede: isAr ? (data.heroLedeAr || data.heroLedeEn) : (data.heroLedeEn || data.heroLedeAr),
      heroImageUrl,
      heroExploreBtn: isAr ? (data.heroExploreBtnAr || data.heroExploreBtnEn) : (data.heroExploreBtnEn || data.heroExploreBtnAr),
      heroContactBtn: isAr ? (data.heroContactBtnAr || data.heroContactBtnEn) : (data.heroContactBtnEn || data.heroContactBtnAr),
      heroScopes,

      crewBadge: isAr ? (data.crewBadgeAr || data.crewBadgeEn) : (data.crewBadgeEn || data.crewBadgeAr),
      crewTitle: isAr ? (data.crewTitleAr || data.crewTitleEn) : (data.crewTitleEn || data.crewTitleAr),
      crewBody: isAr ? (data.crewBodyAr || data.crewBodyEn) : (data.crewBodyEn || data.crewBodyAr),
      crewPoints,
      crewBtnAllServices: isAr ? (data.crewBtnAllServicesAr || data.crewBtnAllServicesEn) : (data.crewBtnAllServicesEn || data.crewBtnAllServicesAr),
      crewBtnSurvey: isAr ? (data.crewBtnSurveyAr || data.crewBtnSurveyEn) : (data.crewBtnSurveyEn || data.crewBtnSurveyAr),
      crewImageUrl,
      crewCardBadge: isAr ? (data.crewCardBadgeAr || data.crewCardBadgeEn) : (data.crewCardBadgeEn || data.crewCardBadgeAr),
      crewCardText: isAr ? (data.crewCardTextAr || data.crewCardTextEn) : (data.crewCardTextEn || data.crewCardTextAr),

      sectorsBadge: isAr ? (data.sectorsBadgeAr || data.sectorsBadgeEn) : (data.sectorsBadgeEn || data.sectorsBadgeAr),
      sectorsTitle: isAr ? (data.sectorsTitleAr || data.sectorsTitleEn) : (data.sectorsTitleEn || data.sectorsTitleAr),
      sectorsLede: isAr ? (data.sectorsLedeAr || data.sectorsLedeEn) : (data.sectorsLedeEn || data.sectorsLedeAr),
      industriesList,

      brandLabel: isAr ? (data.brandLabelAr || data.brandLabelEn) : (data.brandLabelEn || data.brandLabelAr),

      scopedBadge: isAr ? (data.scopedBadgeAr || data.scopedBadgeEn) : (data.scopedBadgeEn || data.scopedBadgeAr),
      scopedTitle: isAr ? (data.scopedTitleAr || data.scopedTitleEn) : (data.scopedTitleEn || data.scopedTitleAr),
      scopedLede: isAr ? (data.scopedLedeAr || data.scopedLedeEn) : (data.scopedLedeEn || data.scopedLedeAr),
      scopedSeeScopeBtn: isAr ? (data.scopedSeeScopeBtnAr || data.scopedSeeScopeBtnEn) : (data.scopedSeeScopeBtnEn || data.scopedSeeScopeBtnAr),
      complementaryBadge: isAr ? (data.complementaryBadgeAr || data.complementaryBadgeEn) : (data.complementaryBadgeEn || data.complementaryBadgeAr),
      complementaryTitle: isAr ? (data.complementaryTitleAr || data.complementaryTitleEn) : (data.complementaryTitleEn || data.complementaryTitleAr),
      complementaryBtn: isAr ? (data.complementaryBtnAr || data.complementaryBtnEn) : (data.complementaryBtnEn || data.complementaryBtnAr),
      complementaryContactBtn: isAr ? (data.complementaryContactBtnAr || data.complementaryContactBtnEn) : (data.complementaryContactBtnEn || data.complementaryContactBtnAr),

      stepsBadge: isAr ? (data.stepsBadgeAr || data.stepsBadgeEn) : (data.stepsBadgeEn || data.stepsBadgeAr),
      stepsTitle: isAr ? (data.stepsTitleAr || data.stepsTitleEn) : (data.stepsTitleEn || data.stepsTitleAr),
      stepsLede: isAr ? (data.stepsLedeAr || data.stepsLedeEn) : (data.stepsLedeEn || data.stepsLedeAr),
      stepsList,
      trustIndicators,

      projectsBadge: isAr ? (data.projectsBadgeAr || data.projectsBadgeEn) : (data.projectsBadgeEn || data.projectsBadgeAr),
      projectsTitle: isAr ? (data.projectsTitleAr || data.projectsTitleEn) : (data.projectsTitleEn || data.projectsTitleAr),
      projectsLede: isAr ? (data.projectsLedeAr || data.projectsLedeEn) : (data.projectsLedeEn || data.projectsLedeAr),

      areasBadge: isAr ? (data.areasBadgeAr || data.areasBadgeEn) : (data.areasBadgeEn || data.areasBadgeAr),
      areasTitle: isAr ? (data.areasTitleAr || data.areasTitleEn) : (data.areasTitleEn || data.areasTitleAr),
      areasBody: isAr ? (data.areasBodyAr || data.areasBodyEn) : (data.areasBodyEn || data.areasBodyAr),

      faqBadge: isAr ? (data.faqBadgeAr || data.faqBadgeEn) : (data.faqBadgeEn || data.faqBadgeAr),
      faqTitle: isAr ? (data.faqTitleAr || data.faqTitleEn) : (data.faqTitleEn || data.faqTitleAr),
      faqLede: isAr ? (data.faqLedeAr || data.faqLedeEn) : (data.faqLedeEn || data.faqLedeAr),
      faqCardTitle: isAr ? (data.faqCardTitleAr || data.faqCardTitleEn) : (data.faqCardTitleEn || data.faqCardTitleAr),
      faqCardLede: isAr ? (data.faqCardLedeAr || data.faqCardLedeEn) : (data.faqCardLedeEn || data.faqCardLedeAr),
      faqsList,

      bookBadge: isAr ? (data.bookBadgeAr || data.bookBadgeEn) : (data.bookBadgeEn || data.bookBadgeAr),
      bookTitle: isAr ? (data.bookTitleAr || data.bookTitleEn) : (data.bookTitleEn || data.bookTitleAr),
      bookBody: isAr ? (data.bookBodyAr || data.bookBodyEn) : (data.bookBodyEn || data.bookBodyAr),
      bookBtnSurvey: isAr ? (data.bookBtnSurveyAr || data.bookBtnSurveyEn) : (data.bookBtnSurveyEn || data.bookBtnSurveyAr),
      bookBtnCall: isAr ? (data.bookBtnCallAr || data.bookBtnCallEn) : (data.bookBtnCallEn || data.bookBtnCallAr),
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
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
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
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
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
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
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
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
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
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
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
