// Reglas del juego y rivales. Los datos viven en desafio.json.
import datos from './desafio.json';

export interface Rival {
  id: string;
  nombre: string;
  detalle: string;
  fuente: string; // id en src/data/fuentes.json
  serie: number; // slot de color (--serie-N)
  // Cambio de peso promedio por semana. Punto final = resultado publicado;
  // los intermedios son aproximaciones leídas de la curva publicada.
  curva: { semana: number; cambioPct: number }[];
}

const { rivales, ...desafio } = datos;

export const DESAFIO = desafio;
export const RIVALES: Rival[] = rivales;
