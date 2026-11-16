import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Fondo } from "../comun/Fondo";
import { entrada } from "../comun/animar";
import { colores, degradado, fuente, fuenteTitulo } from "../comun/tema";

const modulos = [
  { n: "Ventas", c: colores.verde },
  { n: "Caja", c: colores.cian },
  { n: "Stock", c: colores.azul },
  { n: "Clientes", c: "#F59E0B" },
  { n: "Comisiones", c: colores.violeta },
  { n: "Reportes", c: colores.rojo },
];

export const EscenaSolucion: React.FC = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const titulo = entrada(f, fps, 0, 160);
  const union = entrada(f, fps, 52, 90);
  return (
    <AbsoluteFill>
      <Fondo />
      <AbsoluteFill style={{ padding: "180px 90px", fontFamily: fuenteTitulo, alignItems: "center" }}>
        <div style={{ fontSize: 96, fontWeight: 800, color: colores.texto, textAlign: "center", lineHeight: 1.05, letterSpacing: "-0.04em", opacity: titulo, transform: `translateY(${(1 - titulo) * 50}px)` }}>
          Todo tu negocio en
          <br />
          <span style={{ background: degradado, WebkitBackgroundClip: "text", color: "transparent" }}>un solo sistema</span>
        </div>
        <div style={{ position: "relative", width: 900, height: 900, marginTop: 90 }}>
          {modulos.map((m, i) => {
            const e = entrada(f, fps, 12 + i * 5, 170);
            const ang = (i / modulos.length) * Math.PI * 2 - Math.PI / 2 + f / 120;
            const radio = 360 * (1 - union);
            const x = 450 + Math.cos(ang) * radio;
            const y = 450 + Math.sin(ang) * radio;
            return (
              <div
                key={m.n}
                style={{
                  position: "absolute",
                  left: x,
                  top: y,
                  transform: `translate(-50%,-50%) scale(${e * (1 - union * 0.8)})`,
                  padding: "26px 38px",
                  borderRadius: 34,
                  background: "rgba(255,255,255,0.06)",
                  border: `2px solid ${m.c}`,
                  boxShadow: `0 0 50px ${m.c}55`,
                  color: "#fff",
                  fontFamily: fuente,
                  fontWeight: 700,
                  fontSize: 46,
                  opacity: 1 - union,
                  whiteSpace: "nowrap",
                }}
              >
                {m.n}
              </div>
            );
          })}
          <div
            style={{
              position: "absolute",
              left: 450,
              top: 450,
              width: 260,
              height: 260,
              borderRadius: 70,
              background: degradado,
              transform: `translate(-50%,-50%) scale(${union}) rotate(${(1 - union) * -90}deg)`,
              boxShadow: `0 0 ${120 * union}px ${colores.violeta}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 24 24" width={170} height={170}>
              <path d="M7.4 17.4 12 6.6l4.6 10.8M9.1 13.5h5.8" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
