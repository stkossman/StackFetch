import { file } from 'bun';
import os from 'node:os';
import path from 'node:path';

export interface StackFetchConfig {
  display: {
    logo: boolean;
    title: boolean;
    border: boolean;
  };
  modules: {
    project: boolean;
    version: boolean;
    stack: boolean;
    config: boolean;
  };
}

export const defaultConfig: StackFetchConfig = {
  display: {
    logo: true,
    title: true,
    border: true,
  },
  modules: {
    project: true,
    version: true,
    stack: true,
    config: true,
  },
};

export async function loadConfig(): Promise<StackFetchConfig> {
  try {
    const homeDir = os.homedir();
    const configPath = path.join(
      homeDir,
      '.config',
      'stackfetch',
      'config.json'
    );
    const configFile = await file(configPath);

    if (await configFile.exists()) {
      const userConfig = await configFile.json();

      return {
        display: {
          ...defaultConfig.display,
          ...(userConfig.display || {}),
        },
        modules: {
          ...defaultConfig.modules,
          ...(userConfig.modules || {}),
        },
      };
    }
  } catch (error) {}

  return defaultConfig;
}
