import type { MetadataRoute } from "next"

import { client } from "@/sanity/client"
import { SITE_SETTINGS_QUERY } from "@/sanity/queries"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const settings = await client.fetch(SITE_SETTINGS_QUERY)
  const origin = (settings?.url ?? "https://theflowforge.com").replace(
    /\/$/,
    ""
  )

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${origin}/sitemap.xml`,
  }
}
