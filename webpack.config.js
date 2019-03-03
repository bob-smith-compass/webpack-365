const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
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
          { test: /\.txt$/, use: 'babel-loader' }
        ]
      }
      
}