import { Badge } from "@workspace/ui/components/badge"
import { Section } from "@/components/site/section"
import { CASE_STUDY } from "@/lib/content"

const BLOCKS = [
  { label: "Problem", body: CASE_STUDY.problem },
  { label: "Solution", body: CASE_STUDY.solution },
  { label: "Result", body: CASE_STUDY.result },
] as const

function CaseStudy() {
  return (
    <Section
      id="case-study"
      surface
      eyebrow="What good looks like"
      title="Three meetings a week, replaced by one screen."
    >
      <Badge
        variant="secondary"
        className="reveal mt-6 h-6 rounded-lg px-2.5 font-normal"
      >
        Illustrative example — not a client engagement
      </Badge>

      <div className="reveal-stagger mt-10 grid gap-5 lg:grid-cols-3">
        {BLOCKS.map((block, index) => (
          <div
            key={block.label}
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

      <dl className="reveal mt-10 grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
          <dt className="order-2 text-sm text-muted-foreground">
            Less time spent in status meetings
          </dt>
          <dd className="order-1 font-heading text-4xl font-bold text-brand-ink">
            75%
          </dd>
        </div>
        <div className="flex flex-col gap-1 rounded-xl bg-card p-6 ring-1 ring-foreground/10">
          <dt className="order-2 text-sm text-muted-foreground">
            Earlier visibility into at-risk jobs
          </dt>
          <dd className="order-1 font-heading text-4xl font-bold text-brand-ink">
            4 days
          </dd>
        </div>
      </dl>
    </Section>
  )
}

export { CaseStudy }
