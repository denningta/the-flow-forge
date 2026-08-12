import { CtaButton } from "@/components/site/cta-button"
import { SITE } from "@/lib/site"

function FinalCta() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative overflow-hidden border-t border-border/60"
    >
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="forge-glow pointer-events-none absolute inset-0"
      />

      <div className="reveal relative mx-auto flex w-full max-w-4xl flex-col items-center gap-7 px-6 py-24 text-center sm:py-32 lg:px-8">
        <h2
          id="contact-title"
          className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-5xl"
        >
          Find out where your flow{" "}
          <span className="text-brand-ink">breaks down</span>.
        </h2>
        <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
          One conversation is usually enough to tell whether we can help. If we
          can&rsquo;t, we&rsquo;ll say so.
        </p>
        <div className="flex flex-col items-center gap-4">
          <CtaButton />
          <p className="text-sm text-muted-foreground">
            Prefer email?{" "}
            <a
              href={`mailto:${SITE.email}`}
              className="rounded font-medium text-brand-ink underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {SITE.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export { FinalCta }
