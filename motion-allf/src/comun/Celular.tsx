import { useCurrentFrame, useVideoConfig } from "remotion";
import { entrada, guaranies, tramo } from "./animar";
import { colores, degradado, fuente } from "./tema";

const barras = [42, 58, 49, 71, 64, 88, 96];
const dias = ["L", "M", "M", "J", "V", "S", "D"];
const movimientos = [
  { t: "Venta · Mostrador", q: "María G.", m: 385000, c: colores.verde },
  { t: "Cobro de seña", q: "Taller", m: 150000, c: colores.cian },
  { t: "Comisión vendedor", q: "Carlos R.", m: -38500, c: colores.violeta },
  { t: "Ingreso de stock", q: "Depósito", m: 0, c: colores.azul },
];

export const Celular: React.FC<{ escala?: number; inicio?: number }> = ({ escala = 1, inicio = 0 }) => {
  const f = useCurrentFrame() - inicio;
  const { fps } = useVideoConfig();
  const total = tramo(f, 10, 70, 0, 4850000);
  const w = 560 * escala;
  const h = 1140 * escala;
  const s = escala;
  return (
    <div
      style={{
        width: w,
        height: h,
        borderRadius: 78 * s,
        padding: 16 * s,
        background: "linear-gradient(160deg,#2a3150,#0b0f22)",
        boxShadow: `0 ${60 * s}px ${140 * s}px rgba(47,107,255,0.45), inset 0 0 0 ${2 * s}px rgba(255,255,255,0.15)`,
        fontFamily: fuente,
      }}
    >
      <div style={{ width: "100%", height: "100%", borderRadius: 64 * s, background: "#0A0F24", overflow: "hidden", position: "relative", padding: `${70 * s}px ${34 * s}px ${30 * s}px` }}>
        <div style={{ position: "absolute", top: 18 * s, left: "50%", transform: "translateX(-50%)", width: 150 * s, height: 38 * s, borderRadius: 30 * s, background: "#000" }} />
        <div style={{ color: colores.suave, fontSize: 24 * s, fontWeight: 600 }}>Ventas de hoy</div>
        <div style={{ color: "#fff", fontSize: 58 * s, fontWeight: 800, letterSpacing: "-0.03em", marginTop: 6 * s }}>{guaranies(total)}</div>
        <div style={{ display: "inline-block", marginTop: 10 * s, padding: `${6 * s}px ${14 * s}px`, borderRadius: 30 * s, background: "rgba(34,197,94,0.15)", color: colores.verde, fontSize: 22 * s, fontWeight: 700, opacity: tramo(f, 50, 65) }}>
          ▲ 18% vs. semana pasada
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 14 * s, height: 260 * s, marginTop: 34 * s, padding: 20 * s, borderRadius: 28 * s, background: "rgba(255,255,255,0.04)", border: `1px solid ${colores.linea}` }}>
          {barras.map((b, i) => {
            const p = entrada(f, fps, 18 + i * 4);
            return (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 * s, height: "100%", justifyContent: "flex-end" }}>
                <div style={{ width: "100%", height: `${b * p * 0.85}%`, borderRadius: 10 * s, background: i === 6 ? degradado : "rgba(255,255,255,0.18)" }} />
                <div style={{ color: colores.suave, fontSize: 18 * s }}>{dias[i]}</div>
              </div>
            );
          })}
        </div>
        <div style={{ color: "#fff", fontSize: 26 * s, fontWeight: 700, marginTop: 34 * s, marginBottom: 14 * s }}>Movimientos</div>
        {movimientos.map((m, i) => {
          const p = entrada(f, fps, 45 + i * 9);
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 16 * s, padding: `${16 * s}px 0`, borderBottom: `1px solid ${colores.linea}`, opacity: p, transform: `translateX(${(1 - p) * 80 * s}px)` }}>
              <div style={{ width: 52 * s, height: 52 * s, borderRadius: 16 * s, background: m.c + "33", border: `2px solid ${m.c}` }} />
              <div style={{ flex: 1 }}>
                <div style={{ color: "#fff", fontSize: 22 * s, fontWeight: 700 }}>{m.t}</div>
                <div style={{ color: colores.suave, fontSize: 18 * s }}>{m.q} · 14:{32 + i * 3}</div>
              </div>
              <div style={{ color: m.m < 0 ? colores.rojo : "#fff", fontSize: 21 * s, fontWeight: 700 }}>{m.m === 0 ? "+24 u." : guaranies(m.m)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
