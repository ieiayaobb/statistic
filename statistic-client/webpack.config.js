var path = require('path')

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
    	extensions: ['', '.js'] ,
    	alias:{
    		echarts$: path.join(__dirname, "./bower_components/echarts/src/echarts.js"),
            echarts: path.join(__dirname, "./bower_components/echarts/src"),
            zrender$: path.join(__dirname, "./bower_components/zrender/src/zrender.js"),
            zrender: path.join(__dirname, "./bower_components/zrender/src")
    	}
  	}
}