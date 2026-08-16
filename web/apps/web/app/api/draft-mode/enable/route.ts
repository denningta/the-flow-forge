import { defineEnableDraftMode } from "next-sanity/draft-mode"

import { client } from "@/sanity/client"
import { token } from "@/sanity/token"

/** Entered from the Studio's Presentation tool; validates the preview URL. */
const { GET: enableDraftMode } = defineEnableDraftMode({
  client: client.withConfig({ token }),
})

/**
 * The token check lives in the handler, not at module scope: throwing on import
 * would fail `next build` on any deploy that doesn't need draft mode.
 */
export async function GET(request: Request): Promise<Response> {
  if (!token) {
    return new Response(
      "Draft mode is unavailable: SANITY_API_READ_TOKEN is not set. " +
        "Create a Viewer token at https://www.sanity.io/manage.",
      { status: 500 }
    )
  }

  return enableDraftMode(request)
}
