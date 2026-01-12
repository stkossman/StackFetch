import pc from 'picocolors';

export const theme = {
	ui: {
		border: pc.cyan,
		label: pc.dim,
		value: pc.bold,
		title: pc.cyan
	},

	status: {
		success: pc.green,
		error: pc.red,
		warning: pc.yellow,
		info: pc.blue
	},

	brand: {
		javascript: pc.yellow,
		typescript: pc.blue,
		react: pc.cyan,
		python: pc.green,
		rust: pc.red,
		csharp: pc.magenta,
		go: pc.cyan,
		unknown: pc.gray
	}
}