---
title: javascript项目开发规范
date: 2017-12-06 20:28:12
categories: [前端开发]
tags: [javascript]
---
>总结一下个人在开发及review同事代码的过程中遇到的因为一些项目规范带来的问题及认为比较好的解决方法; 由于个人经验和认知水平有限,下面仅代表我的个人观念,欢迎各位大佬多给我提建议;

### readme的使用

因为一个项目往往需要很多人一起协助开发,还有可能会不断有新手接手项目,所以readme里面一定要仅可能多的信息

- 项目启动命令
- 代码规范
- Commit Message 编写规范
- 命名: class命名,变量命名,函数命名,组件命名等
- 组件
- 目录结构
- 常遇到的问题及解决方案

*也可以加一些项目中遇到的设计到的文档链接*

### 代码规范

##### Commit Message 编写规范

编写Commit Message需要遵循一定的范式，内容应该清晰明了，指明本次提交的目的，便于日后追踪问题。

```
feat: 新功能
fix: 修补bug
docs: 文档
style: 格式(不影响代码运行的变动)
refactor: 重构
test: 添加测试
chore: 构建过程或辅助工具的变动
```


### 参考

[class如何命名更规范](https://www.cnblogs.com/allenc/p/5178119.html)

[Commit Message 编写指南](https://blog.suisuijiang.com/git-commit-written-guide/)


#### 转载

转载自 [funnycoderstar](http://wangyaxing.top/2017/12/04/2017-12-04-%E9%A1%B9%E7%9B%AE%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83/)