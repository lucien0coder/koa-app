var webpack = require('webpack')

module.exports = {
	entry:'./entry.js',
	output:{
		path: __dirname,
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{test:/\.css$/, loader:'style-loader!css-loader'}
		]
	},
	plugins:[
		new webpack.BannerPlugin('this make up by lucien')
	]
}

