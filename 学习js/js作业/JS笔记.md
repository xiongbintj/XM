#JavaScritpt
[toc]
JavaScript的构成
##.ECMAScript:规定了JS语法
 1.ES是[W3C](https://www.w3.org)制定的JS这么语言的语法规范
 2.词法
  var a2
 3.句法
 for(){}
 ·分号：在es里面表示句子结束
 var myCar="BMW";//推荐写分号
 var myCar="BMW"  //末尾的分号不是必须的，但是可以不推荐
 
 

##.DOM:文档对象模型(document)为js提供了一种操控文档的接口
##.BOM:游览器对象模型(window))为js提供了一种操控游览器的接口
![文档对象](https://www.w3school.com.cn/i/ct_htmltree.gif) 

##.基本语法
词法
0.js
1.区分大小
2.标识符:指变量，函数，函数的参数，属性的名字。他的合法字符包括以下四部分:
  1,字母 
   2,数字 
	3,下划线 
	 4,$
var test=""
var Test=""//false 错 
.是访问对象的属性
·变量
1.定义
  变量是存储数据值的容器
  变量只不过是一个用于保存任意值的命名占位符
  变量就是一个变化的量(在程序运行过程中变量的值可以发生改变)
  变量就是一个存储数据的容器
  从内存的角度讲：变量就是命名的内存地址
2.声明变量
  声明变量：就是创建变量
  方法：使用以下三个关键字声明
    ··avr:ES 6版本以前的版本中方法。缺点：函数作用域
	··let:ES 6版本中新增的优点：块级作用域
	··const:ES 6版本中新增的优点：块级作用域

  数据类型
  var mun=123
  var str='abc'
  var on = true
  ~简单数据类型(原始类型 原始值)
   1·Number:数字
   2·String：字符串（文本）在任何情况下，都要用引号扩起来
   引号要合理嵌套
   单引号双引号嵌套
   3·Boolean：true/false
   4·undefineg:未定义出定义值（解释：定义变量未赋值）
   5·Null:空（对象指针为空
  ~复杂数据类型(对象类型)
  1 ·objct
    2 `array
	3 `function
	 `data
	 `等等
  操作符
  1.用途：操作数据
  2.类型：+ - * / % ！ typeof
  3.typeof(检测数据类型)
  

按照ES标识符使用惯例：驼峰式

JavaScritpt  大驼峰
javaScritpt 小驼峰

var  _2a=30
var  a2=3
var  $3=5
var  $2a=8


3.注释
单行注释：//
多行注释：/**/


#11月19日:数据类型与转换
【第1个知识点】：记住js数据类型有6种分别是:
1~数值   //Number
2~字符串  //string
3~布尔值   //boolean
4~Undefined 未定义
5~Null  空
~object  对象

#11月22日 ：什么是函数？
JavaScript 函数是被设计为执行特定任务的代码块。
JavaScript 函数会在某代码调用它时被执行。
函数是这样一个代码块：它只定义一次，但是可以被执行或调用若干次
函数也是一种数据
函数只有在调用时才会执行，如果不调用，函数永远不会被执行
##函数的如何定义
有四种函数的调用方法
1.函数调用模式
2.方法调用模式
3.构造器模式
4.上下文模式



#11月26日封装抖动函数
一、Date()是一个构造函数
 w3c是一个语言标准的制定和颁布者。
 ECMAScript为了满足开发者的各种需要，提供了许多构造函数，比如Date()、Array()、REGEXP()等

二、构造函数是什么？
构造函数就是用来创建一个新对象的函数。
 var ar = [] // 直接量创建
 var arr = new Array() //构造函数的方法创建数组

三、如何使用构造函数创建对象
let now = new Date()  //使用关键字new + 构造函数 = 创建了一个新的时间对象
时间是一个对象
对象是什么？

- 对象是属性的结合。


四、new Date()表示当前系统时间

当前：js解析器解析的时间
系统时间：你的电脑里的时钟时间：日期和时间
new Date()创建的一个新的时间对象，这个时间对象包含了一个数字，这个数字代表从“当前时间”到1970年1月1日0点0分0秒所走过的毫秒数。

五、时间对象的方法

- new Date(). getFullYear()  //返回年份

六、自定义函数：设计一个小函数toTwo()

实现的功能：把一位数转两位（加零）

```javasc
function toTwo(n){return (n<10) ? '0' + n : '' + n}

```

七、定时器


八、字符串的charAt()方法： 

- 字符串相当于一个数组，字符串是长度的。str.length
- str.charAt(2)   //获取到第3个字符



九、Date()构造函数

我们在实例化时间对象的时候，分两种情况：

```javas
//获取当前时间
var d = new Date(); //没有参数，返回当前：163243254325


//获取指定未来或过去的某个时间对象
var d = new Date(2021,12,12,0,0,0) //数字 返回参数指定的时间对象  163243284325
var d = new Date("month dd,yyyy hh:mm:ss") //字符串


//时分秒公式
Math.floor(t/86400)
Math.floor(t%86400/3600)
Math.floor(t%86400%3600/60)
Math.floor(t%60)

```



十、Math对象

用途：用于处理与数学相关的运算

- math.floor() : 向下取整
- math.ceil() ： 向上取整
- math.round() ： 四舍五入取整



floor : 地板

ceil : 天花板

1.数组存储的是一组数值
·[1,2,3,4,5]
.[ a,a,b,b,g]

2.数组是一个对象
#创建数组的方法
~直接量方法
let arr = [1,2,3]
函数
let arr2 =new Array(1,2,3)

#array push()
#array unshift()
#array shift()
#array pop()
颠倒数组元素顺序reverse()
~~array  reverse()

sort() 方法对数组的项目进行排序。
~~array sort()
!1.console.log(array sort(function(a,b)
{return a-b //从小到大 
return b-a //从大到小
return Math.rabdom() - 0.5
return Math.rabdom() - 0.5
return Math.rabdom() - 0.5
return Math.rabdom() - 0.5
}) )
!2.for(var i= 0 ;i<10 ; i++){
	console.log(Math.round(Math.random))
}
#函数
函数是被设计为执行特定任务的代码块。
函数是可以重复执行的一段代码块。
函数是一种数据类型（object)
函数体：{}花括号
##创建函数的方法
创建函数只有1种方法
使用关键词function创建函数 

function fn (a,b){
   return a+b;
}
function关键词
fn:函数名称——>当你使用function关键词创建一个函数的时候，相当于创建一个函数对象，同时也创建了一个变量fn，然后把函数对象值赋值给fn

匿名函数——> 当你使用function关键词创建一个无名函数的时候，相当于创建一个函数对象
（a,b):设置函数执行时的参数
— 形参：在定义函数时创建用于接收实参的变量
— 实参：在调用函数时传入实际的值

arguments对象，用于接受不定数量实参的集合，
用于接收传入的所有实参，它是一个类数组对象
 function fn (){
    let sum =0 
	for (let i=0;i<arguments.length;i++){
	sum += arguments[i]
	}
	return.sum
 }




Date 对象
Date 对象用于处理日期和时间。

日期对象是用 new Date() 创建的。
getDay()	返回星期几（0-6）。
getFullYear()	返回年份。
getMonth()	返回月份（从 0-11）。
getDate()	返回月中的第几天（从 1 到 31）。
getHours()	返回小时（从 0-23）。
getMinutes()	返回分钟（从 0-59）。
getSeconds()	返回秒数
getMilliseconds()	返回毫秒（0-999）。