import {defineArrayMember, defineField, defineType} from 'sanity'
import {StackIcon} from '@sanity/icons/Stack'

import {sectionHeaderFields} from '../objects/sectionHeader'

export const capabilitiesSection = defineType({
  name: 'capabilitiesSection',
  title: 'What we do',
  type: 'object',
  icon: StackIcon,
  fields: [
    ...sectionHeaderFields,
    defineField({
      name: 'capabilities',
      type: 'array',
      of: [defineArrayMember({type: 'iconFeature'})],
      validation: (rule) => rule.min(1),
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
