import { CheckIcon, ChevronRightIcon } from "lucide-react"
import { stegaClean } from "next-sanity"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { CtaButton } from "@/components/site/cta-button"
import type { CtaSettings, HeroContent } from "@/lib/content-types"

function Hero({ data, cta }: { data: HeroContent; cta: CtaSettings }) {
  const secondaryHref = data.secondaryAction?.href
    ? stegaClean(data.secondaryAction.href)
    : null

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
          {data.badge && (
            <Badge
              variant="outline"
              className="h-7 gap-2 border-primary/40 bg-primary/10 px-3 text-brand-ink"
            >
              <span aria-hidden className="size-1.5 rounded-full bg-primary" />
              {data.badge}
            </Badge>
          )}

          <h1 className="font-heading text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <div>{data.headline}</div>
            {data.headlineAccent && (
              <div className="text-brand-ink">{data.headlineAccent}</div>
            )}
          </h1>

          <p className="max-w-xl text-lg text-pretty text-muted-foreground sm:text-xl">
            {data.lede}
          </p>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {cta.schedulingUrl && (
              <CtaButton
                href={cta.schedulingUrl}
                className="w-full sm:w-auto"
                location="hero"
              >
                {cta.ctaLabel}
              </CtaButton>
            )}
            {secondaryHref && (
              <Button
                variant="ghost"
                size="lg"
                nativeButton={false}
                render={<a href={secondaryHref} />}
                className="h-12 gap-1 px-5 text-base font-medium"
              >
                {data.secondaryAction?.label}
                <ChevronRightIcon aria-hidden className="size-4" />
              </Button>
            )}
          </div>

          {data.trustPoints && data.trustPoints.length > 0 && (
            <ul className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {data.trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckIcon aria-hidden className="size-4 text-brand-ink" />
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>

        {data.diagram && <SystemsDiagram diagram={data.diagram} />}
      </div>
    </section>
  )
}

/** Illustrative: disconnected systems on the left, one live picture on the right. */
function SystemsDiagram({
  diagram,
}: {
  diagram: NonNullable<HeroContent["diagram"]>
}) {
  const systems = diagram.disconnectedSystems ?? []
  const metrics = diagram.connectedMetrics ?? []

  return (
    <div
      aria-hidden
      className="relative hidden rounded-2xl bg-card/70 p-5 ring-1 ring-foreground/10 backdrop-blur-sm lg:block"
    >
      <div className="grid grid-cols-[1fr_auto_1.1fr] items-center gap-4">
        <ul className="flex flex-col gap-2">
          {systems.map((system) => (
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
            {diagram.connectedHeading}
          </p>
          <dl className="flex flex-col gap-2.5">
            {metrics.map((metric) => (
              <div
                key={metric._key}
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
