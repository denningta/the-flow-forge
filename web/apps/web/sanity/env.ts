/**
 * Publishable Sanity configuration.
 *
 * These three values are safe in the browser bundle, which is why they carry
 * the `NEXT_PUBLIC_` prefix. The read token is a secret and lives in
 * `sanity/token.ts`, which is server-only.
 */

function required(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(
      `Missing ${name}. Copy .env.example to .env.local and fill it in — see the README.`
    )
  }
  return value
}

export const projectId = required(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "NEXT_PUBLIC_SANITY_PROJECT_ID"
)

export const dataset = required(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "NEXT_PUBLIC_SANITY_DATASET"
)

/**
 * Pinned deliberately. Bumping this date opts into a new API version with
 * potentially different behaviour, so it should be a considered change rather
 * than something that drifts with the calendar.
 */
export const apiVersion = "2026-08-15"

/** Where the Studio runs, used for the "edit this page" affordances. */
export const studioUrl =
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ?? "http://localhost:3333"
