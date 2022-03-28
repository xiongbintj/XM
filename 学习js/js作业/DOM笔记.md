#API（Application Program interface）
- API的英文即Application Programming Interface首字母的缩写。翻译：应用程序接口
- 应用程序接口：接口就是一种方法，一种途径
- API是一种统称的叫法
##JS的组成部分
1.ECMAScript --> JS语法 制作者：ECMA 欧洲计算机协会
2.DOM --> Document Object Model(文档对象模型) 可以操作html+css  制作者：W3C
3.BOM --> Browser Object Model(浏览器对象模型)
# DOM
## DOM是什么
- Document Object Model 文档对象模型
- 首先它是一个模型（方法），我们把文档中一切内容全部皆为对象
- 创建时间：文档对象模型是在当前文档加载之后创建的
- 文档对象模型把文档一切内容描述为对象
   - 根对象：Document对象   是DOM的根对象
   - 元素对象；Element对象    把文档中所有标签描述成元素对象
   - 文本对象： Text 对象  把文档全部的字符（可见与不可见)  描述为文本对象
   - 属性对象： Attribute对象  把文档中所有的标签的属性描述为属性对象
   —— DOM还为游览器的内置事件添加了处理程序
   - DOM的用途；用于操作HTML文档。（增，删，查,改）

DOM的结构呈树状，所以也把DOM叫做DOM树，DOM树是由很多DOM节点组成的
##Document对象
 - Document对象表示整个web文档。是DOM的根对象
 - Document对象是页面中其他所有对象的主人
 - Document对象DOM的根对象，也是访问页面内容的入口。

 **Document对象属性**


 **Document对象方法**
 document.getElementById()
 document.getElementByClassName()
 document.getElementByTagName()
 document.querySelector()
 document.querySelectorAll()

**重要的话** 
 一旦从文档中选取了一个元素之后，很多时候需要基于此元素查找
 与之相关的元素，此时DOM提供了两种API可供使用：
 - 节点对象树
 - 元素对象树

 ## Node对象树
- 节点就是Node,Node就是节点
- 文档中一切内容都是节点。
- 文档对象： Document，根对象节点：
- 元素对象； 文档中的的每一个HTML元素
- 属性对象： 每一个标签的属性
- 文本对象； 文档中的可见和不可见文本
- 注释对象： 注释<!--  -->
————子节点： 在一个节点之下的直接节点（属性对象例外）
————父节点:  在一个节点之上的直接节点
##Node对象

**Node对象属性**
- elementNode.parentNode:查询元素对象的父节点  返回值父节点或者null
- Node.childNodes:查询子节点数     返回值nodeList类数组
- Node.nodeType :查询节点类型
1:#element元素   2:#attribute属性  3:#text文本  8:#comment注释  9:document文档
- Node.nodeName :查询节点的名称
- Node.nodeValue :查询节点的值
- Node.nextSibling 属性返回指定元素之后的下一个兄弟元素
- Node.previousSibling 属性返回指定元素之后的上一个兄弟元素



**Node对象方法**




##Element对象




**Element对象属性**
- element.children:查询元素对象的子元素。非标准属性，但是所有游览器都支持
- element.nextElementSibling 属性返回指定元素之后的下一个兄弟元素
- element.previousElementSibling 属性返回指定元素之后的上一个兄弟元素
- element.firstElementChild 查询当前元素的第一个子元素
- element.lastElementChild 查询当前元素的最后一个子元素
- element.appenChild()
- element.inserBefore()
- element.remove()  删除当前元素对象 返回值 无
- element.removeChild() 删除当前元素对象子元素  返回值 被删的子元素


 


**Element对象方法**
- document.querySelector()
- document.querySelectorAll()
##添加和删除元素
document.createElement(element)	创建 HTML 元素
document.removeChild(element)	删除 HTML 元素
document.appendChild(element)	添加 HTML 元素
document.replaceChild(element)	替换 HTML 元素
document.write(text)	写入 HTML 输出流





##12月7日
1.对象是什么？
对象是属性和方法的集合
2.创建对象的方法
方法一:直接量
const obj = {属性名：属性值，属性名：属性值，……属性名：属性值}
属性：属性名：属性值 名/值对构成
const obj = {key:value,key:value,…… 属性名：属性值}
属性：健/值对构成
方法二：构造函数
const obj = new Object()
3.访问对象方法
方法1：使用点号  obj.aaa
方法2：使用方括号 Obj["aaa"]
4.如何遍历对象
for (key in object) {
  // code block to be executed
}



## 12月8日
1.函数知识回顾
- 定义函数的两种方法
- 函数的返回值：return undefined
- 函数参数：形参，实参

2.箭头函数
箭头函数：arrow function |fat function
是ECMASCRIPT6 提出的新概念，是传统函数的升级版

3.事件
什么是事件；不是技术名词，事件是游览器制造出来的
事件名称：事件的名字，事件名称是一个字符串，小写。
- click
- mouseover
事件目标：与事件发生相关的对象
事件对象：一个和事件有关的属性方法的集合
事件处理程序：
1.通过HTML标签属性注册事件<div onclick= "">
2.通过js元素对象的属性注册  oDiv.onclick = function(){}
3.通过js元素对象addEventListener()方法注册
-addEventListener('事件名称'，fn)
## 12月9日
1.定义；字符串
2
3
4

##**数组**
forEach
array.forEach(fn,thisValue)