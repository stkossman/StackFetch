#!/usr/bin/env bun
import { cac } from 'cac';
import { version } from '../package.json';
import { analyzeProject } from './core/analyzer';
import { theme } from './utils/theme'

const cli = cac('stackfetch')

cli
  .command('', 'Scan the current directory and display project context')
  .action(async() => {
	console.log(theme.ui.title(`Stackfetch v${version}`));
	console.log(theme.ui.label('Analyzing directory...'));

	const project = await analyzeProject();

	console.log('\Found Project')
	console.log(project)

	if (project.type === 'unknown') {
		console.log(theme.status.warning('Unknown project type'))
	} else {
		console.log(theme.status.success(`Detected ${project.type} project`))
	}
  })

cli.help();
cli.version(version);

cli.parse();