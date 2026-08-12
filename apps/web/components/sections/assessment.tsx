import { CheckIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { CtaButton } from "@/components/site/cta-button"
import { Section } from "@/components/site/section"
import { ASSESSMENT_DELIVERABLES } from "@/lib/content"

function Assessment() {
  return (
    <Section
      id="assessment"
      eyebrow="Start here"
      title="The Factory Flow Assessment"
      lede="Don't start with a project. Start with a diagnosis. A fixed-fee, fixed-scope engagement that tells you exactly where flow breaks down — and what to do about it first."
    >
      <div className="reveal mt-14 overflow-hidden rounded-2xl bg-card ring-1 ring-primary/25">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-8 p-8 sm:p-10">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <p className="font-heading text-4xl font-bold tracking-tight">
                $3,000&ndash;$5,000
              </p>
              <Badge className="h-6 rounded-lg px-2.5">Fixed fee</Badge>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase">
                What you&rsquo;ll receive
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {ASSESSMENT_DELIVERABLES.map((item) => (
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

            <Separator />

            <div className="flex flex-col gap-3">
              <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase">
                The outcome
              </h3>
              <p className="max-w-2xl text-base text-pretty text-muted-foreground">
                A clear understanding of where flow breaks down, and a
                prioritized plan to improve visibility, throughput, and
                execution. You keep the roadmap whether or not we build it with
                you.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 border-t border-border bg-surface p-8 sm:p-10 lg:border-t-0 lg:border-l">
            <p className="font-heading text-xl font-bold text-balance">
              Two to three weeks. One to two days on site. No software purchase
              required.
            </p>
            <p className="text-sm text-pretty text-muted-foreground">
              We ask for four to six hours from your operations lead, a
              production planner, a quality lead, and your ERP administrator.
              That&rsquo;s the whole commitment.
            </p>
            <CtaButton className="w-full" />
          </div>
        </div>
      </div>
    </Section>
  )
}

export { Assessment }
