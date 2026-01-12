#!/usr/bin/env bun
import { cac } from 'cac';
import pc from 'picocolors';
import { version } from '../package.json';
import { theme } from './utils/theme'

const cli = cac('stackfetch')

cli
  .command('', 'Scan the current directory and display project context')
  .action(() => {
	console.log(theme.ui.title(`Stackfetch v${version}`));
	console.log(theme.ui.label('Analyzing directory...'));

	console.log(theme.status.success('Analysis complete!'));
  })

cli.help();
cli.version(version);

cli.parse();