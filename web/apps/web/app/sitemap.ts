import type { MetadataRoute } from "next"

import { client } from "@/sanity/client"
import { SITEMAP_QUERY } from "@/sanity/queries"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // The plain client, not sanityFetch: a sitemap should only ever list
  // published content, and it must not carry stega characters.
  const data = await client.fetch(SITEMAP_QUERY)
  const origin = (data?.settings?.url ?? "https://theflowforge.com").replace(
    /\/$/,
    ""
  )

  return [
    {
      url: origin,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${origin}/blog`,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...(data?.posts ?? [])
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${origin}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : undefined,
        changeFrequency: "monthly" as const,
        priority: 0.5,
      })),
  ]
}
