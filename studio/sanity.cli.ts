import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'byz529pi',
    dataset: 'production',
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
    appId: 'allpw7go2c8b8saaf7d87pom',
  },
  typegen: {
    enabled: true,
    // The Next.js app is a nested Turborepo workspace, so queries live two
    // levels down rather than in a sibling `web/src`.
    path: '../web/apps/web/**/*.{ts,tsx}',
    schema: 'schema.json',
    generates: '../web/apps/web/sanity.types.ts',
    overloadClientMethods: true,
  },
})
