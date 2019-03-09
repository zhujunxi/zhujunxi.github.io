---
title: VUE中的v-model探究
date: 2017-12-29 13:47:48
categories: [前端开发]
tags: [vue]
---

### v-model的作用

```html

<div id="app">
 <input v-model="poin">
  {{ poin }}
</div>

<script>
new Vue({
  el:'#app',
  data:{
    poin:'zqz'
  }
})

</script>
```
在input中输入,{{poin}}的值也会实时变化，以实现双向绑定

*实际上`v-model`是以下写法的语法糖*
```html
<input :value="poin" @input="poin = $event.target.value">
```


### 在组件中使用`v-model`



[[转载自] 你真的知道组件中的v-model吗？](http://www.cnblogs.com/zqzjs/p/6957310.html)



