Bootstrap

##容器（Container类）
<div class="container"></div>//当视口小于576就变成自适应
<div class="container-fluid"></div>//浮动的，布满整个视口
<div class="container-{breakpoint}"></div>
##断点
	                超小     小      中        大        超大      XX-大
                    <576px  ≥576px  ≥768像素  ≥992px    ≥1200px   ≥1400px
.container	        100%	540像素	720像素	  960像素	1140像素	  1320像素   
.container-sm	    100%	540像素	720像素	  960像素	1140像素	  1320像素
.container-md	    100%	100%	720像素	  960像素	1140像素	  1320像素
.container-lg	    100%	100%	100%	  960像素	1140像素	  1320像素
.container-xl	    100%	100%	100%	  100%	    1140像素	  1320像素
.container-xxl	    100%	100%	100%	  100%	    100%	  1320像素
.container-fluid	100%	100%	100%	  100%	    100%	  100%   

##文字颜色
<h1 class="text-primary">一级标题</h1>蓝色
<h1 class="text-secondary">一级标题</h1>深灰色
<h1 class="text-success">一级标题</h1>绿色
<h1 class="text-warning">一级标题</h1>黄色
<h1 class="text-danger">一级标题</h1>红色
<h1 class="text-light">一级标题</h1>浅灰色
<h1 class="text-dark">一级标题</h1>黑色

##背景色
<p class="bg-primary">Hello</p>主色，蓝色
<p class="bg-secondary">Hello</p>辅助色，深灰色
<p class="bg-success">Hello</p>辅助色,绿色
<p class="bg-danger">Hello</p>辅助色,红色
<p class="bg-warning">Hello</p>辅助色,黄色
<p class="bg-info">Hello</p>辅助色，天蓝色
<p class="bg-linght">Hello</p>辅助色，浅灰色
<p class="bg-muted">Hello</p>辅助色，浅深灰色
<p class="bg-dark">Hello</p>辅助色，黑色
<p class="bg-body">Hello</p>辅助色，白色
<p class="bg-white">Hello</p>辅助色，亮色
<p class="bg-transparent">Hello</p>辅助色，亮色

##透明度
<p class="bg-primary-10">Hello</p>主色，蓝色
<p class="bg-secondary-25">Hello</p>辅助色，深灰色
<p class="bg-success-50">Hello</p>辅助色,绿色
<p class="bg-danger-75">Hello</p>辅助色,红色


##文本对齐
<p class="text-center">Hello</p>
<p class="text-end">Hello</p>
<p class="text-start">Hello</p>

##边距
<p class="m-1 p-4 bg-danger">Hello</p>
<p class="m-1bg-warning">Hello</p>
<p class="p-4bg-primary">Hello</p>
m代表外边距
代表内边距p

##按钮
<button class="btn">按钮</button>
<button class="btn btn-primary">按钮</button>
基类：充值游览器的默认样式
<button class="btn btn-outline-primary">按钮</button>悬停效果
<button>按钮</button>

##行高
<p class="lh-1">Hello</p>1
<p class="lh-sm">Hello</p>1.25
<p class="lh-base">Hello</p>1.5
<p class="lh-lg">Hello</p>2




##主题：AJAX(啊假克斯)和JSON(杰孙)
##AJAX是什么？
- AJAX是一个API
- AJAX:异步JS和XML(Asynchronous JavaScript And XML可扩展的标记语言)XML就是存储数据
- 内容：一个游览器对象+JS+DOM
- 简言之：AJAX就是脚本化HTTP(JS操作HTTP)
- AJAX用途：通过操作http,从而实现与服务器交换数据

##核心对象XMLHttpRequest(请求对象)
- XML:数据格式(还可以是json或txt,html文本格式)
- HTTP:超文本传输协议，代表网页类型请求
- request:请求

##服务器端的数据：
要向后端索取请求数据接口：保存再一个页面中的一个程序

网上找一个数据API(数据文件)：免费的收费的
免费用于测试的API(国家信息):https://restcountries.com/v3.1/all
天气API:https://openweathermap.org/api+个人ID

##JSON是什么？
-JSON指的是一种对象格式的字符串
-要点：
###1.键值对构成。
key:必须加双引号 
value:string number booblen null
###2.js内置的JSON对象
JSON.parse： JSON字符串转js对象
JSON.stringify：js字符串转JSON对象
###3.JSON


##SQL
SQL是英语Structured Query Language的缩写，直译为"结构化查询语言"
SQL用于操作数据库
·操作：对数据进行增减添



###BOM
1.讲出什么是BOM
2.window对象是什么
3.页面加载事件
4.定时器
5.JS的执行机制：同步和异步
6.BOM下面的五大对象

##BOM是什么
- BOM是broswer objce modle的缩写，翻译:游览器对象模型
- BOM就是游览器堪称一个对象模型
  - window对象：就是游览器窗口，核心对象
  - location对象：地址栏
  - histroy对象：历史记录
  - doucument对象：W3C的一个标准
  - navigator对象:包含有关浏览器的信息
  - screen对象：把显示窗口的屏幕看成是一个对象
-BOM尚未被标准化

##文档和应用区别
- 文档：单纯呈现静态信息的页面
- 应用：ecmasript的存在是的静态的html文档变成交互式web应用

##BOM和DOM
核心对象：window document
内容:把游览器看成对象  把文档看成对象
用途：与窗口做交互   与文档做交互
标准化：尚未 W3C

##window对象
含义：表示游览器的一个窗口，双重角色
- 编程接口API
- 全局对象，处于模型的顶部，它位于作用域链的顶部。在全局作用域下，你声明的变量和函数都会自动的成为window的属性和方法

##三种弹窗
- window.alert():显示一个警示框
- window.confirm()：显示一个确认框
- window.prompt()：显示一个提示对话框
result 用于提示用户输入文字的字符串，如果没有任何提示内容，该参数可以省略不写
value 文本输入框种的默认值，该参数也可以省略不写。不过在Internet7和8中，
省略该参数会导致输入框中显示默认值“undefined
 注意：如果是全局对象，可以省略
 
 ##关于尺寸
 - window.innerHeight 查询窗口的内容高度
 - window.innerWidth
 - window.pageXOffset 页面水平偏移
 window.scrollX的别名
 - window.pageYOffset 页面垂直偏移
 window.scrollY的别名
 
 ## loading more 加载更多
 处理视口的原理
 scrllHeight： 滚动高=内容高=可视内容高+不可见内容高
 整个内容高：document.documentElement.scrllHeight
 不可见内容高 = document.documentElement.scrollTop文档滚动距离/滚动条滚动距离
 视口高=document.documentElement.clientHeight/window.innerHeight

 ##lazy loading 懒加载
 - 延时加载
 - 按需加载
 - 相关的实现技术
     - 图片的处理<img class='lazy' src='小图片地址' data-src='大图片地址'
	 - 视口处理
 
 ## load事件(加载事件)
含义：当文档全部内容加载远比后触发。包括文档中的全部资源：处理函数的执行一定要等到文档中的样式表，JS文件，图片，视频等所有资源加载完毕之后菜触发

## DOMcontent Loaded事件(加载事件)
在页面DOM加载完成后立即触发，无需等待资源加载完成

#208
##Location对象
1.定义：对象可用于获取当前页面地址（URL)并把游览器重新定向到新页面
2.URL是什么？
- url:uniform resource locatior 翻译：统一资源定位符
- 表示万维网文档地址，该地址具有唯一性
- 标准格式：https://www.baidu.com:8080/news/index.html?q=beijing#culture
- https: 协议 超文本传输协议。
- baidu.com:8080：主机
- baidu.com:主机名
- 8080:端口号
- /news/:路径
- q=beijing&gender=male :查询字符串
- #culture:hash片段
##209
##location对象(改写地址)
1.location.href 
window.location.href='http://www.sina.com.cn'//读取url
2.location.replace
location.replace('http://www.sina.com.cn') //替换当前url
3.location.assign
location.assign('http://www.sina.com.cn')//分配一个新的url

## navigator对象
  navigate 导航
  navigation 导航
  navigator 导航器
  <nav>
  
  
  
##histroy对象
window.histroy 对象包含游览器历史记录
history.back() //没有参数，没有返回值
history.forward() //没有参数，没有返回值
history.go() //参数：整数(1,0,-1)，没有返回值

##JS执行机制
同步和异步：synchronous VS asynchronous
同步：在一个时间点只能执行一条JS语句
同步？
- JS是一门单线程的、同步执行的脚本语言

##Promise
- Promise是ES6新增的内置对象
- Promise是异步编程的一种解决方案
- Promise是使用同步的方法解决异步问题
- Promise是一个构造函数

##Promise对象的状态不受外界影响 （3种状态）
Pending状态（进行中）
Fulfilled状态（已成功）
Rejected状态（已失败）
##一旦状态改变就不会再变 （两种状态改变：成功或失败）
Pending -> Fulfilled
Pending -> Rejected

##拓展 async/await
async
  顾名思义，异步。async函数对 Generator 函数的改进，async 函数必定返回 Promise，我们把所有返回 Promise 的函数都可以认为是异步函数。特点体现在以下四点：

内置执行器
更好的语义
更广的适用性
返回值是 Promise

##await
  顾名思义，等待。正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。另一种情况是，await命令后面是一个thenable对象（即定义then方法的对象），那么await会将其等同于 Promise 对象。



## Promise的语法
new  Promise((resolve,reject)=>{// Promise(处理器函数)})
 resolve()//成功时
 reject()//失败时


##JSON: JavaScript Object Notation（JavaScript 对象标记法）。

JSON 是一种存储和交换数据的语法。

JSON 是通过 JavaScript 对象标记法书写的文本。


##个人知识库
技术栈
核心：

##
构造函数的执行机制
const user1 = new User()背后发生了什么
1.创建一个空对象 const obj ={}
2.把this绑定到obj对象实例的身上
3.让对象实例obj继承User()构造函数的prototype属性和方法
4.执行User()构造函数内部的自定代码
5.return user新对象

##this是什么
- this是一个关键词
- this是一个指示代词，指代它所属的对象


##Node是什么
- 官网：www.nodejs.org
- node是一个平台
- node是一个运行Js的环境
- node是开源的
- 我们经常使用Nodejs搭建服务器

##NPM是什么
- 官网：www.npmjs.com
- node package manager node平台的包管理工具
- 安装了node就会安装了npm

##查看版本号
- 查看node的版本号
  $ node --version
  
- 查看npm的版本号
  $ npm -v

##less文件简介
- less的文件是less css的专有文件
- less是不能直接引入到HTML文档的(在没有客服端编译器的前提下)
- 
- 在node平台上编译less文件
- #less =less complie 编译less  less文件  输出文件
-$ less styles.less style.css

## 进入桌面文件夹
  $ cd desktop

## 查询文件夹名
  $ ls

## 清空内容
  $ clear

## 创建文件
  $ touch

## 创建文件夹
  $ mkdir less(文件夹名)

## 移动文件夹
  $ mv styles.css ./less(文件名/路径)

## 复制文件
  $ cp style.css ./less (文件名/路径)
## 复制文件(更改的文件名)
  $ cp style.css ./less/123.css(文件名/路径/更改的文件名)

## 删除文件
  $ rm aaa(文件夹)

## 删除文件夹
  $ rm -r aaa(文件夹名)
  
##自动生成css文件
  $ less-watch-compiler less css
  
##自动生成json文件
  $ less-watch-compiler.config.json

##注释
//单行注释，不会被编译
/*多行注释，会被编译*/

##变量
##响应式和自适应设计的区别
响应式：
 - 响应式访问设备
    - 宽高
	- 横屏/竖屏
	- 像素比
	- 设备类型
 - 通过媒体查询@media做到的
 - @media：不但可以查询设备还可以查询设备特性。
 - 根据检测的结果应用不同的CSS
 - 当然，还需要配合viewport

 自适应
 - 技术：css+js
 - 只有一套css
 - 这套css能够自动适应不同尺寸的访问设备
 



##工作流程
- 产品经理：设计产品 交付文档：产品需求说明、信息分类等。
  - 交给谁：UI设计师
- UI设计师：把产品经理的想法用图形的形式实现出来，交付文件：
  - 低保真原型图、高保真原型图。
  - 交给谁：前端开发、产品经理
- 前端开发：把原型图用代码的形式实现出来，实现真正的产品。

##不同的APP开发
- IOS开发：Swift  面向Ios平台
- 安卓开发：JAVA   面向android平台
- 混合开发：JS     面向游览器


##css的尺寸单位
- px :绝对单位
- vh vw
- %
- em:表示一个字的大小，根据当前元素的font-size决定的，
  - 父元素的font-size是一个px单位的尺寸还好计算
  - 通常，父元素的font-size也是em单位
 
- rem:root em x相对于根元素HTML标签而言

##视口(viewport)


##物理像素和逻辑像素的区别
- 物理像素：真实客观存在
- 逻辑像素：虚拟像素
- css中的1px并不等于设备的1px

## window.devicePixelRatio
## 设置viewport
## 设置HTML根字号
- 设置html元素上