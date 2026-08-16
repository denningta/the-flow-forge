import {defineArrayMember, defineField, defineType} from 'sanity'
import {StarIcon} from '@sanity/icons/Star'

export const differentiatorsSection = defineType({
  name: 'differentiatorsSection',
  title: 'Why we’re different',
  type: 'object',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'headingLines',
      title: 'Heading lines',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'Each entry becomes its own line of the heading.',
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'headingAccent',
      title: 'Heading accent',
      type: 'string',
      description: 'The final heading line, rendered in the brand colour.',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [defineArrayMember({type: 'text', rows: 4})],
      description: 'Each entry becomes a paragraph beneath the heading.',
    }),
    defineField({
      name: 'differentiators',
      type: 'array',
      of: [defineArrayMember({type: 'iconLabel'})],
      description: 'The capability list on the right.',
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {subtitle: 'eyebrow', accent: 'headingAccent'},
    prepare: ({subtitle, accent}) => ({
      title: accent || 'Why we’re different',
      subtitle,
    }),
  },
})
