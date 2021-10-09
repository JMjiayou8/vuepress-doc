---
title: react
date: 2021-07-30 09:37:37

tags:
  - react
---

> 相关链接

- [react 官网](https://react.docschina.org/)
- [create-react-app 官网](https://create-react-app.dev/)
- [create-react-app 中文官网](http://www.html.cn/create-react-app/)

```bash
npx create-react-app my-react-app
# 安装提示报错，查看是node版本低： Expected version ">= 10.14.2". Got "10.14.0"

cd my-react-app
npm start
```

> 组件

- function 组件:无状态组件

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}
// 无state、setState()
// 不具有生命周期
```

- class 组件

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}
```

```js
// 纯函数:该函数不会尝试更改入参，且多次调用下相同的入参始终返回相同的结果。
function sum(a, b) {
  return a + b
}
// 非纯函数:更改了自己的入参
function withdraw(account, amount) {
  account.total -= amount
}
```

`所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。`

> state

- 不要直接修改 State
- State 的更新可能是异步的
- State 的更新会被合并

```js
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    )
  }
}
```

> 生命周期

- `componentDidMount()`:当组件第一次被渲染到 DOM 中的时候，就为其设置一个计时器。这在 React 中被称为`挂载（mount)`。
- `componentWillUnmount()`: 当 DOM 中组件被删除的时候，应该清除计时器。这在 React 中被称为`卸载（unmount）`。

> 事件处理

- React 事件的命名采用小驼峰式（camelCase），而不是纯小写。
- 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串。

```js
//传统的 HTML
<button onclick="activateLasers()">
  Activate Lasers
</button>
//react
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

- 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault。

```js
//传统的 HTML
;<form onsubmit="console.log('You clicked submit.'); return false;">
  <button type="submit">Submit</button>
</form>
//react
function Form() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('You clicked submit.')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  )
}
```

> 表单:受控组件

```html
<input type="text" value="{this.state.value}" onChange="{this.handleChange}" />
<textarea value="{this.state.value}" onChange="{this.handleChange}" />

<select value="{this.state.value}" onChange="{this.handleChange}">
  <option value="grapefruit">葡萄柚</option>
  <option value="lime">酸橙</option>
  <option value="coconut">椰子</option>
  <option value="mango">芒果</option>
</select>
<!-- 非控 -->
<input type="file" />
```

### Hook

- `Hook` 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
- Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

1. 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
2. 只能在 React 的`函数组件`中调用 Hook。不要在其他 JavaScript 函数中调用。（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中）
   > useState

- 唯一的参数就是初始 state

```js
const [age, setAge] = useState(42)
const [fruit, setFruit] = useState('banana')
const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])
```

> useEffect

- 跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
