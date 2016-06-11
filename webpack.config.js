var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

module.exports = {
	entry: {
			path: './main.js'
	},
	output: {
		filename: 'scripts.js'
	},
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
    includePaths: [path.resolve(__dirname, "./finished")]
  },
	resolve: {
		extentions: ['', '.js', '.jsx']
	}
};