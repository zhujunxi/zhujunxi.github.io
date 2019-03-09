---
title: ES6 Promise 总结
date: 2017-12-20 20:11:34
categories: [前端开发]
tags: [ES6, Promise]
---
> Promise是ES6新增的内置对象，可以将异步的操作流程化的表达。

### Promise基本语法

```javascript
    new Promise(funciotn (resolve, reject) {...} /* executor */ );
```
*参数*

- executor
    
    executor是一个带有`resolve`和`reject`两个参数的函数。
    `executor`函数在Promise构造函数执行时同步执行。`resolve`和`reject`函数被调用时，分别将promise的状态改为fulfilled（完成）或rejected（失败）。

### 创建Promise

*一般包裹在函数内调用*

```javascript
    // ajax示例
    function myAsyncFunction(url) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = () => resolve(xhr.responseText);
            xhr.onerror = () => reject(xhr.statusText);
            xhr.send();
        })
    }

    //调用方法
    myAsyncFunction()
    .then((response) => {
        //成功处理
        ... 
    })
    .catch((reason) => {
        //失败处理
        ... 
    })
```

### all方法

`all`方法提供了并行执行异步操作的能力，并且所有异步操作执行完后才执行回调

```javascript
    Promise
    .all([asyncFunc1(),asyncFunc2(),...])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {

    })
```

### race方法

`race`方法同`all`方法提供了并行执行异步操作的能力，但是执行回调是在最快的回调执行后就立即执行，不会等待别的异步函数


```javascript
    /*
    * 请 求图片超时的函数示例
    */ 
    
    // 请求某个图片资源
    function requestImg() {
        return new Promise((resolve, reject) => {
            var img = new Image();
            img.onload = () => {
                resolve(img)
            }
            img.src = 'xxxxxx';
        }) 
    }

    // 延时函数，用于给请求计时
    function timeout() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('图片请求超时')；
            }, 5000)
        })
    }


    Promise
    .race([requestImg(), timeout()])
    .then((results) => {function()
        console.log(results);
    })
    .catch((reason) => {
        console.log(reason);
    })

```

如果5s后图片还未请求成功，则timeout比requestImg快,那么执行`reject()`

### 其它

Promise还有一些语法糖`done`、`finally`、`success`、`fail`等



*以上demo未实际验证*
