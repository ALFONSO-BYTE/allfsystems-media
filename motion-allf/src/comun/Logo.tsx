import { colores, fuente } from "./tema";

export const Logo: React.FC<{ tamano?: number; conNombre?: boolean }> = ({ tamano = 120, conNombre = true }) => (
  <div style={{ display: "flex", alignItems: "center", gap: tamano * 0.28, fontFamily: fuente }}>
    <svg viewBox="0 0 24 24" width={tamano} height={tamano}>
      <defs>
        <linearGradient id="allfg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={colores.azul} />
          <stop offset="1" stopColor={colores.violeta} />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#allfg)" />
      <path d="M7.4 17.4 12 6.6l4.6 10.8M9.1 13.5h5.8" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
    {conNombre && (
      <span style={{ color: colores.texto, fontWeight: 800, fontSize: tamano * 0.52, letterSpacing: "-0.02em" }}>AllfSystems</span>
    )}
  </div>
);
