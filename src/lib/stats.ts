import { getCollection, type CollectionEntry } from 'astro:content';
import { DESAFIO, type Rival } from '../data/desafio';

const DIA_MS = 86_400_000;
const INICIO = Date.parse(`${DESAFIO.inicio}T00:00:00Z`);

export type Dia = CollectionEntry<'diario'>;
export interface Punto { x: number; y: number }

/** Días desde el inicio (19/10 = 0). */
export const diaDelDesafio = (fecha: Date) => Math.round((fecha.getTime() - INICIO) / DIA_MS);

export const fechaDeDia = (x: number) => new Date(INICIO + x * DIA_MS);

export async function getDiario(): Promise<Dia[]> {
  const dias = await getCollection('diario');
  return dias.sort((a, b) => a.data.fecha.getTime() - b.data.fecha.getTime());
}

export function seriePeso(dias: Dia[]): Punto[] {
  return dias
    .filter((d) => d.data.peso !== undefined)
    .map((d) => ({ x: diaDelDesafio(d.data.fecha), y: d.data.peso! }));
}

/** Promedio móvil de los pesajes de los últimos 7 días (incluido el propio). */
export function promedioMovil(pesos: Punto[], ventana = 7): Punto[] {
  return pesos.map(({ x }) => {
    const v = pesos.filter((p) => p.x > x - ventana && p.x <= x);
    return { x, y: v.reduce((s, p) => s + p.y, 0) / v.length };
  });
}

/** % de cambio del rival en el día x, interpolando su curva. */
export function cambioRival(rival: Rival, x: number): number {
  const c = rival.curva.map(([sem, pct]) => ({ x: sem * 7, y: pct }));
  if (x <= c[0].x) return c[0].y;
  for (let i = 1; i < c.length; i++) {
    if (x <= c[i].x) {
      const a = c[i - 1], b = c[i];
      return a.y + ((x - a.x) / (b.x - a.x)) * (b.y - a.y);
    }
  }
  return c[c.length - 1].y;
}

export const pesoRival = (rival: Rival, x: number) => DESAFIO.pesoInicial * (1 + cambioRival(rival, x) / 100);

/** Curva del rival en kg, recortada a [0, hasta] días. */
export function serieRival(rival: Rival, hasta: number): Punto[] {
  const pts = rival.curva.map(([sem]) => sem * 7).filter((x) => x < hasta);
  return [...pts, hasta].map((x) => ({ x, y: pesoRival(rival, x) }));
}

export const imc = (peso: number) => peso / DESAFIO.altura ** 2;

export const kg = (n: number, dec = 1) =>
  n.toLocaleString('es-AR', { minimumFractionDigits: dec, maximumFractionDigits: dec });

export const fechaCorta = (f: Date) =>
  f.toLocaleDateString('es-AR', { day: 'numeric', month: 'short', timeZone: 'UTC' });

export const fechaLarga = (f: Date) =>
  f.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const horas = (min: number) => `${Math.floor(min / 60)} h ${String(min % 60).padStart(2, '0')} min`;

export const pasos = (n: number) => n.toLocaleString('es-AR');
