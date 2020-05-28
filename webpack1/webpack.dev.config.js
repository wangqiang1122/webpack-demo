const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 清空dist目录
// 把css文件单独拎出来
const miniCssExtractPlugin =require('mini-css-extract-plugin');
// devserver
const webpackDevServer = require('webpack-dev-server');
// 热更新 HMR
// const webpack = require("webpack");
// console.log(process.env);
module.exports = {
    entry: {
       main: path.resolve(__dirname,'./src/index.js')
    },
    output: {
       path: path.resolve(__dirname,'./dist'),
       filename: 'main_[chunkhash:8].js',
    },
    mode: 'development',
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
         {
            test: /\.js$/i,
            exclude: /node_module/, // 排除 不编译
            // include: '',  // 包含
            use: {
               loader: "babel-loader",
            }
         }
      ],
    },
    devServer: {
       contentBase: './dist/wang.html',
       port: "8084",
       open: true,
      //  hotOnly: true, // 规定不要帮助我刷新浏览器视口
      //  hot: true,
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
      //  new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: "cheap-module-eval-sourcemap-map",
}