import { defineQuery } from "next-sanity"

/**
 * Every query is written out in full rather than composed from interpolated
 * fragments — TypeGen resolves literal template strings reliably and
 * interpolated ones only sometimes.
 */

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings" && _id == "siteSettings"][0]{
    name,
    url,
    email,
    tagline,
    positioning,
    keywords,
    schedulingUrl,
    ctaLabel,
    ctaLabelShort,
    serviceTypes,
    navLinks[]{ _key, label, href }
  }
`)

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage" && _id == "homePage"][0]{
    hero{
      badge,
      headline,
      headlineAccent,
      lede,
      secondaryAction{ label, href },
      trustPoints,
      diagram{
        disconnectedSystems,
        connectedHeading,
        connectedMetrics[]{ _key, value, label }
      }
    },
    problem{
      eyebrow,
      heading,
      lede,
      symptoms,
      diagnosis,
      diagnosisAccent
    },
    capabilities{
      eyebrow,
      heading,
      lede,
      capabilities[]{ _key, icon, title, description }
    },
    industries{
      eyebrow,
      heading,
      industries
    },
    differentiators{
      eyebrow,
      headingLines,
      headingAccent,
      body,
      differentiators[]{ _key, icon, label }
    },
    process{
      eyebrow,
      heading,
      lede,
      steps[]{ _key, icon, title, description }
    },
    assessment{
      eyebrow,
      heading,
      lede,
      price,
      priceNote,
      deliverablesHeading,
      deliverables,
      outcomeHeading,
      outcome,
      commitmentHeadline,
      commitmentBody,
      priceRange{ minPrice, maxPrice, currency }
    },
    caseStudy{
      eyebrow,
      heading,
      lede,
      disclaimer,
      blocks[]{ _key, label, body },
      metrics[]{ _key, value, label }
    },
    faq{
      eyebrow,
      heading,
      questions[]{ _key, question, answer }
    },
    closingCta{
      headline,
      headlineAccent,
      body,
      emailPrompt
    },
    seo{
      metaTitle,
      metaDescription,
      noIndex,
      ogImage{ alt, asset, "lqip": asset->metadata.lqip, "aspectRatio": asset->metadata.dimensions.aspectRatio }
    }
  }
`)

export const BLOG_PAGE_QUERY = defineQuery(`
  *[_type == "blogPage" && _id == "blogPage"][0]{
    eyebrow,
    heading,
    lede,
    emptyStateMessage,
    seo{
      metaTitle,
      metaDescription,
      noIndex,
      ogImage{ alt, asset, "lqip": asset->metadata.lqip, "aspectRatio": asset->metadata.dimensions.aspectRatio }
    }
  }
`)

export const POSTS_INDEX_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]
    | order(publishedAt desc){
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      coverImage{ alt, asset, "lqip": asset->metadata.lqip, "aspectRatio": asset->metadata.dimensions.aspectRatio },
      author->{ name, role },
      categories[]->{ _id, title, "slug": slug.current }
    }
`)

export const POST_DETAIL_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    coverImage{ alt, asset, "lqip": asset->metadata.lqip, "aspectRatio": asset->metadata.dimensions.aspectRatio },
    body[]{
      ...,
      _type == "contentImage" => {
        alt,
        caption,
        asset,
        "lqip": asset->metadata.lqip,
        "aspectRatio": asset->metadata.dimensions.aspectRatio
      },
      markDefs[]{ ..., _type == "link" => { href } }
    },
    author->{ name, role, image{ alt, asset, "lqip": asset->metadata.lqip, "aspectRatio": asset->metadata.dimensions.aspectRatio } },
    categories[]->{ _id, title, "slug": slug.current },
    seo{
      metaTitle,
      metaDescription,
      noIndex,
      ogImage{ alt, asset, "lqip": asset->metadata.lqip, "aspectRatio": asset->metadata.dimensions.aspectRatio }
    }
  }
`)

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && publishedAt <= now()]{
    "slug": slug.current
  }
`)

export const SITEMAP_QUERY = defineQuery(`
  {
    "settings": *[_type == "siteSettings" && _id == "siteSettings"][0]{ url },
    "posts": *[_type == "post" && defined(slug.current) && publishedAt <= now()]{
      "slug": slug.current,
      "updatedAt": coalesce(_updatedAt, publishedAt)
    }
  }
`)
