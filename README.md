# Pastilla vs Ozempic

Blog personal: ¿se le puede ganar a la curva promedio de Ozempic con esfuerzo?
Día 0: 19/10/2026, 125,3 kg. Meta: 95 kg.

## Correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera el sitio estático en dist/
```

## Fuente de la verdad

Este repo. Todo lo que el sitio muestra sale de acá; el Google Doc "Pasti MSF" quedó como histórico hasta el 2/11/2026.

- `src/data/diario/AAAA-MM-DD.json`: un archivo por día.
- `src/data/desafio.json`: día 0, peso inicial, meta, altura y curvas de los rivales.
- `src/data/fuentes.json`: estudios citados.
- `src/content/escritos/`: los posts, en markdown porque son prosa.

## Cargar un día

Crear `src/data/diario/AAAA-MM-DD.json`. Solo `fecha` es obligatoria:

```json
{
  "fecha": "2026-11-05",
  "pesoKg": 121.8,
  "suenoMin": 420,
  "pasos": 10500,
  "aguaLitros": 2.5,
  "objetivo": "Lo que quiero lograr hoy.",
  "ejercicios": [
    { "actividad": "Tenis", "detalle": "singles", "minutos": 120, "km": 4.7, "momento": "a la tarde" }
  ],
  "comidas": [
    { "momento": "almuerzo", "detalle": "pollo con brócoli.", "hora": "13:00", "lugar": "Fabric", "fotoPendiente": true }
  ],
  "notas": ["Un párrafo por nota."],
  "reglas": ["Una regla nueva para el Reglamento."]
}
```

`momento` de una comida: `desayuno`, `almuerzo`, `merienda`, `cena`, `colacion` o `postre`. El esquema está en
`src/content.config.ts`, y un campo mal escrito rompe el build. El marcador, los gráficos, la tabla de datos y el
Reglamento se actualizan solos.

## Escribir un post

Crear `src/content/escritos/nombre.md` con `titulo`, `fecha`, `resumen`, `tipo` (`semanal` o `ensayo`) y,
mientras no esté listo, `borrador: true`.

Los links a otras páginas del sitio van relativos, porque en GitHub Pages el sitio vive en una subcarpeta:
`[Fuentes](../../fuentes/)`, no `[Fuentes](/fuentes/)`.

## Publicar

Cada push a `main` publica el sitio en https://andresdambrosio.github.io/pastilla-versus-ozempic/
(GitHub Actions, `.github/workflows/deploy.yml`).

## Dónde está cada cosa

- `src/lib/stats.ts`: promedio de 7 días, interpolación de rivales y formatos.
- `src/components/Grafico.astro`: gráfico SVG con tooltip, sin librerías.
