import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url"

import { dataset, projectId } from "./env"

const builder = createImageUrlBuilder({ projectId, dataset })

export function urlFor(source: SanityImageSource) {
  return builder.image(source).auto("format").fit("max")
}

/** A Sanity image projection carrying just enough metadata to render well. */
export type SanityImage = {
  alt?: string | null
  lqip?: string | null
  aspectRatio?: number | null
  asset?: { _ref: string } | null
}

export function imageProps(
  image: SanityImage | null | undefined,
  width: number
): { src: string; width: number; height: number; blurDataURL?: string } | null {
  if (!image?.asset?._ref) return null

  const aspectRatio = image.aspectRatio || 16 / 9
  const height = Math.round(width / aspectRatio)

  return {
    src: urlFor(image.asset).width(width).height(height).url(),
    width,
    height,
    blurDataURL: image.lqip ?? undefined,
  }
}
