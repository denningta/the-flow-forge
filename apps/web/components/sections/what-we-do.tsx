import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Section } from "@/components/site/section"
import { CAPABILITIES } from "@/lib/content"

function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      eyebrow="What we do"
      title="We build factory operating systems."
      lede="We combine manufacturing expertise, lean management systems, and software integration to create a single source of truth for your operation."
    >
      <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2">
        {CAPABILITIES.map((capability) => {
          const Icon = capability.icon
          return (
            <Card
              key={capability.title}
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
