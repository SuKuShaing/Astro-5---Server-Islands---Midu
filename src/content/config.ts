import { defineCollection, z } from "astro:content";
// z es zod, que es para validar esquemas de datos

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            spain: z.string().url(),
            usa: z.string().url(),
            chile: z.string().url(),
        }),
    }),
});

export const collections = { books };