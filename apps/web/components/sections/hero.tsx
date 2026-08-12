import { CheckIcon, ChevronRightIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { CtaButton } from "@/components/site/cta-button"
import { TRUST_POINTS } from "@/lib/content"

const DISCONNECTED = [
  "ERP",
  "MES",
  "QMS",
  "PDM",
  "Spreadsheets",
  "Tribal knowledge",
]

const CONNECTED = [
  { label: "On-time delivery", value: "94.2%" },
  { label: "Open quality escapes", value: "3" },
  { label: "Jobs at risk this week", value: "7" },
  { label: "Last updated", value: "12s ago" },
]

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="forge-glow pointer-events-none absolute inset-0"
      />

      {/* Fixed right column: fr-based columns let the wrappable CTA shrink the
          text column, which pushed the headline to four lines. */}
      <div className="relative mx-auto grid w-full max-w-6xl gap-16 px-6 py-24 sm:py-28 lg:grid-cols-[minmax(0,1fr)_430px] lg:items-center lg:px-8">
        <div className="flex flex-col items-start gap-7">
          <Badge
            variant="outline"
            className="h-7 gap-2 border-primary/40 bg-primary/10 px-3 text-brand-ink"
          >
            <span aria-hidden className="size-1.5 rounded-full bg-primary" />
            For aerospace &amp; industrial manufacturers
          </Badge>

          <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Quit Spreadsheets.{" "}
            <span className="text-brand-ink">Start Building.</span>
          </h1>

          <p className="max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl">
            The Flow Forge connects your ERP, quality, engineering, and
            production systems into one operating rhythm — so you can see what
            is actually happening on the floor, in real time.
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <CtaButton className="w-full sm:w-auto" />
            <Button
              variant="ghost"
              size="lg"
              nativeButton={false}
              render={<a href="#process" />}
              className="h-12 gap-1 px-5 text-base font-medium"
            >
              See how it works
              <ChevronRightIcon aria-hidden className="size-4" />
            </Button>
          </div>

          <ul className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {TRUST_POINTS.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckIcon aria-hidden className="size-4 text-brand-ink" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <SystemsDiagram />
      </div>
    </section>
  )
}

/** Illustrative: disconnected systems on the left, one live picture on the right. */
function SystemsDiagram() {
  return (
    <div
      aria-hidden
      className="relative hidden rounded-2xl bg-card/70 p-5 ring-1 ring-foreground/10 backdrop-blur-sm lg:block"
    >
      <div className="grid grid-cols-[1fr_auto_1.1fr] items-center gap-4">
        <ul className="flex flex-col gap-2">
          {DISCONNECTED.map((system) => (
            <li
              key={system}
              className="rounded-lg border border-dashed border-border bg-background/60 px-3 py-2 font-mono text-xs text-muted-foreground"
            >
              {system}
            </li>
          ))}
        </ul>

        <div className="flex flex-col items-center gap-1 text-brand-ink">
          <ChevronRightIcon className="size-5" />
          <ChevronRightIcon className="size-5 opacity-60" />
          <ChevronRightIcon className="size-5 opacity-30" />
        </div>

        <div className="flex flex-col gap-3 rounded-xl bg-background p-4 ring-1 ring-primary/30">
          <p className="font-mono text-[0.65rem] tracking-[0.18em] text-brand-ink uppercase">
            Single source of truth
          </p>
          <dl className="flex flex-col gap-2.5">
            {CONNECTED.map((metric) => (
              <div
                key={metric.label}
                className="flex items-baseline justify-between gap-3 border-b border-border/60 pb-2 last:border-0 last:pb-0"
              >
                <dt className="text-xs text-muted-foreground">
                  {metric.label}
                </dt>
                <dd className="font-heading text-sm font-semibold">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export { Hero }
