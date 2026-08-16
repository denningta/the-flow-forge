import * as React from "react"
import Link from "next/link"
import { stegaClean } from "next-sanity"

/**
 * Anchors are stored as `#problem` because they point at home-page sections.
 * Rewriting them to `/#problem` makes them work from `/blog` too, and routing
 * everything through `<Link>` keeps client-side transitions intact.
 *
 * stegaClean is required — an href carrying Visual Editing characters is not a
 * valid URL.
 */
function NavLink({
  href,
  className,
  children,
  onClick,
}: {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}) {
  const clean = stegaClean(href)
  const resolved = clean.startsWith("#") ? `/${clean}` : clean

  return (
    <Link href={resolved} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

export { NavLink }
