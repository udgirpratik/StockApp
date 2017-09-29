var HTMLWebPackPlugin = require('html-webpack-plugin');
var HTMLWebPackPluginConfig = new HTMLWebPackPlugin({
		template : __dirname + '/index.html',
		filename : 'index.html',
		inject : 'body'
});
module.exports = {
	entry: __dirname + '/index.js',
	module : {
		loaders : [{
			test : /\.js$/,
			exclude : /node_modules/,
			loader :  'babel-loader'
		}]
	},
	output : {
		filename : 'transformed.js',
		path : __dirname + '/build'
	},
	plugins : [HTMLWebPackPluginConfig]
}