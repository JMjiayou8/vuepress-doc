---
title: 基于vue-cli3实战基础
date: 2019-11-15 09:16:37
tags:
  - vue
---

本篇以快速上手为原则，介绍通过vue-cli创建一个基础项目的步骤。

<!--more-->
根据实际开发，做了这个[demo 代码](https://github.com/JMjiayou8/train-example/tree/master/vue-cli-example)，采用 vue-cli3 官方脚手架( 之前重构使用的 vue-cli2，直观区别是不需要关注 webpack 配置,以及框架目录结构的区别 ),接口请求使用 axios

```
# 前提：安装nodejs和git
- node: https://nodejs.org/en/download/
- git: https://git-scm.com/downloads

# 下载代码
git clone https://github.com/JMjiayou8/vue-example

# 安装依赖包
cd vue-example
npm install

# 安装淘宝镜像，可以加快安装依赖包的速度，后期使用cnpm isntall xxx
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install

# 启动项目
npm run serve

# 浏览器运行
http://localhost:8080/
```

### 上手开发

#### 工具

日常编辑器我使用的是[vscode](https://code.visualstudio.com/),谷歌浏览器安装[Vue Devtools](https://github.com/vuejs/vue-devtools#vue-devtools)插件

#### 从零安装

如果下载了 demo 可以跳过这一步，也可以根据以下步骤自己实现。

```

# 安装最新稳定版vue
npm install vue -g

# 安装vue-cli3
npm install -g @vue/cli

# 创建一个项目
# 会提示选择一个preset,第一次先选择default熟悉一下
vue create vue-example
cd vue-example

# 安装依赖(create时选择default则需要自己装)
# 可以利用官方Vue CLI插件安装一些包，使用vue add xxx，会调用插件的文件生成器自动生成一套文件，但是器很有可能更改你现有的文件内容。所以调用前最好提交本地代码。
# 或者直接npm install xxx;这样需要自己创建依赖的文件
# 安装淘宝镜像，可以加快安装依赖包的速度，后期直接使用cnpm isntall xxx
npm install -g cnpm --registry=https://registry.npm.taobao.org

vue add route 或者 cnpm install vue-router --save
vue add vuex 或者 cnpm install vuex --save
vue add element  或者 cnpm install element-ui --save

# 其它
cnpm install -D sass-loader node-sass //安装css预处理器sass

# 启动项目
npm run serve

```

#### 目录结构

一般开发过程中只需要在`src`目录下操作

```
<!--默认有下面四个文件-->
assets:资源文件夹，存放图片、css样式文件、字体文件等
components:自定义组件
App.vue：主页面
main.js: 页面js入口
<!--开发过程中按需增加-->
views:存放页面vue文件
apis:存放数据接口请求相关文件
route:存放路由文件 运行vue add router自动生成
store:存放store配置 运行vue add vuex自动生成
plugins:存放第三方插件，运行vue add element自动生成，后期可加入其它插件
...
```
`public`是静态资源目录，一般不太需要管，多数情况是把一些需要在根目录访问的文件多放置到它里面，打包后直接复制到dist中，不经过webpack处理

其余常用的多数是些配置文件
```
vue.config.js: 配置webpack
babel.config.js: 配置babel
...

```

#### 新建一个页面

demo 中的 pageA 大致罗列了基础语法的使用

```html
// 在views文件夹中新建一个pageA.vue
// template中只包含一级dom元素，不合理的如：<template><div>...</div><div>...</div></template>

<template>
  <div class="pageA">
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello pageA'
    }
  }
}
</script>

// router.js或者router/index.js新增路由配置
{
  path: '/pageA',
  name: 'pageA',
  component: () => import('@/views/pageA.vue')
},

// 浏览器访问http://localhost:8080/pageA查看实例
```

#### 新建一个组件

```html
# 在components中新建compA.vue
<template>
  <div class="compA">
    <p>父组件传递的props参数:{{msg}}</p>
    <button @click="emitData">点击按钮，将子组件属性值传递给父元素</button>
  </div>
</template>

<script>
  export default {
    name: 'compA',
    props: {
      msg: String
    },
    data() {
      return {
        comData: 'compAData'
      }
    },
    methods: {
      emitData() {
        let self = this
        self.$emit('getComAData', self.comData)
      }
    }
  }
</script>

# 在views/pageB.vue引入compA
<template>
  <div class="pageB">
    <p class="page-title">基础组件用法</p>
    <compA :msg="msg" @getComAData="getComADataFunc"></compA>
    <p>显示子组件传递的值：{{comData}}</p>
  </div>
</template>
<script>
  import compA from '@/components/compA'
  export default {
    components: { compA },
    data() {
      return {
        msg: 'hello pageB',
        comData: ''
      }
    },
    methods: {
      getComADataFunc(data) {
        this.comData = data
      }
    }
  }
</script>

组件间传值 父组件向子组件传值，一般在子组件中定义props接收即可。
子组件向父组件传值，一般在子组件中定义一个函数再使用$emit,再在父组件中定义函数接收。
# 浏览器访问http://localhost:8080/pageB查看实例
```

封装一个 form 表单组件样例

```
# src/components/SearchForm.vue
组件文件中对父元素传递的props进行整合

# src/views/formPage.vue
页面父元素中定义表单结构以及数据

# 浏览器访问http://localhost:8080/formPage查看实例
```

#### [使用 axios 访问 API](https://cn.vuejs.org/v2/cookbook/using-axios-to-consume-apis.html)

可以先了解一下[async/await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)

```javascript
// 安装axios
cnpm install axios --save

// main.js 配置 axios加入到vue原型链中
import axios from 'axios';
Vue.prototype.$axios = axios;


// 一般还会定义一个axios的配置文件config.js
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';//配置请求头
axios.defaults.baseURL = '';   //配置接口地址
```

```javascript
// src/views/axiosDemo.vue文件模拟请求数据渲染页面
// 请求数据函数
async getData () {
  let self = this;
  // promis写法,链式调用
  self.$axios.get('https://api.apiopen.top/musicRankings')
    .then((response) => {
      self.data = response.result || []
    }).catch(error => console.log(error))

  // 使用async/await语法,从上到下，顺序执行，就像写同步代码一样
  let response = await self.$axios.get('https://api.apiopen.top/musicRankings')
  self.data = response.result || []
},
// 浏览器访问 http://localhost:8080/axiosDemo 查看实例
```


### 额外补充

#### 使用 UI 组件库

- pc:[element-ui](https://element.eleme.io/#/)

```javascript
// 安装
npm install element-ui --save

// main.js
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {size: 'mini'})

// 浏览器访问http://localhost:8080/elementPage查看效果
// 引入框架自带组件、自封装组件
```

#### 路由[vue-router](https://router.vuejs.org/zh/)

```javascript
// 安装vue-router
vue add router

// main.js中会新增以下内容
import router from './router'
new Vue({
  ...
  router,
  render: h => h(App)
}).$mount('#app')

// 自动生成router.js

// App.vue定义router-view
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

```

#### 状态管理[vuex](https://vuex.vuejs.org/zh/):通俗一点讲，就是一个全局的数据管理

```javascript
// 安装vuex
vue add vuex

// main.js中会新增以下内容
import store from './store'
new Vue({
  ...
  store,
  render: h => h(App)
}).$mount('#app')

// 自动生成store.js

// 浏览器访问 http://localhost:8080/vuexPage 查看实例

```

#### [webpack](https://www.webpackjs.com/)

vue-cli3 脚手架中 webpack 的配置比较完善，日常不需要太关注。
可以新建`vue.config.js`文件进行额外配置。
```javascript
// vue.config.js
module.exports = {}
```


#### [scss](https://www.sass.hk/) :css预处理器

可以了解scss基础语法
```html
<div class="par">
  <div class="child"></div>
  <p class="pp">123</p>
</div>
```
```html
// scoped代表仅当前组件内有效
<style lang="scss" scoped>
  .par{
    font-size:14px;
    .child{
      border:1px solid #333;
    }
    .pp{
      color:#000;
    }
  }
</style>
```

