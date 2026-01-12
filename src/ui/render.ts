import boxen from 'boxen'
import { theme } from '../utils/theme'
import { getLogo } from '../utils/ascii'
import type { ProjectInfo } from '../core/types'

export function renderUI(project: ProjectInfo): string {
  const infoLines = [
    `${theme.ui.label('Project:')}  ${theme.ui.value(project.name)}`,
    `${theme.ui.label('Version:')}  ${theme.ui.value(project.version)}`,
    `${theme.ui.label('Stack:')}    ${theme.brand[project.type as keyof typeof theme.brand](project.type)}`,
    project.configPath ? `${theme.ui.label('Config:')}   ${theme.ui.value(project.configPath)}` : '',
  ].filter(Boolean).join('\n')

  const logo = getLogo(project.type);

  const content = [
    logo,
    '',
    theme.ui.border('--'.repeat(30)),
    '',
    infoLines
  ].join('\n')

  return boxen(content, {
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'cyan',
    title: theme.ui.title(' StackFetch '),
    titleAlignment: 'center',
    textAlignment: 'center'
  })
}