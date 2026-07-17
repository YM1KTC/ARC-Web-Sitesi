import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool, defineDocuments, defineLocations } from 'sanity/presentation';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'arc-radio',
  title: 'ARC Radio CMS',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,
  basePath: '/admin',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('İçerik')
          .items([
            S.listItem()
              .title('📝 Taslaklar')
              .child(
                S.documentList()
                  .title('Taslaklar')
                  .filter('_type == "post" && status == "draft"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),
            S.listItem()
              .title('✓ Yayında')
              .child(
                S.documentList()
                  .title('Yayında')
                  .filter('_type == "post" && status == "published"')
                  .defaultOrdering([{ field: 'date', direction: 'desc' }])
              ),
            S.divider(),
            S.listItem().title('📚 Tüm Yazılar').child(S.documentTypeList('post').title('Tüm Yazılar')),
            S.divider(),
            S.listItem()
              .title('📅 Etkinlikler')
              .child(
                S.documentTypeList('event')
                  .title('Etkinlikler')
                  .defaultOrdering([{ field: 'date', direction: 'asc' }])
              ),
          ]),
    }),
    presentationTool({
      title: '👁️ Canlı Önizleme',
      previewUrl: {
        preview: '/onizleme',
        previewMode: {
          enable: '/api/preview',
        },
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/onizleme/:slug',
            filter: `_type == "post" && slug.current == $slug`,
          },
        ]),
        locations: {
          post: defineLocations({
            select: { title: 'title', slug: 'slug.current' },
            resolve: (doc) => ({
              locations: doc?.slug ? [{ title: doc?.title || 'Yazı', href: `/onizleme/${doc.slug}` }] : [],
            }),
          }),
        },
      },
    }),
    codeInput(),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
