import type { StegaBranded } from "next-sanity"

import type {
  BLOG_PAGE_QUERY_RESULT,
  HOME_PAGE_QUERY_RESULT,
  POSTS_INDEX_QUERY_RESULT,
  POST_DETAIL_QUERY_RESULT,
  SITE_SETTINGS_QUERY_RESULT,
} from "@/sanity.types"

/**
 * Aliases over the TypeGen output so components declare props against the shape
 * their query actually returns. Regenerate with `npm run typegen` in `studio/`
 * after changing a schema or a query.
 *
 * `StegaBranded` matters: `sanityFetch` returns strings branded as possibly
 * carrying invisible Visual Editing characters unless called with the literal
 * `stega: false`. Branding these aliases keeps them assignable from a normal
 * fetch, and makes TypeScript reject comparing a value to a string literal
 * without `stegaClean` first — which is exactly the bug the brand exists to
 * catch. Types used only in `stega: false` contexts (metadata, sitemap) stay
 * unbranded.
 */

export type SiteSettings = StegaBranded<NonNullable<SITE_SETTINGS_QUERY_RESULT>>
export type HomePage = StegaBranded<NonNullable<HOME_PAGE_QUERY_RESULT>>
export type BlogPage = StegaBranded<NonNullable<BLOG_PAGE_QUERY_RESULT>>
export type PostSummary = StegaBranded<POSTS_INDEX_QUERY_RESULT[number]>
export type Post = StegaBranded<NonNullable<POST_DETAIL_QUERY_RESULT>>

export type HeroContent = NonNullable<HomePage["hero"]>
export type ProblemContent = NonNullable<HomePage["problem"]>
export type CapabilitiesContent = NonNullable<HomePage["capabilities"]>
export type IndustriesContent = NonNullable<HomePage["industries"]>
export type DifferentiatorsContent = NonNullable<HomePage["differentiators"]>
export type ProcessContent = NonNullable<HomePage["process"]>
export type AssessmentContent = NonNullable<HomePage["assessment"]>
export type CaseStudyContent = NonNullable<HomePage["caseStudy"]>
export type FaqContent = NonNullable<HomePage["faq"]>
export type ClosingCtaContent = NonNullable<HomePage["closingCta"]>

/** The subset of site settings every call-to-action button needs. */
export type CtaSettings = Pick<
  SiteSettings,
  "schedulingUrl" | "ctaLabel" | "ctaLabelShort"
>
