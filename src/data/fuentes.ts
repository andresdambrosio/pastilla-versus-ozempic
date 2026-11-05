// Todas las fuentes del blog. Se citan con un link a /fuentes/#<id>. Los datos viven en fuentes.json.
import datos from './fuentes.json';

export interface Fuente {
  id: string;
  corto: string; // cómo se nombra en el texto
  autores: string;
  titulo: string;
  revista: string;
  doi?: string;
  url?: string; // para lo que no tiene DOI
  financiamiento?: string;
  usamos: string[]; // qué datos tomamos de acá
}

export const FUENTES: Fuente[] = datos;

export const linkFuente = (f: Fuente) => f.url ?? `https://doi.org/${f.doi}`;

export const fuente = (id: string) => {
  const f = FUENTES.find((x) => x.id === id);
  if (!f) throw new Error(`Fuente desconocida: ${id}`);
  return f;
};
