const oUl = document.querySelector("ul")
// console.log(oUl.parentNode)//返回当前节点的父节点。
// console.log(oUl.childNodes)//返回当前节点的所有子节点的节点列表
// console.log(oUl.firstChild)//返回当前节点的首个子节点
// console.log(oUl.lastChild)//返回当前节点的最后一个子节点
// console.log(oUl.previousSibling)//返回当前节点之前相邻的同级节点
// console.log(oUl.nextSibling)//返回当前节点之后相邻的同级节点
const oLi = document.createElement("li")
const aLi = oUl.querySelectorAll("li")
oLi.innerHTML = "Hello world"
oUl.insertBefore(oLi,aLi[0])//向列表中插入一个项目
