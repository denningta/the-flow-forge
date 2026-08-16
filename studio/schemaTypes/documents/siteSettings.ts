import {defineArrayMember, defineField, defineType} from 'sanity'
import {CogIcon} from '@sanity/icons/Cog'

/**
 * Site-wide identity and outbound links. A singleton — see `structure.ts`.
 *
 * Every call to action on the site routes through `schedulingUrl`, so this is
 * the only place the booking link needs to change.
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    {name: 'identity', title: 'Identity', default: true},
    {name: 'contact', title: 'Contact & CTA'},
    {name: 'navigation', title: 'Navigation'},
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Site name',
      type: 'string',
      group: 'identity',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Canonical URL',
      type: 'url',
      description: 'The production origin, with no trailing slash. Used for canonical tags and the sitemap.',
      group: 'identity',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),
    defineField({
      name: 'tagline',
      type: 'string',
      group: 'identity',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'positioning',
      type: 'text',
      rows: 3,
      description: 'The one-paragraph description used as the default meta description.',
      group: 'identity',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'keywords',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
      group: 'identity',
    }),
    defineField({
      name: 'email',
      type: 'string',
      group: 'contact',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'schedulingUrl',
      title: 'Scheduling URL',
      type: 'url',
      description: 'The booking link behind every call-to-action button.',
      group: 'contact',
      validation: (rule) => rule.required().uri({scheme: ['https']}),
    }),
    defineField({
      name: 'ctaLabel',
      title: 'CTA label',
      type: 'string',
      description: 'The full-length button label.',
      group: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ctaLabelShort',
      title: 'CTA label (short)',
      type: 'string',
      description: 'Used in the header and mobile menu, where space is tight.',
      group: 'contact',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'serviceTypes',
      title: 'Service types',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Published as ProfessionalService structured data. Not shown on the page.',
      group: 'contact',
    }),
    defineField({
      name: 'navLinks',
      title: 'Header & footer links',
      type: 'array',
      of: [defineArrayMember({type: 'navLink'})],
      group: 'navigation',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Site settings'}),
  },
})
