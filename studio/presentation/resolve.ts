import {
  defineDocuments,
  defineLocations,
  type PresentationPluginOptions,
} from 'sanity/presentation'

/**
 * `mainDocuments` maps a previewed URL to the document that owns it, so the
 * editor pane follows along as you navigate the preview.
 *
 * `locations` is the reverse lookup: given a document, which URLs does it
 * appear on. That is what the Structure tool shows in the document footer.
 *
 * Neither of these populates "Documents on this page" — that list comes from the
 * Content Source Map, which requires `stega.studioUrl` on the frontend client
 * (see `web/apps/web/sanity/client.ts`).
 */
export const resolve: PresentationPluginOptions['resolve'] = {
  mainDocuments: defineDocuments([
    {route: '/', type: 'homePage'},
    {route: '/blog', type: 'blogPage'},
    {route: '/blog/:slug', filter: `_type == "post" && slug.current == $slug`},
  ]),

  locations: {
    homePage: defineLocations({
      select: {_id: '_id'},
      resolve: () => ({
        locations: [{title: 'Home page', href: '/'}],
      }),
    }),
    siteSettings: defineLocations({
      select: {_id: '_id'},
      resolve: () => ({
        message: 'Site settings appear in the header and footer of every page.',
        locations: [{title: 'Home page', href: '/'}],
      }),
    }),
    blogPage: defineLocations({
      select: {_id: '_id'},
      resolve: () => ({
        locations: [{title: 'Blog index', href: '/blog'}],
      }),
    }),
    post: defineLocations({
      select: {title: 'title', slug: 'slug.current'},
      resolve: (doc) => ({
        locations: [
          {title: doc?.title || 'Untitled post', href: `/blog/${doc?.slug}`},
          {title: 'Blog index', href: '/blog'},
        ],
      }),
    }),
    author: defineLocations({
      select: {name: 'name'},
      resolve: (doc) => ({
        message: `Posts written by ${doc?.name || 'this author'} show the byline.`,
        locations: [{title: 'Blog index', href: '/blog'}],
      }),
    }),
    category: defineLocations({
      select: {title: 'title'},
      resolve: () => ({
        locations: [{title: 'Blog index', href: '/blog'}],
      }),
    }),
  },
}
