import {defineField, defineType} from 'sanity'
import {DocumentsIcon} from '@sanity/icons/Documents'

/** Heading copy and SEO for the blog index. A singleton — see `structure.ts`. */
export const blogPage = defineType({
  name: 'blogPage',
  title: 'Blog index',
  type: 'document',
  icon: DocumentsIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'eyebrow',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lede',
      title: 'Lede',
      type: 'text',
      rows: 3,
      group: 'content',
    }),
    defineField({
      name: 'emptyStateMessage',
      title: 'Empty state message',
      type: 'string',
      description: 'Shown when no posts are published yet.',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare: () => ({title: 'Blog index'}),
  },
})
