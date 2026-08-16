import "server-only"

/**
 * Viewer token used to read drafts.
 *
 * Deliberately not validated at import time: published content renders fine
 * without a token, so a missing token should only disable draft mode — not
 * break the build or the public site. The draft-mode route checks it per
 * request instead.
 */
export const token = process.env.SANITY_API_READ_TOKEN
