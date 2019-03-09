---
title: webpack配置基础开发环境
date: 2018-03-21 15:12:10
categories: [前端开发]
tags: [webpack]
---

> webpack作为一个前端打包工具，可以将js,css,图片,字体等资源压缩打包，便于模块化的统一管理。极大的减少前端工作的工作量。

#### 依据以下几个需求，来构建一个webpack配置环境

- 支持less/stylus等预处理器
- ES6的支持,babel配置
- js文件压缩
- 生成source-map
- css与js文件分离
- 图片与字体资源压缩优化
- 缓存处理（添加hash值）
- 本地开发服务环境的启动，并支持自刷新与热更新
- 开发与生产环境分别配置
- 支持vue-loader

---

### 一：创建文件

1:初始化
```bash
md webpack-learn && cd webpack-learn

npm init

npm i -D webpack@3.11.0

```
2:创建目录结构
```bash
src  # 开发目录
├── src  
│   ├── index.html       # js
│   ├── main.js       # js
│   ├── js
│   │   └── Greeter.js
|   ├── stylus
│   |   ├── base.styl
|   |   └── style.styl
|   └── image
|       └── logo.png
├── dist  
│   ├── index.html      
│   └── static
│       ├── css
│       ├── img
│       ├── js
|       └── favicon.ico
└── webpack.config.js 
```
3:创建webpack.config.js文件
```javascript
// webpack.config.js
module.exports = {
    entry:__dirname + '/src/main.js', // 入口
    output:{
        filename:'app.[hash].js',  
        path:__dirname + '/dist'      // 输出目录
    }
}
```
4:运行

```bash
webpack  // 或者添加script命令 => "dev":"webpack"
```

### 二：模板插入

1: 安装html-webpack-plugin插件
```
npm i -D html-webpack-plugin
```
2:引入并添加到plugins
```javascript
// webpack.config.js
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:__dirname + '/src/main.js',
    output:{
        filename:'app.[hash].js',
        path:__dirname + '/dist'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}
```

> 此时运行webpack命令，即可在/dist目录下生产打包文件

### 三：CSS预处理器支持，以stylu为例
1: 处理CSS文件
```
npm i -D style-loader css-loader
```
2:新增loader

```javacript
module:{
    rules:[
        {
            test:/\.css$/,
            loader:'style-loader!css-loader',
            exclude:/node_modules/
        }
    ]
}
```
> exclude和include可以限定目录范围

3:在main.js下引入的css文件就可以编译成功了
```javascript
// main.js
import './css/style.css'

```
4:安装stylus  stylus-loader 并新增loader
```javacript
module:{
    rules:[
        {
            test:/\.styl$/,
            loader:'style-loader!css-loader!stylus-loader'
        }
    ]
}
```
即可识别.styl的文件

### 四：清除打包文件夹多余的文件


### 五：ES6的支持,babel配置
>通常我们需要把采用 ES6 编写的代码转换成目前已经支持良好的 ES5 代码，这包含2件事：

- 把新的 ES6 语法用 ES5 实现，例如 ES6 的 class 语法用 ES5 的 prototype 实现。

- 给新的 API 注入 polyfill ，例如使用新的 fetch API 时注入对应的 polyfill 后才能让低端浏览器正常运行。


1:安装依赖
```bash
# Webpack 接入 Babel 必须依赖的模块
npm i -D babel-core babel-loader 

# 根据你的需求选择不同的 Plugins 或 Presets
npm i -D babel-preset-env

# babel-plugin-transform-runtime 是 Babel 官方提供的一个插件，作用是减少冗余代码。
npm i -D babel-plugin-transform-runtime
```
2: 新建`.babellrc`文件，编译时会自动读取此处的配置项
```json
{
  "presets": [
    [
      "env",{
        "modules": false,
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        }
      }
    ]
  ],
  "plugins": ["transform-runtime"]
}
```
3:新增loader
```javascript
rules: [
    {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
    },
]
```
### 六：文件压缩处理

1:js压缩
    
```bash
# 安装 uglifyjs-webpack-plugin
npm i -D uglifyjs-webpack-plugin
```
plugins添加
```
// http://www.css88.com/doc/webpack2/plugins/uglifyjs-webpack-plugin/
new UglifyJSPlugin({

})
```

2:图片、字体、音视频的处理
```bash
# 安装 url-loader  file-loader
npm i -D url-loader  file-loader
```
loader添加
```
{
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    loader: 'url-loader',
    options: {
        limit: 1024 * 30,    // 限制30kb
        name:'img/[name].[hash:7].[ext]',
        fallback: 'file-loader' 
    }
}
```

## 未完待续...

## 参考文章

- [ECMAScript 6 入门-阮一峰](http://es6.ruanyifeng.com/)
- [入门 Webpack，看这篇就够了](https://www.jianshu.com/p/42e11515c10f)
- [深入浅出 Webpack](http://webpack.wuhaolin.cn/)
- [webpack自动生成项目中的HTML文件](http://blog.csdn.net/haochangdi123/article/details/78316211?locationNum=4&fps=1)
