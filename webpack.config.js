const path=require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports={
	entry:[__dirname+'/src/app.js'],
	output:{
		path:path.join(__dirname,'build'),
		filename:'app.bundle.js',
		publicPath:'/build/',
	},
	devServer: {
	    contentBase: ".", 
	    historyApiFallback: true, 
	    inline: true, 
	    hot:true
    },
    devtool: 'source-map',
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude: [/node_modules/,],
		   },
		   {
				test:/\.css$/,
				include:path.join(__dirname,'src'),
				loader:'style-loader!css-loader'
		   }
		]
	},
	plugins: [
		new UglifyJSPlugin(),
   		new webpack.HotModuleReplacementPlugin(),
	    new webpack.DefinePlugin({
			'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV || 'development')
		})		
   ]
}