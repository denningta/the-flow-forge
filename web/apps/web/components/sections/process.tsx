import { Section } from "@/components/site/section"
import type { ProcessContent } from "@/lib/content-types"
import { resolveIcon } from "@/lib/icons"

function Process({ data }: { data: ProcessContent }) {
  const steps = data.steps ?? []

  return (
    <Section
      id="process"
      surface
      eyebrow={data.eyebrow}
      title={data.heading}
      lede={data.lede}
    >
      <ol className="reveal-stagger mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = resolveIcon(step.icon)
          return (
            <li
              key={step._key}
              className="relative flex flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/12 text-brand-ink ring-1 ring-primary/25">
                  <Icon aria-hidden className="size-5" />
                </span>
                <span
                  aria-hidden
                  className="font-heading text-3xl font-bold text-foreground/10"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-pretty text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </Section>
  )
}

export { Process }
