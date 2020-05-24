const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
       path: path.resolve(__dirname,'./src/index.js')
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
            use:['style-loader',{
               loader: 'css-loader',
               options: {}
            },'postcss-loader',{
               loader: 'less-loader',
               options: {}
            }]
         },
      ],
    },
    plugins: [
       new htmlWebpackPlugin({
           title: 'ahahaha',
           template: "./index.html",
           filename: "wang.html",
       }),
    ]
}