const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map', 
  plugins: [
    new DotEnv(),
    new CleanWebpackPlugin({
      verbose: true
    }),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      title: 'open-quest',
      template: './src/index.html',
      inject: 'body',
      favicon: './src/assets/images/icon.png'
    })
  ],
  module: {

    rules: [
      {
        test: /\.(gif|png|avif|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
      
      {
        
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
          ]
        }
      ]
    }
};