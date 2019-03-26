---
title: CentOS 安装Koa2
date: 2019-03-26 09:30:56
tags:
---

## 安装Node.js

在终端输入命令
```bash
curl --silent --location https://rpm.nodesource.com/setup_8.x | sudo bash -
yum -y install nodejs
```

安装完成后可以使用以下命令检查是否安装成功
```bash
node -v
```

## 安装Koa2

### 创建一个工作目录
```bash
mkdir -p /data/koa/koa-sample
```
进入此工作目录
```bash
cd /data/koa/koa-sample
```

### 初始化项目
```bash
npm init
```

### 安装Koa

安装Koa2 并保存在依赖中
```bash
npm i koa -S
```

## 完成 hello world 案例

### 创建app.js文件，并进入编辑状态
```bash
cat >> app.js
```
### 输入以下内容， `Ctrl` + `D` 保存退出
```bash
const Koa = require('koa')
const app = new Koa()

app.use( ctx => {
    ctx.body = "Hello World!"
})

app.listen(3000)
```

### 运行app.js
```bash
node app
```
就可以在`3000`端口访问站点了

## Koa应用生成器

通过应用生成器工具koa可以快速创建一个应用的骨架

### 安装koa应用生成器

### 安装
```bash
npm i  -g koa-generator
```

### 创建工作目录

```bash
cd /data/koa
koa2 myapp
```

### 启动项目

```bash

cd /data/koa/myapp
npm install
npm start
```

安装启动成功就开始了万里长征的第一步了


![koa2安装成功](https://blog-1253306634.cos.ap-guangzhou.myqcloud.com/koa2%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F.png?q-sign-algorithm=sha1&q-ak=AKIDW2m3DJI8328Y3MjcWZ9PlOeqWEy5IEG7&q-sign-time=1553565763;1553567563&q-key-time=1553565763;1553567563&q-header-list=&q-url-param-list=&q-signature=425e1ee6f7160dee2427c96eb4c32a23760ca563&x-cos-security-token=4cac5a3434501fe1ccbb40f2e0bcbfc9c0b37c5410001)


