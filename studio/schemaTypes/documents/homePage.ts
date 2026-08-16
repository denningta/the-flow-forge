import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons/Home'

/**
 * The landing page. A singleton — see `structure.ts`.
 *
 * Sections are named fields rather than a page-builder array because the order
 * of this page is deliberate and fixed. If arbitrary marketing pages are needed
 * later, add a separate `page` type with a sections array instead of loosening
 * this one.
 */
export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  icon: HomeIcon,
  groups: [
    {name: 'sections', title: 'Sections', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({name: 'hero', type: 'heroSection', group: 'sections'}),
    defineField({name: 'problem', type: 'problemSection', group: 'sections'}),
    defineField({name: 'capabilities', type: 'capabilitiesSection', group: 'sections'}),
    defineField({name: 'industries', type: 'industriesSection', group: 'sections'}),
    defineField({name: 'differentiators', type: 'differentiatorsSection', group: 'sections'}),
    defineField({name: 'process', type: 'processSection', group: 'sections'}),
    defineField({name: 'assessment', type: 'assessmentSection', group: 'sections'}),
    defineField({name: 'caseStudy', type: 'caseStudySection', group: 'sections'}),
    defineField({name: 'faq', type: 'faqSection', group: 'sections'}),
    defineField({name: 'closingCta', title: 'Closing CTA', type: 'ctaSection', group: 'sections'}),
    defineField({name: 'seo', type: 'seo', group: 'seo'}),
  ],
  preview: {
    prepare: () => ({title: 'Home page'}),
  },
})
