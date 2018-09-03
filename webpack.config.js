/// https://www.webpackjs.com/guides/
//
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode:'production'
  ,entry: {
      index:'./src/index.js',
      login:'./src/login.js' 
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].bundle.js'
  },
  plugins:[

        new CleanWebpackPlugin(['dist']),

        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: 'pages/index.html',
            chunks:["index"],
            filename:"index.html",
            inject:"head"
        }) ,

        new HtmlWebpackPlugin({
            title: 'Login Page ',
            template:'pages/login.html',
            filename:"login.html",
            chunks:["login"],
            inject:"head"
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
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  // 以下是dev配置:
  devtool: 'inline-source-map',
  devServer: {
     contentBase: './dist'
  },

};
