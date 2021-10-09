---
title: vue语法基础
date: 2019-11-14 09:16:37
tags:
  - vue
---
## 基础
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
v-html
```
v-html:有xss风险；覆盖子组件
```
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
1. event 参数，自定义参数
2. 事件修饰符，按键修饰符
3. 观察事件被绑定到哪里

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
1. 遍历对象(也可以 v-for)
2. key 的重要性
3. v-for 和 v-if 最好不要一起使用
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
### computed 和 watch

1. computed 有缓存，data 不变不会重新计算
2. watch 如何深度监听

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
## 高级特性

1. 自定义 v-model

- 常用 vue 颜色选择器

```js
<base-input v-model="valText"/>

//base-input.vue
Vue.component('base-input', {
  template: '<input :value="val" @input="$emit('change', $event.target.value)  type="text">',
  props: ["val"],
  model:{
    prop:'val',
    event:'change'
  }
});

//v-bind只能实现单向绑定
//v-model（v-bind+触发的input事件）实现双向绑定
```

2. $nextTick

```
异步渲染
data改变之后，dom不会立刻渲染
$nextTick会在dom渲染之后被触发，以获取最新的dom节点
页面渲染时会将data的修改做整合，多次data修改只会渲染一次

```

3. slot 插槽

- 基本使用
  子元素取代插槽位置
- 作用域插槽

```html
<!-- 父组件 -->
<scopeSlot>
  <template v-slot="slotProps"> {{slotProps.slotData.yyy}} </template>
</scopeSlot>

<!--scopeSlot  -->
<div>
  <slot :slotData="xxx"> {{xxx.yyy}} </slot>
</div>
```

- 具名插槽

```html
<div>
  <slot name="head"></slot>
  <slot name="foot"></slot>
</div>

<div>
  <template v-slot:head></template>
  <template v-slot:foot></template>
</div>
```

4. 动态异步组件

- 语法：`<component :is="component-name" />`
- 根据数据渲染不同组件
- 异步组件

```js
// import 按需加载
components: {
  FormDemo: () => import('../FormDemo.vue')
}
```
5. keep-alive
- 缓存组件
- 频繁操作，不需要重复渲染
- Vue常见性能优化
6. mixin
- 抽离公共逻辑
- 变量来源不明确;变量冲突风险；多对多，复杂度高

## 思考✨
##### 组件中的`data`为什么是一个函数
- 一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

##### `v-if` 和 `v-show`的区别
##### 为何 `v-for` 中用 `key`
##### 描述`Vue`组件的生命周期(有父子组件的情况)
```js
<template>
  <Index>
    <List/>
  </Index>
</template>
// 渲染顺序
`index created
 list created
 list mounted
 index mounted`

// 更新顺序
`index before update
 list before update
 list updated
 index updated`

// 卸载顺序

组件的调用顺序都是先父后子,渲染完成的顺序是先子后父。

组件的销毁操作是先父后子，销毁完成的顺序是先子后父。

加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount- >子mounted->父mounted

子组件更新过程
父beforeUpdate->子beforeUpdate->子updated->父updated

父组件更新过程
父 beforeUpdate -> 父 updated

销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
```
##### `Vue`组件间如何通讯
1. props 和$emit：父子组件通讯
2. 自定义事件：非父子组件

```
使用 $on(eventName) 监听事件
使用 $emit(eventName) 触发事件

// event-bus.js
import Vue from 'vue'
export const EventBus = new Vue()

// main.js
Vue.prototype.$EventBus = new Vue()

beforeDestory中解绑
EventBus.$off
```
##### 描述组件渲染和更新的过程
##### 双向绑定`v-model`的实现原理


##### 基于 Vue 设计一个购物车 (关注点：组件结构，vuex state 数据结构)


