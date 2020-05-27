// console.log('gggg');
import './a.css';
import './index.less'
import "@babel/polyfill";
// babel ->分析依赖 ->AST(抽象语法树) -> 通过语法转换规则 装换代码 生成代码

const arr = [new Promise(()=>{})];

arr.map(item=>{
    console.log(item);
})
