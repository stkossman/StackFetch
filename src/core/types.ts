export type ProjectType =
  | 'javascript'
  | 'typescript'
  | 'csharp'
  | 'python'
  | 'rust'
  | 'unknown';

export interface ProjectInfo {
  name: string;
  version: string;
  type: ProjectType;
  configPath?: string;
}
