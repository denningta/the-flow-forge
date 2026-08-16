import {defineField, defineType} from 'sanity'
import {ListIcon} from '@sanity/icons/List'

/** One beat of a story — a label such as "Problem" and the paragraph under it. */
export const narrativeBlock = defineType({
  name: 'narrativeBlock',
  title: 'Narrative block',
  type: 'object',
  icon: ListIcon,
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'body'},
  },
})
