const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 
// 把css文件单独拎出来
const miniCssExtractPlugin =require('mini-css-extract-plugin');
// devserver
const webpackDevServer = require('webpack-dev-server');
module.exports = {
    entry: {
      //  path: [],// 两个入口文件用数组
      //  path: path.resolve(__dirname,'./src/index.js')
      // path: {
         path: path.resolve(__dirname,'./src/index.js')
         // main: './src/index.js',
         // other: './src/other.js'
      // },
    },
    output: {
       // 需要绝对路径 找的快
       path: path.resolve(__dirname,'./dist'),
      //  filename: 'main.js',
      filename: 'main_[chunkhash:8].js',
    },
    mode: 'development',    // none  development 开发模式
    module: {
      rules: [
         {
            test: /\.css?/i,
            use:['style-loader',{
               loader: 'css-loader',
               options: {}
            }]
         },
         {
            test: /\.less?/i,
            use:[miniCssExtractPlugin.loader,{
               loader: 'css-loader',
               options: {}
            },'postcss-loader',{
               loader: 'less-loader',
               options: {}
            }]
         },
      ],
    },
    devServer: {
      contentBase: './dist',
      port: "8081",
      open: true,
    },
    plugins: [
      new htmlWebpackPlugin({
         title: 'ahahaha',
         template: "./index.html",
         filename: "wang.html",
     }),
     new CleanWebpackPlugin(),
     new miniCssExtractPlugin({
        filename: "[name]_[chunkhash:8].css"
     }),
    ],
}