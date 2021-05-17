title: es6 实用篇
date: 2019-11-10 09:16:37
tags:

- js

---

针对性的讲解 es6 在实际运用中的情况,更详细的讲解见:[ECMAScript 6 入门](https://es6.ruanyifeng.com/#docs/destructuring)

<!-- more -->

### let 和 const 命令

ES6 新增了`let`命令，用来声明变量。它的用法类似于 var，但是所声明的变量，只在 let 命令所在的代码块内有效。

`const`声明一个只读的常量。一旦声明，常量的值就不能改变。

### 解构

```javascript
//es5
let a = 1
let b = 2
let c = 3
//es6
let [a, b, c] = [1, 2, 3]
```

### 模板字符串

```javascript
let str = 'Jack'
;`name is ${str}`
```

<!-- ### Symbol

ES6 引入了一种新的原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名 -->

### Set

Set 对象存储的值总是唯一的,用`...`操作符将 Set 转 Array

```javascript
//利用set快速实现数组去重
let arr = new Set([1,2,1,2,3])
[...arr] //[1,2,3]
```

### Map

Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。

```javascript
var myMap = new Map()
var keyString = 'a string'
myMap.set(keyString, "和键'a string'关联的值")
myMap.get(keyString) // "和键'a string'关联的值"
```

### 箭头函数

ES6 允许使用“箭头”（=>）定义函数。

```javascript
var f = v => 2 * v
// 等同于
var f = function(v) {
  return 2 * v
}

var sum = (num1, num2) => num1 + num2
// 等同于
var sum = function(num1, num2) {
  return num1 + num2
}

// 正常函数写法
var result = values.sort(function(a, b) {
  return a - b
})

// 箭头函数写法
var result = values.sort((a, b) => a - b)
```

`注意点`
函数体内的 this 对象，就是定义时所在的对象，而不是使用时所在的对象。
不可以当作构造函数，也就是说，不可以使用 new 命令，否则会抛出一个错误。

### 扩展方法

#### 对象

Object.assign():对象的合并

```javascript
const target = { a: { b: 'c', d: 'e' } }
const source = { a: { b: 'hello' } }
Object.assign(target, source) // { a: { b: 'hello' } }
```

Object.keys()，Object.values()，Object.entries()

```javascript
let obj = { foo: 'bar', baz: 42 }
Object.keys(obj) // ["foo", "baz"]
Object.values(obj) //["bar", 42]
Object.entries(obj) //[["foo", "baz"],["bar", 42]]
```

#### 函数

参数默认值

```javascript
//es5 常用方式
function log(x, y) {
  y = y || 'World'
  console.log(x, y)
}
//es6 设置默认值
function log(x, y = 'World') {
  console.log(x, y)
}
```

rest 参数

```javascript
Math.max(...[1, 2, 3, 4, 5]) //5

function add(...values) {
  let sum = 0
  console.log(values)
  for (var val of values) {
    sum += val
  }
  return sum
}

add(2, 5, 3) // 10
```

箭头函数

```javascript
var f = v => v

// 等同于
var f = function(v) {
  return v
}
```

#### 数组

fill()

```javascript
new Array(5).fill(1) //[1, 1, 1, 1, 1]
```

includes()

```javascript
//es6
;[1, 2, 3].includes(2) // true
//es5想实现同样效果通常使用indexOf
;[1, 2, 3].indexOf(2) > -1 //true
```

find(),filter():查找过滤

```javascript
let arr = [
  { key: 1, name: 'x' },
  { key: 2, name: 'y' }
]
//filter返回一个数组，包含所有符合条件的值
arr.filter(item => item.name == 'x') //[{ key: 1, name: 'x' }]
//find返回一个具体的子项，多个符合也只返回第一个
arr.find(item => item.name == 'x') //{ key: 1, name: 'x' }
```

forEach()，map():遍历函数

```javascript
let arr = [
  { key: 1, name: 'x' },
  { key: 2, name: 'y' }
]
let brr = arr.map(item => item.key)
brr //[1,2]

//forEach是纯遍历，内部return无效，不会返回新的数组
```
