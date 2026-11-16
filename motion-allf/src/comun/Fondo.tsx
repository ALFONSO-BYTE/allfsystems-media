import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colores } from "./tema";

export const Fondo: React.FC<{ intensidad?: number }> = ({ intensidad = 1 }) => {
  const f = useCurrentFrame();
  const a = f / 60;
  const x1 = 30 + Math.sin(a) * 18;
  const y1 = 25 + Math.cos(a * 0.8) * 12;
  const x2 = 70 + Math.cos(a * 0.7) * 18;
  const y2 = 75 + Math.sin(a * 0.9) * 12;
  const grilla = interpolate(f, [0, 600], [0, 120]);
  return (
    <AbsoluteFill style={{ backgroundColor: colores.fondo, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at ${x1}% ${y1}%, ${colores.azul}${Math.round(110 * intensidad).toString(16).padStart(2, "0")} 0%, transparent 45%), radial-gradient(circle at ${x2}% ${y2}%, ${colores.violeta}${Math.round(110 * intensidad).toString(16).padStart(2, "0")} 0%, transparent 45%)`,
          filter: "blur(40px)",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundImage: `linear-gradient(${colores.linea} 1px, transparent 1px), linear-gradient(90deg, ${colores.linea} 1px, transparent 1px)`,
          backgroundSize: "120px 120px",
          backgroundPosition: `0 ${grilla}px`,
          opacity: 0.35,
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />
    </AbsoluteFill>
  );
};
