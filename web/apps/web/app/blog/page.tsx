import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@workspace/ui/components/badge"
import { Section } from "@/components/site/section"
import type { PostSummary } from "@/lib/content-types"
import { formatDate } from "@/lib/format"
import { imageProps } from "@/sanity/image"
import { sanityFetch } from "@/sanity/live"
import { BLOG_PAGE_QUERY, POSTS_INDEX_QUERY } from "@/sanity/queries"

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await sanityFetch({
    query: BLOG_PAGE_QUERY,
    stega: false,
  })

  return {
    title: data?.seo?.metaTitle ?? data?.heading ?? "Blog",
    description: data?.seo?.metaDescription ?? data?.lede ?? undefined,
    ...(data?.seo?.noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

export default async function BlogIndexPage() {
  const [{ data: page }, { data: posts }] = await Promise.all([
    sanityFetch({ query: BLOG_PAGE_QUERY }),
    sanityFetch({ query: POSTS_INDEX_QUERY }),
  ])

  return (
    <Section
      id="blog"
      eyebrow={page?.eyebrow}
      title={page?.heading ?? "Blog"}
      lede={page?.lede}
    >
      {posts.length === 0 ? (
        <p className="mt-12 text-base text-muted-foreground">
          {page?.emptyStateMessage ?? "No posts published yet."}
        </p>
      ) : (
        <ul className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </ul>
      )}
    </Section>
  )
}

function PostCard({ post }: { post: PostSummary }) {
  const cover = imageProps(post.coverImage, 800)

  return (
    <li className="flex flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-shadow hover:ring-primary/40">
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col gap-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {cover && (
          <Image
            {...cover}
            alt={post.coverImage?.alt ?? ""}
            placeholder={cover.blurDataURL ? "blur" : "empty"}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[16/9] w-full object-cover"
          />
        )}
        <div className="flex flex-1 flex-col gap-3 p-6">
          <div className="flex flex-wrap items-center gap-2">
            {post.publishedAt && (
              <time
                dateTime={post.publishedAt}
                className="font-mono text-xs text-muted-foreground"
              >
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
          <h2 className="font-heading text-xl font-bold text-balance">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="text-base text-pretty text-muted-foreground">
              {post.excerpt}
            </p>
          )}
        </div>
      </Link>
    </li>
  )
}
