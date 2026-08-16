import { defineLive } from "next-sanity/live"

import { client } from "./client"
import { token } from "./token"

/**
 * `sanityFetch` handles caching and invalidation via the Live Content API, so
 * routes don't need their own `revalidate` values. `<SanityLive />` must be
 * rendered once in the root layout for the subscription to exist.
 */
export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: token,
  browserToken: token,
})
