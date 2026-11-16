import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Fondo } from "../comun/Fondo";
import { entrada, tramo } from "../comun/animar";
import { colores, degradado, fuente, fuenteTitulo } from "../comun/tema";

const items = [
  "Hecho a medida de tu negocio",
  "Celular y computadora",
  "Cada venta con fecha, hora y responsable",
  "Tus datos seguros en la nube",
];

export const EscenaBeneficios: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  return (
    <AbsoluteFill>
      <Fondo intensidad={0.8} />
      <AbsoluteFill style={{ padding: "0 90px", justifyContent: "center", gap: 46, fontFamily: fuente }}>
        <div style={{ fontFamily: fuenteTitulo, fontSize: 100, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1.02, marginBottom: 30, opacity: tramo(f, 0, 15) }}>
          Sin plantillas.
          <br />
          <span style={{ background: degradado, WebkitBackgroundClip: "text", color: "transparent" }}>Tu sistema.</span>
        </div>
        {items.map((t, i) => {
          const p = entrada(f, fps, 14 + i * 10, 180);
          const check = tramo(f, 22 + i * 10, 34 + i * 10);
          return (
            <div key={t} style={{ display: "flex", alignItems: "center", gap: 30, opacity: p, transform: `translateX(${(1 - p) * -120}px)` }}>
              <div style={{ flex: "none", width: 84, height: 84, borderRadius: 26, background: degradado, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: `0 0 40px ${colores.azul}88` }}>
                <svg viewBox="0 0 24 24" width={50} height={50}>
                  <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="24" strokeDashoffset={24 * (1 - check)} />
                </svg>
              </div>
              <div style={{ color: "#fff", fontSize: 50, fontWeight: 700, lineHeight: 1.15 }}>{t}</div>
            </div>
          );
        })}
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
