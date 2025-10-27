const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: './',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
 resolve: {
  extensions: ['.js', '.jsx'],
  fallback: {
    vm: false,
    util: false,
    url: false,
    fs: false,
    path: false,
    worker_threads: false,
  }
},
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename:"index.html",
      inject:true
    }),
      new HtmlWebpackPlugin({
      template: './public/home.html',
      filename:"home.html",
      inject:false
    }),
  ],
  devServer: {
    static: './dist',
    port: 3005,
    open: true,
    hot: true,
    historyApiFallback: true 
  },
};
