import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { colores } from "./tema";

export const Fondo: React.FC<{ intensidad?: number }> = ({ intensidad = 1 }) => {
  const f = useCurrentFrame();
  const a = f / 70;
  const x = 50 + Math.sin(a) * 22;
  const y = 38 + Math.cos(a * 0.8) * 14;
  const haz = interpolate(f % 150, [0, 150], [-40, 140]);
  const alfa = Math.round(70 * intensidad).toString(16).padStart(2, "0");
  return (
    <AbsoluteFill style={{ backgroundColor: colores.fondo, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 70% 45% at ${x}% ${y}%, ${colores.celeste}${alfa} 0%, transparent 70%)`, filter: "blur(30px)" }} />
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 90% 40% at 50% 115%, ${colores.gris2} 0%, transparent 70%)` }} />
      <div style={{ position: "absolute", top: "-20%", left: `${haz}%`, width: 220, height: "140%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)", transform: "rotate(18deg)" }} />
      <svg width="100%" height="100%" style={{ position: "absolute", opacity: 0.07, mixBlendMode: "overlay" }}>
        <filter id="grano">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={f % 8} />
        </filter>
        <rect width="100%" height="100%" filter="url(#grano)" />
      </svg>
    </AbsoluteFill>
  );
};
