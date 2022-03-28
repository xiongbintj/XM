//https://randomuser.me/api
const data = {
	"results": [{
			"gender": "女",
			"name": {
				"title": "Mademoiselle",
				"first": "刘",
				"last": "亚丽"
			}
		},
		{
			"gender": "男",
			"name": {
				"title": "Mademoiselle",
				"first": "张",
				"last": "三疯"
			}
		},
		{
			"gender": "女",
			"name": {
				"title": "Mademoiselle",
				"first": "全",
				"last": "佳丽"
			}
		},
		{
			"gender": "男",
			"name": {
				"title": "Mademoiselle",
				"first": "孙",
				"last": "悟空"
			}
		},
		{
			"gender": "女",
			"name": {
				"title": "Mademoiselle",
				"first": "糖",
				"last": "三藏"
			}
		},
	]
}
//获取元素
const oMain = document.querySelector('#main')
const addRichBtn = document.querySelector('#add-user')
const doubleBtn = document.querySelector('#double')
const sortBtn = document.querySelector("#sort")
const filterBtn = document.querySelector('#show-millionaires')
// let oName = data.results[parseInt(Math.random()*5)].name
console.log(parseInt(Math.random() * 5))
let money = parseInt(Math.random() * 1000000)
console.log(money)
let arr = []

createRich()
createRich()
createRich()

function createRich() {
	let oName = data.results[parseInt(Math.random() * 5)].name
	let oRich = {
		name: `${oName.first}${oName.last}`,
		money: parseInt(Math.random() * 1000000)
	}
	arr.push(oRich)
	render(arr)
}
console.log(arr)
//初始化

function render(Arr) {
	oMain.innerHTML = '<h2><strong>姓名</strong>身价</h2>'
	Arr.forEach((v) => {
		const oDiv = document.createElement('div')
		oDiv.className = "person"
		oDiv.innerHTML = `<strong>${v.name}</strong>${v.money}`
		oMain.appendChild(oDiv)
	})
}

function doubleMoney() {
	arr = arr.map((v) => {
		return {
			name: v.name,
			money: v.money * 2
		}
	})
	render(arr)
}

function sortRich() {
	arr.sort(function(a, b) {
		return b.money - a.money
	})
	render(arr)
}

function filter100() {
	arr = arr.filter((v) => {
		return v.money > 1000000
	}) 
	render(arr)
}
//增加富豪
addRichBtn.addEventListener("click", createRich)
//增加财富
doubleBtn.addEventListener("click", doubleMoney)
//富豪排行榜
sortBtn.addEventListener("click", sortRich)
//仅百万显示
filterBtn.addEventListener("click", filter100)
