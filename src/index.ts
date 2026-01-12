#!/usr/bin/env bun
import { cac } from 'cac';
import { version } from '../package.json';
import { analyzeProject } from './core/analyzer';
import { renderUI } from './ui/render';

const cli = cac('stackfetch')

cli
  .command('', 'Scan the current directory and display project context')
  .action(async () => {
    const project = await analyzeProject();

    console.log(renderUI(project));
  });

cli.help();
cli.version(version);

cli.parse();