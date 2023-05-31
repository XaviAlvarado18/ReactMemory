const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'cartas/',
              publicPath: 'cartas/'
            },
          },
        ],
      },
    ],
  },
};