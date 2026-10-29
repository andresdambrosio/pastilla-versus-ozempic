# Pastilla vs Ozempic

Blog personal: ¿se le puede ganar a la curva promedio de Ozempic con esfuerzo?
Día 0: 19/10/2026, 125,3 kg. Meta: 95 kg.

## Correrlo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # genera el sitio estático en dist/
```

## Cargar un día

Crear `src/content/diario/AAAA-MM-DD.md`:

```markdown
---
fecha: 2026-10-27
peso: 124.0        # kg, en ayunas
sueno: 420         # minutos dormidos la noche anterior
pasos: 10500
agua: 2.5          # litros
ejercicio: Gimnasio, 1 hora
reglas:
  - "Una regla nueva para el Reglamento"
---

**Desayuno:** ...
```

Todos los números son opcionales. El marcador, los gráficos, la tabla de datos y el Reglamento se actualizan solos.

## Escribir un post

Crear `src/content/escritos/nombre.md` con `titulo`, `fecha`, `resumen`, `tipo` (`semanal` o `ensayo`) y,
mientras no esté listo, `borrador: true`.

Los links a otras páginas del sitio van relativos, porque en GitHub Pages el sitio vive en una subcarpeta:
`[Fuentes](../../fuentes/)`, no `[Fuentes](/fuentes/)`.

## Publicar

Cada push a `main` publica el sitio en https://andresdambrosio.github.io/pastilla-versus-ozempic/
(GitHub Actions, `.github/workflows/deploy.yml`).

## Dónde está cada cosa

- `src/data/desafio.ts`: día 0, peso inicial, meta, altura y las curvas de los rivales (Ozempic / Mounjaro).
- `src/lib/stats.ts`: promedio de 7 días, interpolación de rivales y formatos.
- `src/components/Grafico.astro`: gráfico SVG con tooltip, sin librerías.
