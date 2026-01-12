import pc from 'picocolors';

export const theme = {
  ui: {
    border: pc.cyan,
    label: pc.dim,
    value: pc.bold,
    title: pc.cyan,
  },

  status: {
    success: pc.green,
    error: pc.red,
    warning: pc.yellow,
    info: pc.blue,
  },

  brand: {
    // langs
    javascript: pc.yellow,
    typescript: pc.blue,
    python: pc.green,
    rust: pc.red,
    csharp: pc.magenta,
    go: pc.cyan,
    java: pc.red,
    c: pc.blue,
    cpp: pc.blue,

    // frameworks
    react: pc.cyan,
    nextjs: pc.white,
    astro: pc.magenta,
    vue: pc.green,
    nestjs: pc.red,

    unknown: pc.gray,
  },
};
