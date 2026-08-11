import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    link: z.string().url().optional(),
    order: z.number().default(0),
    image: z.string().optional(),
  }),
});

export const collections = { projects };
