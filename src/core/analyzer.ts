import { file } from 'bun';
import path from 'node:path';
import type { ProjectInfo, ProjectType } from './types';

export async function analyzeProject(
  targetDir: string = process.cwd()
): Promise<ProjectInfo> {
  const cwd = path.resolve(targetDir);
  const getCurrentDirName = () => path.basename(cwd);

  // node (js,ts frameworks)
  const pkgJson = file(path.join(cwd, 'package.json'));
  if (await pkgJson.exists()) {
    try {
      const content = await pkgJson.json();
      const deps = { ...content.dependencies, ...content.devDependencies };
      
      let type: ProjectType = 'javascript';
      const isTs = await file(path.join(cwd, 'tsconfig.json')).exists();

      if (deps.astro) type = 'astro';
      else if (deps.next) type = 'nextjs';
      else if (deps['@nestjs/core']) type = 'nestjs';
      else if (deps.vue || deps.nuxt) type = 'vue';
      else if (deps.react || deps['react-dom']) type = 'react';
      else type = isTs ? 'typescript' : 'javascript';

      return {
        name: content.name || getCurrentDirName(),
        version: content.version || '0.0.0',
        type: type,
        configPath: 'package.json',
      };
    } catch {

    }
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
    return { name: getCurrentDirName(), version: 'unknown', type: 'java', configPath: 'pom.xml' };
  }
  if (await file(path.join(cwd, 'build.gradle')).exists() || await file(path.join(cwd, 'build.gradle.kts')).exists()) {
    return { name: getCurrentDirName(), version: 'unknown', type: 'java', configPath: 'build.gradle' };
  }

  // c, cpp, csharp
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
       return { name: getCurrentDirName(), version: '-', type: 'cpp', configPath: 'CMakeLists.txt' };
    }

    // c
    if (files.includes('Makefile')) {
       return { name: getCurrentDirName(), version: '-', type: 'c', configPath: 'Makefile' };
    }

  } catch (error) {

  }

  return {
    name: getCurrentDirName(),
    version: '-',
    type: 'unknown',
  };
}
