---
title: 车商通SCRM重构项目规划[wechat.scrm.public]
date: 2017-12-13 21:09:54
categories: [前端开发]
tags: [vue,微信开发]
---

### 开发环境启动步骤

``` bash

# 安装项目依赖
npm install
# 启动服务并开启热更新 ，服务地址：localhost:8080
npm run dev

```
### 生产打包
``` bash
# 构建webpack打包压缩 [打包在/dist]
npm run build

# 查看打包报告
npm run build --report
```

### 技术文档

- 前端框架：[vue2](https://cn.vuejs.org/v2/guide/)

- UI框架： [YDUI](http://vue.ydui.org/docs/#/quickstart)

- 路由管理：[vue-router](https://router.vuejs.org/)

- 状态管理：[vuex](https://vuex.vuejs.org/)

- 模块打包工具：[webpack3](https://webpack.js.org/) __  [中文文档](http://www.css88.com/doc/webpack2/guides/development/)

### 项目结构


```bash
dist # 打包目录
|
src  # 开发目录
├── index.html
├── main.js    # 主配置
├── App.vue    # 入口布局
├── assets     # 静态资源
│   ├── image
│   └── stylus
│       ├── base.styl         # 基础样式与YDUI主题色修改
│       ├── icon.styl         # 项目地址icon
│       ├── variable.styl     # 项目主题色配置
│       └── index.styl
│
├── config     # 配置文件 (待优化)
│   ├── api       # ajax相关
│   ├── utils     # 公共方法
│   ├── axios.js  # axios
│   └── env.js    # 开发环境配置
│
├── components
│   └── ...# 公共组件
│
├── pages
│   ├── buy       # 买车模块
│   │   ├── index
│   │   │    └── index.vue 买车主页
│   │   └── other
│   │
│   ├── keep      # 养车模块
│   ├── discovery # 发现模块
│   └── common    # 公共页面
│
├── router
│   ├── index       # 路由配置
│   ├── buy         # 买车模块路由
│   ├── keep        # 养车模块路由
│   ├── discovery   # 发现模块路由
│   └── common      # 公共页面路由
│
└── store       #vuex配置
    ├── index.js          # 组装模块并导出store
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        └── ...           # 各页面vuex配置

```
### Commit Message 编写规范

```
feat: 新功能
fix: 修补bug
docs: 文档
style: 格式(不影响代码运行的变动)
refactor: 重构
test: 添加测试
chore: 构建过程或辅助工具的变动

```

### edit规范配置文件

*根目录.editorconfig文件*
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

```

### 注意事项

1. 待添加...

