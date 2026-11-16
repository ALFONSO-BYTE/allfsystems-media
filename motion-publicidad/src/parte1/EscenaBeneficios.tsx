import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Fondo } from "../comun/Fondo";
import { entrada, tramo } from "../comun/animar";
import { colores, fuente, fuenteTitulo, textoDegradado } from "../comun/tema";

const items = [
  "Hecho a medida de tu negocio",
  "Celular y computadora",
  "Cada venta con fecha, hora y responsable",
  "Tus datos seguros en la nube",
];

export const EscenaBeneficios: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const linea = tramo(f, 12, 50);
  return (
    <AbsoluteFill>
      <Fondo intensidad={0.8} />
      <AbsoluteFill style={{ padding: "0 90px", justifyContent: "center", fontFamily: fuente }}>
        <div style={{ fontFamily: fuenteTitulo, fontSize: 110, fontWeight: 800, color: "#fff", letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 70 }}>
          <div style={{ opacity: tramo(f, 0, 10), transform: `translateX(${tramo(f, 0, 14, -80, 0)}px)` }}>Sin plantillas.</div>
          <div style={{ ...textoDegradado, opacity: tramo(f, 5, 15), transform: `translateX(${tramo(f, 5, 19, 80, 0)}px)` }}>Tu sistema.</div>
        </div>
        <div style={{ position: "relative", paddingLeft: 70 }}>
          <div style={{ position: "absolute", left: 14, top: 20, bottom: 20, width: 4, borderRadius: 2, background: colores.gris2 }} />
          <div style={{ position: "absolute", left: 14, top: 20, width: 4, height: `calc((100% - 40px) * ${linea})`, borderRadius: 2, background: colores.celeste, boxShadow: `0 0 20px ${colores.celeste}` }} />
          {items.map((t, i) => {
            const p = entrada(f, fps, 14 + i * 9, 190);
            const activo = tramo(f, 18 + i * 9, 26 + i * 9);
            return (
              <div key={t} style={{ position: "relative", display: "flex", alignItems: "baseline", gap: 26, padding: "26px 0", opacity: p, transform: `translateX(${(1 - p) * 120}px)` }}>
                <span style={{ position: "absolute", left: -70, top: "50%", width: 32, height: 32, marginTop: -16, borderRadius: "50%", background: activo > 0.5 ? colores.celeste : colores.fondo, border: `4px solid ${activo > 0.5 ? colores.celeste : colores.gris2}`, transform: `scale(${0.6 + activo * 0.4})` }} />
                <span style={{ color: colores.celeste, fontWeight: 800, fontSize: 36, fontVariantNumeric: "tabular-nums" }}>0{i + 1}</span>
                <span style={{ color: "#fff", fontSize: 50, fontWeight: 700, lineHeight: 1.15 }}>{t}</span>
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
