"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { CtaButton } from "@/components/site/cta-button"
import { Logo } from "@/components/site/logo"
import { NavLink } from "@/components/site/nav-link"
import { ThemeToggle } from "@/components/site/theme-toggle"
import type { SiteSettings } from "@/lib/content-types"

function SiteHeader({ settings }: { settings: SiteSettings }) {
  const [open, setOpen] = React.useState(false)
  const navLinks = settings.navLinks ?? []
  const name = settings.name ?? "The Flow Forge"

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="sr-only">{name} — home</span>
          <Logo name={name} />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link._key}>
                <NavLink
                  href={link.href ?? "/"}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          {settings.schedulingUrl && (
            <CtaButton
              href={settings.schedulingUrl}
              className="hidden h-9 min-h-0 px-4 py-0 text-sm whitespace-nowrap lg:inline-flex"
              showArrow={false}
            >
              {settings.ctaLabelShort}
            </CtaButton>
          )}

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open navigation menu"
                />
              }
              className="lg:hidden"
            >
              <MenuIcon aria-hidden />
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Logo name={name} />
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link._key}>
                      <NavLink
                        href={link.href ?? "/"}
                        onClick={() => setOpen(false)}
                        className="flex min-h-11 items-center rounded-lg px-2 font-heading text-lg font-semibold transition-colors outline-none hover:text-brand-ink focus-visible:ring-3 focus-visible:ring-ring/50"
                      >
                        {link.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
              {settings.schedulingUrl && (
                <div className="mt-auto p-4">
                  <CtaButton
                    href={settings.schedulingUrl}
                    className="w-full"
                  >
                    {settings.ctaLabelShort}
                  </CtaButton>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export { SiteHeader }
