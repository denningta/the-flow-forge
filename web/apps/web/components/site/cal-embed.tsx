"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"

/**
 * Loads Cal.com's embed script once and registers its delegated click
 * listener for any `data-cal-link` element on the page — see `CtaButton`.
 */
function CalEmbed() {
  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi()
      cal("ui", {
        theme: "auto",
        hideEventTypeDetails: false,
        layout: "month_view",
      })
    })()
  }, [])

  return null
}

export { CalEmbed }
