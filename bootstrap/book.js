const Book = function(bname, bauthor, bisbn) {
	this.bname = bname
	this.bauthor = bauthor
	this.bisbn = bisbn
}

//我们需要一个DOM对象：UI对象
const Ui = function() {}
Ui.prototype.addBook = function(book) { //添加书籍……
	const tBody = document.querySelector(".b-list")
	const row = document.createElement('tr')
	row.innerHTML = `
		<td>${book.bname}</td>
		<td>${book.bauthor}</td>
		<td>${book.bisbn}</td>
		<td><a class ="delete" href="#">删除</a></td>
		`
	tBody.appendChild(row)
}
Ui.prototype.deleteBook = function(ev) {//删除
	if (ev.target.className == "delete") {
		ev.target.parentElement.parentElement.remove()
	}
}
Ui.prototype.showAlert = function(msg) {//文字提示
	const div = document.createElement('div')//创建一个对象div
	div.className = 'msg'//div的名称
	div.innerHTML = msg //div的内容
	const container = document.querySelector('.container')//获取元素(声明变量)
	const form = document.querySelector('#b-form')
	container.insertBefore(div,form)//向列表前插入一个项目
	setTimeout(function() {
		container.querySelector('.msg').remove()//remove() 方法移除被选元素
	}, 3000)
}

//submit事件
const bookForm = document.querySelector('#b-form')
bookForm.addEventListener('submit', function(ev) {//向指定元素添加事件句柄(事件监听)
	ev.preventDefault() //阻止默认操作(如果事件)
	//收集数据
	const bName = document.querySelector('#b-name').value
	const bAuthor = document.querySelector('#b-author').value
	const bISBN = document.querySelector('#b-isbn').value

	//向DOM中添加数据(修改页面)Ui()构造函数
	const book = new Book(bName, bAuthor, bISBN)
	const ui = new Ui()
	if (bName == '' || bAuthor == "" || bISBN == '') {//文字提示
		ui.showAlert('不能为空') //该方法：提示信息
	} else {
		ui.addBook(book) //该方法：动态的创建标签插入到DOM
		ui.showAlert("书籍已添加") //该方法：提示信息
	}
})


//click事件
const bookList = document.querySelector(".b-list")
bookList.addEventListener("click", function(ev) {
	const ui = new Ui()

	ui.deleteBook(ev)
})
