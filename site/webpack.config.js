const path = require('path');
const HtmlWEbpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  devServer: {
    static: './dist',
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: '/node_modules',
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWEbpackPlugin({
      template: './index.html'
    })
  ],
  optimization: {
    runtimeChunk: 'single'
  }
}