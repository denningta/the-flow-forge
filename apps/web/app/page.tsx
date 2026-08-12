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
import { FAQS } from "@/lib/content"
import { SITE } from "@/lib/site"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.positioning,
      areaServed: "US",
      serviceType: [
        "Manufacturing systems integration",
        "Lean manufacturing consulting",
        "ERP and MES integration",
        "Daily management systems",
      ],
      makesOffer: {
        "@type": "Offer",
        name: "Factory Flow Assessment",
        description:
          "A fixed-fee diagnostic covering current-state process mapping, information flow analysis, bottleneck identification, and a prioritized improvement roadmap.",
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 3000,
          maxPrice: 5000,
          priceCurrency: "USD",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}#faq`,
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <WhatWeDo />
      <Industries />
      <WhyDifferent />
      <Process />
      <Assessment />
      <CaseStudy />
      <Faq />
      <FinalCta />
    </>
  )
}
