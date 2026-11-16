import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Celular } from "../comun/Celular";
import { Fondo } from "../comun/Fondo";
import { entrada, tramo } from "../comun/animar";
import { colores, fuente, fuenteTitulo } from "../comun/tema";

const etiquetas = [
  { t: "Caja al día", x: -40, y: 800, d: 40 },
  { t: "Stock al instante", x: 470, y: 1180, d: 60 },
  { t: "Comisiones exactas", x: -20, y: 1560, d: 80 },
];

export const EscenaPanel: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const e = entrada(f, fps, 0, 90);
  const giroY = (1 - e) * 35 + Math.sin(f / 40) * 6;
  const giroX = (1 - e) * 15 + Math.cos(f / 50) * 3;
  const titulo = tramo(f, 4, 24);
  return (
    <AbsoluteFill>
      <Fondo />
      <div style={{ position: "absolute", top: 150, width: "100%", textAlign: "center", fontFamily: fuenteTitulo, fontSize: 84, fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", opacity: titulo, transform: `translateY(${(1 - titulo) * 40}px)` }}>
        Lo ves desde tu celular
      </div>
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", perspective: 1800, paddingTop: 160 }}>
        <div style={{ transform: `translateY(${(1 - e) * 500}px) rotateY(${giroY}deg) rotateX(${giroX}deg)`, transformStyle: "preserve-3d" }}>
          <Celular escala={1.12} inicio={10} />
        </div>
      </AbsoluteFill>
      {etiquetas.map((g) => {
        const p = entrada(f, fps, g.d, 200);
        return (
          <div
            key={g.t}
            style={{
              position: "absolute",
              left: 90 + g.x,
              top: g.y,
              transform: `scale(${p}) translateY(${Math.sin((f + g.d) / 25) * 10}px)`,
              padding: "22px 34px",
              borderRadius: 30,
              background: "rgba(14,20,48,0.85)",
              border: `2px solid ${colores.linea}`,
              backdropFilter: "blur(10px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              color: "#fff",
              fontFamily: fuente,
              fontSize: 42,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: 16,
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: 22, height: 22, borderRadius: 11, background: colores.verde, boxShadow: `0 0 20px ${colores.verde}` }} />
            {g.t}
          </div>
        );
      })}
    </AbsoluteFill>
  );
};
