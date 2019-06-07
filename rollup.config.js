import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = './src/AutosizeInput.js';
const name = 'AutosizeInput';
const path = 'dist/react-input-autosize';
const globals = {
	'prop-types': 'PropTypes',
	'react': 'React',
};

const external = id =>
	!id.startsWith('.') && !id.startsWith('/') && !id.startsWith(':');

const getBabelOptions = ({ useESModules }) => ({
	runtimeHelpers: true,
	plugins: [['@babel/transform-runtime', { useESModules }]],
});

export default [
	{
		input,
		output: {
			file: pkg.main,
			format: 'cjs',
		},
		external,
		plugins: [babel(getBabelOptions({ useESModules: false }))],
	},
	{
		input,
		output: {
			file: pkg.module,
			format: 'esm',
		},
		external,
		plugins: [babel(getBabelOptions({ useESModules: true }))],
	},
	{
		input,
		output: {
			name,
			globals,
			file: path + '.js',
			format: 'umd',
		},
		external: Object.keys(globals),
		plugins: [
			nodeResolve(),
			babel(getBabelOptions({ useESModules: true })),
			replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
		],
	},
	{
		input,
		output: {
			name,
			globals,
			file: path + '.min.js',
			format: 'umd',
		},
		external: Object.keys(globals),
		plugins: [
			nodeResolve(),
			babel(getBabelOptions({ useESModules: true })),
			replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
			terser(),
		],
	},
];
