---
title: 网络
date: 2019-11-14 09:16:37
tags:
  - http
---

## http
### 请求方法
- HTTP1.0 定义了三种请求方法： `GET`, `POST` 和 HEAD 方法。
- HTTP1.1 新增了六种请求方法：OPTIONS、`PUT`、PATCH、`DELETE`、TRACE 和 CONNECT 方法。
### 响应头信息
- Expires

### 状态码
- 200 - 请求成功
- 301 - 资源（网页等）被永久转移到其它URL
- 4** - 客户端错误，请求包含语法错误或无法完成请求
- 5** - 服务器错误，服务器在处理请求的过程中发生了错误
### 内容类型content-type:告诉客户端实际返回的内容的内容类型。
- text/html ： HTML格式
- text/plain ：纯文本格式
- text/xml ： XML格式
- image/gif ：gif图片格式
- image/jpeg ：jpg图片格式
- image/png：png图片格式
- application/xhtml+xml ：XHTML格式
- application/xml： XML数据格式
- application/atom+xml ：Atom XML聚合格式
- application/json： JSON数据格式
- application/pdf：pdf格式
- application/msword ： Word文档格式
- application/octet-stream ： 二进制流数据（如常见的文件下载）
- application/x-www-form-urlencoded ： `<form encType=””>`中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式）
- multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式



## webSocket
- [阮一峰:WebSocket 教程](https://www.ruanyifeng.com/blog/2017/05/websocket.html)
- 服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。
- 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。
```js
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
};      
```
- `readyState`
```
CONNECTING：值为0，表示正在连接。
OPEN：值为1，表示连接成功，可以通信了。
CLOSING：值为2，表示连接正在关闭。
CLOSED：值为3，表示连接已经关闭，或者打开连接失败。
```

## 思考✨
> 一个完整的HTTP请求过程
- 域名解析（此处涉及DNS的寻址过程）  
- TCP连接建立
1. TCP的3次握手过程
2. 为什么TCP连接握手需要3次通信，挥手却需要4次  
- 建立TCP连接后发起HTTP请求  
- 服务器响应HTTP请求    
> HTTP协议相关
- HTTP消息的结构
1. Request请求
2. Response响应  
3. 常见的HTTP状态码
4. 使用PUT、DELETE等方法时为什么有时候在浏览器会看到两次请求（涉及CROS中的简单请求和复杂请求）
- HTTP请求的应用场景
1. 浏览器是如何控制缓存的：相应的头信息、状态码
2. Websocket与HTTP请求的区别  
3. 如何对请求进行抓包和改造  
4. 网络请求的优化方法
- HTTP的更新迭代
1. HTTPS与HTTP的区别
2. HTTP/2、HTTP/3分别做了怎样的设计调整