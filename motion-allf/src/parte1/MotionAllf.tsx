import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { fade } from "@remotion/transitions/fade";
import { EscenaGancho } from "./EscenaGancho";
import { EscenaSolucion } from "./EscenaSolucion";
import { EscenaPanel } from "./EscenaPanel";
import { EscenaBeneficios } from "./EscenaBeneficios";
import { EscenaCierre } from "./EscenaCierre";

export type PropsMotion = { llamado: string; contacto: string };

const t = linearTiming({ durationInFrames: 12 });

export const MotionAllf: React.FC<PropsMotion> = ({ llamado, contacto }) => (
  <TransitionSeries>
    <TransitionSeries.Sequence name="Gancho" durationInFrames={96}>
      <EscenaGancho />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={wipe({ direction: "from-bottom" })} timing={t} />
    <TransitionSeries.Sequence name="Solucion" durationInFrames={100}>
      <EscenaSolucion />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-right" })} timing={t} />
    <TransitionSeries.Sequence name="Panel" durationInFrames={150}>
      <EscenaPanel />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={t} />
    <TransitionSeries.Sequence name="Beneficios" durationInFrames={100}>
      <EscenaBeneficios />
    </TransitionSeries.Sequence>
    <TransitionSeries.Transition presentation={fade()} timing={t} />
    <TransitionSeries.Sequence name="Cierre" durationInFrames={110}>
      <EscenaCierre llamado={llamado} contacto={contacto} />
    </TransitionSeries.Sequence>
  </TransitionSeries>
);
