const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

console.log('here');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new CopyPlugin({
      patterns: [
        {
          from: './public/mockServiceWorker.js',
          to: './mockServiceWorker.js',
        },
      ],
    }),
  ],
  devServer: {
    historyApiFallback: true, // react router
    port: 3000,
    static: './dist',
    liveReload: true,
    open: true,
    proxy: {
      '/api/': {
        target: 'http://localhost:3095',
        changeOrigin: true,
      },
    },
  },
});
