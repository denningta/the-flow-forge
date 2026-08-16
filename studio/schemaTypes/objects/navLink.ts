import {defineField, defineType} from 'sanity'
import {LinkIcon} from '@sanity/icons/Link'

export const navLink = defineType({
  name: 'navLink',
  title: 'Navigation link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'Destination',
      type: 'string',
      description: 'An on-page anchor such as #process, or a path such as /blog.',
      validation: (rule) =>
        rule.required().custom((value) => {
          if (!value) return true
          return /^(#|\/)/.test(value) || 'Use an anchor (#process) or a path (/blog).'
        }),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})
