const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash:8].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: 'postcss-loader',
              options: { plugins: [require('autoprefixer')()] }
            }
          ]
        })
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: '[name].[hash:8].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      inject: true,
      template: 'public/index.html'
    }),
    new ExtractTextPlugin('styles.css'),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en)$/)
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './build'),
    historyApiFallback: true,
    inline: true,
    overlay: { errors: true },
    port: 3000,
    proxy: {
      '/api': 'http://localhost:4000',
      '/image': 'http://localhost:4000'
    }
  },
  devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'cheap-module-source-map';
  config.plugins.push(
    new CleanWebpackPlugin(['build/*.*']),
    new CopyWebpackPlugin(
      [{ from: 'public/print-to-resist-fb.png' }],
      { copyUnmodified: true }
    )
  );
}

module.exports = config;
