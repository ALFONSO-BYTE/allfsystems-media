export const colores = {
  fondo: "#050608",
  fondo2: "#0D0F12",
  gris: "#16191E",
  gris2: "#262A31",
  grisTexto: "#8B929C",
  celeste: "#38BDF8",
  celesteClaro: "#A5E3FF",
  celesteOscuro: "#0284C7",
  texto: "#FFFFFF",
  suave: "rgba(255,255,255,0.64)",
  linea: "rgba(255,255,255,0.10)",
};

export const degradado = `linear-gradient(120deg, ${colores.celesteClaro}, ${colores.celeste} 55%, ${colores.celesteOscuro})`;
export const textoDegradado: React.CSSProperties = {
  background: degradado,
  WebkitBackgroundClip: "text",
  color: "transparent",
};
export const fuente = "Inter, 'DejaVu Sans', sans-serif";
export const fuenteTitulo = "'Inter Display', Inter, sans-serif";
