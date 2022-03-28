//添加事件监听
const h1 = document.querySelector('h2')
h1.addEventListener('click',function(e){
console.log(e)
console.log(e,e.target)
})
//delete 点击按钮 删除按钮的父级元素
const aBtn = document.querySelectorAll('.delete')
for(let i=0;i< aBtn.length;i++){
    aBtn[i].addEventListener( "click",function(e){
        // console.log(e.target.parentElement)
        const oLi = e.target.parentElement
        oLi.parentElement.removeChild(oLi)
    })
}
//绑定
const oInput = document.querySelector('#search-books input')
oInput.addEventListener('keyup',(e) => {
    const txt = e.target.value
    const aLi = oUl.querySelectorAll('li')

    for(let i=0;i<aLi.length;i++){
        const bookTitle = aLi[i].firstElementChild.innerHTML
        if(bookTitle.indexOf(txt) != -1){
            aLi[i].style.display = 'block'
        } else {
            aLi[i].style.display = 'none'
        }
    }
})












// const form2 = document.forms[ "add-book"]
// form2.addEventlistener("submit",(e)=>{
//     e.preventDefault()
//     const value = form2.querySelector("input")
//     const oLi = document.createElement("li")
//     const span1 = document.createElement("span")
//     const span2 = document.createElement("span")
// })

