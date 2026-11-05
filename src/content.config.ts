import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const comida = z.strictObject({
  momento: z.enum(['desayuno', 'almuerzo', 'merienda', 'cena', 'colacion', 'postre']),
  detalle: z.string(),
  hora: z.string().optional(), // "15:30", "16 a 17 h", "temprano"
  lugar: z.string().optional(),
  fotoPendiente: z.boolean().default(false),
});

const ejercicio = z.strictObject({
  actividad: z.string(),
  detalle: z.string().optional(),
  minutos: z.number().optional(),
  km: z.number().optional(),
  momento: z.string().optional(), // "a la tarde", "antes del almuerzo"
});

// Un archivo por día: src/data/diario/AAAA-MM-DD.json. Un campo mal escrito rompe el build.
const diario = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/data/diario' }),
  schema: z.strictObject({
    fecha: z.coerce.date(),
    pesoKg: z.number().optional(), // en ayunas
    suenoMin: z.number().optional(), // minutos dormidos la noche anterior
    pasos: z.number().optional(),
    aguaLitros: z.number().optional(),
    objetivo: z.string().optional(),
    ejercicios: z.array(ejercicio).default([]),
    comidas: z.array(comida).default([]),
    notas: z.array(z.string()).default([]),
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
