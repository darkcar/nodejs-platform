# Node Js

## Chapter 1 Browser 

<strong>1. One browser should have at least 5 features: </strong>

- UI (User Interface)
- Socket
- JavaScript Engine (parse and execute JS code)
- Render HTML, CSS Engine
- Data Storage 

<strong>Render Engine: Layout Engine and Browser Engine</strong>

<strong>Popular Browser Engine: </strong>

- Chrome: Blink Engine
- Safari: WebKit Engine
- FireFox: Gecko Engine
- Opera: Blink Engine
- Internet Explorer: Trident Engine
- Microsoft Edge: EdgeHTML Engine

<strong>2. Web Development</strong>

- **Request**: Client sending HTTP requests
- **Server Process**:
- **Response**:

## Chapter 2 NodeJS

**1. What is Node.js?**

**Node.js** is a dev platform, which is similar to Java, .Net, PHP, Apple, etc. 

**NodeJs** is a JavaScript runtime built on Chrome's V8 JavaScript Engine. 

**NodeJs** platfrom provides programming language, runtime, and rich apis.

**2. What can Node.js do? **

- Console Application, CLI App.
- Desktop Application (GUI) - node-webkit, electron.
- Web Application 

**3. Node Full Stack** (MEAN)

- **M**ongoDB
- **E**xpress
- **A**ngular
- **N**ode.js

**4. Features of Node.js**

- Event Triggered
- Single Thread
- Non-blocking I/O model
- npm: package manager for the JavaScript programming language.

**5. Comparision of web development**

- Traditional Mode: Must have *web container*.
- Node.js Mode: No web server needed. Node.js is web server.  

## Chapter 3 Write Node code 

### 3.1 REPL Introduction - very likely browser console [A programming playground]

- R: Read 读取用户输入，解析输入JavaScript数据结构并存储在内存中。
- E: Execute执行输入的数据结构
- P: Print打印 输出结构
- L: Loop 循环操作以上步骤知道用户两次按下ctrl-c按钮退出or .exit。

### 3.2 How to write node.js - Hello world

1. Create a `hello-world.js` file and write the javascript code 

   ```javascript
   var m = 10; 
   var n = 100;
   
   function add(x, y) {
       return x + y;
   }
   
   var result = add(m, n);
   
   console.log('Result is ' + result);
   console.log('hello, world');
   ```

2. Run the command line: 

   ```bash
   node hello-world.js
   ```

### 3.3 File Read and Write

```tex
Global object is not needed to load it explecitly. 
Non-global modules needs require to load. 
```

