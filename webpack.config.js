var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

module.exports = {
	entry: {
			path: path.resolve(__dirname, packageData.devJS),
	},
	output: {
		path: 'public',
		filename: packageData.main
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