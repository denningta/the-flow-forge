"use client"

import { useVisualEditingEnvironment } from "next-sanity/hooks"

/**
 * Only shown when draft mode was entered outside the Studio. Inside the
 * Presentation tool the Studio already owns the toggle, and the hook reports
 * `null` until `<VisualEditing />` mounts — so waiting for `standalone` avoids
 * flashing the button into the Studio iframe.
 */
function DisableDraftMode() {
  const environment = useVisualEditingEnvironment()

  if (environment !== "standalone") return null

  return (
    <a
      href="/api/draft-mode/disable"
      className="fixed right-4 bottom-4 z-50 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background shadow-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      Disable draft mode
    </a>
  )
}

export { DisableDraftMode }
