const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
  },
  mode: 'development',
  devServer: {
    static: './dist',
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'shell',
        remotes: {
          app1: 'app1@http://localhost:3001/remoteEntry.js',
          app2: 'app2@http://localhost:3002/remoteEntry.js',
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
        },
      }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
