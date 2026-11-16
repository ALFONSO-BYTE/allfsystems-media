import { Easing, interpolate, spring } from "remotion";

export const entrada = (frame: number, fps: number, retraso = 0, rigidez = 140) =>
  spring({ frame: frame - retraso, fps, config: { damping: 16, stiffness: rigidez, mass: 0.7 } });

export const tramo = (frame: number, desde: number, hasta: number, a = 0, b = 1) =>
  interpolate(frame, [desde, hasta], [a, b], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.22, 1, 0.36, 1),
  });

export const guaranies = (n: number) => "Gs. " + Math.round(n).toLocaleString("es-PY").replace(/,/g, ".");
