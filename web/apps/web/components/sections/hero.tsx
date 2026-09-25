import Image from "next/image"

import { CheckIcon, ChevronRightIcon } from "lucide-react"
import { stegaClean } from "next-sanity"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { CornerBrackets } from "@/components/site/corner-brackets"
import { CtaButton } from "@/components/site/cta-button"
import type { CtaSettings, HeroContent } from "@/lib/content-types"
import { imageProps } from "@/sanity/image"

function Hero({ data, cta }: { data: HeroContent; cta: CtaSettings }) {
  const secondaryHref = data.secondaryAction?.href
    ? stegaClean(data.secondaryAction.href)
    : null

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="forge-glow pointer-events-none absolute inset-0"
      />
      <CornerBrackets label="FIG. 01 — SYSTEM OVERVIEW" />

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

        {data.photo && (
          <HeroPhoto photo={data.photo} caption={data.photoCaption} />
        )}
      </div>
    </section>
  )
}

function HeroPhoto({
  photo,
  caption,
}: {
  photo: NonNullable<HeroContent["photo"]>
  caption: HeroContent["photoCaption"]
}) {
  const image = imageProps(photo, 860)
  if (!image) return null

  return (
    <div className="relative hidden flex-col gap-4 lg:flex">
      <div className="overflow-hidden rounded-2xl ring-1 ring-foreground/10">
        <Image
          {...image}
          alt={photo.alt ?? ""}
          placeholder={image.blurDataURL ? "blur" : "empty"}
          sizes="430px"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      {caption && (
        <p className="text-center text-sm text-pretty text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  )
}

export { Hero }
