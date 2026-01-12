#!/usr/bin/env bun
import { cac } from 'cac';
import { version } from '../package.json';
import { analyzeProject } from './core/analyzer';
import { renderUI } from './ui/render';
import { loadConfig } from './core/config';

const cli = cac('stackfetch');

cli
  .command('[dir]', 'Scan a specific directory (default: current)')
  .action(async (dir) => {
    const config = await loadConfig();

    const target = dir || '.';

    const project = await analyzeProject(target);

    console.log(renderUI(project, config));
  });

cli.help();
cli.version(version);

cli.parse();
