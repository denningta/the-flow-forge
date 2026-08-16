import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { stegaClean } from "next-sanity"

import { Assessment } from "@/components/sections/assessment"
import { CaseStudy } from "@/components/sections/case-study"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { Hero } from "@/components/sections/hero"
import { Industries } from "@/components/sections/industries"
import { Problem } from "@/components/sections/problem"
import { Process } from "@/components/sections/process"
import { WhatWeDo } from "@/components/sections/what-we-do"
import { WhyDifferent } from "@/components/sections/why-different"
import { sanityFetch } from "@/sanity/live"
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries"

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: HOME_PAGE_QUERY, stega: false }),
    sanityFetch({ query: SITE_SETTINGS_QUERY, stega: false }),
  ])

  return {
    title: page?.seo?.metaTitle ?? undefined,
    description:
      page?.seo?.metaDescription ?? settings?.positioning ?? undefined,
    ...(page?.seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

export default async function HomePage() {
  const [{ data: page }, { data: settings }] = await Promise.all([
    sanityFetch({ query: HOME_PAGE_QUERY }),
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
  ])

  if (!page || !settings) notFound()

  const cta = {
    schedulingUrl: settings.schedulingUrl,
    ctaLabel: settings.ctaLabel,
    ctaLabelShort: settings.ctaLabelShort,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(page, settings)) }}
      />
      {page.hero && <Hero data={page.hero} cta={cta} />}
      {page.problem && <Problem data={page.problem} />}
      {page.capabilities && <WhatWeDo data={page.capabilities} />}
      {page.industries && <Industries data={page.industries} />}
      {page.differentiators && <WhyDifferent data={page.differentiators} />}
      {page.process && <Process data={page.process} />}
      {page.assessment && <Assessment data={page.assessment} cta={cta} />}
      {page.caseStudy && <CaseStudy data={page.caseStudy} />}
      {page.faq && <Faq data={page.faq} />}
      {page.closingCta && (
        <FinalCta data={page.closingCta} cta={cta} email={settings.email} />
      )}
    </>
  )
}

type HomePageData = NonNullable<
  Awaited<ReturnType<typeof sanityFetch<typeof HOME_PAGE_QUERY>>>["data"]
>
type SettingsData = NonNullable<
  Awaited<ReturnType<typeof sanityFetch<typeof SITE_SETTINGS_QUERY>>>["data"]
>

/**
 * Structured data is read by crawlers, so every value goes through
 * `stegaClean` — invisible Visual Editing characters would corrupt the JSON-LD
 * exactly the way they corrupt <head> tags.
 */
function buildJsonLd(page: HomePageData, settings: SettingsData) {
  const url = stegaClean(settings.url ?? "")
  const assessment = page.assessment
  const questions = page.faq?.questions ?? []

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}#organization`,
        name: stegaClean(settings.name ?? ""),
        url,
        email: stegaClean(settings.email ?? ""),
        description: stegaClean(settings.positioning ?? ""),
        areaServed: "US",
        serviceType: (settings.serviceTypes ?? []).map((type) =>
          stegaClean(type)
        ),
        ...(assessment?.heading
          ? {
              makesOffer: {
                "@type": "Offer",
                name: stegaClean(assessment.heading),
                description: stegaClean(assessment.outcome ?? ""),
                ...(assessment.priceRange?.minPrice != null
                  ? {
                      priceSpecification: {
                        "@type": "PriceSpecification",
                        minPrice: assessment.priceRange.minPrice,
                        maxPrice: assessment.priceRange.maxPrice,
                        priceCurrency: stegaClean(
                          assessment.priceRange.currency ?? "USD"
                        ),
                      },
                    }
                  : {}),
              },
            }
          : {}),
      },
      ...(questions.length > 0
        ? [
            {
              "@type": "FAQPage",
              "@id": `${url}#faq`,
              mainEntity: questions.map((faq) => ({
                "@type": "Question",
                name: stegaClean(faq.question ?? ""),
                acceptedAnswer: {
                  "@type": "Answer",
                  text: stegaClean(faq.answer ?? ""),
                },
              })),
            },
          ]
        : []),
    ],
  }
}
