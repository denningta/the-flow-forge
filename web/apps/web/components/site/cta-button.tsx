"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { stegaClean } from "next-sanity"

import { Button } from "@workspace/ui/components/button"
import { cn } from "@workspace/ui/lib/utils"

/**
 * Resolves a cal.com URL to the `username/event-slug` path Cal's embed
 * expects on `data-cal-link`. Returns null for anything else (e.g. an editor
 * points `schedulingUrl` at some other provider), so the button falls back
 * to being a plain link — see the `render` prop below.
 */
function calLinkFrom(href: string): string | null {
  try {
    const url = new URL(href)
    return url.hostname === "cal.com" || url.hostname.endsWith(".cal.com")
      ? url.pathname.replace(/^\//, "")
      : null
  } catch {
    return null
  }
}

/**
 * Cal's embed script opens the popup on click but never calls
 * `preventDefault()` itself (confirmed against the live embed.js — it has no
 * `preventDefault` call anywhere) — it expects the caller to stop the
 * anchor's native navigation. Skip that for modifier-key/middle clicks so
 * cmd/ctrl/shift-click and middle-click still open `href` in a new tab as
 * users expect.
 */
function handleCalClick(event: React.MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return
  }
  event.preventDefault()
}

/**
 * The only place the scheduler link is rendered.
 *
 * Base UI (not Radix): swapping the underlying element uses `render`, and a
 * Button rendered as an anchor also needs `nativeButton={false}`.
 */
function CtaButton({
  href,
  children,
  variant = "default",
  className,
  showArrow = true,
}: {
  href: string
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost"
  className?: string
  showArrow?: boolean
}) {
  // stegaClean: in draft mode the raw string carries invisible Visual
  // Editing characters, which would corrupt the URL.
  const cleanHref = stegaClean(href)
  const calLink = calLinkFrom(cleanHref)

  return (
    <Button
      variant={variant}
      size="lg"
      nativeButton={false}
      // `target="_blank"` only applies to the fallback anchor — a
      // `data-cal-link` anchor must not carry `target`, or the browser opens
      // a new tab alongside the popup (a documented Cal.com embed gotcha).
      render={
        calLink ? (
          <a
            href={cleanHref}
            data-cal-link={calLink}
            data-cal-config={JSON.stringify({ layout: "month_view" })}
            onClick={handleCalClick}
          />
        ) : (
          <a href={cleanHref} target="_blank" rel="noreferrer noopener" />
        )
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
      <span className="sr-only">
        {calLink ? " (opens a scheduling dialog)" : " (opens in a new tab)"}
      </span>
    </Button>
  )
}

export { CtaButton }
