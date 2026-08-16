import { ImageResponse } from "next/og"

import { client } from "@/sanity/client"
import { HOME_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/queries"

export const alt = "The Flow Forge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// Hex equivalents of the dark-theme tokens in packages/ui/src/styles/globals.css.
// ImageResponse (Satori) does not resolve CSS variables, so they are inlined.
const BACKGROUND = "#121210"
const FOREGROUND = "#f7f6f3"
const MUTED = "#a9a69f"
const AMBER = "#f2b025"

export default async function OpengraphImage() {
  // The plain client, not sanityFetch: OG images are generated for crawlers, so
  // they take published content only and must never carry stega characters.
  const [settings, page] = await Promise.all([
    client.fetch(SITE_SETTINGS_QUERY),
    client.fetch(HOME_PAGE_QUERY),
  ])

  const name = settings?.name ?? "The Flow Forge"
  const headline = [page?.hero?.headline, page?.hero?.headlineAccent]
    .filter(Boolean)
    .join(" ")
  const positioning = settings?.positioning ?? settings?.tagline ?? ""
  const offer = page?.assessment?.heading ?? ""
  const audience = page?.hero?.badge ?? ""

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: BACKGROUND,
        color: FOREGROUND,
        padding: 72,
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            width: 18,
            height: 72,
            background: AMBER,
            borderRadius: 4,
          }}
        />
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          {name}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: -2,
            maxWidth: 960,
          }}
        >
          {headline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            lineHeight: 1.4,
            color: MUTED,
            maxWidth: 900,
          }}
        >
          {positioning}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          fontSize: 24,
          color: AMBER,
        }}
      >
        <div style={{ display: "flex" }}>{offer}</div>
        <div style={{ display: "flex", color: MUTED }}>·</div>
        <div style={{ display: "flex", color: MUTED }}>{audience}</div>
      </div>
    </div>,
    size
  )
}
