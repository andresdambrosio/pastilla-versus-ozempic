import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Un archivo por día: src/content/diario/AAAA-MM-DD.md
// Los números van en el frontmatter (alimentan los gráficos); el relato va en el cuerpo.
const diario = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diario' }),
  schema: z.object({
    fecha: z.coerce.date(),
    peso: z.number().optional(), // kg, en ayunas
    sueno: z.number().optional(), // minutos dormidos la noche anterior
    pasos: z.number().optional(),
    agua: z.number().optional(), // litros
    ejercicio: z.string().optional(),
    reglas: z.array(z.string()).default([]), // aprendizajes que pasan al Reglamento
  }),
});

// Resúmenes semanales y ensayos.
const escritos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/escritos' }),
  schema: z.object({
    titulo: z.string(),
    fecha: z.coerce.date(),
    resumen: z.string(),
    tipo: z.enum(['semanal', 'ensayo']),
    borrador: z.boolean().default(false),
  }),
});

export const collections = { diario, escritos };
