import { file, write } from 'bun';
import os from 'node:os';
import path from 'node:path';
import fs from 'node:fs/promises';

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
    styles: boolean;
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
    styles: true,
    config: true,
  },
};

export async function loadConfig(): Promise<StackFetchConfig> {
  const homeDir = os.homedir();
  const configDir = path.join(homeDir, '.config', 'stackfetch');
  const configPath = path.join(configDir, 'config.json');

  const configFile = file(configPath);

  if (await configFile.exists()) {
    try {
      const userConfig = await configFile.json();
      return {
        display: { ...defaultConfig.display, ...(userConfig.display || {}) },
        modules: { ...defaultConfig.modules, ...(userConfig.modules || {}) },
      };
    } catch (error) {
      return defaultConfig;
    }
  }

  try {
    await fs.mkdir(configDir, { recursive: true });
    await write(configPath, JSON.stringify(defaultConfig, null, 2));
  } catch (error) {}

  return defaultConfig;
}
