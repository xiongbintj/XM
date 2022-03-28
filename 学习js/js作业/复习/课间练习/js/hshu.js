//obj:运动对象 attr:属性 target:目标点（正负） step:步长 speed:速度 callback:回调函数
function domove(obj,attr,target,step,speed,callback){
 step = parseInt(getComputedStyle(obj)[attr]) < target ? step : -step
     clearInterval(obj.timer)
     obj.timer = setInterval(function(){
      let oLeft = parseInt(getComputedStyle(obj)[attr])
      if(oLeft == target){
       clearInterval(obj.timer)
      }
      obj.style[attr] = oLeft + step + 'px'
	  if(oLeft == target){
	  	clearInterval(obj.timer) 
	  	callback && callback()
	  }
     },speed)
    }

//抖动
function theDou(obj,attr,fallback){
	let arr = [20, -20, 18, -18, 16, -16, 14, -14, 12, -12, 10, -10, 8, -8, 6, -6, 4, -4, 2, -2, 0, -0] 
	let finished = false
	let timer = null
	let p = 0
	let n = 0
	
	clearInterval(timer)
	timer = setInterval(dou,50)
	function dou(){
		if(!finished){
			p = parseInt(getComputedStyle(oBtn)[attr])
		} else {
			return
		}
		obj.style[attr] = p + arr[n] + 'px'
		n++
		if(n === arr.length){
			clearInterval(timer)
			n = 0
			finished = true
			fallback && fallback()
		}
	}
}

// 1转01
function toTwo(n){
	return (n<10) ? '0' + n : '' + n
}