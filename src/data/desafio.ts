// Reglas del juego. El día 0 es el 19/10/2026 con 125,3 kg.
export const DESAFIO = {
  inicio: '2026-10-19',
  pesoInicial: 125.3,
  meta: 95,
  altura: 1.81,
};

export interface Rival {
  id: string;
  nombre: string;
  detalle: string;
  fuente: string; // id en src/data/fuentes.ts
  serie: number; // slot de color (--serie-N)
  // [semana, % de cambio de peso promedio]. Punto final = resultado publicado;
  // los intermedios son aproximaciones leídas de la curva publicada.
  curva: [number, number][];
}

export const RIVALES: Rival[] = [
  {
    id: 'ozempic',
    nombre: 'Ozempic',
    detalle: 'Semaglutida 2,4 mg semanal',
    fuente: 'step-1',
    serie: 2,
    curva: [
      [0, 0], [4, -2.0], [8, -3.8], [12, -5.6], [16, -7.2], [20, -8.6],
      [28, -10.8], [36, -12.4], [44, -13.6], [52, -14.4], [60, -14.9], [68, -14.9],
    ],
  },
  {
    id: 'mounjaro',
    nombre: 'Mounjaro',
    detalle: 'Tirzepatida 15 mg semanal',
    fuente: 'surmount-1',
    serie: 3,
    curva: [
      [0, 0], [4, -2.6], [8, -5.0], [12, -7.4], [16, -9.5], [20, -11.4],
      [24, -13.1], [36, -16.5], [48, -19.0], [60, -20.4], [72, -20.9],
    ],
  },
];
