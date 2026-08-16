import {defineArrayMember, defineField, defineType} from 'sanity'
import {ThLargeIcon} from '@sanity/icons/ThLarge'

import {sectionHeaderFields} from '../objects/sectionHeader'

export const processSection = defineType({
  name: 'processSection',
  title: 'How it works',
  type: 'object',
  icon: ThLargeIcon,
  fields: [
    ...sectionHeaderFields,
    defineField({
      name: 'steps',
      type: 'array',
      of: [defineArrayMember({type: 'iconFeature'})],
      description: 'Numbered automatically in the order listed here.',
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
