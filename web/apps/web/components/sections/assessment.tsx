import { CheckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/section"
import type { AssessmentContent, CtaSettings } from "@/lib/content-types"

function Assessment({
  data,
  cta,
}: {
  data: AssessmentContent
  cta: CtaSettings
}) {
  const deliverables = data.deliverables ?? []

  return (
    <Section
      id="assessment"
      eyebrow={data.eyebrow}
      title={data.heading}
      lede={data.lede}
    >
      <div className="reveal mt-14 overflow-hidden rounded-2xl bg-card ring-1 ring-primary/25">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8 p-8 sm:p-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="font-heading text-4xl font-bold tracking-tight">
                {data.price}
              </p>
              {data.priceNote && (
                <Badge className="h-6 rounded-lg px-2.5">
                  {data.priceNote}
                </Badge>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase">
                {data.deliverablesHeading}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-base">
                    <CheckIcon
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-brand-ink"
                    />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {data.outcome && (
              <>
                <Separator />

                <div className="flex flex-col gap-3">
                  <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase">
                    {data.outcomeHeading}
                  </h3>
                  <p className="max-w-2xl text-base text-pretty text-muted-foreground">
                    {data.outcome}
                  </p>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-col justify-center gap-6 border-t border-border bg-surface p-8 sm:p-10 lg:border-t-0 lg:border-l">
            {data.commitmentHeadline && (
              <p className="font-heading text-xl font-bold text-balance">
                {data.commitmentHeadline}
              </p>
            )}
            {data.commitmentBody && (
              <p className="text-sm text-pretty text-muted-foreground">
                {data.commitmentBody}
              </p>
            )}
            {cta.schedulingUrl && (
              <CtaButton href={cta.schedulingUrl} className="w-full">
                {cta.ctaLabel}
              </CtaButton>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Assessment }
