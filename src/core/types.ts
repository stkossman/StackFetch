export type ProjectType =
  // languages
  | 'javascript'
  | 'typescript'
  | 'csharp'
  | 'python'
  | 'rust'
  | 'go'
  | 'java'
  | 'c'
  | 'cpp'

  // frameworks
  | 'react'
  | 'vue'
  | 'svelte'
  | 'angular'

  // meta frameworks
  | 'nextjs'
  | 'nestjs'
  | 'astro'
  | 'nuxt'
  | 'remix'
  | 'solid'

  // mobile & desktop
  | 'react-native'
  | 'expo'
  | 'electron'
  | 'tauri'
  | 'unknown';

export interface ProjectInfo {
  name: string;
  version: string;
  type: ProjectType;
  configPath?: string;
  style?: string[];
}
