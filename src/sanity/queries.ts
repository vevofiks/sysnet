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
  badge?: string;
  title?: string;
  lede?: string;
  heading?: string;
  p1?: string;
  p2?: string;
  skylineImageUrl?: string | null;
  techImageUrl?: string | null;
  pillarsList?: { num: string; title: string; desc: string }[];
  workBadge?: string;
  workTitle?: string;
  workLede?: string;
  ctaBadge?: string;
  ctaTitle?: string;
  ctaBody?: string;
  ctaBtnSurvey?: string;
  ctaBtnCall?: string;
}

export async function getAboutPageData(locale: Locale): Promise<SanityAboutPageData | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "aboutPage"][0]{
        badgeEn, badgeAr,
        titleEn, titleAr,
        ledeEn, ledeAr,
        headingEn, headingAr,
        p1En, p1Ar,
        p2En, p2Ar,
        skylineImage,
        techImage,
        pillarsList[]{
          _key,
          num,
          titleEn, titleAr,
          descEn, descAr
        },
        workBadgeEn, workBadgeAr,
        workTitleEn, workTitleAr,
        workLedeEn, workLedeAr,
        ctaBadgeEn, ctaBadgeAr,
        ctaTitleEn, ctaTitleAr,
        ctaBodyEn, ctaBodyAr,
        ctaBtnSurveyEn, ctaBtnSurveyAr,
        ctaBtnCallEn, ctaBtnCallAr
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

    type PillarRaw = { num?: string; titleEn?: string; titleAr?: string; descEn?: string; descAr?: string };
    const pillarsList = data.pillarsList?.map((p: PillarRaw) => ({
      num: p.num || "01",
      title: isAr ? (p.titleAr || p.titleEn || "") : (p.titleEn || p.titleAr || ""),
      desc: isAr ? (p.descAr || p.descEn || "") : (p.descEn || p.descAr || ""),
    }));

    return {
      badge: isAr ? (data.badgeAr || data.badgeEn) : (data.badgeEn || data.badgeAr),
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      heading: isAr ? (data.headingAr || data.headingEn) : (data.headingEn || data.headingAr),
      p1: isAr ? (data.p1Ar || data.p1En) : (data.p1En || data.p1Ar),
      p2: isAr ? (data.p2Ar || data.p2En) : (data.p2En || data.p2Ar),
      skylineImageUrl,
      techImageUrl,
      pillarsList,
      workBadge: isAr ? (data.workBadgeAr || data.workBadgeEn) : (data.workBadgeEn || data.workBadgeAr),
      workTitle: isAr ? (data.workTitleAr || data.workTitleEn) : (data.workTitleEn || data.workTitleAr),
      workLede: isAr ? (data.workLedeAr || data.workLedeEn) : (data.workLedeEn || data.workLedeAr),
      ctaBadge: isAr ? (data.ctaBadgeAr || data.ctaBadgeEn) : (data.ctaBadgeEn || data.ctaBadgeAr),
      ctaTitle: isAr ? (data.ctaTitleAr || data.ctaTitleEn) : (data.ctaTitleEn || data.ctaTitleAr),
      ctaBody: isAr ? (data.ctaBodyAr || data.ctaBodyEn) : (data.ctaBodyEn || data.ctaBodyAr),
      ctaBtnSurvey: isAr ? (data.ctaBtnSurveyAr || data.ctaBtnSurveyEn) : (data.ctaBtnSurveyEn || data.ctaBtnSurveyAr),
      ctaBtnCall: isAr ? (data.ctaBtnCallAr || data.ctaBtnCallEn) : (data.ctaBtnCallEn || data.ctaBtnCallAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for aboutPage:", error);
    return null;
  }
}

// --- Services Page Query ---
export interface SanityServicesPageData {
  badge?: string;
  title?: string;
  lede?: string;
  catalogHeading?: string;
  catalogSubtitle?: string;
  featuredTitle?: string;
  featuredLede?: string;
  advantageBadge?: string;
  advantageTitle?: string;
  advantageBody?: string;
  advantageBtnAll?: string;
  advantageBtnSurvey?: string;
}

export async function getServicesPageData(locale: Locale): Promise<SanityServicesPageData | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "servicesPage"][0]{
        badgeEn, badgeAr,
        titleEn, titleAr,
        ledeEn, ledeAr,
        catalogHeadingEn, catalogHeadingAr,
        catalogSubtitleEn, catalogSubtitleAr,
        featuredTitleEn, featuredTitleAr,
        featuredLedeEn, featuredLedeAr,
        advantageBadgeEn, advantageBadgeAr,
        advantageTitleEn, advantageTitleAr,
        advantageBodyEn, advantageBodyAr,
        advantageBtnAllEn, advantageBtnAllAr,
        advantageBtnSurveyEn, advantageBtnSurveyAr
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    return {
      badge: isAr ? (data.badgeAr || data.badgeEn) : (data.badgeEn || data.badgeAr),
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      catalogHeading: isAr ? (data.catalogHeadingAr || data.catalogHeadingEn) : (data.catalogHeadingEn || data.catalogHeadingAr),
      catalogSubtitle: isAr ? (data.catalogSubtitleAr || data.catalogSubtitleEn) : (data.catalogSubtitleEn || data.catalogSubtitleAr),
      featuredTitle: isAr ? (data.featuredTitleAr || data.featuredTitleEn) : (data.featuredTitleEn || data.featuredTitleAr),
      featuredLede: isAr ? (data.featuredLedeAr || data.featuredLedeEn) : (data.featuredLedeEn || data.featuredLedeAr),
      advantageBadge: isAr ? (data.advantageBadgeAr || data.advantageBadgeEn) : (data.advantageBadgeEn || data.advantageBadgeAr),
      advantageTitle: isAr ? (data.advantageTitleAr || data.advantageTitleEn) : (data.advantageTitleEn || data.advantageTitleAr),
      advantageBody: isAr ? (data.advantageBodyAr || data.advantageBodyEn) : (data.advantageBodyEn || data.advantageBodyAr),
      advantageBtnAll: isAr ? (data.advantageBtnAllAr || data.advantageBtnAllEn) : (data.advantageBtnAllEn || data.advantageBtnAllAr),
      advantageBtnSurvey: isAr ? (data.advantageBtnSurveyAr || data.advantageBtnSurveyEn) : (data.advantageBtnSurveyEn || data.advantageBtnSurveyAr),
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for servicesPage:", error);
    return null;
  }
}

export async function getServicesList(
  locale: Locale
): Promise<Record<string, { title?: string; summary?: string; detail?: string }> | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "service"]{
        "slug": slug.current,
        titleEn, titleAr,
        summaryEn, summaryAr,
        detailEn, detailAr
      }`
    );
    if (!data || data.length === 0) return null;
    const isAr = locale === "ar";
    const map: Record<string, { title?: string; summary?: string; detail?: string }> = {};
    for (const item of data) {
      if (item.slug) {
        map[item.slug] = {
          title: isAr ? (item.titleAr || item.titleEn) : (item.titleEn || item.titleAr),
          summary: isAr ? (item.summaryAr || item.summaryEn) : (item.summaryEn || item.summaryAr),
          detail: isAr ? (item.detailAr || item.detailEn) : (item.detailEn || item.detailAr),
        };
      }
    }
    return map;
  } catch (error) {
    console.warn("Notice: Sanity query error for service catalog list:", error);
    return null;
  }
}

// --- Projects Page Query ---
export interface SanityProjectsPageData {
  badge?: string;
  title?: string;
  lede?: string;
  standardsBadge?: string;
  standardsTitle?: string;
  standardsList?: { title: string; desc: string }[];
}

export async function getProjectsPageData(locale: Locale): Promise<SanityProjectsPageData | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "projectsPage"][0]{
        badgeEn, badgeAr,
        titleEn, titleAr,
        ledeEn, ledeAr,
        standardsBadgeEn, standardsBadgeAr,
        standardsTitleEn, standardsTitleAr,
        standardsList[]{
          _key,
          titleEn, titleAr,
          descEn, descAr
        }
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    type StdRaw = { titleEn?: string; titleAr?: string; descEn?: string; descAr?: string };
    const standardsList = data.standardsList?.map((s: StdRaw) => ({
      title: isAr ? (s.titleAr || s.titleEn || "") : (s.titleEn || s.titleAr || ""),
      desc: isAr ? (s.descAr || s.descEn || "") : (s.descEn || s.descAr || ""),
    }));

    return {
      badge: isAr ? (data.badgeAr || data.badgeEn) : (data.badgeEn || data.badgeAr),
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      standardsBadge: isAr ? (data.standardsBadgeAr || data.standardsBadgeEn) : (data.standardsBadgeEn || data.standardsBadgeAr),
      standardsTitle: isAr ? (data.standardsTitleAr || data.standardsTitleEn) : (data.standardsTitleEn || data.standardsTitleAr),
      standardsList,
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for projectsPage:", error);
    return null;
  }
}

export interface SanityProjectItem {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  scene?: string;
  sceneAlt?: string;
  alt: string;
  facts: string[];
}

export async function getProjectsList(locale: Locale): Promise<SanityProjectItem[] | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "projectItem"] | order(_createdAt asc){
        titleEn, titleAr,
        "slug": slug.current,
        tagEn, tagAr,
        summaryEn, summaryAr,
        image,
        sceneImage,
        factsEn, factsAr
      }`
    );
    if (!data || data.length === 0) return null;
    const isAr = locale === "ar";
    return data.map((item: any) => {
      let imageUrl = "/images/united-security-cameras.jpg";
      if (item.image) {
        const b = urlFor(item.image);
        if (b) imageUrl = b.width(800).quality(85).url();
      }
      return {
        slug: item.slug,
        title: isAr ? (item.titleAr || item.titleEn) : (item.titleEn || item.titleAr),
        tag: isAr ? (item.tagAr || item.tagEn) : (item.tagEn || item.tagAr),
        summary: isAr ? (item.summaryAr || item.summaryEn) : (item.summaryEn || item.summaryAr),
        image: imageUrl,
        alt: item.titleEn || "Project installation",
        facts: isAr ? (item.factsAr || item.factsEn || []) : (item.factsEn || item.factsAr || []),
      };
    });
  } catch (error) {
    console.warn("Notice: Sanity query error for projectItem:", error);
    return null;
  }
}

// --- Contact Page Query ---
export interface SanityContactPageData {
  badge?: string;
  title?: string;
  lede?: string;
  statusBadge?: string;
  officeHeading?: string;
  address?: string;
  phone?: string;
  email?: string;
  hours?: string;
  formSubmitBtn?: string;
  stepsList?: { num: string; title: string; desc: string }[];
}

export async function getContactPageData(locale: Locale): Promise<SanityContactPageData | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "contactPage"][0]{
        badgeEn, badgeAr,
        titleEn, titleAr,
        ledeEn, ledeAr,
        statusBadgeEn, statusBadgeAr,
        officeHeadingEn, officeHeadingAr,
        addressEn, addressAr,
        phone,
        email,
        hoursEn, hoursAr,
        formSubmitBtnEn, formSubmitBtnAr,
        stepsList[]{
          _key,
          num,
          titleEn, titleAr,
          descEn, descAr
        }
      }`
    );
    if (!data) return null;
    const isAr = locale === "ar";
    type StepRaw = { num?: string; titleEn?: string; titleAr?: string; descEn?: string; descAr?: string };
    const stepsList = data.stepsList?.map((s: StepRaw) => ({
      num: s.num || "1",
      title: isAr ? (s.titleAr || s.titleEn || "") : (s.titleEn || s.titleAr || ""),
      desc: isAr ? (s.descAr || s.descEn || "") : (s.descEn || s.descAr || ""),
    }));

    return {
      badge: isAr ? (data.badgeAr || data.badgeEn) : (data.badgeEn || data.badgeAr),
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      lede: isAr ? (data.ledeAr || data.ledeEn) : (data.ledeEn || data.ledeAr),
      statusBadge: isAr ? (data.statusBadgeAr || data.statusBadgeEn) : (data.statusBadgeEn || data.statusBadgeAr),
      officeHeading: isAr ? (data.officeHeadingAr || data.officeHeadingEn) : (data.officeHeadingEn || data.officeHeadingAr),
      address: isAr ? (data.addressAr || data.addressEn) : (data.addressEn || data.addressAr),
      phone: data.phone,
      email: data.email,
      hours: isAr ? (data.hoursAr || data.hoursEn) : (data.hoursEn || data.hoursAr),
      formSubmitBtn: isAr ? (data.formSubmitBtnAr || data.formSubmitBtnEn) : (data.formSubmitBtnEn || data.formSubmitBtnAr),
      stepsList,
    };
  } catch (error) {
    console.warn("Notice: Sanity query error for contactPage:", error);
    return null;
  }
}

// --- Service Detail (Sub-service page) Query ---
export interface SanityServiceDetailData {
  title?: string;
  heading?: string;
  summary?: string;
  detail?: string;
  imageUrl?: string | null;
  alt?: string;
  journeyBadge?: string;
  journeyTitle?: string;
  workflowSteps?: { num: string; title: string; desc: string }[];
  secondaryBadge?: string;
  secondaryHeading?: string;
  secondaryBody?: string;
  includesTitle?: string;
  includes?: string[];
  leavesTitle?: string;
  leaves?: string[];
  ctaBadge?: string;
  ctaHeading?: string;
  ctaBody?: string;
}

export async function getServiceDetailData(
  slug: string,
  locale: Locale
): Promise<SanityServiceDetailData | null> {
  if (!isSanityConfigured) return null;
  const client = await getSanityClient();
  if (!client) return null;
  try {
    const data = await client.fetch(
      `*[_type == "service" && slug.current == $slug][0]{
        titleEn, titleAr,
        headingEn, headingAr,
        summaryEn, summaryAr,
        detailEn, detailAr,
        image,
        alt,
        journeyBadgeEn, journeyBadgeAr,
        journeyTitleEn, journeyTitleAr,
        workflowSteps[]{
          _key,
          num,
          titleEn, titleAr,
          descEn, descAr
        },
        secondaryBadgeEn, secondaryBadgeAr,
        secondaryHeadingEn, secondaryHeadingAr,
        secondaryBodyEn, secondaryBodyAr,
        includesTitleEn, includesTitleAr,
        includesEn, includesAr,
        leavesTitleEn, leavesTitleAr,
        leavesEn, leavesAr,
        ctaBadgeEn, ctaBadgeAr,
        ctaHeadingEn, ctaHeadingAr,
        ctaBodyEn, ctaBodyAr
      }`,
      { slug }
    );
    if (!data) return null;
    const isAr = locale === "ar";
    let imageUrl: string | null = null;
    if (data.image) {
      const b = urlFor(data.image);
      if (b) imageUrl = b.width(1200).quality(85).url();
    }

    type StepRaw = { num?: string; titleEn?: string; titleAr?: string; descEn?: string; descAr?: string };
    const workflowSteps = data.workflowSteps?.map((s: StepRaw) => ({
      num: s.num || "01",
      title: isAr ? (s.titleAr || s.titleEn || "") : (s.titleEn || s.titleAr || ""),
      desc: isAr ? (s.descAr || s.descEn || "") : (s.descEn || s.descAr || ""),
    }));

    return {
      title: isAr ? (data.titleAr || data.titleEn) : (data.titleEn || data.titleAr),
      heading: isAr ? (data.headingAr || data.headingEn) : (data.headingEn || data.headingAr),
      summary: isAr ? (data.summaryAr || data.summaryEn) : (data.summaryEn || data.summaryAr),
      detail: isAr ? (data.detailAr || data.detailEn) : (data.detailEn || data.detailAr),
      imageUrl,
      alt: data.alt,
      journeyBadge: isAr ? (data.journeyBadgeAr || data.journeyBadgeEn) : (data.journeyBadgeEn || data.journeyBadgeAr),
      journeyTitle: isAr ? (data.journeyTitleAr || data.journeyTitleEn) : (data.journeyTitleEn || data.journeyTitleAr),
      workflowSteps,
      secondaryBadge: isAr ? (data.secondaryBadgeAr || data.secondaryBadgeEn) : (data.secondaryBadgeEn || data.secondaryBadgeAr),
      secondaryHeading: isAr ? (data.secondaryHeadingAr || data.secondaryHeadingEn) : (data.secondaryHeadingEn || data.secondaryHeadingAr),
      secondaryBody: isAr ? (data.secondaryBodyAr || data.secondaryBodyEn) : (data.secondaryBodyEn || data.secondaryBodyAr),
      includesTitle: isAr ? (data.includesTitleAr || data.includesTitleEn) : (data.includesTitleEn || data.includesTitleAr),
      includes: isAr ? (data.includesAr || data.includesEn) : (data.includesEn || data.includesAr),
      leavesTitle: isAr ? (data.leavesTitleAr || data.leavesTitleEn) : (data.leavesTitleEn || data.leavesTitleAr),
      leaves: isAr ? (data.leavesAr || data.leavesEn) : (data.leavesEn || data.leavesAr),
      ctaBadge: isAr ? (data.ctaBadgeAr || data.ctaBadgeEn) : (data.ctaBadgeEn || data.ctaBadgeAr),
      ctaHeading: isAr ? (data.ctaHeadingAr || data.ctaHeadingEn) : (data.ctaHeadingEn || data.ctaHeadingAr),
      ctaBody: isAr ? (data.ctaBodyAr || data.ctaBodyEn) : (data.ctaBodyEn || data.ctaBodyAr),
    };
  } catch (error) {
    console.warn(`Notice: Sanity query error for service ${slug}:`, error);
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
