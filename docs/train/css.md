---
title: css基础
date: 2019-11-06 09:37:37

tags:
  - css
---

本篇从基础入手

<!--more-->
#### 语法
> 定义

<b>css</b>：层叠样式表,定义如何显示 `HTML` 元素

> 语法
```
选择器 {
  属性1 : 值1;/*分号不可少*/
  属性2 : 值2;
}
```

#### 创建方式

> 外部样式表:`推荐`
```html
<link href="xxx.css" rel="stylesheet"/>
```
> 内部样式表
```html
<style>
  #box{
    width:100px;
  }
</style>
```
> 内联样式
```html
  <div id="box" style=" width:100px;"></div>
```
#### 选择器

> 摘选常见选择器

| 选择器 | 说明 | 备注 |
| - | - | - |
| <b>常用</b> |  |
| elem | 标签名 | p{...}<br>div{...} |
| #id | id属性 | `<div id="box"></div>`<br>#box{...} |
| .class | class属性 | `<div class="box"></div>`<br>.box{...} |
| div,p | 所有`div`元素和`p`元素 | |
| div p | 选择`div`元素内的所有`p`元素 | |
| div>p | 选择所有父级是 `div` 元素的 `p` 元素 | |
| div+p | 选择所有紧接着`div`元素之后的`p`元素 | |
|	div~p|选择`div`元素之后的每一个`p`元素
| <b>属性选择</b> |  |
| [target] | 所有带有target属性元素 | `<p target="xxx"></p>` |
| [target=xxx] | 所有使用target="xxx"的元素 | `<p target="xxx"></p>`|
| [target~=xxx] | 所有使用target包含"xxx"的元素 |`<p target="yyxxxzz"></p>` |
| [target^=xxx] | 所有使用target以"xxx"开头的元素 |`<p target="xxxyyy"></p>` |
| [target$=xxx] | 所有使用target以"xxx"结尾的元素 | `<p target="yyyxxx"></p>`|
| <b>伪类</b> |  |
| :before,:after | 在元素前后插入内容 |
| :link,:visited,:active,:hover | 超链接a元素不同状态 |
| :focus | 具有焦点的输入元素 |
| :disabled,:checked,:required ,:read-only| 设置了特地属性的元素 |

#### 基础实战
> 字体和文本

```html
<p>字体+文本</p>
<style>
p{
  /* 字体 */
  font-size:14px;
  font-weight:bold;  /* 字体加粗 */
  font-style:italic;/* 斜体 */
  font-family:"Times New Roman",Georgia,Serif;
  /* 文本 */
  color:#333;
  text-align:center;/* 文本居中 */
  text-decoration:underline;/* 修饰，下划线 */
  text-transform:uppercase;/* 转成大写*/
  text-indent:50px;/* 文本缩进*/
  line-height:20px;/* 行高 常用来设置垂直居中*/
}

em,i{
   font-style: normal;/*去除字体倾斜*/
}
</style>

```

> 常规

```css
span{
  font-weight:bolder;/*字体加粗*/
  font-style: italic;/*字体倾斜*/
}
em,i{
   font-style: normal;/*去除字体倾斜*/
}
```
> 超链接

```css
a{
  cursor:pointer;/*鼠标移上去有小手*/
  text-decoration:underline;/*下划线装饰*/
  text-decoration:none;/*去除下划线装饰*/
}
a:hover{
  opacity:.8;/*悬浮透明效果*/
}
```

> 多余展示省略号
```css
p{
  /*需要固定宽度*/
  width: 50px;
  /* 下面三句是固定搭配，缺一不可*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

> 盒子模型

![img](/images/box-model.gif?width=100)

总元素的实际宽度=width+padding+border+margin;

设置内外边距方向的顺序为顺时针:`上、右、下、左`
```css
{
  width:100px;
  height:50px;
  padding:5px 10px;/*上下：5px 左右10px*/
  border:1px solid #333;
  margin:10px;/*上下左右：10px */
}

```
此处拓展css3的`box-sizing`属性:
```css
{
  width：500px;
  box-sizing:border-box;/* 500px包含了content,padding,border*/
  box-sizing:content-box;/* 500px包含了contentr*/
}
/* 目前大部分的处理方式是全局设置 box-sizing:border-box; */
```

> 背景

`background`:background-color background-image background-repeat background-attachment background-position
```css
<div class="background">背景</div>
.background{
  width:200px;
  height:200px;
  background:#f1f1f1;/*只定义背景色*/
  background:url('xx') no-repeat center/cover;/*只定义背景图片*/
  background:#f1f1f1 url('xx') no-repeat center/cover;/*定义背景色+背景图片*/
}
```
#### 其它

##### 布局
> 显示 [display](https://www.runoob.com/cssref/pr-class-display.html)

了解display前，先对元素分一下类：块元素和内联元素。
1. `块元素`就是独占一行，元素前后都有换行符，常见有div,p,h1-h6等。语法为：`display:block`;
2. `内联元素`就是只有必要的宽度，不会强制换行，常见有span,a等。语法为：`display:inline`;
3. `行内块元素`,内联元素设置宽高无效，一般处理方式是设为行内块元素；块元素想不换行，也可以设为行内块元素。语法为：`display:inline-block`;

> 浮动 [float](https://www.runoob.com/cssref/pr-class-float.html)

使元素向左或向右移动，其周围的元素也会重新排列。
```css
.fl{
  float:left;
}
.fr{
  float:right;
}
```
浮动正常出现的问题是父元素高度塌陷。常规解决方案有两种。
一是浮动元素末尾添加一个带有 clear: both 属性的空 div 来闭合元素
二是父元素添加一个:after伪元素。一般情况下定义一个公共样式类 `clearfix`
```css
.clearfix:before,
.clearfix:after {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
```

> 定位 position

首先了解一下position属性的几个值的概念
`static`:默认
`relative`:相对定位元素的定位是相对其正常位置。经常被用来作为绝对定位元素的容器块。
`absolute`:对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于`<html>`;absolute 定位使元素的位置与文档流无关，因此不占据空间。
`fixed`:元素的位置相对于浏览器窗口是固定位置。

```css
/* 常用已知宽高的垂直居中方法 */
.par{
  position:relative;
}
.child{
  position:absolute;
  top:50%;
  left:50%;
  width:200px;
  height:100px;
  margin-left:-100px;
  margin-top:-50px;
}
```
> flex布局

超级好用的css3属性，无奈兼容性不佳，后期上手vue项目时可再着重学习。可以到阮一峰的[博文](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)中学习。
```css
/*  flex实现垂直居中,无需知道宽高 */
.elem{
  display: flex;
  align-items: center;
  justify-content: center;
}
```

##### 表单

```css
/* 常规设置长宽边框背景等即可 */
input{}

/* 下拉也正常设置即可，但是如果想改option样式，一般需要重构 */
select{}

/* 有特殊样式要求时单选，多选一般都是重构 */
input[type='radio']{}
input[type='checkbox']{}

/* 常规设置长宽边框背景等即可 */
textarea{
  resize:none;/* 设置文本框不可改变大小*/
}
```
##### 表格

表格样式 字体、长宽等常规设置就不赘述了
```css
/* 1. 边框的设置上,注意点是`tr`设置边框无效 */
table{
  border-collapse: collapse;/*边框合并*/
  border-spacing:2px;/*单元格边框间距，设置合并后则失效*/
}
table,th,td{
   border:1px solid #333;
}
/* 2. 奇偶行不同色 */
tr:nth-child(2n){
  background:#f1f1f1;
}
tr:nth-child(2n+1){
  background:#fff;
}
```

##### 列表

```css
ul,ol{
  list-style:none;/*设置列表左侧标识样式*/
}
```

#### 日常开发技巧，调试

浏览器控制台`Elements`页，点选页面元素对应html片段，右侧`Styles`为对应css设置，`Computed`为最终元素对应的css设置。

需要注意的是样式的优先级问题
1. 一般情况下内联等级最高，但一般不建议写内联样式，常规都是定义class写在css文件里。
2. 慎用!important;











