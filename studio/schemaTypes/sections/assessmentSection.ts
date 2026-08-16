import {defineArrayMember, defineField, defineType} from 'sanity'
import {CaseIcon} from '@sanity/icons/Case'

import {sectionHeaderFields} from '../objects/sectionHeader'

export const assessmentSection = defineType({
  name: 'assessmentSection',
  title: 'The assessment offer',
  type: 'object',
  icon: CaseIcon,
  groups: [
    {name: 'copy', title: 'Copy', default: true},
    {name: 'offer', title: 'Offer'},
  ],
  fields: [
    ...sectionHeaderFields.map((field) => ({...field, group: 'copy'})),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'Shown as written, e.g. "$3,000–$5,000".',
      group: 'offer',
    }),
    defineField({
      name: 'priceNote',
      title: 'Price badge',
      type: 'string',
      description: 'The badge beside the price, e.g. "Fixed fee".',
      group: 'offer',
    }),
    defineField({
      name: 'deliverablesHeading',
      title: 'Deliverables heading',
      type: 'string',
      group: 'offer',
    }),
    defineField({
      name: 'deliverables',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      group: 'offer',
      validation: (rule) => rule.min(1),
    }),
    defineField({
      name: 'outcomeHeading',
      title: 'Outcome heading',
      type: 'string',
      group: 'offer',
    }),
    defineField({
      name: 'outcome',
      type: 'text',
      rows: 4,
      group: 'offer',
    }),
    defineField({
      name: 'commitmentHeadline',
      title: 'Commitment headline',
      type: 'string',
      description: 'The bold line in the side panel, e.g. the time and travel required.',
      group: 'offer',
    }),
    defineField({
      name: 'commitmentBody',
      title: 'Commitment detail',
      type: 'text',
      rows: 4,
      group: 'offer',
    }),
    defineField({
      name: 'priceRange',
      title: 'Structured price range',
      type: 'object',
      description: 'Used only for the search-engine Offer markup, not shown on the page.',
      group: 'offer',
      options: {collapsible: true, collapsed: true},
      fields: [
        defineField({name: 'minPrice', title: 'Minimum', type: 'number'}),
        defineField({name: 'maxPrice', title: 'Maximum', type: 'number'}),
        defineField({
          name: 'currency',
          type: 'string',
          initialValue: 'USD',
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'heading', subtitle: 'price'},
  },
})
