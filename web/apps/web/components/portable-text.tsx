import Image from "next/image"
import { PortableText, type PortableTextComponents } from "next-sanity"

import { imageProps } from "@/sanity/image"
import type { Post } from "@/lib/content-types"

type Body = NonNullable<Post["body"]>

/**
 * Explicit component overrides rather than a typography plugin, so rich text
 * inherits the same font and rhythm tokens the hand-built sections use.
 */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base text-pretty text-muted-foreground">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-heading text-2xl font-bold tracking-tight text-balance text-foreground first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 font-heading text-xl font-bold text-balance text-foreground">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-primary pl-6 font-heading text-xl font-semibold text-balance text-foreground">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="flex list-disc flex-col gap-2 pl-5 text-base text-muted-foreground">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="flex list-decimal flex-col gap-2 pl-5 text-base text-muted-foreground">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="text-pretty">{children}</li>,
    number: ({ children }) => <li className="text-pretty">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-brand-ink">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href
      if (!href) return <>{children}</>
      const external = href.startsWith("http")
      return (
        <a
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="rounded font-medium text-brand-ink underline underline-offset-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {children}
        </a>
      )
    },
  },
  types: {
    contentImage: ({ value }) => {
      const props = imageProps(value, 1280)
      if (!props) return null

      return (
        <figure className="flex flex-col gap-3">
          <Image
            {...props}
            alt={value.alt ?? ""}
            placeholder={props.blurDataURL ? "blur" : "empty"}
            sizes="(min-width: 768px) 768px, 100vw"
            className="rounded-xl ring-1 ring-foreground/10"
          />
          {value.caption && (
            <figcaption className="text-sm text-muted-foreground">
              {value.caption}
            </figcaption>
          )}
        </figure>
      )
    },
  },
}

function PostBody({ value }: { value: Body }) {
  return (
    <div className="flex flex-col gap-6">
      <PortableText value={value} components={components} />
    </div>
  )
}

export { PostBody }
