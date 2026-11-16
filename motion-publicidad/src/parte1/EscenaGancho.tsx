import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Fondo } from "../comun/Fondo";
import { entrada, tramo } from "../comun/animar";
import { colores, fuenteTitulo } from "../comun/tema";

const palabras = ["¿Tu", "negocio", "todavía", "se", "maneja", "con"];
const viejos = ["cuaderno", "Excel", "WhatsApp"];

export const EscenaGancho: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const indice = Math.min(viejos.length - 1, Math.floor(Math.max(0, f - 28) / 16));
  const tachado = tramo(f, 70, 82);
  const sacudida = f > 70 && f < 84 ? Math.sin(f * 2.2) * 10 : 0;
  return (
    <AbsoluteFill>
      <Fondo intensidad={0.6} />
      <AbsoluteFill style={{ padding: "0 90px", justifyContent: "center", fontFamily: fuenteTitulo }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0 28px", fontSize: 118, fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.04em", color: colores.texto }}>
          {palabras.map((p, i) => {
            const e = entrada(f, fps, i * 3, 200);
            return (
              <span key={i} style={{ opacity: e, transform: `translateY(${(1 - e) * 60}px)`, filter: `blur(${(1 - e) * 10}px)` }}>{p}</span>
            );
          })}
        </div>
        <div style={{ position: "relative", marginTop: 20, height: 170, transform: `translateX(${sacudida}px)` }}>
          {viejos.map((v, i) => {
            const activo = i === indice;
            const e = entrada(f, fps, 28 + i * 16, 220);
            return (
              <div
                key={v}
                style={{
                  position: "absolute",
                  fontSize: 150,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: i === viejos.length - 1 ? colores.texto : colores.grisTexto,
                  opacity: activo ? e : 0,
                  transform: `scale(${0.7 + e * 0.3})`,
                  transformOrigin: "left center",
                }}
              >
                {v}?
                {i === viejos.length - 1 && (
                  <div style={{ position: "absolute", left: -10, right: -10, top: "52%", height: 16, borderRadius: 10, background: colores.celeste, boxShadow: `0 0 30px ${colores.celeste}`, transform: `scaleX(${tachado}) rotate(-4deg)`, transformOrigin: "left" }} />
                )}
              </div>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
