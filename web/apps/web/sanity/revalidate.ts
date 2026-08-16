"use server"

import { draftMode } from "next/headers"
import { revalidateTag, updateTag } from "next/cache"
import { parseTags } from "next-sanity/live"

/**
 * `<SanityLive />`'s default action invalidates the affected cache tags but,
 * in dev mode, deliberately stops short of returning "refresh" — see
 * next-sanity's own `revalidateSyncTagsAction` (it calls `updateTag` and
 * logs that this differs from prod's `revalidateTag(tag, 'max')`). That
 * means an already-open tab never calls `router.refresh()`, so it keeps
 * showing stale content after a Studio publish until manually reloaded.
 *
 * This mirrors the same invalidation but always returns "refresh", so
 * `<SanityLive />` calls `router.refresh()` in dev too.
 */
export async function revalidateAndRefresh(unsafeTags: unknown) {
  if ((await draftMode()).isEnabled) return "refresh" as const

  const { tags } = parseTags(unsafeTags)

  if (process.env.NODE_ENV === "development") {
    for (const tag of tags) updateTag(tag)
  } else {
    for (const tag of tags) revalidateTag(tag, "max")
  }

  return "refresh" as const
}
