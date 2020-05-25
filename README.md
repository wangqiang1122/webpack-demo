# webpack-demo
webpack-demo

spa单页面应用 mpa 多页面应用

SEO 搜索引擎优化，SEM搜索引擎营销 = 网站排名，引流


网站引流 提高排名 keywords是关键字搜索 搜索引擎有关键词排名
title 和 description标题和描述
```
    <title>Document</title>
    <meta name="description" content="ddada">
    <meta name="keywords" content="dasda">
    <!---内容主体 一定要和关键词紧密相关--->
    <!--- 会有质量评审 有没有一些非法seo优化 -->
    <!---  得出一个网站pr值--->
```
Hash chunkHash contentHash
Hash: wepack 创建时产生的  只要创建webpack 就会变 (不利于加载优化 有可能会不会改变js和css的情况 如果hash不同还会导致js文件会重新下载，用户缓存失效) 
chunkHash：chunkhash和hash不一样，它根据不同的入口文件(Entry)进行依赖文件解析、构建对应的chunk，生成对应的哈希值。我们在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
contentHash：针对js内容改变了 生成的hash值 如果内容没有变化 contentHash不变 (针对csss优化用contentHash)

plugins

plugin可以在webpack运行到莫哥阶段的时候，帮你做一些事情，类似生命周期的概念扩展插件，在webpack构建流程的特定时机注入扩展逻辑来改变结果或做你想要的事情

html-webpack-plugin 使用的是ejs模版引擎 

### CleanWebpackPlugin 清空dist文件夹的内容

### 把css提取成独立文件的 mini-css-extract-plugin

## sourcemap 源码的和打包之后代码的映射关系

* 是否开启sourcemap devtool在package.json配置里  在dev默认开启*
`
 eval 速度最快，使用eval包裹模块代码
 sourcemap：产生.map文件
 cheap：较快不包含列表信息
 module: 第三方模块，包含loader的sourcemap(比如jsx to js babel的spurcemap)
 inline: 将.map作为dataURL嵌入，不单独生成.map文件 
`
```
推荐配置：
devtoll: 'cheap-module-eval-sourcemap-map' //开发黄精配置
devtool: 'cheap-module-sourcemap-map' // 线上生产环境配置
```