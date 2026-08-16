import { Section, SectionEyebrow } from "@/components/site/section"
import type { DifferentiatorsContent } from "@/lib/content-types"
import { resolveIcon } from "@/lib/icons"

function WhyDifferent({ data }: { data: DifferentiatorsContent }) {
  const headingLines = data.headingLines ?? []
  const paragraphs = data.body ?? []
  const differentiators = data.differentiators ?? []

  return (
    <Section id="why-us" labelledBy="why-us-title">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div className="reveal flex flex-col gap-6">
          {data.eyebrow && <SectionEyebrow>{data.eyebrow}</SectionEyebrow>}
          <h2
            id="why-us-title"
            className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            {headingLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            {data.headingAccent && (
              <span className="block text-brand-ink">{data.headingAccent}</span>
            )}
          </h2>
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-xl text-lg text-pretty text-muted-foreground"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="reveal-stagger flex flex-col gap-3">
          {differentiators.map((item) => {
            const Icon = resolveIcon(item.icon)
            return (
              <li
                key={item._key}
                className="flex items-center gap-4 rounded-xl bg-card px-5 py-4 ring-1 ring-foreground/10"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-brand-ink ring-1 ring-primary/25">
                  <Icon aria-hidden className="size-4.5" />
                </span>
                <span className="font-heading text-base font-semibold">
                  {item.label}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </Section>
  )
}

export { WhyDifferent }
