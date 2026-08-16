import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Archivo, Geist, Geist_Mono } from "next/font/google"
import { draftMode } from "next/headers"
import { VisualEditing } from "next-sanity/visual-editing"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { CalEmbed } from "@/components/site/cal-embed"
import { DisableDraftMode } from "@/components/site/disable-draft-mode"
import { SiteFooter } from "@/components/site/site-footer"
import { SiteHeader } from "@/components/site/site-header"
import { sanityFetch, SanityLive } from "@/sanity/live"
import { SITE_SETTINGS_QUERY } from "@/sanity/queries"
import { revalidateAndRefresh } from "@/sanity/revalidate"

const fontSans = Geist({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const fontHeading = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
})

export async function generateMetadata(): Promise<Metadata> {
  // stega: false — invisible Visual Editing characters must never reach <head>.
  const { data: settings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    stega: false,
  })

  const name = settings?.name ?? "The Flow Forge"
  const title = `${name} — Factory Operating Systems for Manufacturers`
  const description = settings?.positioning ?? undefined

  return {
    ...(settings?.url ? { metadataBase: new URL(settings.url) } : {}),
    title: {
      default: title,
      template: `%s · ${name}`,
    },
    description,
    applicationName: name,
    keywords: settings?.keywords ?? undefined,
    ...(settings?.url ? { authors: [{ name, url: settings.url }] } : {}),
    creator: name,
    openGraph: {
      type: "website",
      locale: "en_US",
      ...(settings?.url ? { url: settings.url } : {}),
      siteName: name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#121210" },
  ],
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [{ data: settings }, { isEnabled: isDraftMode }] = await Promise.all([
    sanityFetch({ query: SITE_SETTINGS_QUERY }),
    draftMode(),
  ])

  return (
    <html
      lang="en"
      suppressHydrationWarning
      // globals.css sets `scroll-behavior: smooth`. Now that nav anchors route
      // through <Link>, Next needs this to opt route transitions out of it.
      data-scroll-behavior="smooth"
      className={cn(
        "antialiased",
        "font-sans",
        fontSans.variable,
        fontMono.variable,
        fontHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <a
            href="#main"
            className="sr-only rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50"
          >
            Skip to content
          </a>
          {settings && <SiteHeader settings={settings} />}
          <main id="main">{children}</main>
          {settings && <SiteFooter settings={settings} />}
        </ThemeProvider>
        <SanityLive action={revalidateAndRefresh} />
        <CalEmbed />
        <Analytics />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  )
}
