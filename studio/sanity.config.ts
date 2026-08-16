import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {visionTool} from '@sanity/vision'

import {schemaTypes} from './schemaTypes'
import {resolve} from './presentation/resolve'
import {SINGLETON_TYPES, structure} from './structure'

const previewOrigin = process.env.SANITY_STUDIO_PREVIEW_ORIGIN || 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'The Flow Forge',

  projectId: 'byz529pi',
  dataset: 'production',

  plugins: [
    structureTool({structure}),
    presentationTool({
      resolve,
      previewUrl: {
        origin: previewOrigin,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Singletons are reachable only through Structure, so keep them out of the
    // global "create new" menu.
    templates: (templates) =>
      templates.filter((template) => !SINGLETON_TYPES.has(template.schemaType)),
  },

  document: {
    // A singleton is one document at a fixed ID — duplicating or deleting it
    // would strand the front-end query.
    actions: (actions, {schemaType}) =>
      SINGLETON_TYPES.has(schemaType)
        ? actions.filter(
            ({action}) => action && !['duplicate', 'delete', 'unpublish'].includes(action),
          )
        : actions,
  },
})
