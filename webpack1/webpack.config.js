const path = require('path');

module.exports = {
    entry: {
      //  path: [],// 两个入口文件用数组
      //  path: path.resolve(__dirname,'./src/index.js')
      path: {
         main: './src/index.js',
         other: './src/other.js'
      },
    },
    output: {
       // 需要绝对路径 找的快
       path: path.resolve(__dirname,'./dist'),
      //  filename: 'main.js',
      filename: "[name].js"
    },
    mode: 'production', // none  development 开发模式
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
            use:[{
               loader: "style-loader",
               options: {

               }
            },
            {
               loader: 'css-loader',
               options: {}
            },'postcss-loader',
            {
               loader: 'less-loader',
               options: {}
            }]
         },
      ],
    }
}