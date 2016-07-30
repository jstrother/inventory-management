var path = require('path');

var webpack = require('webpack');

var packageData = require('./package.json');

module.exports = {
	entry: {
			path: path.resolve(__dirname, packageData.devJS),
	},
	output: {
		path: './public',
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
					presets: ['es2015', 'react'],
					plugins: ['transform-class-properties']
				}
			},
			{
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
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