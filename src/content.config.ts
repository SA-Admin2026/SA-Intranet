import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    // Extend the Starlight schema so the Confluence provenance carried over by the
    // migration validates instead of erroring. Both fields are optional.
    schema: docsSchema({
      extend: z.object({
        confluence_id: z.number().optional(),
        source: z.string().optional(),
      }),
    }),
  }),
};
