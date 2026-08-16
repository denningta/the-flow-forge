import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Section } from "@/components/site/section"
import type { CapabilitiesContent } from "@/lib/content-types"
import { resolveIcon } from "@/lib/icons"

function WhatWeDo({ data }: { data: CapabilitiesContent }) {
  const capabilities = data.capabilities ?? []

  return (
    <Section
      id="what-we-do"
      eyebrow={data.eyebrow}
      title={data.heading}
      lede={data.lede}
    >
      <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2">
        {capabilities.map((capability) => {
          const Icon = resolveIcon(capability.icon)
          return (
            <Card
              key={capability._key}
              className="gap-4 transition-shadow [--card-spacing:--spacing(6)] hover:ring-primary/40"
            >
              <CardHeader className="gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-brand-ink ring-1 ring-primary/25">
                  <Icon aria-hidden className="size-5" />
                </span>
                <CardTitle className="text-lg">{capability.title}</CardTitle>
                <CardDescription className="text-base text-pretty">
                  {capability.description}
                </CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export { WhatWeDo }
