const npsUtils = require('nps-utils');
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
	scripts: {
		examples: {
			default: series(
				rimraf('examples/dist'),
				'mkdir examples/dist',
				concurrent.nps('examples.webpack', 'examples.standalone'),
				'cp examples/src/.gitignore examples/dist/.gitignore'
			),
			webpack: 'webpack --progress -p',
			standalone: series(
				'cp examples/src/standalone.html examples/dist/standalone.html',
				'lessc examples/src/example.less examples/dist/example.css'
			),
		},
	},
};
