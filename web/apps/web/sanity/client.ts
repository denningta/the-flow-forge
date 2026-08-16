import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, studioUrl } from "./env"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: "published",
  /**
   * `studioUrl` is what switches Visual Editing on, not just what the edit
   * links point at: `defineLive` only auto-enables stega when the client config
   * defines it (`serverToken && studioUrlDefined && draftMode().isEnabled`).
   * Without it, draft mode still shows drafts but no content source map is
   * encoded, so the Presentation tool reports "no matching documents".
   *
   * `enabled` is left unset on purpose — `defineLive` decides that per request.
   */
  stega: { studioUrl },
})

/**
 * `defineLive` (see `sanity/live.ts`) always calls `client.withConfig({ useCdn:
 * true, ... })` internally to build its own baseline — a shallow merge where
 * the new config always wins, so `useCdn: false` above alone has no effect on
 * published-perspective reads there. This site has negligible traffic, so pin
 * `useCdn: false` through that override too: otherwise Studio publishes are
 * invisible on the non-draft site until Sanity's CDN cache (up to ~60s) expires,
 * even though the Next.js cache tag is invalidated immediately.
 */
const withConfig = client.withConfig.bind(client)
client.withConfig = (newConfig) => withConfig({ ...newConfig, useCdn: false })
