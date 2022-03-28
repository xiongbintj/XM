//https://randomuser.me/api
const data = {"results": [
{"gender": "女","name": {"title": "Mademoiselle","first": "刘","last": "丽丽"}},
{"gender": "男","name": {"title": "Mademoiselle","first": "张","last": "老板"}},
{"gender": "女","name": {"title": "Mademoiselle","first": "王","last": "兰兰"}},
{"gender": "男","name": {"title": "Mademoiselle","first": "孙","last": "悟空"}},
{"gender": "女","name": {"title": "Mademoiselle","first": "糖","last": "三藏"}},
]}

//获取元素
const main = document.getElementById('main');
const addFuhaoBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const sortBtn = document.getElementById('sort');
const show100Btn = document.getElementById('show-millionaires');
const calcMoneyBtn = document.getElementById('calculate-wealth');
let arr = []

//创建用户
createFuhao()
createFuhao()
createFuhao()
function createFuhao(){
	const oName = data.results[parseInt(Math.random()*5)].name
	const oFuhao = {
		name:`${oName.first}${oName.last}`,
		money: parseInt(Math.random()*500000)
	}
	arr.push(oFuhao)
	render(arr)
}

//初始化
function render(Arr){
	main.innerHTML = '<h2><strong>姓名</strong>财富</h2>';
	Arr.forEach((v) => {
		const oDiv = document.createElement('div')
		oDiv.className = 'person'
		oDiv.innerHTML = `<strong>${v.name}</strong>${v.money}`
		main.appendChild(oDiv)
	})
}
//加倍财富arr.map()
function doubleMoney(){
	arr = arr.map( v => {
		return { name:v.name,money:v.money * 2}
	} ) 
	render(arr)
}
//富豪排行arr.sort()
function zaFuhao(){
	arr.sort((a, b) => b.money - a.money);
	render(arr);
}
//百万富豪筛选
function filterFuhao(){
	arr = arr.filter((v) => v.money > 1000000);
	render(arr)
}
//求和
function totalMoney(){
	const oResult = arr.reduce((total,v) => {return total += v.money},0)
	console.log(oResult)
	const oDiv = document.createElement('div')
	oDiv.innerHTML = `<h3>共计: <strong>${oResult}</strong></h3>`
	main.appendChild(oDiv)
}
addFuhaoBtn.addEventListener('click',createFuhao)
doubleBtn.addEventListener('click',doubleMoney)
sortBtn.addEventListener('click',zaFuhao)
show100Btn.addEventListener('click',filterFuhao)
calcMoneyBtn.addEventListener('click',totalMoney)
