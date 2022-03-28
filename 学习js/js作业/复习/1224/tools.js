	
	//获取元素
	function e(selector) {//e ele element selector
				return document.querySelector(selector)
			}
   //获取一组元素
	function es(selector) {
				return document.querySelectorAll(selector)
			}
	// 获取元素属性值
	function getStyle(ele,attr){
		if(ele.currentStyle){
			return ele.currentStyle()[attr]
		}else{
			return	getComputedStyle(ele)[attr]
		}
	}
	//选项卡
	function fnTabs(ele){
		const oContainer= document.querySelector(ele)
		const aBnt= document.querySelectorAll('.tab')
		const apannel= document.querySelectorAll('.pannel')
		let  last = 0
			for (let i = 0; i < aBnt.length; i++) {
				aBnt[i].onclick = function() {
					aBnt[last].classList.remove("active")
					aBnt[i].classList.add("active")
					apannel[last].classList.remove("active")
					apannel[i].classList.add("active")
					last = i
				}
			}
			}