import { AlertTriangleIcon } from "lucide-react"

import { Section } from "@/components/site/section"
import { PAINS } from "@/lib/content"

function Problem() {
  return (
    <Section
      id="problem"
      surface
      eyebrow="The symptoms"
      title="Does any of this sound familiar?"
    >
      <ul className="reveal-stagger mt-12 grid gap-4 sm:grid-cols-2">
        {PAINS.map((pain) => (
          <li
            key={pain}
            className="flex items-start gap-3 rounded-xl bg-card p-5 ring-1 ring-foreground/10"
          >
            <AlertTriangleIcon
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-brand-ink"
            />
            <span className="text-base text-pretty">{pain}</span>
          </li>
        ))}
      </ul>

      <div className="reveal mt-12 border-l-2 border-primary pl-6">
        <p className="font-heading text-2xl font-semibold text-balance sm:text-3xl">
          If so, your factory doesn&rsquo;t have a production problem.
        </p>
        <p className="font-heading text-2xl font-bold text-brand-ink sm:text-3xl">
          It has a flow problem.
        </p>
      </div>
    </Section>
  )
}

export { Problem }
