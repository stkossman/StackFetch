import boxen from 'boxen';
import { theme } from '../utils/theme';
import { getLogo } from '../utils/ascii';
import type { ProjectInfo } from '../core/types';
import type { StackFetchConfig } from '../core/config';

export function renderUI(
  project: ProjectInfo,
  config: StackFetchConfig
): string {
  const lines: string[] = [];

  if (config.modules.project) {
    lines.push(
      `${theme.ui.label('Project:')}  ${theme.ui.value(project.name)}`
    );
  }
  if (config.modules.version) {
    lines.push(
      `${theme.ui.label('Version:')}  ${theme.ui.value(project.version)}`
    );
  }
  if (config.modules.stack) {
    const stackIcon =
      theme.brand[project.type as keyof typeof theme.brand] ||
      theme.brand.unknown;
    lines.push(`${theme.ui.label('Stack:')}    ${stackIcon(project.type)}`);
  }
  if (config.modules.config && project.configPath) {
    lines.push(
      `${theme.ui.label('Config:')}   ${theme.ui.value(project.configPath)}`
    );
  }

  const infoText = lines.join('\n');

  const logo = config.display.logo ? getLogo(project.type) : '';

  const contentParts = [];

  if (logo) contentParts.push(logo);

  if (logo && infoText) {
    contentParts.push('');
    contentParts.push(theme.ui.border('─'.repeat(30)));
    contentParts.push('');
  }

  if (infoText) contentParts.push(infoText);

  const rawContent = contentParts.join('\n');

  if (!config.display.border) {
    return `\n${rawContent}\n`;
  }

  return boxen(rawContent, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    title: config.display.title ? theme.ui.title(' StackFetch ') : undefined,
    titleAlignment: 'center',
    textAlignment: 'center',
  });
}
