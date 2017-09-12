const npsUtils = require('nps-utils');
const series = npsUtils.series;
const rimraf = npsUtils.rimraf;
const concurrent = npsUtils.concurrent;

module.exports = {
	scripts: {
		build: {
			description: 'clean dist directory and run all builds',
			default: series(
				rimraf('dist'),
				rimraf('lib'),
				concurrent.nps('build.rollup', 'build.babel')
			),
			rollup: 'rollup --config',
			babel: 'babel src -d lib',
			standalone: series(
				'cp examples/src/standalone.html examples/dist/standalone.html',
				'lessc examples/src/example.less examples/dist/example.css'
			),
		},
		publish: {
			default: series(
				rimraf('examples/dist'),
				'webpack --progress -p',
				'cp examples/src/.gitignore examples/dist/.gitignore',
				'git subtree push --prefix examples/dist origin gh-pages'
			),
		},
	},
};
