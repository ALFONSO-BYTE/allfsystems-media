import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Fondo } from "../comun/Fondo";
import { MarcaA } from "../comun/Logo";
import { entrada, tramo } from "../comun/animar";
import { colores, fuente, fuenteTitulo, textoDegradado } from "../comun/tema";

type Estilo = "lleno" | "borde" | "texto" | "punto";
const modulos: { n: string; e: Estilo; t: number }[] = [
  { n: "Ventas", e: "lleno", t: 64 },
  { n: "Caja", e: "texto", t: 92 },
  { n: "Stock", e: "borde", t: 52 },
  { n: "Clientes", e: "punto", t: 44 },
  { n: "Comisiones", e: "borde", t: 40 },
  { n: "Reportes", e: "texto", t: 58 },
];

const estiloDe = (e: Estilo, t: number): React.CSSProperties => {
  if (e === "lleno") return { padding: `${t * 0.3}px ${t * 0.6}px`, borderRadius: 999, background: colores.celeste, color: colores.fondo };
  if (e === "borde") return { padding: `${t * 0.32}px ${t * 0.62}px`, borderRadius: 999, border: `3px solid ${colores.gris2}`, color: "#fff", background: "rgba(13,15,18,0.7)" };
  if (e === "punto") return { color: colores.suave, display: "flex", alignItems: "center", gap: 14 };
  return { color: "#fff", fontFamily: fuenteTitulo, fontWeight: 900, letterSpacing: "-0.04em" };
};

export const EscenaSolucion: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titulo = entrada(f, fps, 0, 160);
  const union = entrada(f, fps, 52, 90);
  const trazo = tramo(f, 62, 82);
  return (
    <AbsoluteFill>
      <Fondo />
      <AbsoluteFill style={{ padding: "180px 90px", fontFamily: fuenteTitulo, alignItems: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 800, color: colores.texto, textAlign: "center", lineHeight: 1.05, letterSpacing: "-0.04em", opacity: titulo, transform: `translateY(${(1 - titulo) * 50}px)` }}>
          Todo tu negocio en
          <br />
          <span style={textoDegradado}>un solo sistema</span>
        </div>
        <div style={{ position: "relative", width: 900, height: 900, marginTop: 90 }}>
          <div style={{ position: "absolute", left: 450, top: 450, width: 760, height: 760, borderRadius: "50%", border: `2px dashed ${colores.linea}`, transform: `translate(-50%,-50%) rotate(${f}deg) scale(${1 - union})` }} />
          {modulos.map((m, i) => {
            const e = entrada(f, fps, 10 + i * 4, 180);
            const ang = (i / modulos.length) * Math.PI * 2 - Math.PI / 2 + f / 110;
            const radio = (300 + (i % 2) * 70) * (1 - union);
            const x = 450 + Math.cos(ang) * radio;
            const y = 450 + Math.sin(ang) * radio;
            return (
              <div
                key={m.n}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: `translate(-50%,-50%) scale(${e * (1 - union * 0.85)}) rotate(${(1 - e) * 20}deg)`,
                  opacity: 1 - union,
                  fontFamily: fuente,
                  fontWeight: 800,
                  fontSize: m.t,
                  whiteSpace: "nowrap",
                  ...estiloDe(m.e, m.t),
                }}
              >
                {m.e === "punto" && <span style={{ width: 18, height: 18, borderRadius: "50%", background: colores.celeste }} />}
                {m.n}
              </div>
            );
          })}
          <div style={{ position: "absolute", left: 450, top: 450, transform: `translate(-50%,-50%) scale(${union}) rotate(${(1 - union) * -120}deg)`, filter: `drop-shadow(0 0 ${90 * union}px ${colores.celeste}aa)` }}>
            <MarcaA tamano={260} trazo={trazo} />
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
