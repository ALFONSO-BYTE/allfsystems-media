# Motion publicidad · AllfSystems

Videos terminados en `videos/`. Logo y tema de color en `marca/`.

Formato vertical 1080x1920 a 30 fps, listo para Reels, TikTok y Shorts.

## Instalar

```
npm i
```

## Editar en vista previa

```
npx remotion studio
```

## Parte 1 · Motion graphics

Composición `Parte1-MotionGraphics` (unos 17 s). Escenas en `src/parte1/`.
El texto del botón y el contacto del cierre se cambian en `src/Root.tsx` (`propsMotion`).

```
npx remotion render Parte1-MotionGraphics salida/parte1.mp4
```

## Parte 2 · Video con persona

Composición `Parte2-ConPersona`.

1. Copiar el video grabado (vertical) en `public/`, por ejemplo `public/francisco.mp4`.
2. En `src/Root.tsx`, dentro de `propsPersona`:
   - `video`: nombre del archivo (`"francisco.mp4"`).
   - `duracionSegundos`: duración del video.
   - `apariciones`: qué gráfico sale y en qué segundo (`desde` / `hasta`).

Tipos de gráfico: `titulo`, `palabra`, `dato`, `lista`, `celular`.

```
npx remotion render Parte2-ConPersona salida/parte2.mp4
```

Los gráficos aparecen en la parte de arriba del cuadro: al grabar, dejar espacio libre encima de la cabeza.
