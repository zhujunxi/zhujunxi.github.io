---
title: 使用webpack做项目版本管理
date: 2017-11-30 13:41:13
categories: [前端开发]
tags: [vue,webpack]
---

> 最近公司在做`vue-cli`构建的一个webApp项目，由于更新比较频繁，所以想到在每次用`webpack`打包的时候生成一个打包标记，相当于一个版本号，以供测试清楚当前的版本信息。

### 一：生成打包时间

1.在`config/index.js`头部定义`version`。

```javascript
let nowDate = new Date();
let version = `1.${nowDate.getMonth()+1}.${nowDate.getDate()}${nowDate.getHours()}`;
//我是按照打包时间生成的版本号，具体想项目有不同的版本号规则
```
2.将`version`挂载到`env`环境变量下，这样项目内就可以通过`process.env`调用版本信息

```javascript
//通过Object.assign(),将{version:version}插入env对象
module.exports = {
  build: {
    //env:require('./prod.env'),
    env: Object.assign(
          {VERSION:JSON.stringify(version)},
          require('./prod.env')
        ),
  }
} 
```
3.调用version
  项目中使用`process.env.VERSION`可以获取当前版本信息

### 二：将`version`关联到package.josn

1.将`version`通过`config/index`暴露出去，供打包过程中使用

```javascript
module.exports = {
    build: {...},
    dev:   {...},
    version:version   //新增项
}
```
2.在`webpack.prod.conf.js`中编写`webpack`插件

```javascript
//首先引入`fs`模块
var fs = require('fs')  //fs模块是`node.js`中读写文件的模块
```


```javascript
//编写简单的webpack插件，去读取并修改package.json文件内容
plugins: [
  function() {
    // 修改package.json中的版本号
    this.plugin('done', function() {
      const pkgPath = path.join(__dirname, '/../package.json');
      let pkg = fs.readFileSync(pkgPath);
      pkg = JSON.parse(pkg);
      pkg.version = config.version;
      fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
    });
  }
]
```
**现在执行打包任务，如`npm run build`就可以生成新的版本号，并写入`package.json`中，项目中也可以使用`process.env.VERSION`进行调用了**

### 三：打包完毕，在控制台输出当前版本号
打包完毕的回调执行在`build/build.js`中,可以通过`config.version`获取版本信息，在完成打包输出控制台，便于开发者查看

以下我定义的输出格式：
```javascript
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.yellow('> 正式环境项目打包完毕 ヽ(^_^)ﾉ  版本：' + config.version))
  })
})
```
输出样式如下：
```
  正式环境项目打包完毕 ヽ(^_^)ﾉ  版本：1.11.3015
```

### 其它


