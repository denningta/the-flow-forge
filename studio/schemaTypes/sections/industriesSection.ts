import {defineArrayMember, defineField, defineType} from 'sanity'
import {UsersIcon} from '@sanity/icons/Users'

export const industriesSection = defineType({
  name: 'industriesSection',
  title: 'Who we work with',
  type: 'object',
  icon: UsersIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'industries',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Rendered as a row of badges.',
      validation: (rule) => rule.min(1).unique(),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
