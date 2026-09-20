import { stegaClean } from "next-sanity"

import { CornerBrackets } from "@/components/site/corner-brackets"
import { CtaButton } from "@/components/site/cta-button"
import type { ClosingCtaContent, CtaSettings } from "@/lib/content-types"

function FinalCta({
  data,
  cta,
  email,
}: {
  data: ClosingCtaContent
  cta: CtaSettings
  email?: string | null
}) {
  const cleanEmail = email ? stegaClean(email) : null

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-border/60"
    >
      <div
        aria-hidden
        className="forge-glow pointer-events-none absolute inset-0"
      />
      <CornerBrackets label="FIG. 02 — GET STARTED" />

      <div className="reveal relative mx-auto flex w-full max-w-4xl flex-col items-center gap-7 px-6 py-24 text-center sm:py-32 lg:px-8">
        <h2
          id="contact-title"
          className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl"
        >
          {data.headline}{" "}
          {data.headlineAccent && (
            <span className="text-brand-ink">{data.headlineAccent}</span>
          )}
        </h2>
        {data.body && (
          <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
            {data.body}
          </p>
        )}
        <div className="flex flex-col items-center gap-4">
          {cta.schedulingUrl && (
            <CtaButton href={cta.schedulingUrl} location="final-cta">
              {cta.ctaLabel}
            </CtaButton>
          )}
          {cleanEmail && (
            <p className="text-sm text-muted-foreground">
              {data.emailPrompt}{" "}
              <a
                href={`mailto:${cleanEmail}`}
                className="rounded font-medium text-brand-ink underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {cleanEmail}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export { FinalCta }
