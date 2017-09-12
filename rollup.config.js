import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

const name = 'AutosizeInput';
const path = 'dist/react-input-autosize';
const globals = {
	'prop-types': 'PropTypes',
	'react-dom': 'ReactDOM',
	'react': 'React',
};

const external = Object.keys(globals);
const babelOptions = {
	babelrc: false,
	presets: [['es2015', { modules: false }], 'stage-2', 'react'],
	plugins: ['external-helpers'],
};

export default [
	{
		input: 'src/AutosizeInput.js',
		output: {
			file: path + '.es.js',
			format: 'es',
		},
		external: external,
		plugins: [babel(babelOptions)],
	},
	{
		input: 'src/AutosizeInput.js',
		output: {
			name: name,
			file: path + '.js',
			format: 'umd',
		},
		globals: globals,
		external: external,
		plugins: [babel(babelOptions), resolve()],
	},
	{
		input: 'src/AutosizeInput.js',
		output: {
			name: name,
			file: path + '.min.js',
			format: 'umd',
		},
		globals: globals,
		external: external,
		plugins: [babel(babelOptions), resolve(), uglify({}, minify)],
	},
];
