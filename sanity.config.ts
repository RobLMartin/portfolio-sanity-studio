import {defineConfig, isDev} from 'sanity'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'
import {getStartedPlugin} from './plugins/sanity-plugin-tutorial'
import {presentationTool} from 'sanity/presentation'

const devOnlyPlugins = [getStartedPlugin()]

export default defineConfig({
  name: 'default',
  title: 'robertmartin.dev',

  projectId: '97dw6984',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    ...(isDev ? devOnlyPlugins : []),
    presentationTool({
      previewUrl: 'http://localhost:3000',
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
