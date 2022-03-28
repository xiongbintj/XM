//1.定时器 2.transform=>translate() 移动

function fn(){
	
	const sliderWin = document.querySelector('#slider')
	const sliderBox = document.querySelector('.slider-box')
	const imgW = sliderWin.offsetWidth //图片宽度
	console.log(sliderWin.offsetWidth)
	const dots = sliderWin.querySelectorAll('span')
	let n1 = 0
	let n2 = 0
	let x = 0
	let sliderBoxX = 0
	mySider()
	function mySider(){
		let timer = null //用定时器控制函数
		autoplay()
		function autoplay() {
			timer = setInterval(function() {
				n1++
				n1 = n1 % dots.length //n==dost.length n1 =0 
				// n2 = -n1 * imgW
				switchImg() //移动图片
			}, 2000)
		}
	
		function switchImg() {
			n2 = -n1 * imgW //执行时要读取N2
			sliderBox.style.transform = `translateX(${n2}px)` //执行时要读取N2
			console.log(n2)
			sliderBox.style.transition = '2s' //过程控制在1S
			
			for (let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('active')
			}
			dots[n1].classList.add('active')
		}
	
	
		sliderBox.addEventListener('touchstart', function(ev) { //手指触摸到屏膜
			clearInterval(timer)
			console.log(ev)
			ev = ev.changedTouches[0]
			x = ev.pageX //触摸时候的位置
			sliderBoxX = n2
		})
		sliderBox.addEventListener('touchmove', function(ev) { //手指在屏膜滑动时
			ev = ev.changedTouches[0]
			let dis = ev.pageX - x
			n2 = sliderBoxX + dis
			sliderBox.style.transform = `translateX(${n2}px)`
		})
		sliderBox.addEventListener('touchend', function(ev) { //手指离开屏膜时
			n1 = -Math.round(n2 / imgW) //滑动的距离除以图片的宽度
			console.log(n1)
			if (n1 < 0) { //滑动的距离除以图片的宽度值小与0
				n1 = 0
			}
			if (n1 > dots.length - 1) { //滑动的距离除以图片的宽度值大与图片长度-1
				n = dots.length - 1
			}
			switchImg()
			autoplay()
		})
	
	}
}




preLoading()
function preLoading() {
	//获取元素
	const onboarding = document.querySelector('.onboarding')
	const images = document.querySelectorAll('img')
	console.log(images)
	const arrUrl = []
	for (let i = 0; i < images.length; i++) {
		arrUrl.push(images[i].src)//push() 方法向数组末尾添加新项目,并返回新长度
	}//拿图片地址
	console.log(arrUrl)
	let imgAllLoaded = false//图片未加载
	let animationEnded = false//动画未加载
	let startTime = new Date().getTime()//动画开始时间
	let timer = null
	let num = 0
	for (let i = 0; i < arrUrl.length; i++) {
		let oImage = new Image()//构造函数、预加载
		oImage.src = arrUrl[i]
		oImage.onload = function() {//图片加载函数
			num++
			if (num == arrUrl.length) {//如果num等于数组的长度
				console.log('图片加载完成')
				imgAllLoaded = true//图片加载完成
			}
		}
	}

	onboarding.addEventListener('transitionend', function() {
		console.log(111)
		document.querySelector('.home').style.display = 'block'
		fn()
	})
	timer = setInterval(function() {
		if ((new Date().getTime() - startTime) >= 2000) {//现在的时间减去动画的时间
			 animationEnded = true//动画完成
			console.log(animationEnded)
		}
		if (animationEnded && imgAllLoaded) {
			onboarding.style.opacity = 0;//opacity不透明度,0为透明，1为不透明
			clearInterval(timer)
		}
	}, 1000)
}
