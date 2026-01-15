# Supported Stacks

StackFetch automatically detects the project type based on specific configuration files or dependencies in `package.json`.

## Languages

| Language | Detected By |
| :--- | :--- |
| **JavaScript** | `package.json` |
| **TypeScript** | `tsconfig.json` |
| **Rust** | `Cargo.toml` |
| **Go** | `go.mod` |
| **Python** | `requirements.txt` / `pyproject.toml` |
| **C#** | `*.csproj` |
| **Java** | `pom.xml` (Maven) / `build.gradle` (Gradle) |
| **C** | `Makefile` |
| **C++** | `CMakeLists.txt` |

## Frameworks (Node.js)

If a `package.json` is found, StackFetch analyzes dependencies to identify specific frameworks. Frameworks take precedence over generic JavaScript/TypeScript detection.

| Framework | Trigger Dependency |
| :--- | :--- |
| **React** | `react` / `react-dom` |
| **Next.js** | `next` |
| **Astro** | `astro` |
| **Vue** | `vue` |
| **NestJS** | `@nestjs/core` |

*Don't see your favorite stack? Feel free to [open an issue](https://github.com/stkossman/StackFetch/issues) or contribute.*