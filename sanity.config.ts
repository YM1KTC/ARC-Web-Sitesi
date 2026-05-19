import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'arc-radio',
  title: 'ARC Radio CMS',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  basePath: '/admin',
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
