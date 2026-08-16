import {defineField, defineType} from 'sanity'
import {TagIcon} from '@sanity/icons/Tag'

import {ICON_OPTIONS} from './iconOptions'

/** A short label with a glyph and no supporting copy. */
export const iconLabel = defineType({
  name: 'iconLabel',
  title: 'Labelled icon',
  type: 'object',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'icon',
      type: 'string',
      options: {list: [...ICON_OPTIONS]},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'label', subtitle: 'icon'},
  },
})
