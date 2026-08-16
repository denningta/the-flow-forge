import {defineField} from 'sanity'

/**
 * The eyebrow / heading / lede trio every section on the home page shares.
 *
 * Spread into a section's `fields` rather than nested as an object, so editors
 * see the heading copy at the top of the section instead of one level down.
 */
export const sectionHeaderFields = [
  defineField({
    name: 'eyebrow',
    type: 'string',
    description: 'The small uppercase kicker above the heading.',
  }),
  defineField({
    name: 'heading',
    type: 'string',
    validation: (rule) => rule.required(),
  }),
  defineField({
    name: 'lede',
    title: 'Lede',
    type: 'text',
    rows: 3,
    description: 'Optional intro paragraph under the heading.',
  }),
]
