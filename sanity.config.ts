import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'robertmartin.dev',

  projectId: '97dw6984',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), ...(isDev ? devOnlyPlugins : [])],

  schema: {
    types: schemaTypes,
  },
})

