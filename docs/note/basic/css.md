---
title: css
date: 2019-11-06 09:37:37

tags:
  - css
---
## 基础
- <b>css</b>：层叠样式表,定义如何显示 `HTML` 元素

- 语法
```
选择器 {
  属性1 : 值1;/*分号不可少*/
  属性2 : 值2;
}
```

#### 创建方式

- 外部样式表:`推荐`
```html
<link href="xxx.css" rel="stylesheet"/>
```
-  内部样式表
```html
<style>
  #box{
    width:100px;
  }
</style>
```
- 内联样式
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
- `inline-block`元素的特点是宽高如果不设置会根据内部元素撑起大小设置，而`block`元素则不然，block元素的高有内部元素撑起，宽默认100%；
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

## 思考✨
> 我们常说的`盒模型`是指什么
- 
> 什么是文档流
- 
> 对 BFC 规范(块级格式化上下文：block formatting context)的理解？

BFC 规定了内部的 Block Box 如何布局。

1. 定位方案：

- 内部的 Box 会在垂直方向上一个接一个放置。
- Box 垂直方向的距离由 margin 决定，属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠。
- 每个元素的 margin box 的左边，与包含块 border box 的左边相接触。
- BFC 的区域不会与 float box 重叠。
- BFC 是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。
- 计算 BFC 的高度时，浮动元素也会参与计算。

2. 满足下列条件之一就可触发 BFC

- 根元素，即 html
- float 的值不为 none（默认）
- overflow 的值不为 visible（默认）
- display 的值为 inline-block、table-cell、table-caption
- position 的值为 absolute 或 fixed
> 浮动元素为什么无法撑开父元素？如何解决

1. 浮动带来的问题：

- 父元素的高度无法被撑开，影响与父元素同级的元素
- 与浮动元素同级的非浮动元素（内联元素）会跟随其后
- 若非第一个元素浮动，则该元素之前的元素也需要浮动，否则会影响页面显示的结构。

2. 清除浮动的方式：

- 父级 div 定义 height
- 最后一个浮动元素后加空 div 标签 并添加样式 clear:both。
- 包含浮动元素的父标签添加样式 overflow 为 hidden 或 auto。
- 父级 div 定义 zoom

3. 设置元素浮动后，该元素的 display 值是什么?:自动变成 display:block

> 元素`居中`布局的几种实现方式
```
1. 水平居中
行内元素: text-align: center
块级元素: margin: 0 auto
position:absolute +left:50%+ transform:translateX(-50%)
display:flex + justify-content: center

2. 垂直居中
设置line-height 等于height
position：absolute +top:50%+ transform:translateY(-50%)
display:flex + align-items: center
display:table+display:table-cell + vertical-align: middle;
```
> 对`Flex`布局、`Grid`布局方式的理解和使用
> 浏览器在进行页面布局过程中会做些什么
> 重绘和重排会导致什么问题

1. 重绘：重绘是一个元素外观的改变所触发的浏览器行为，例如改变 outline、背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。重绘不会带来重新布局，所以并不一定伴随重排。

```
* color							* background								* outline-color         * border-style					* background-image							* outline         * border-radius					* background-position						* outline-style         * visibility					* background-repeat							* outline-width         * text-decoration				* background-size							* box-shadow
```

2. 回流：渲染对象在创建完成并添加到渲染树时，并不包含位置和大小信息。计算这些值的过程称为布局或重排，或回流

```
* width  * top * text-align  * heigh  * bottom  * overflow-y         * padding					* left									* font-weight         * margin					* right									* overflow         * display					* position								* font-family         * border-width				* float									* line-height         * border					* clear									* vertival-align         * min-height														* white-space

```

3. "重绘"不一定需要"重排"，比如改变某个网页元素的颜色，就只会触发"重绘"，不会触发"重排"，因为布局没有改变。
4. "重排"大多数情况下会导致"重绘"，比如改变一个网页元素的位置，就会同时触发"重排"和"重绘"，因为布局改变了。

5.  常见触发重绘回流的行为
- 当你增加、删除、修改 DOM 结点时，会导致 Reflow , Repaint。
- 当你移动 DOM 的位置
- 当你修改 CSS 样式的时候。
- 当你Resize窗口的时候（移动端没有这个问题，因为移动端的缩放没有影响布局视口)
- 当你修改网页的默认字体时。
- 获取DOM的height或者width时，例如clientWidth、clientHeight、clientTop、clientLeft、offsetWidth、offsetHeight、offsetTop、offsetLeft、scrollWidth、scrollHeight、scrollTop、scrollLeft、scrollIntoView()、scrollIntoViewIfNeeded()、getComputedStyle()、getBoundingClientRect()、scrollTo()
6. 针对重绘回流的优化方案

- 元素位置移动变换时尽量使用CSS3的transform来代替top，left等操作
- 不要使用table布局
- 将多次改变样式属性的操作合并成一次操作
- 利用文档素碎片（documentFragment），vue使用了该方式提升性能
- 动画实现过程中，启用GPU硬件加速：transform:tranlateZ(0)
- 为动画元素新建图层，提高动画元素的z-index
- 编写动画时，尽量使用requestAnimationFrame
- CSS动画和Javascript动画相比，有什么优缺点

> CSS 优化、提高性能的方法有哪些？
- 避免过度约束
- 避免后代选择符
- 避免链式选择符
- 使用紧凑的语法
- 避免不必要的命名空间
- 避免不必要的重复
- 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么
- 避免！important，可以选择其他选择器
- 尽可能的精简规则，你可以合并不同类里的重复规则
> display:inline-block 会显示间隙？

1. 是换行符引起的间隔问题，间隙为 4px。

- 去掉换行符；
- 对父元素添加 font-size:0，将字体大小设置为 0，换行符也会为 0px，从而消除间隙，再为 inline-block 元素设置我们需要的字体大小；
- 将 inline-block 的 margin-right/left 设置为 -4px； -将父元素的 letter-spacing 或 word-spacing 设置为 -4px，这两个属性会增加或减少字符间隔。word-spacing 对中文无效

2. inline-block 还有两个问题：即不同高度的两个 inline-block 顶部不对齐，以及 inline-block 底部多出几像素（多出空白）。
   解决方法是为 inline-block 元素设置 vertical-align:top。

> 为什么 CSS 解析顺序从右到左

- 如果是从左到右的话：

1. 第一次从爷节点 -> 子节点 -> 孙节点 1
2. 第一次从爷节点 -> 子节点 -> 孙节点 2
3. 第一次从爷节点 -> 子节点 -> 孙节点 3

如果三次都匹配不到的话，那至少也得走三次：爷节点 -> 子节点 -> 孙节点，这就做了很多无用功啊。

- 如果是从右到左的话：

1. 第一次从孙节点 1，找不到，停止
2. 第一次从孙节点 2，找不到，停止
3. 第一次从孙节点 3，找不到，停止
这样的话，尽早发现找不到，尽早停止，可以少了很多无用功。













