import { file } from 'bun';
import path from 'node:path';
import type { ProjectInfo } from './types';

export async function analyzeProject(
  targetDir: string = process.cwd()
): Promise<ProjectInfo> {
  const cwd = path.resolve(targetDir);
  const getCurrentDirName = () => path.basename(cwd);

  // node
  const pkgJson = file(path.join(cwd, 'package.json'));
  if (await pkgJson.exists()) {
    try {
      const content = await pkgJson.json();

      const isTs = await file(path.join(cwd, 'tsconfig.json')).exists();

      return {
        name: content.name || getCurrentDirName(),
        version: content.version || '0.0.0',
        type: isTs ? 'typescript' : 'javascript',
        configPath: 'package.json',
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

  // csharp
  // bun.glob currently in progress, so use fs for searching .sln and .csproj files
  const fs = await import('fs/promises');
  const files = await fs.readdir(cwd);
  const csproj = files.find((f) => f.endsWith('.csproj'));

  if (csproj) {
    return {
      name: csproj.replace('.csproj', ''),
      version: 'unknown', // no xml parsing yet
      type: 'csharp',
      configPath: csproj,
    };
  }

  return {
    name: getCurrentDirName(),
    version: '-',
    type: 'unknown',
  };
}
