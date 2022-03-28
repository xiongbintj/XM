//示范：添加事件监听
// const h2 = document.querySelector('h2')
// h2.addEventListener('click',function(e){
// 	console.log(e,e.target)
// })

//delete btn
// const btns = document.querySelectorAll('#book-list .delete')
// Array.from(btns).forEach(function(btn){
// 	btn.addEventListener('click',function(e){
// 		console.log(e.target)
// 		const li = e.target.parentElement
// 		li.parentElement.removeChild(li)
// 	})
// })

//delete btn
const list = document.querySelector('#book-list ul');
// delete books
list.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

//示范阻止默认事件
// const a = document.querySelector('#page-banner a')
// a.addEventListener('click',function(e){
// 	e.preventDefault()
// 	console.log(e.target.textContent)
// })

//interact with forms
const form2 = document.forms['add-book']
form2.addEventListener('submit',(e) => {
	e.preventDefault()
	const value = form2.querySelector('input[type="text"]').value
	// console.log(value)

//create Element
const li = document.createElement('li')
const bookName = document.createElement('span')
const delBtn = document.createElement('span')
//设置内容和属性
bookName.innerHTML = value
delBtn.innerHTML = 'delete'
delBtn.className = 'delete'
bookName.className = 'name'
//append to document
li.appendChild(bookName)
li.appendChild(delBtn)
list.appendChild(li)
})

//hide all
const hideBtn = document.querySelector('#hide')
hideBtn.addEventListener('change',(e) => {
	if(hideBtn.checked){
		list.style.display = 'none'
	} else {
		list.style.display = 'block'
	}
})

//filter
const searchBar = document.forms[0].querySelector('input')
searchBar.addEventListener('keyup', (e) => {
	const txt = e.target.value
	const books = list.getElementsByTagName('li')
	Array.from(books).forEach(function(book){
		const title = book.firstElementChild.innerHTML 
		if(title.indexOf(txt) != -1 ){
			book.style.display = 'block'
		} else {
			book.style.display = 'none'
		}
	})
})