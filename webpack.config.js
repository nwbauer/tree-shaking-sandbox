const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MinifyPlugin = require('babel-minify-webpack-plugin');
const path = require('path');

module.exports = (env={}) => {

  console.log('webpack vars=', env);

  plugins = [
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'./index.html',
    }),
    new MinifyPlugin({}, {
      sourceMap:true,
    }),
  ];

  if(env.analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: 'js/[name].js?[chunkhash:20]',
      path: path.resolve(__dirname, 'build')
    },
    devtool: 'source-map',
    devServer: {
      contentBase: './build'
    },
    plugins:plugins
  }

}
