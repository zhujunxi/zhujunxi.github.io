---
title: 'javascript小技巧'
date: 2018-01-08 19:50:13
categories: [前端开发]
tags: [javascript]
---

### 强制转换成数字类型
利用符号进行的类型转换,转换成数字类型
```javascript
~~true == 1
~~false == 0
~~"" == 0
~~[] == 0
~~undefined ==0
~~!undefined == 1
~~null == 0
~~!null == 1
```
