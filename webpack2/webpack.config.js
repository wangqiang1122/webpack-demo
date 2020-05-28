const path = require('path');

const htmlwebpackplugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
// 动态加载进去

// glob匹配路径用
const glob = require('glob')
const serMpa = ()=> {
    const entry = {};
    const htmlwebpackplugins = [];
    const output= {},
    //!分析入口
    const entryfiles = glob.sync(path.join(__dirname,"./src/*/*.js"));
    console.log(entryfiles)
    entryfiles.forEach((item)=>{
        const reg = /src\/[^]*\/[^]*\.jsx?$/;
        const flie = item.match(reg)[0];
        const entryKey = flie.match(/[A-Za-z]*\.js?/);
        const entryKeyNanme = entryKey[0].split('.')[0];
        entry[entryKeyNanme] = `./${flie}`;
        
        htmlwebpackplugins.push(new htmlwebpackplugin({
            template:  `src/${entryKeyNanme}/${entryKeyNanme}.html`,
            filename:   `${entryKeyNanme}.html`,
            chunks: [entryKeyNanme]
        }))
    });
    console.log(entry);
    console.log(htmlwebpackplugins);
    return {
        entry,
        htmlwebpackplugins,
    }
}

const {entry,htmlwebpackplugins} = serMpa();

module.exports = {
    entry : entry,
//    entry: {
//        "index": './src/index.js',
//        "list": './src/list.js',
//        "detail": './src/detail.js',
//    },
   output: {
       path: path.resolve(__dirname,'./dist/'),
       filename: '[name]_[hash:8].js',
   },
   mode: 'development',
   plugins: [
    // new htmlwebpackplugin({
    //     template: './src/index.html',
    //     filename: 'index.html',
    //     chunks: ['index']
    // }),
    // new htmlwebpackplugin({
    //     template: './src/index.html',
    //     filename: 'list.html',
    //     chunks: ['list']
    // }),
    // new htmlwebpackplugin({
    //     template: './src/index.html',
    //     filename: 'detail.html',
    //     chunks: ['detail']
    // }),
    ...htmlwebpackplugins,
    new CleanWebpackPlugin(),
   ],
};

