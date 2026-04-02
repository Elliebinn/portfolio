import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    category: z.enum(['project', 'planning', 'deep-dive', 'skill']).default('project'),
    featured: z.boolean().default(false),
    series: z.string().optional(),
    seriesOrder: z.number().optional(),
    relatedLinks: z.array(z.object({
      label: z.string(),
      url: z.string(),
      type: z.enum(['project', 'blog', 'github', 'linkedin']),
    })).default([]),
  }),
});

export const collections = { blog };
