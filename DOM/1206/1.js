const oDiv = document.querySelector(".container")
const oUl = document.querySelector("ul")
const aLi = oUl.childNodes
// console.log(document)//查看document对象
// console.log(document.childNodes)//查看document对象子节点数
// console.log(document.nodeValue)//查看document对象的节点类型返回值
// console.log(oDiv.childNodes.length )//查看document对象子节点长度
// for (let i = 0; i< oDiv.childNodes.length ;i++ ) {
    // console.log(oDiv.childNodes[i].nodeType)//获得节点类型
    //  1:#element元素   2:attribu属性  3:#text文本  8:#comment注释  9:document文档
    // console.log(oDiv.childNodes[i].nodeName)//获得节点名称
    // console.log(oDiv.childNodes[i].nodeValue)
// }

for(let i = 0;i < aLi.length;i++){
    if( aLi[i].nodeType == 1){
        aLi[i].style.background = "red"
    }
}