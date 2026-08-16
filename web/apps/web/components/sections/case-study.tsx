import { Badge } from "@workspace/ui/components/badge"
import { Section } from "@/components/site/section"
import type { CaseStudyContent } from "@/lib/content-types"

function CaseStudy({ data }: { data: CaseStudyContent }) {
  const blocks = data.blocks ?? []
  const metrics = data.metrics ?? []

  return (
    <Section
      id="case-study"
      surface
      eyebrow={data.eyebrow}
      title={data.heading}
      lede={data.lede}
    >
      {data.disclaimer && (
        <Badge
          variant="secondary"
          className="reveal mt-6 h-6 rounded-lg px-2.5 font-normal"
        >
          {data.disclaimer}
        </Badge>
      )}

      <div className="reveal-stagger mt-10 grid gap-5 lg:grid-cols-3">
        {blocks.map((block, index) => (
          <div
            key={block._key}
            className="flex flex-col gap-4 rounded-xl bg-card p-6 ring-1 ring-foreground/10 last:ring-primary/30"
          >
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="font-mono text-xs text-muted-foreground"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase">
                {block.label}
              </h3>
            </div>
            <p className="text-base text-pretty">{block.body}</p>
          </div>
        ))}
      </div>

      {metrics.length > 0 && (
        <dl className="reveal mt-10 grid gap-5 sm:grid-cols-2">
          {metrics.map((metric) => (
            <div
              key={metric._key}
              className="flex flex-col gap-1 rounded-xl bg-card p-6 ring-1 ring-foreground/10"
            >
              <dt className="order-2 text-sm text-muted-foreground">
                {metric.label}
              </dt>
              <dd className="order-1 font-heading text-4xl font-bold text-brand-ink">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </Section>
  )
}

export { CaseStudy }
