import { CalculateMetadataFunction, Composition, Folder } from "remotion";
import { MotionAllf, PropsMotion } from "./parte1/MotionAllf";
import { EscenaGancho } from "./parte1/EscenaGancho";
import { EscenaSolucion } from "./parte1/EscenaSolucion";
import { EscenaPanel } from "./parte1/EscenaPanel";
import { EscenaBeneficios } from "./parte1/EscenaBeneficios";
import { EscenaCierre } from "./parte1/EscenaCierre";
import { ConPersona, PropsPersona } from "./parte2/ConPersona";

const vertical = { width: 1080, height: 1920, fps: 30 };

const propsMotion: PropsMotion = {
  llamado: "Pedí tu demo gratis",
  contacto: "Escribime por mensaje",
};

const propsPersona: PropsPersona = {
  video: "",
  duracionSegundos: 20,
  nombre: "Francisco",
  rol: "AllfSystems",
  apariciones: [
    { tipo: "titulo", desde: 1, hasta: 4, texto: "¿Seguís anotando todo", resaltado: "en un cuaderno?" },
    { tipo: "palabra", desde: 4.5, hasta: 6, texto: "Se acabó." },
    { tipo: "celular", desde: 6.5, hasta: 11 },
    { tipo: "dato", desde: 11.5, hasta: 14.5, texto: "Ventas de hoy, al instante", valor: 4850000, prefijo: "gs" },
    { tipo: "lista", desde: 15, hasta: 19.5, texto: "Tu sistema incluye", items: ["Ventas y caja", "Stock", "Clientes", "Comisiones"] },
  ],
};

const metadataPersona: CalculateMetadataFunction<PropsPersona> = ({ props }) => ({
  durationInFrames: Math.max(1, Math.round(props.duracionSegundos * vertical.fps)),
});

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Parte1-Escenas">
      <Composition id="Gancho" component={EscenaGancho} durationInFrames={96} {...vertical} />
      <Composition id="Solucion" component={EscenaSolucion} durationInFrames={100} {...vertical} />
      <Composition id="Panel" component={EscenaPanel} durationInFrames={150} {...vertical} />
      <Composition id="Beneficios" component={EscenaBeneficios} durationInFrames={100} {...vertical} />
      <Composition id="Cierre" component={EscenaCierre} durationInFrames={110} {...vertical} defaultProps={propsMotion} />
    </Folder>
    <Composition id="Parte1-MotionGraphics" component={MotionAllf} durationInFrames={508} {...vertical} defaultProps={propsMotion} />
    <Composition id="Parte2-ConPersona" component={ConPersona} durationInFrames={600} {...vertical} defaultProps={propsPersona} calculateMetadata={metadataPersona} />
  </>
);
