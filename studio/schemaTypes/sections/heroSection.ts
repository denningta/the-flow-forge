import {defineArrayMember, defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons/Rocket'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero',
  type: 'object',
  icon: RocketIcon,
  groups: [
    {name: 'copy', title: 'Copy', default: true},
    {name: 'photo', title: 'Photo'},
  ],
  fields: [
    defineField({
      name: 'badge',
      type: 'string',
      description: 'The pill above the headline.',
      group: 'copy',
    }),
    defineField({
      name: 'headline',
      type: 'string',
      description: 'The lead-in half of the headline, rendered in the body colour.',
      group: 'copy',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'headlineAccent',
      title: 'Headline accent',
      type: 'string',
      description: 'The closing half of the headline, rendered in the brand colour.',
      group: 'copy',
    }),
    defineField({
      name: 'lede',
      title: 'Lede',
      type: 'text',
      rows: 3,
      group: 'copy',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'secondaryAction',
      title: 'Secondary action',
      type: 'navLink',
      description: 'The ghost button beside the primary call to action.',
      group: 'copy',
    }),
    defineField({
      name: 'trustPoints',
      title: 'Trust points',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'The short reassurances under the buttons.',
      group: 'copy',
      validation: (rule) => rule.max(4).warning('More than four wraps awkwardly on desktop.'),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Portrait shown beside the headline.',
      group: 'photo',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'photoCaption',
      title: 'Photo caption',
      type: 'string',
      description: 'One-sentence summary of the services you provide, shown under the photo.',
      group: 'photo',
      validation: (rule) => rule.max(140).warning('Keep it to one short sentence.'),
    }),
  ],
  preview: {
    select: {title: 'headline', subtitle: 'lede'},
  },
})
