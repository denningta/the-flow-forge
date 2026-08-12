import { Section, SectionEyebrow } from "@/components/site/section"
import { DIFFERENTIATORS } from "@/lib/content"

function WhyDifferent() {
  return (
    <Section id="why-us" labelledBy="why-us-title">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
        <div className="reveal flex flex-col gap-6">
          <SectionEyebrow>Why we&rsquo;re different</SectionEyebrow>
          <h2
            id="why-us-title"
            className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl"
          >
            Most consultants understand manufacturing.
            <br />
            Most developers understand software.
            <br />
            <span className="text-brand-ink">Very few understand both.</span>
          </h2>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            That gap is where factory improvement projects go to die — the
            process work stalls because nobody can build the system, or the
            software ships and nobody changes how they run the floor.
          </p>
          <p className="max-w-xl text-lg text-pretty text-muted-foreground">
            We don&rsquo;t just build dashboards. We change how your factory
            operates, and then we build the system that keeps it that way.
          </p>
        </div>

        <ul className="reveal-stagger flex flex-col gap-3">
          {DIFFERENTIATORS.map((item) => {
            const Icon = item.icon
            return (
              <li
                key={item.label}
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
