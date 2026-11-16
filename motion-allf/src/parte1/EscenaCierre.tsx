import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { Fondo } from "../comun/Fondo";
import { Logo } from "../comun/Logo";
import { entrada, tramo } from "../comun/animar";
import { colores, degradado, fuente, fuenteTitulo } from "../comun/tema";

export const EscenaCierre: React.FC<{ llamado: string; contacto: string }> = ({ llamado, contacto }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logo = entrada(f, fps, 0, 120);
  const anillo = tramo(f, 0, 40);
  const texto = entrada(f, fps, 18, 150);
  const boton = entrada(f, fps, 34, 180);
  const pulso = 1 + Math.sin(f / 6) * 0.025 * tramo(f, 50, 60);
  return (
    <AbsoluteFill>
      <Fondo intensidad={1.2} />
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", fontFamily: fuente, padding: "0 90px" }}>
        <div style={{ position: "absolute", width: 900 * anillo, height: 900 * anillo, borderRadius: "50%", border: `3px solid ${colores.violeta}`, opacity: 1 - anillo }} />
        <div style={{ transform: `scale(${logo})`, marginBottom: 80 }}>
          <Logo tamano={170} />
        </div>
        <div style={{ fontFamily: fuenteTitulo, fontSize: 92, fontWeight: 800, color: "#fff", textAlign: "center", lineHeight: 1.05, letterSpacing: "-0.04em", opacity: texto, transform: `translateY(${(1 - texto) * 40}px)` }}>
          Sistemas para comercios de Paraguay
        </div>
        <div style={{ marginTop: 90, padding: "38px 70px", borderRadius: 999, background: degradado, color: "#fff", fontSize: 54, fontWeight: 800, boxShadow: `0 25px 80px ${colores.azul}99`, transform: `scale(${boton * pulso})` }}>
          {llamado}
        </div>
        <div style={{ marginTop: 50, color: colores.suave, fontSize: 46, fontWeight: 600, opacity: tramo(f, 45, 60) }}>{contacto}</div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
