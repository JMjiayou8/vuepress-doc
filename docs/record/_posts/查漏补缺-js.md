---
title: 查漏补缺-js
date: 2020-01-09 09:16:37
tags:
  - js
---

[参考网址](https://github.com/haizlin/fe-interview/blob/master/category/history.md)

<!--more-->

### 返回到顶部的方法有哪些？把其中一个方法出来[2019.05.02]

### 写一个数组去重的方法（支持多维数组）[2019.05.01]

### 什么是闭包？优缺点分别是什么？[2019.04.30]

### 说说你对 javascript 的作用域的理解[2019.04.29]

### 写一个获取当前 url 查询字符串中的参数的方法[2019.04.28]

### 简要描述下 JS 有哪些内置的对象[2019.04.27]

- Object、Array、Boolean、String、Number
- Date
- Month
- RegExp

- [更全面参考](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)

### 简要描述下什么是回调函数并写一个例子出来[2019.04.26]

### 写一个判断数据类型的方法[2019.04.25]

```javascript
//自己
function getDataType(data) {
  var type = Object.prototype.toString.call(data)
  return type.substring(8, type.length - 1)
}
getDataType(1) //Number
getDataType({}) //Object
getDataType([]) //Array
...
```

```javascript
function getDataType2(v) {
  return Object.prototype.toString
    .call(v)
    .replace(/^.{8}(.+)]$/, (m, $1) => $1.toLowerCase())
}
```

### 写一个加密字符串的方法[2019.04.24]

```javascript
//唔，超出我的知识范围了，直接找网友答案

//网友一:Window原生方法btoa和atob;浏览器支持,ie10+
function encode(str) {
  return btoa(encodeURIComponent(str))
}

function decode(str) {
  return decodeURIComponent(atob(str))
}
encode('hello,world') //"aGVsbG8lMkN3b3JsZA=="
decode(encode('hello,world')) //"hello,world"

// 网友二:
function strEncrypt(str) {
  var sault = 3
  return str
    .split('')
    .map(c => {
      return String.fromCharCode(c.charCodeAt(0) + sault)
    })
    .join('')
}
function strDecrypt(str) {
  var sault = 3
  return str
    .split('')
    .map(c => {
      return String.fromCharCode(c.charCodeAt(0) - sault)
    })
    .join('')
}
var str = 'hello, world'
strEncrypt(str) //"khoor/#zruog"
strDecrypt(strEncrypt(str)) //'hello, world'
```

### 统计某一字符或字符串在另一个字符串中出现的次数[2019.04.23]

```javascript
//自己
function sumChat1(str, target) {
  return str.split(target).length - 1
}
```

```javascript
// 网友
function sumChat2(str, target) {
  let matchs = str.match(new RegExp(`(?=${target})`, 'g'))
  return matchs ? matchs.length : 0
}
```

```javascript
// 针对测试情况而言，貌似网友的方案更加精准一点。
sumChat1('aaabcaaa', 'a') //6
sumChat2('aaabcaaa', 'a') //6

sumChat1('aaabcaaa', 'aa') //2
sumChat2('aaabcaaa', 'aa') //4

sumChat1('aaabcaaa', 'aaa') //2
sumChat2('aaabcaaa', 'aaa') //2
```

### 写一个去除制表符和换行符的方法[2019.04.22]

```javascript
str.replace(/[\t\v\n]/g, '')
```

### 写一个把字符串大小写切换的方法[2019.04.21]

```javascript
function transCase1(str) {
  return str.replace(/([a-z]*)([A-Z]*)/g, function(match, $1, $2) {
    return `${$1.toUpperCase()}${$2.toLowerCase()}`
  })
}
var data = transCase1('helloWorld') //HELLOwORLD
```

```javascript
function transCase2(str) {
  var arr = str.split('')
  return arr.map(item => {
    if (item.toLowerCase() == item) {
      item.toUpperCase()
    }
    if (item.toUpperCase() == item) {
      item.toLowerCase()
    }
    return item
  })
}
var data = transCase1('helloWorld')
```

### 写一个方法把下划线命名转成大驼峰命名[2019.04.20]

```javascript
//第一反应是正则，无奈我想到正则就无从下手了，先按照笨方法完成一个版本吧
function transCamle1(str) {
  var arr = str.split('_')
  return arr
    .map((item, i) => {
      return i == 0 ? item : item[0].toUpperCase() + item.substr(1)
    })
    .join('')
}
var data = transCamle1('hello_world_js') //helloWorldJs
```

```javascript
//正则
function transCamle2(str) {
  while (str.match(/\w_\w/)) {
    str = str.replace(
      /(\w)(_)(\w)/,
      (match, $1, $2, $3) => `${$1}${$3.toUpperCase()}`
    )
  }
  return str
}
var data = transCamle2('hello_world_js') //helloWorldJs
```

### 去除字符串中最后一个指定的字符[2019.04.19]

```javascript
//个人
function delLast1(str, target) {
  var arr = str.split('')
  arr.splice(str.lastIndexOf(target), 1)
  return arr.join('')
}
//delLast1('abcdaec','a')

//网友一
function delLast2(str, target) {
  let reg = new RegExp(`${target}(?=([^${target}]*)$)`)
  return str.replace(reg, '')
}
//delLast2('abcdaec','a')

//网友二
function delLast3(str, target) {
  var index = str.lastIndexOf(target)
  return str.substring(0, index) + str.substring(index + 1, str.length)
}
//delLast3('abcdaec','a')

//网友三
function delLast4(str, target) {
  return str
    .split('')
    .reverse()
    .join('')
    .replace(target, '')
    .split('')
    .reverse()
    .join('')
}
//delLast4('abcdaec','a')
```

### 去除字符串中的空格[2019.04.18]

```javascript
//法一
str.replace(/\s+/g, '')
//法二
str.split(' ').join('')

//去除两端空格
str.trim()
```

### 生成指定范围随机数[2019.04.17]

```javascript
function getRandom(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min)
}
```
