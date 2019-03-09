---
title: 自用VSCode插件合集
date: 2017-12-05 19:06:23
categories: [前端开发]
tags: [IDE]
---
> 最近转投VSCode阵营，自带的git diff功能很是实用，配合自带的terminal效率翻倍，比Atom功能完整,比webStrom启动速度快，再装上一些实用插件，简直... 不多夸了，记录下我用了哪些插件和基本配置

### 用户设置
```javascript
{
    //字号与自动换行
    "editor.fontSize": 16,
    "editor.wordWrap": "on", 

    // file-header插件的配置
    "fileheader.Author": "junxi",
    "fileheader.LastModifiedBy": "junxi",
}
```

### 主题配置

- Atom One Dark

    Atom的自带主题，让我一眼就迷上的配色主题，很现代的配色，没错，形容词就是很现代 

- One Dark Pro
    新版Atom主题


### 效率插件

##### 自动补全
- Vetur

    vue官方推荐的代码高亮提示插件;

- Path Intellisense

    路径补全插件;

- Auto Close Tag

    适用于 JSX、Vue、HTML，在打开标签并且键入 </ 的时候，能自动补全要闭合的标签;

- NPM Intellisense

    NPM 依赖补全，在你引入任何 node_modules 里面的依赖包时提供智能提示和自动完成；

##### 功能增强
- vscode-fileheader

    在文件头部自动生成文件注释，如下


```javascript
/*
* @Author: junxi 
* @Date: 2017-12-05 19:20:25 
 * @Last Modified by: junxi
 * @Last Modified time: 2017-12-05 19:45:51
*/
```

>使用生成快捷键 `Ctrl`+`Ait`+`i`


*需要在用户设置中添加一下配置*
    
```javascript
{
    "fileheader.Author": "Name",
    "fileheader.LastModifiedBy": "Name",
}
```

- Align

    自动代码对齐，强迫症福音

>快捷键`Ctrl`+`Alt`+`A`

- CSS Peek 

    追踪至样式表中 CSS 类和 ids 定义的地方。当你在 HTML 文件中右键单击选择器时，选择“ Go to Definition 和 Peek definition ”选项，它便会给你发送样式设置的 CSS 代码。
    


### 美化插件

- background

    让你拥有深情脉脉看你敲代码的萌妹子
    *安装可能会提示界面报错，忽略即可，是插件修改了VSCode内部文件导致*
    
- Bracket Pair Colorizer

    让括号拥有独立的颜色，易于区分。可以配合任意主题使用。


*不断添加中...*

