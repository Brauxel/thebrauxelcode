const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// Try the environment variable, otherwise use root
//const ASSET_PATH = process.env.ASSET_PATH || 'http://webpack-testing.test/';

module.exports = (env, argv) => {
	if( argv.mode == 'development' ) {
		console.log('you\'re in dev mode');
		return devConfig;
	}

	if( argv.mode == 'production' ) {
		console.log('you\'re in prod mode');
		return prodConfig;
	}
};

var devConfig = {
  	mode: 'development', //Optional, defaults to production, passed via package.json
    devtool: 'source-map',
    devServer: {
      open: true,
      https: true
    },
  	module: {
  		rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        },
  			{
  				test: /\.s?css$/,
  				use: [
  					{ loader: 'style-loader' },
  					{
  						loader: 'css-loader',
  						options: {
                sourceMap: true
  						}
  					},
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              } 
            }
  				]
  			},
        {
          test: /\.(woff|woff2|eot|ttf)$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]"
          }
        },
        {
          test: /\.(png|jpg|gif|svg|liquid)$/i,
          use: "url-loader"
        }                    
  		]
  	},
    optimization: {
      minimizer: [
        new UglifyJSPlugin({
          parallel: true, 
          sourceMap: true,
          exclude: /node_modules/
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    },
  	plugins: [
  		new HtmlWebpackPlugin({ template: './src/index.html' })
  	]	
}

var prodConfig = {
    // mode: 'development', //Optional, defaults to production, passed via package.json
    // devServer: {
    //   open: true,
    //   https: true
    // },
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }          
        },
        { 
          test: /\.s?css$/,
          use: [            
            { loader: MiniCssExtractPlugin.loader },
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            },
            { loader: 'sass-loader' }
          ]
        }
      ]
    },
    optimization: {
      //minimize: true, // This is set by default in production
      minimizer: [
        new UglifyJSPlugin({
          exclude: /node_modules/
        }),
        new OptimizeCSSAssetsPlugin({})
      ]      
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ] 
}