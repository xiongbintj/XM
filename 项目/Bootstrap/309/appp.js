const slider = document.querySelector('.slider-container')
const slides = Array.from(slider.querySelectorAll('.slide'))
//定义点击的起始位置
let lastPos = 0
//定义滑动时的新位置
let currentPos = 0
//定义当前过度到哪个位置
let currentTranslate = 0
//定义上一个过度到哪个位置
let lastTranslate = 0
//定义当前的索引(是哪个SLDIE)
let currentIndex = 0
//定义动画的ID
let animationID = 0
//定义是否正在拖拽
let isDrag = false





slides.forEach((slide, index) => {
	slide.addEventListener('touchstart', touchStart(index)) //拖拽开始时
	slide.addEventListener('touchmove', touchMove) //处理拖拽
	slide.addEventListener('touchend', touchend) //释放拖拽

})
// window.oncontextmenu = function(ev){
//     ev.preventDefault()
//     return false
// }
//获取一些参数的初始值，发动动画
function touchStart(index) {
	
	return function(ev) {
		console.log(lastPos)
		lastPos = ev.touches[0].clientX//定义点击的起始位置
		currentIndex = index
		isDrag = true
		animationID = requestAnimationFrame(callback)
		
	}
}
//更新滑动时currentTranslate的值
function touchMove(ev) {
	currentPos = ev.touches[0].clientX//定义滑动时的新位置
	console.log(currentPos)
	currentTranslate = currentPos - lastPos + lastTranslate
	// currentTranslate = currentTranslate注意不能在这里修改状态不对
}

function touchend() {
	//让动画停止
	console.log(3333)
	isDrag = false
	cancelAnimationFrame(animationID)
	//确定过渡在哪里？也就是要确定手指离开屏幕时currentTranslate的值
	let result = currentTranslate - lastTranslate
	console.log(result)
	if (result < -150) currentIndex++
	if (result > 150) currentIndex--
	currentTranslate = -currentIndex * window.innerWidth//定义当前过度到哪个位置
	console.log(currentTranslate)
	slider.style.transform = `translateX(${currentTranslate}px)`
	console.log(currentTranslate)
	lastTranslate = currentTranslate
}

function callback() {
	slider.style.transform = `translateX(${currentTranslate}px)`
	requestAnimationFrame(callback)
}
