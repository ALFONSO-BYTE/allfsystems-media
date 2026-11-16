import { useCurrentFrame, useVideoConfig } from "remotion";
import { Celular } from "../comun/Celular";
import { entrada, guaranies, tramo } from "../comun/animar";
import { colores, degradado, fuente, fuenteTitulo } from "../comun/tema";

export type Aparicion =
  | { tipo: "titulo"; desde: number; hasta: number; texto: string; resaltado?: string }
  | { tipo: "dato"; desde: number; hasta: number; texto: string; valor: number; prefijo?: "gs" | "porcentaje" | "ninguno" }
  | { tipo: "lista"; desde: number; hasta: number; texto: string; items: string[] }
  | { tipo: "celular"; desde: number; hasta: number }
  | { tipo: "palabra"; desde: number; hasta: number; texto: string };

const tarjeta: React.CSSProperties = {
  background: "rgba(13,15,18,0.84)",
  border: "2px solid rgba(255,255,255,0.14)",
  borderRadius: 40,
  boxShadow: "0 30px 90px rgba(0,0,0,0.55)",
  backdropFilter: "blur(16px)",
  fontFamily: fuente,
  color: "#fff",
};

export const CapaAparicion: React.FC<{ a: Aparicion }> = ({ a }) => {
  const f = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const e = entrada(f, fps, 0, 170);
  const s = tramo(f, durationInFrames - 8, durationInFrames, 1, 0);
  const v = Math.min(e, s);

  if (a.tipo === "titulo") {
    return (
      <div style={{ position: "absolute", top: 210, left: 80, right: 80, textAlign: "center", fontFamily: fuenteTitulo, fontWeight: 900, fontSize: 92, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#fff", textShadow: "0 8px 40px rgba(0,0,0,0.7)", opacity: v, transform: `translateY(${(1 - v) * -60}px) scale(${0.9 + v * 0.1})` }}>
        {a.texto}
        {a.resaltado && (
          <>
            <br />
            <span style={{ display: "inline-block", marginTop: 14, padding: "6px 30px", borderRadius: 24, background: degradado, transform: `scaleX(${tramo(f, 6, 18)})` }}>{a.resaltado}</span>
          </>
        )}
      </div>
    );
  }

  if (a.tipo === "dato") {
    const n = tramo(f, 4, 40, 0, a.valor);
    const txt = a.prefijo === "gs" ? guaranies(n) : a.prefijo === "porcentaje" ? `${Math.round(n)}%` : Math.round(n).toLocaleString("es-PY").replace(/,/g, ".");
    return (
      <div style={{ ...tarjeta, position: "absolute", top: 230, left: 90, right: 90, padding: "50px 60px", opacity: v, transform: `translateY(${(1 - v) * -80}px) rotateX(${(1 - v) * 40}deg)` }}>
        <div style={{ fontSize: 44, color: colores.suave, fontWeight: 600 }}>{a.texto}</div>
        <div style={{ fontFamily: fuenteTitulo, fontSize: 120, fontWeight: 900, letterSpacing: "-0.04em", background: degradado, WebkitBackgroundClip: "text", color: "transparent" }}>{txt}</div>
      </div>
    );
  }

  if (a.tipo === "lista") {
    return (
      <div style={{ ...tarjeta, position: "absolute", top: 200, left: 90, right: 90, padding: "46px 56px", opacity: v, transform: `translateX(${(1 - v) * -140}px)` }}>
        <div style={{ fontFamily: fuenteTitulo, fontSize: 60, fontWeight: 800, marginBottom: 24, letterSpacing: "-0.03em" }}>{a.texto}</div>
        {a.items.map((it, i) => {
          const p = entrada(f, fps, 8 + i * 7, 200);
          return (
            <div key={it} style={{ display: "flex", alignItems: "center", gap: 22, padding: "14px 0", opacity: p, transform: `translateX(${(1 - p) * 60}px)` }}>
              <span style={{ width: 54, height: 54, borderRadius: 16, background: degradado, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
                <svg viewBox="0 0 24 24" width={32} height={32}><path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </span>
              <span style={{ fontSize: 46, fontWeight: 700 }}>{it}</span>
            </div>
          );
        })}
      </div>
    );
  }

  if (a.tipo === "celular") {
    return (
      <div style={{ position: "absolute", top: 180, right: 50, opacity: v, transform: `translateX(${(1 - v) * 500}px) rotate(${(1 - v) * 12 + 4}deg)` }}>
        <Celular escala={0.5} inicio={6} />
      </div>
    );
  }

  return (
    <div style={{ position: "absolute", top: 300, width: "100%", textAlign: "center" }}>
      <span style={{ display: "inline-block", padding: "20px 50px", borderRadius: 30, background: degradado, fontFamily: fuenteTitulo, fontSize: 110, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", boxShadow: `0 20px 70px ${colores.celeste}77`, transform: `scale(${v}) rotate(${(1 - v) * -8 - 2}deg)` }}>{a.texto}</span>
    </div>
  );
};
