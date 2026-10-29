// El sitio vive en una subcarpeta en GitHub Pages: todos los links internos pasan por acá.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (ruta: string) => base + ruta;
