---
title: vue语法基础
date: 2019-11-14 09:16:37
tags:
  - vue
---

本篇着重讲解vue基础语法。

<!--more-->
### 背景

在传统 web 开发中，我们搭建项目都以 html 结构为基础，需要操作 dom 元素然后通过 jquery 或者 js来添加各种交互功能，一旦项目改动或者项目工程较大，代码的修改将是复杂繁琐的。

vue 主要优点有两个：

1. 数据绑定：vue 会根据对应的元素，进行设置元素数据，通过输入框，以及 get 获取数据等多种方式进行数据的实时绑定，进行网页及应用的数据渲染
2. 组件式开发：通过 vue 的模块封装，它可以将一个 web 开发中设计的各种模块进行拆分，变成单独的组件，然后通过数据绑定，调用对应模版组件，同时传入参数，即可完成对整个项目的开发。
   我们大多数系统都是表单项繁多且内容需要根据用户的操作进行修改的，使用 vue 就可以不用像之前使用 jquery 那样频繁操作 dom 元素，关注数据变化，开发起来也更容易一些。

<i class="tips">前提</i>:已了解关于 HTML、CSS 和 JavaScript 的中级知识,同时对`es6`的语法有一定了解。



### 创建vue实例

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 Vue 实例开始的：

```javascript
var vm = new Vue({
  // 数据
  data(){
    return{}
  },
  //计算属性
  computed:{},
  //监控
  watch:{},
  // 生命周期函数
  created(){},
  mounted(){},
  destroyed(){},
  //页面函数集合
  methods:{}
})


```

### 声明式渲染

允许采用简洁的模板语法 &#123;&#123;&#125;&#125; 来声明式地将数据渲染进 DOM。数据和DOM是`响应式`的。

```html
<!-- html -->
<div id="app">
  {{ message }}
</div>
```
```javascript
//js
var app = new Vue({
  el: '#app',
  //data 对象中的所有的属性加入到 Vue 的响应式系统中。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
  data: {
    message: 'Hello World!'
  }
})
```

### 指令

v-bind:绑定属性，可以用于响应式地更新 HTML 特性。缩写为`:`

```html
<a v-bind:href="url">...</a>
<!-- 上下等同 -->
<a :href="url">...</a>
```
```javascript
//js
var app = new Vue({
  el: '#app',
  data: {
    url:'www.baidu.com'
  }
})
```

v-on:绑定函数,缩写为`@`

```html
<button v-on:click="clickHandle">v-on绑定事件</button>
<!-- 上下等同 -->
<button @click="clickHandle">@缩写</button>
```
```javascript
var app = new Vue({
  el: '#app',
  methods:{
    clickHandle:function(){
      alert('123')
    }
  }
})
```
v-show:根据表达式之真假值，切换元素的 display CSS 属性。

```html
<!-- html -->
<div id="app" v-show="showMsg">
  {{ message }}
</div>
```
```javascript
//js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    showMsg:false
  }
})
```
v-if:根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。

```html
<!-- html -->
<div id="app" v-if="showMsg">
  {{ message }}
</div>
```
```javascript
//js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    showMsg:false
  }
})
```

v-if\v-else-if\v-else:条件判断

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

```

v-for:遍历渲染
```html
<div v-for="item in items" :key="item.id">
  {{ item.text }}
</div>
```
```javascript
data(){
  return {
    items:[
      {id:1,text:'text1'},
      {id:2,text:'text2'},
      {id:3,text:'text3'}
    ]
  }
}

```
v-model:表单控件双向绑定：input、select、textarea、自定义组件
```html
<input v-model="inputText"/>
```
```javascript
data(){
  return {
    inputText:'default'
  }
}

```

### 生命周期


介绍常用的三个周期方法：

created()
- 在实例创建完成后被立即调用。$el 属性目前不可见。
- 一般使用场景：data初始赋值;服务端请求;路由参数解析

mounted()
- el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
- 一般需要dom节点的操作会在mounted进行，例如echarts绘制图表

beforeDestroy()
- 实例销毁之前调用。在这一步，实例仍然完全可用。
- 一般需要解绑dom绑定事件,清除页面定时器等。


### 常用API

`Vue.nextTick([callback,context])`:在修改数据之后立即使用这个方法，获取更新后的DOM。

```javascript
data(){
  return {
      message:'未更新'
  }
},
methods: {
  updateMessage: async function () {
    this.message = '已更新'
    console.log(this.$el.textContent) // => '未更新'
    await this.$nextTick()
    console.log(this.$el.textContent) // => '已更新'
  }
}
```


