function doMove(obj,attr,target,step,speed,callback){//封装函数另外命名属性名称
	step = parseInt(getComputedStyle(obj)[attr]) <  target  ?  step : -step
	clearInterval(obj.timer)定时器
	obj.timer = setInterval(function(){{//按照指定的周期（以毫秒计）来调用函数或计算表达式 
		let oLeft = parseInt(window.getComputedStyle(obj)[attr])
		if(oLeft > target && step > 0 || oLeft < target && step < 0){
			oLeft = target //条件语句
		}
		obj.style[attr] = oLeft + step + 'px'
		if(oLeft == target){  //条件语句
			clearInterval(obj.timer) //清除
			callback&&callback()//三元操作符
		}
	},speed)//周期（以毫秒计）
}