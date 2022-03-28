function doMove(obj, attr, target, step, speed) {//封装函数另外命名属性名称
	step = parseInt(getComputedStyle(obj)[attr]) < target ? step : -step//将其转整让其下好运作
	clearInterval(obj.timer)//清除暂停
	obj.timer = setInterval(function() {//按照指定的周期（以毫秒计）来调用函数或计算表达式 //定时器
		let oLeft = parseInt(window.getComputedStyle(obj)[attr])
		if (oLeft > target && step > 0 || oLeft < target && step < 0) { //条件语句
			oLeft = target
		}
		obj.style[attr] = oLeft + step + 'px'//事件
		if (oLeft == target) { //条件语句
			clearInterval(obj.timer)//清除暂停
		}
	}, speed)//周期（以毫秒计）
}
