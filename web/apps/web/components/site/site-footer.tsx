import { stegaClean } from "next-sanity"

import { Separator } from "@workspace/ui/components/separator"
import { Logo } from "@/components/site/logo"
import { NavLink } from "@/components/site/nav-link"
import type { SiteSettings } from "@/lib/content-types"

function SiteFooter({ settings }: { settings: SiteSettings }) {
  const navLinks = settings.navLinks ?? []
  const name = settings.name ?? "The Flow Forge"
  const email = settings.email ? stegaClean(settings.email) : null
  const schedulingUrl = settings.schedulingUrl
    ? stegaClean(settings.schedulingUrl)
    : null

  return (
    <footer className="border-t border-border/60 bg-surface text-surface-foreground">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="flex max-w-sm flex-col gap-4">
            <Logo name={name} />
            <p className="text-sm text-pretty text-muted-foreground">
              {settings.positioning}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Explore
              </h2>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link._key}>
                    <NavLink
                      href={link.href ?? "/"}
                      className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
                Get in touch
              </h2>
              <ul className="flex flex-col gap-2">
                {schedulingUrl && (
                  <li>
                    <a
                      href={schedulingUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      Book a discovery call
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                )}
                {email && (
                  <li>
                    <a
                      href={`mailto:${email}`}
                      className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      {email}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <p>{settings.tagline}</p>
        </div>
      </div>
    </footer>
  )
}

export { SiteFooter }
