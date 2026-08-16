import {defineField, defineType} from 'sanity'
import {BoltIcon} from '@sanity/icons/Bolt'

/** A headline figure with the thing it measures. */
export const metric = defineType({
  name: 'metric',
  title: 'Metric',
  type: 'object',
  icon: BoltIcon,
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      description: 'The figure as it should read, e.g. "75%" or "4 days".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      type: 'string',
      description: 'What the figure measures.',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'value', subtitle: 'label'},
  },
})
