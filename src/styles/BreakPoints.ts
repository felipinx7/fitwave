export const Sizes = {
    xs: "320px",  // Extra Small (smartphones compactos)
    sm: "576px",  // Small (smartphones padrão)
    ms: "456px",
    md: "768px",  // Medium (tablets)
    lg: "992px",  // Large (laptops menores)
    bg: "1080px", // Full HD (telas padrão)
    gg: "1420px", // Muito Grande
  };
  

  export const Breakpoints = {
    xs: `(max-width: ${Sizes.xs})`,
    sm: `(max-width: ${Sizes.sm})`,
    md: `(max-width: ${Sizes.md})`,
    lg: `(max-width: ${Sizes.lg})`, 
    bg: `(max-width: ${Sizes.bg})`,
    gg: `(max-width: ${Sizes.gg})`,
    ms: `(max-width: ${Sizes.ms})`
  };
  