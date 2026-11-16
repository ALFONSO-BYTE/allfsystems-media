---
name: nuevo-video
description: Estilo y forma de trabajo para los videos publicitarios de AllfSystems (reels verticales de motion graphics y videos con Francisco hablando). Usar siempre que pida un video nuevo, un reel, una animación, un logo animado o cambios en los videos de motion-publicidad. Se actualiza con cada video aprobado.
---

# Nuevo video · AllfSystems

Proyecto: `motion-publicidad/` (Remotion, 1080x1920, 30 fps). Antes de crear algo, leer este archivo completo y respetar lo aprobado.

## Lo aprobado (no cambiar sin que lo pida)
- **Velocidad:** escenas cortas (3 a 5 s), entradas con resorte rápido (spring damping 16, stiffness 140 a 220), escalonado de 3 a 10 fotogramas entre elementos. Transiciones de 12 fotogramas, variando el tipo (barrido, deslizamiento, fundido). Duración total cerca de 15 a 18 s.
- **Ritmo e interacción:** cada escena tiene una sola idea y algo siempre se mueve (fondo con luz que se desplaza, elementos que flotan, números que suben).
- **Tipo de animación:** texto que entra palabra por palabra con desenfoque, tachado animado, módulos que giran y se juntan en el logo, celular en 3D con panel animado, lista con línea de progreso, cierre con logo y botón con pulso.

## Paleta (del logo)
- Negro `#050608`, grises `#0D0F12` · `#16191E` · `#262A31` · texto gris `#8B929C`, blanco `#FFFFFF`.
- Celeste: `#A5E3FF` (claro) · `#38BDF8` (principal) · `#0284C7` (oscuro). Degradado celeste solo para la palabra clave, el logo y los detalles.
- Nada de violeta, verde, rojo ni azul genérico. Los colores salen de `src/comun/tema.ts`; no escribir colores fijos en las escenas.
- Logo: cuadrado redondeado celeste con la "A" blanca (`marca/logo-allf.svg`). Tema para el kit Viegas: `marca/tema-allf.css`.

## Lo que NO quiere
- Fondos con grilla o cuadraditos ("edificios").
- Cajas o tarjetas todas iguales. Variar formas: píldoras, círculos, texto suelto, contorno, relleno, líneas, números grandes.
- Que se vea genérico o de plantilla.

## Partes
1. **Motion graphics puro** (`Parte1-MotionGraphics`).
2. **Video con Francisco hablando** (`Parte2-ConPersona`): su video de fondo y encima los gráficos en el segundo exacto en que los nombra. Gráficos en la parte de arriba, sin tapar la cara. Zona segura de Instagram: lo importante entre y 260 y 1480, x 60 a 940.

## Herramientas
- Remotion: `npx remotion render <id> videos/<nombre>.mp4`. En la nube, usar `--browser-executable=/opt/pw-browsers/chromium_headless_shell-1243/chrome-headless-shell-linux64/chrome-headless-shell`.
- Kit motion-graphics-viegas (si está instalado en `~/.claude/skills`): para logos animados, 3D e intros. Usar `marca/tema-allf.css` como tema.
- Los kits de Viegas son de pago: no subirlos al repositorio (es público).

## Antes de entregar
- Sacar fotogramas sueltos (`npx remotion still`) y revisar que nada se tape ni se salga.
- Números de ejemplo en el celular: avisar que son de ejemplo.
- Sin menciones a herramientas de generación en textos ni archivos (ver estándar AllfSystems).

## Registro de aprendizajes
- 2026-11-16: aprobada la velocidad y el tipo de animación de la parte 1. Pidió cambiar a la paleta del logo (negro, gris, blanco, celeste) y sacar la grilla y las cajas iguales. Hecho en la versión 2.
- 2026-11-16: primer logo animado con su nombre ("Francisco" + "AllfSystems") con la plantilla de intro del kit Viegas y el tema allf.
