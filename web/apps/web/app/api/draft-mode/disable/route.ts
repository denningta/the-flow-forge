import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  ;(await draftMode()).disable()

  const { searchParams } = new URL(request.url)
  const slug = searchParams.get("slug")

  // Only same-origin paths, so the redirect can't be pointed off-site.
  redirect(slug?.startsWith("/") ? slug : "/")
}
