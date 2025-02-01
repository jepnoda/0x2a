import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const post = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/post' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
})

export const collections = { post }
