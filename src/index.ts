#!/usr/bin/env bun
import { cac } from 'cac';
import { version } from '../package.json';
import { analyzeProject } from './core/analyzer';
import { renderUI } from './ui/render';
import { theme } from './utils/theme';

const cli = cac('stackfetch');

cli
  .command('[dir]', 'Scan a specific directory (default: current)')
  .action(async (dir) => {
    console.log(theme.ui.title(`StackFetch v${version}`));

    const target = dir || '.';
    console.log(theme.ui.label(`Scanning ${target}...`));

    const project = await analyzeProject(target);

    console.log(renderUI(project));
  });

cli.help();
cli.version(version);

cli.parse();
