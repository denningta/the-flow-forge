import type {StructureResolver} from 'sanity/structure'
import {CogIcon} from '@sanity/icons/Cog'
import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {DocumentsIcon} from '@sanity/icons/Documents'
import {HomeIcon} from '@sanity/icons/Home'
import {TagIcon} from '@sanity/icons/Tag'
import {UserIcon} from '@sanity/icons/User'

/**
 * Singletons get a fixed `_id` and are opened directly, so editors never see a
 * "create another home page" list. `SINGLETON_TYPES` is also used in
 * `sanity.config.ts` to strip create/delete/duplicate from those documents.
 */
export const SINGLETONS = [
  {id: 'homePage', type: 'homePage', title: 'Home page', icon: HomeIcon},
  {id: 'blogPage', type: 'blogPage', title: 'Blog index', icon: DocumentsIcon},
  {id: 'siteSettings', type: 'siteSettings', title: 'Site settings', icon: CogIcon},
] as const

export const SINGLETON_TYPES = new Set<string>(SINGLETONS.map((singleton) => singleton.type))

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      ...SINGLETONS.map((singleton) =>
        S.listItem()
          .id(singleton.id)
          .title(singleton.title)
          .icon(singleton.icon)
          .child(
            S.document()
              .id(singleton.id)
              .schemaType(singleton.type)
              .documentId(singleton.id)
              .title(singleton.title),
          ),
      ),
      S.divider(),
      S.documentTypeListItem('post').title('Posts').icon(DocumentTextIcon),
      S.documentTypeListItem('author').title('Authors').icon(UserIcon),
      S.documentTypeListItem('category').title('Categories').icon(TagIcon),
    ])
