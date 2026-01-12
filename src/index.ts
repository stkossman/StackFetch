import { cac } from 'cac';
import pc from 'picocolors';
import { version } from '../package.json';

const cli = cac('stackfetch')

cli
  .command('', 'Scan the current directory and display project context')
  .action(() => {
	console.log(pc.cyan(`Stackfetch v${version}`));
	console.log(pc.dim('Analyzing directory...'));
  })

cli.help();
cli.version(version);

cli.parse();