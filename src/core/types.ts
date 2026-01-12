export type ProjectType =
  | 'javascript'
  | 'typescript'
  | 'csharp'
  | 'python'
  | 'rust'
  | 'go'
  | 'java'
  | 'c'
  | 'cpp'
  | 'react'
  | 'nextjs'
  | 'astro'
  | 'vue'
  | 'nestjs'
  | 'unknown';

export interface ProjectInfo {
  name: string;
  version: string;
  type: ProjectType;
  configPath?: string;
}
