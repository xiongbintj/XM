//创建Qusetion(试题)构造函数
function Question(title, answers, correctAnswer) {
	this.title = title
	this.answers = answers
	this.correctAnswer = correctAnswer
}
//创建Quiz(试卷)构造函数
function Quiz(id, data) {
	this.container = document.querySelector(id)
	this.score = 0
	this.data = data
	this.dataIndex = 0
}
Quiz.prototype.createQuestion = function() {
	if (this.data.length === this.dataIndex) {
		let str = `<h1>你的分数：${this.score}</h1>`
		this.container.innerHTML = str
		console.log('已经做完了')
		// document.write("<h1>"+'分数为:'+this.score+"分"+ "</h1>")
	} else {
		const p = document.createElement('p')
		p.innerHTML = this.data[this.dataIndex].title
		const ul = document.createElement('ul')
		for (let i = 0; i < 4; i++) {
			const li = document.createElement('li')
			li.innerHTML = this.data[this.dataIndex].answers[i]
			let This = this
			li.onclick = function(ev) {
				let myAnswer = ev.target.innerText
				This.countScore(myAnswer)
				This.dataIndex++
				This.container.innerHTML = ''
				This.createQuestion()
			}
			ul.appendChild(li)
		}
		this.container.appendChild(p)
		this.container.appendChild(ul)
	}
}
Quiz.prototype.countScore = function(answers) { //获取分数
	if (answers === this.data[this.dataIndex].correctAnswer) {
		this.score++
	}
}
const questions = [
	new Question('1.哪一门语言不属于前端范畴？', ['Js', 'css', 'HTML', 'Java'], 'Java'),
	new Question('2.哪一门语言不属于前端范畴？', ['Js', 'css', 'HTML', 'Java'], 'Java'),
	new Question('3.哪一门语言不属于前端范畴？', ['Js', 'css', 'HTML', 'Java'], 'Java'),
	new Question('4.哪一门语言不属于前端范畴？', ['Js', 'css', 'HTML', 'Java'], 'Java'),
	new Question('5.哪一门语言不属于前端范畴？', ['Js', 'css', 'HTML', 'Java'], 'Java')
]
const quiz1 = new Quiz('#quiz1', questions)
quiz1.createQuestion()
// const quiz2 = new Quiz('#quiz2', questions)
