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
    vue: pc.green,
    svelte: pc.red,
    angular: pc.red,

    // meta frameworks
    nextjs: pc.white,
    nestjs: pc.red,
    nuxt: pc.green,
    remix: pc.white,
    solid: pc.blue,
    astro: pc.magenta,

    // mobile & desktop
    'react-native': pc.cyan,
    expo: pc.white,
    electron: pc.cyan,
    tauri: pc.yellow,

    // TODO: Add colours for CSS frameworks (Tailwind, Bootstrap...)

    unknown: pc.gray,
  },
};
