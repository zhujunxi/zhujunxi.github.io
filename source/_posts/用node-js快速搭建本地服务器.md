---
title: 用node.js快速搭建本地服务器
date: 2017-12-01 13:38:26
categories: [前端开发]
tags: [node.js]
---

> 利用node.js中的http-server插件，快速构建本地服务环境，便于在本地实时查看web开发项目

### 一：安装node.js

[node.js官网](https://nodejs.org) 

*推荐下载稳定版就好，不用追新去下载最新版，以免出现不必要的问题*

### 二：安装http-server的依赖包
*用管理员命令打开命令窗口，本文以windows下的CMD命令窗口为例：*

#### 新建项目目录
```
md demo && cd demo
```
#### 初始化项目
```
npm init
```
然后会让你给项目命名和项目描述等

#### 全局安装`http-server`依赖
```
npm install http-server -g  //全局安装`http-server`依赖
```
#### 添加http-server到项目依赖
```
npm install http-server --save-dev
```

### 三：添加服务启动命令

完成`npm init`初始化项目后，目录下会生成`package.json`配置文件，在其中添加一条`script`命令

```json
"scripts": {
   "start": "http-server ./dist -p 8089 -o"
 }
```
>其中：
>    http-server    =>   启动http服务
>   ./dist         =>   项目所在目录，如果在根目录则不用填写此项
>   -p 8089        =>   设置项目端口到8089
>   -o             =>   自动在浏览器打开项目

更多配置参数详见 ：   

[http-srever文档](https://www.npmjs.com/package/http-server)

### 四：启动项目

#### 放入项目文件

首先把网站文件放在配置的./dist目录下 （启动文件默认为index.html,可以参照文档自行配置）

#### 输入启动命令
```
npm run start
```
浏览器会自动打开项目。默认地址为localhost:8089

> 局域网访问，需要将将localhost替换为本机IP即可
