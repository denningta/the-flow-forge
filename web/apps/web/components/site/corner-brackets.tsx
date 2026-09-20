/**
 * Frames its parent (which must be `relative`) with four independent
 * L-shaped corner marks — a viewfinder/drafting-sheet motif rather than a
 * full bordered box — plus an optional monospace annotation label.
 */
function CornerBrackets({ label }: { label?: string }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-6 sm:inset-8">
      <span className="absolute top-0 left-0 size-6 border-t border-l border-foreground/15" />
      <span className="absolute top-0 right-0 size-6 border-t border-r border-foreground/15" />
      <span className="absolute bottom-0 left-0 size-6 border-b border-l border-foreground/15" />
      <span className="absolute bottom-0 right-0 size-6 border-b border-r border-foreground/15" />
      {label && (
        <span className="absolute -top-5 right-0 font-mono text-[0.65rem] font-medium tracking-[0.18em] text-brand-ink uppercase">
          {label}
        </span>
      )}
    </div>
  )
}

export { CornerBrackets }
