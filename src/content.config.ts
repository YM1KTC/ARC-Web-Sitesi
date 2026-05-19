import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const post = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/post' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string().default('TA1SPH'),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    layout: z.string().default('post'),
    image: z.string().optional(),
    excerpt: z.string().optional(),
  }),
});

export const collections = {
  post,
};
