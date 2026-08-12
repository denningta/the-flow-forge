import { Badge } from "@workspace/ui/components/badge"
import { SectionEyebrow } from "@/components/site/section"
import { INDUSTRIES } from "@/lib/content"

function Industries() {
  return (
    <section
      id="industries"
      aria-labelledby="industries-title"
      className="border-t border-border/60 bg-surface py-14 text-surface-foreground"
    >
      <div className="reveal mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 lg:flex-row lg:items-center lg:gap-12 lg:px-8">
        <div className="flex flex-col gap-2 lg:max-w-xs">
          <SectionEyebrow>Who we work with</SectionEyebrow>
          <h2 id="industries-title" className="font-heading text-xl font-bold">
            Built for regulated, high-mix, low-volume production.
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2.5">
          {INDUSTRIES.map((industry) => (
            <li key={industry}>
              <Badge
                variant="outline"
                className="h-8 rounded-lg border-border bg-card px-3.5 text-sm font-medium"
              >
                {industry}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export { Industries }
