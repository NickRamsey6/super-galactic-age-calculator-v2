const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

    module.exports = {
      entry: './src/main.js',
      output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
      },
      plugins: [
          new CleanWebpackPlugin(['dist']),
          new HtmlWebpackPlugin({
           title: 'Your Page Name',
           template: './src/index.html',
           inject: 'body'
           })
         ],
      module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "eslint-loader"
          },
          {
            test: /\.js$/,
            exclude: [
              /node_modules/,
              /spec/
            ],
            loader: "babel-loader",
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    };
