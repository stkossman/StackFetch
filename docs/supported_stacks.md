# Supported Stacks

StackFetch automatically detects the project type based on specific configuration files or dependencies in `package.json`.

## Languages

| Language | Detected By |
| :--- | :--- |
| **JavaScript** | `package.json` / `.js` files |
| **TypeScript** | `tsconfig.json` / `.ts` files |
| **Rust** | `Cargo.toml` |
| **Go** | `go.mod` |
| **Python** | `requirements.txt` / `pyproject.toml` |
| **C#** | `*.csproj` |
| **Java** | `pom.xml` (Maven) / `build.gradle` (Gradle) |
| **C** | `Makefile` |
| **C++** | `CMakeLists.txt` |

## Ecosystem (Node.js)

If a `package.json` is found, StackFetch analyzes dependencies with the following priority: **Desktop/Mobile > Meta-Frameworks > UI Frameworks > Language**.

### Desktop & Mobile
| Framework | Trigger Dependency |
| :--- | :--- |
| **Electron** | `electron` |
| **Tauri** | `@tauri-apps/api` |
| **React Native** | `react-native` |
| **Expo** | `expo` |

### Full-Stack & Meta-Frameworks
| Framework | Trigger Dependency |
| :--- | :--- |
| **Next.js** | `next` |
| **Nuxt** | `nuxt` / `nuxt3` |
| **Astro** | `astro` |
| **Remix** | `@remix-run/react` |
| **NestJS** | `@nestjs/core` |
| **SvelteKit** | `svelte` |
| **SolidStart** | `solid-js` |
| **Angular** | `@angular/core` |

### UI Frameworks
| Framework | Trigger Dependency |
| :--- | :--- |
| **React** | `react` |
| **Vue** | `vue` |

### Styling & UI Libraries
These are detected alongside your main stack.

| Library | Trigger Dependency |
| :--- | :--- |
| **Tailwind CSS** | `tailwindcss` |
| **Bootstrap** | `bootstrap` |
| **Bulma** | `bulma` |
| **Material UI** | `@mui/material` |
| **Chakra UI** | `@chakra-ui/react` |
| **Sass/SCSS** | `sass` / `scss` |
| **Less** | `less` |
| **PostCSS** | `postcss` |

*Don't see your favorite stack? Feel free to [open an issue](https://github.com/stkossman/StackFetch/issues) or contribute.*