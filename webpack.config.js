const path = require('path');

const env = process.env.NODE_ENV;

module.exports = {
  mode: env || 'development',
  entry: './app/assets/js/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets/js')
  }
};