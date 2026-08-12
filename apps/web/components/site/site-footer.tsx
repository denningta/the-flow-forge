import { Separator } from "@workspace/ui/components/separator"
import { Logo } from "@/components/site/logo"
import { NAV_LINKS, SITE } from "@/lib/site"

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface text-surface-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo />
            <p className="text-sm text-pretty text-muted-foreground">
              {SITE.positioning}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Explore
              </h2>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Get in touch
              </h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    href={SITE.schedulingUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    Book a discovery call
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
