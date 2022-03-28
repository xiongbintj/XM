//https://randomuser.me/api
const data = {"results": [
{"gender": "女","name": {"title": "Mademoiselle","first": "刘","last": "丽丽"}},
{"gender": "男","name": {"title": "Mademoiselle","first": "张","last": "老板"}},
{"gender": "女","name": {"title": "Mademoiselle","first": "王","last": "兰兰"}},
{"gender": "男","name": {"title": "Mademoiselle","first": "孙","last": "悟空"}},
{"gender": "女","name": {"title": "Mademoiselle","first": "糖","last": "三藏"}},
]}
//获取元素


//初始化
const oName = data.results[parseInt(Math.random()*5)]
console.log(oName)