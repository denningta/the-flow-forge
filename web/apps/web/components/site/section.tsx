import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

/**
 * Shared section shell: consistent container width, vertical rhythm, optional
 * surface band, and a standard eyebrow / heading / lede header. Every section
 * on the page uses this so spacing never drifts.
 */
function Section({
  id,
  eyebrow,
  title,
  lede,
  surface = false,
  align = "start",
  /** Set when the section renders its own <h2 id> instead of passing `title`. */
  labelledBy,
  className,
  headerClassName,
  children,
}: {
  id: string
  // Nullable rather than optional: content comes from Sanity, where an unset
  // field is `null`, not `undefined`.
  eyebrow?: string | null
  title?: React.ReactNode
  lede?: React.ReactNode
  surface?: boolean
  align?: "start" | "center"
  labelledBy?: string
  className?: string
  headerClassName?: string
  children?: React.ReactNode
}) {
  const headingId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={labelledBy ?? (title ? headingId : undefined)}
      className={cn(
        "scroll-mt-20 border-t border-border/60 py-20 sm:py-28",
        surface && "bg-surface text-surface-foreground",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-8">
        {(eyebrow || title || lede) && (
          <div
            className={cn(
              "reveal flex max-w-3xl flex-col gap-4",
              align === "center" && "mx-auto items-center text-center",
              headerClassName
            )}
          >
            {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
            {title && (
              <h2
                id={headingId}
                className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl"
              >
                {title}
              </h2>
            )}
            {lede && (
              <p className="text-lg text-pretty text-muted-foreground">
                {lede}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

function SectionEyebrow({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 bg-primary" />
      {children}
    </p>
  )
}

export { Section, SectionEyebrow }
