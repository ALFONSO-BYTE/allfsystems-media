import { AbsoluteFill, OffthreadVideo, Sequence, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Logo } from "../comun/Logo";
import { entrada, tramo } from "../comun/animar";
import { colores, degradado, fuente } from "../comun/tema";
import { Aparicion, CapaAparicion } from "./Aparicion";

export type PropsPersona = {
  video: string;
  duracionSegundos: number;
  nombre: string;
  rol: string;
  apariciones: Aparicion[];
};

const VistaPrevia: React.FC = () => (
  <AbsoluteFill style={{ background: "linear-gradient(180deg,#22262c,#0b0c0f)", alignItems: "center", justifyContent: "flex-end" }}>
    <div style={{ width: 380, height: 380, borderRadius: "50%", background: "#33383f", marginBottom: -40 }} />
    <div style={{ width: 760, height: 700, borderRadius: "380px 380px 0 0", background: "#33383f", marginTop: 60 }} />
  </AbsoluteFill>
);

const Rotulo: React.FC<{ nombre: string; rol: string }> = ({ nombre, rol }) => {
  const f = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const e = Math.min(entrada(f, fps, 0, 150), tramo(f, durationInFrames - 10, durationInFrames, 1, 0));
  return (
    <div style={{ position: "absolute", left: 80, bottom: 330, display: "flex", alignItems: "stretch", gap: 0, fontFamily: fuente, opacity: e, transform: `translateX(${(1 - e) * -200}px)` }}>
      <div style={{ width: 14, borderRadius: 7, background: degradado, transform: `scaleY(${e})` }} />
      <div style={{ padding: "18px 34px", background: "rgba(13,15,18,0.86)", borderRadius: "0 26px 26px 0", backdropFilter: "blur(12px)" }}>
        <div style={{ color: "#fff", fontSize: 54, fontWeight: 800 }}>{nombre}</div>
        <div style={{ color: colores.suave, fontSize: 36, fontWeight: 600 }}>{rol}</div>
      </div>
    </div>
  );
};

export const ConPersona: React.FC<PropsPersona> = ({ video, nombre, rol, apariciones }) => {
  const { fps, durationInFrames } = useVideoConfig();
  return (
    <AbsoluteFill style={{ backgroundColor: colores.fondo }}>
      {video ? <OffthreadVideo src={staticFile(video)} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <VistaPrevia />}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(5,6,8,0.55) 0%, transparent 35%, transparent 70%, rgba(5,6,8,0.6) 100%)" }} />
      <Sequence name="Rotulo" from={Math.round(0.5 * fps)} durationInFrames={Math.round(4 * fps)}>
        <Rotulo nombre={nombre} rol={rol} />
      </Sequence>
      {apariciones.map((a, i) => (
        <Sequence key={i} name={`${a.tipo} ${i + 1}`} from={Math.round(a.desde * fps)} durationInFrames={Math.max(1, Math.round((a.hasta - a.desde) * fps))}>
          <CapaAparicion a={a} />
        </Sequence>
      ))}
      <div style={{ position: "absolute", bottom: 120, width: "100%", display: "flex", justifyContent: "center", opacity: 0.85 }}>
        <Logo tamano={56} />
      </div>
      <Sequence from={durationInFrames - 1}>
        <AbsoluteFill />
      </Sequence>
    </AbsoluteFill>
  );
};
