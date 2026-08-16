import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentIcon} from '@sanity/icons/Document'

import {sectionHeaderFields} from '../objects/sectionHeader'

export const caseStudySection = defineType({
  name: 'caseStudySection',
  title: 'Case study',
  type: 'object',
  icon: DocumentIcon,
  fields: [
    ...sectionHeaderFields,
    defineField({
      name: 'disclaimer',
      type: 'string',
      description: 'The badge above the story — say so plainly when the example is illustrative.',
    }),
    defineField({
      name: 'blocks',
      title: 'Story',
      type: 'array',
      of: [defineArrayMember({type: 'narrativeBlock'})],
      description: 'Typically Problem, Solution, Result. Numbered in the order listed.',
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'metrics',
      title: 'Outcome metrics',
      type: 'array',
      of: [defineArrayMember({type: 'metric'})],
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'eyebrow'},
  },
})
