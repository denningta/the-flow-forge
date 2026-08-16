import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon } from "lucide-react"

import { Badge } from "@workspace/ui/components/badge"
import { Separator } from "@workspace/ui/components/separator"
import { PostBody } from "@/components/portable-text"
import { formatDate } from "@/lib/format"
import { imageProps } from "@/sanity/image"
import { sanityFetch } from "@/sanity/live"
import { POST_DETAIL_QUERY, POST_SLUGS_QUERY } from "@/sanity/queries"

export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: POST_SLUGS_QUERY,
    perspective: "published",
    stega: false,
  })

  return data
    .filter((post): post is { slug: string } => Boolean(post.slug))
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params
  const { data: post } = await sanityFetch({
    query: POST_DETAIL_QUERY,
    params: { slug },
    stega: false,
  })

  if (!post) return {}

  return {
    title: post.seo?.metaTitle ?? post.title ?? undefined,
    description: post.seo?.metaDescription ?? post.excerpt ?? undefined,
    ...(post.seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: "article",
      title: post.seo?.metaTitle ?? post.title ?? undefined,
      description: post.seo?.metaDescription ?? post.excerpt ?? undefined,
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
    },
  }
}

export default async function PostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params
  const { data: post } = await sanityFetch({
    query: POST_DETAIL_QUERY,
    params: { slug },
  })

  if (!post) notFound()

  const cover = imageProps(post.coverImage, 1600)

  return (
    <article className="border-t border-border/60 py-20 sm:py-24">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 lg:px-8">
        <Link
          href="/blog"
          className="flex w-fit items-center gap-2 rounded font-mono text-xs font-medium tracking-[0.18em] text-brand-ink uppercase outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <ArrowLeftIcon aria-hidden className="size-3.5" />
          All posts
        </Link>

        <header className="flex flex-col gap-5">
          <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-lg text-pretty text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            {post.author?.name && (
              <span>
                {post.author.name}
                {post.author.role && (
                  <span className="text-muted-foreground/70">
                    {" · "}
                    {post.author.role}
                  </span>
                )}
              </span>
            )}
            {post.publishedAt && (
              <time dateTime={post.publishedAt} className="font-mono text-xs">
                {formatDate(post.publishedAt)}
              </time>
            )}
            {(post.categories ?? []).map((category) => (
              <Badge
                key={category._id}
                variant="outline"
                className="h-6 rounded-lg px-2 text-xs font-medium"
              >
                {category.title}
              </Badge>
            ))}
          </div>
        </header>

        {cover && (
          <Image
            {...cover}
            alt={post.coverImage?.alt ?? ""}
            priority
            placeholder={cover.blurDataURL ? "blur" : "empty"}
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full rounded-xl ring-1 ring-foreground/10"
          />
        )}

        <Separator />

        {post.body && <PostBody value={post.body} />}
      </div>
    </article>
  )
}
