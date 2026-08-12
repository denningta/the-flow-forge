import * as React from "react"
import { ArrowRight } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"
import { SITE } from "@/lib/site"

/**
 * The only place the scheduler link is rendered.
 *
 * Base UI (not Radix): swapping the underlying element uses `render`, and a
 * Button rendered as an anchor also needs `nativeButton={false}`.
 */
function CtaButton({
  children = SITE.ctaLabel,
  variant = "default",
  className,
  showArrow = true,
}: {
  children?: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost"
  className?: string
  showArrow?: boolean
}) {
  return (
    <Button
      variant={variant}
      size="lg"
      nativeButton={false}
      render={
        <a
          href={SITE.schedulingUrl}
          target="_blank"
          rel="noreferrer noopener"
        />
      }
      className={cn(
        // The label is long; the Button cva sets whitespace-nowrap, which
        // overflows narrow viewports. Allow wrapping and grow the height.
        "h-auto min-h-12 py-3 text-center whitespace-normal",
        // ring-offset matters on the amber variant: without it the amber focus
        // ring sits on an amber fill and effectively disappears.
        "gap-2 rounded-lg px-6 text-base font-semibold focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform group-hover/button:translate-x-0.5"
        />
      )}
      <span className="sr-only"> (opens in a new tab)</span>
    </Button>
  )
}

export { CtaButton }
