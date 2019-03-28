---
title: Koa2 初体验
date: 2019-03-28 19:11:06
tags:
---

## 安装初始化

### 初始化

```bash
npm init -y
```

### 安装 koa2

```bash
npm i koa --save
```

### 在文件目录下新建一个 index.js

```javascript
const Koa = require("koa");
const app = new Koa();

app.use(async ctx => {
    ctx.body = "hello Koa2";
});

app.listen(3001);

console.info("success");
```

### 用 nodemon 运行

```javascript
nodemon index.js
```

运行成功后，在 localhost:3001 可以查看效果

![启动成功](https://blog-1253306634.cos.ap-guangzhou.myqcloud.com/start.png)

这样就启动成功了

## 在 Koa2 中使用 async

async 函数在 koa2 中大量使用，它很好的处理了异步的逻辑。下面一个简单的 demo

```javascript
const wait1 = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
            console.log("1s later");
        }, 1000);
    });
};

const wait2 = () => {
    return new Promise(resolve => {
        resolve();
    });
};
```

## 参考文档

1. [Koa2 初体验](https://www.jianshu.com/p/b988ce30bac3)
