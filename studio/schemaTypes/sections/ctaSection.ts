import {defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons/Bolt'

export const ctaSection = defineType({
  name: 'ctaSection',
  title: 'Closing call to action',
  type: 'object',
  icon: BoltIcon,
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
      description: 'The lead-in half of the headline.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headlineAccent',
      title: 'Headline accent',
      type: 'string',
      description: 'The closing half of the headline, rendered in the brand colour.',
    }),
    defineField({
      name: 'body',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'emailPrompt',
      title: 'Email prompt',
      type: 'string',
      description: 'The lead-in before the email address, e.g. "Prefer email?".',
    }),
  ],
  preview: {
    select: {title: 'headline', subtitle: 'body'},
  },
})
