import { file } from 'bun';
import path from 'node:path';
import type { ProjectInfo, ProjectType } from './types';

export async function analyzeProject(
  targetDir: string = process.cwd()
): Promise<ProjectInfo> {
  const cwd = path.resolve(targetDir);
  const getCurrentDirName = () => path.basename(cwd);

  // node.js
  const pkgJson = file(path.join(cwd, 'package.json'));
  if (await pkgJson.exists()) {
    try {
      const content = await pkgJson.json();
      const deps = { ...content.dependencies, ...content.devDependencies };

      let type: ProjectType = 'javascript';
      const isTs = await file(path.join(cwd, 'tsconfig.json')).exists();

      if (deps.electron) type = 'electron';
      else if (deps['@tauri-apps/api']) type = 'tauri';
      else if (deps.expo) type = 'expo';
      else if (deps['react-native']) type = 'react-native';

      if (deps.astro) type = 'astro';
      else if (deps.next) type = 'nextjs';
      else if (deps['@nestjs/core']) type = 'nestjs';
      else if (deps.vue || deps.nuxt) type = 'vue';
      else if (deps.nuxt || deps['nuxt3']) type = 'nuxt';
      else if (deps['@remix-run/react']) type = 'remix';
      else if (deps['solid-js']) type = 'solid';
      else if (deps['@angular/core']) type = 'angular';
      else if (deps['svelte']) type = 'svelte';
      else if (deps.react || deps['react-dom']) type = 'react';
      else type = isTs ? 'typescript' : 'javascript';

      const styles: string[] = [];

      if (deps.tailwindcss) styles.push('Tailwind');
      if (deps.bootstrap) styles.push('Bootstrap');
      if (deps.bulma) styles.push('Bulma');
      if (deps['@chakra-ui/react']) styles.push('Chakra');
      if (deps['@mui/material']) styles.push('Material UI');

      if (deps.sass || deps.scss) styles.push('Sass');
      if (deps.less) styles.push('Less');
      if (deps.stylus) styles.push('Stylus');
      if (deps.postcss) styles.push('PostCSS');

      return {
        name: content.name || getCurrentDirName(),
        version: content.version || '0.0.0',
        type: type,
        configPath: 'package.json',
        style: styles.length > 0 ? styles : undefined,
      };
    } catch {}
  }

  // rust
  const cargoToml = file(path.join(cwd, 'Cargo.toml'));
  if (await cargoToml.exists()) {
    return {
      name: getCurrentDirName(),
      version: '0.0.0',
      type: 'rust',
      configPath: 'Cargo.toml',
    };
  }

  // go
  const goMod = file(path.join(cwd, 'go.mod'));
  if (await goMod.exists()) {
    const text = await goMod.text();
    const moduleName = text.split('\n')[0]?.replace('module ', '').trim();

    return {
      name: moduleName || getCurrentDirName(),
      version: 'unknown',
      type: 'go',
      configPath: 'go.mod',
    };
  }

  // python
  if (
    (await file(path.join(cwd, 'pyproject.toml')).exists()) ||
    (await file(path.join(cwd, 'requirements.txt')).exists())
  ) {
    return {
      name: getCurrentDirName(),
      version: 'unknown',
      type: 'python',
    };
  }

  // java (maven, gradle)
  if (await file(path.join(cwd, 'pom.xml')).exists()) {
    return {
      name: getCurrentDirName(),
      version: 'unknown',
      type: 'java',
      configPath: 'pom.xml',
    };
  }
  if (
    (await file(path.join(cwd, 'build.gradle')).exists()) ||
    (await file(path.join(cwd, 'build.gradle.kts')).exists())
  ) {
    return {
      name: getCurrentDirName(),
      version: 'unknown',
      type: 'java',
      configPath: 'build.gradle',
    };
  }

  // c, cpp, csharp, raw js/ts
  const fs = await import('node:fs/promises');
  try {
    const files = await fs.readdir(cwd);

    // csharp
    const csproj = files.find((f) => f.endsWith('.csproj'));
    if (csproj) {
      return {
        name: csproj.replace('.csproj', ''),
        version: 'unknown',
        type: 'csharp',
        configPath: csproj,
      };
    }

    // cpp
    if (files.includes('CMakeLists.txt')) {
      return {
        name: getCurrentDirName(),
        version: '-',
        type: 'cpp',
        configPath: 'CMakeLists.txt',
      };
    }

    // c
    if (files.includes('Makefile')) {
      return {
        name: getCurrentDirName(),
        version: '-',
        type: 'c',
        configPath: 'Makefile',
      };
    }

    // raw ts
    if (files.some((f) => f.endsWith('.ts'))) {
      return {
        name: getCurrentDirName(),
        version: '0.0.0',
        type: 'typescript',
      };
    }

    // raw js
    if (files.some((f) => f.endsWith('.js'))) {
      return {
        name: getCurrentDirName(),
        version: '0.0.0',
        type: 'javascript',
      };
    }
  } catch (error) {}

  return {
    name: getCurrentDirName(),
    version: '-',
    type: 'unknown',
  };
}
