const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
	   loadTest: './src/scriptLoadTest.js',
	},
	output: {
	   path: path.resolve(__dirname, 'dist'),
	   libraryTarget: 'commonjs',
	   filename: 'scriptLoadTest.bundle.js',
	},
	module: {
	   rules: [{ test: /\.js$/, use: 'babel-loader'}],
	},
	target: 'web',
	externals: /k6(\/.*)?/,
};