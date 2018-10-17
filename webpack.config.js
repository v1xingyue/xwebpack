/// https://www.webpackjs.com/guides/
//
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

module.exports = {
  //mode:'production'
  entry: {
      index:'./src/index.js',
      login:'./src/login.js' 
  },
  output: {
    path: path.resolve(__dirname, '../public/pages/'),
    filename: 'static/[name].bundle.js'
  },
  resolve: { alias: { 'vue': 'vue/dist/vue.js' } },
  plugins:[
      
        new CleanWebpackPlugin(['../public/pages']),
        new VueLoaderPlugin(),

        new HtmlWebpackPlugin({
            title: 'Sina Hids Center ',
            template: 'pages/index.html',
            chunks:["index"],
            filename:"index.html",
            // 必须为body ,否则页面不渲染
            inject:"body"
        }) ,

        new HtmlWebpackPlugin({
            title: '登录到Sina Hids Center',
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
        ],
        exclude: '/node_modules/'
      },

      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
        exclude: '/node_modules/'
      },

      {
          test: /\.vue$/,
          loader: 'vue-loader',
          exclude: '/node_modules/'
      },

      {
           test: /\.js$/,
           exclude: /(node_modules|bower_components)/,
           use: {
             loader: 'babel-loader',
             options: {
               plugins: [require('babel-plugin-transform-object-rest-spread')]
             }
           }
      }

     
   ]
 },

  // 以下是dev配置:
  //devtool: 'inline-source-map',
  //devServer: {
  //   contentBase: '../public/pages/',
  //   historyApiFallback: true
  //},

};
