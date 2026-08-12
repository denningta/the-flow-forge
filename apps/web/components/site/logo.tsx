import { cn } from "@workspace/ui/lib/utils"
import { SITE } from "@/lib/site"

/** Three streams converging through a chevron into one line. */
function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      // brand-ink, not primary: fill-amber on a light background is ~2:1 and
      // washes out. brand-ink is theme-aware — bronze in light, gold in dark.
      className={cn("size-6 text-brand-ink", className)}
    >
      <path d="M2.5 6h6.5" />
      <path d="M2.5 18h6.5" />
      <path d="M2.5 12h10" />
      <path d="M9.5 6l5.5 6-5.5 6" />
      <path d="M17.5 12h4" />
    </svg>
  )
}

function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="font-heading text-base font-bold tracking-tight">
        {SITE.name}
      </span>
    </span>
  )
}

export { Logo, LogoMark }
