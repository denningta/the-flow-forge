import { AlertTriangleIcon } from "lucide-react"

import { Section } from "@/components/site/section"
import type { ProblemContent } from "@/lib/content-types"

function Problem({ data }: { data: ProblemContent }) {
  const symptoms = data.symptoms ?? []

  return (
    <Section
      id="problem"
      surface
      eyebrow={data.eyebrow}
      title={data.heading}
      lede={data.lede}
    >
      <ul className="reveal-stagger mt-12 grid gap-4 sm:grid-cols-2">
        {symptoms.map((symptom) => (
          <li
            key={symptom}
            className="flex items-start gap-3 rounded-xl bg-card p-5 ring-1 ring-foreground/10"
          >
            <AlertTriangleIcon
              aria-hidden
              className="mt-0.5 size-4 shrink-0 text-brand-ink"
            />
            <span className="text-base text-pretty">{symptom}</span>
          </li>
        ))}
      </ul>

      {(data.diagnosis || data.diagnosisAccent) && (
        <div className="reveal mt-12 border-l-2 border-primary pl-6">
          {data.diagnosis && (
            <p className="font-heading text-2xl font-semibold text-balance sm:text-3xl">
              {data.diagnosis}
            </p>
          )}
          {data.diagnosisAccent && (
            <p className="font-heading text-2xl font-bold text-brand-ink sm:text-3xl">
              {data.diagnosisAccent}
            </p>
          )}
        </div>
      )}
    </Section>
  )
}

export { Problem }
