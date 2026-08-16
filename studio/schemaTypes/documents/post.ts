import {defineArrayMember, defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  groups: [
    {name: 'content', title: 'Content', default: true},
    {name: 'meta', title: 'Metadata'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      group: 'content',
      options: {source: 'title', maxLength: 96},
      validation: (rule) =>
        rule.required().custom(async (slug, context) => {
          if (!slug?.current) return true
          if (!/^[a-z0-9-]+$/.test(slug.current)) {
            return 'Use lowercase letters, numbers, and hyphens only.'
          }

          const client = context.getClient({apiVersion: '2026-08-15'})
          const id = context.document?._id?.replace(/^drafts\./, '')
          const duplicates = await client.fetch<number>(
            `count(*[_type == "post" && slug.current == $slug && !(_id in [$id, "drafts." + $id])])`,
            {slug: slug.current, id},
          )

          return duplicates === 0 || 'Another post already uses this slug.'
        }),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'Shown on the index and used as the meta description when SEO is left empty.',
      group: 'content',
      validation: (rule) => rule.max(220).warning('Keep excerpts under 220 characters.'),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      group: 'content',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
      group: 'content',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Posts with a future date are hidden from the index.',
      group: 'meta',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{type: 'author'}],
      group: 'meta',
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: [{type: 'category'}]})],
      group: 'meta',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  orderings: [
    {
      title: 'Published, newest first',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'title', publishedAt: 'publishedAt', media: 'coverImage'},
    prepare: ({title, publishedAt, media}) => ({
      title,
      subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString('en-US') : 'No date',
      media,
    }),
  },
})
