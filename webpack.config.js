const path = require('path');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');



module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,

  },

  /** 
   * Old webpack
   */
  // module: {
  //     loaders: {
  //         test: /.js$/,
  //         exclude: /node_modules/,
  //         loader: 'babel-loader'
  //     }
  // }
  /**
   * New webpack
   * see https://webpack.js.org/loaders/babel-loader/
   */
  // module: {
  //     rules: [
  //       {
  //         test: /\.m?js$/,
  //         exclude: /(node_modules|bower_components)/,
  //         use: {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: ['@babel/preset-env']
  //           }
  //         }
  //       }
  //     ]
  //   }

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        // options: { preset: ['env'] }

      },
      // { test: /\.js$/, use: 'babel-loader' },
      // { test: /\.jsx$/, use: 'babel-loader' }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      proxy: 'http://localhost:3000/',
    }),
  ]
};