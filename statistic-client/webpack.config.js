module.exports = {
	entry: "./src/app/app.js",
	module: {
		loaders: [
		{ test: /\.js$/, include: new RegExp('app|bower_components'), loader: 'babel-loader?optional=es7.classProperties'}
		]
	},
	output:{
		filename: './build/app.js',
		sourceMapFilename: "[file].map?hash=[hash]"
	},
	devtool: 'source-map',
	resolve: {
    	extensions: ['', '.js'] 
  	}
}