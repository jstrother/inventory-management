var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

module.exports = {
	entry: {
			path: './index.jsx'
	},
	output: {
		filename: 'public/js/scripts.js'
	},
	watch: true,
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
		]
	},
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./public")]
  },
	resolve: {
		extentions: ['', '.js', '.jsx']
	}
};