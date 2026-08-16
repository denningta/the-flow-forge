import {defineArrayMember, defineField, defineType} from 'sanity'
import {HelpCircleIcon} from '@sanity/icons/HelpCircle'

import {sectionHeaderFields} from '../objects/sectionHeader'

export const problemSection = defineType({
  name: 'problemSection',
  title: 'The problem',
  type: 'object',
  icon: HelpCircleIcon,
  fields: [
    ...sectionHeaderFields,
    defineField({
      name: 'symptoms',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      description: 'The pain statements shown as a grid of cards.',
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'diagnosis',
      type: 'string',
      description: 'The set-up line of the pull quote, e.g. "your factory doesn’t have a production problem."',
    }),
    defineField({
      name: 'diagnosisAccent',
      title: 'Diagnosis accent',
      type: 'string',
      description: 'The pay-off line of the pull quote, rendered in the brand colour.',
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
