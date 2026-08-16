import {defineField, defineType} from 'sanity'
import {ComponentIcon} from '@sanity/icons/Component'

import {ICON_OPTIONS} from './iconOptions'

/** A titled, described item with a glyph — used for capabilities and process steps. */
export const iconFeature = defineType({
  name: 'iconFeature',
  title: 'Feature',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'icon',
      type: 'string',
      options: {list: [...ICON_OPTIONS]},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'description'},
  },
})
