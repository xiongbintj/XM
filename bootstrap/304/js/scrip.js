//1.定时器 2.transform=>translate() 移动

function fn() {
	//获取元素
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

	function mySider() {
		let timer = null //用定时器控制函数
		sliderBox.innerHTML += sliderBox.innerHTML
		len = sliderBox.children.length
		sliderBox.style.width = imgW * len + "px"
		console.log(len)
		autoplay()

		function autoplay() { //使用延迟控制移动图片的时间间隔
			timer = setInterval(function() {
				// console.log(n1)
				n1++
				n1 = n1 % dots.length //n==dost.length n1 =0 
				// n2 = -n1 * imgW
				switchImg() //移动图片
			}, 2000)
		}

		// function switchImg() {
		// 	n2 = -n1 * imgW //执行时要读取N2
		// 	sliderBox.style.transform = `translateX(${n2}px)` //执行时要读取N2
		// 	// console.log(n2)
		// 	sliderBox.style.transition = '1s' //过程控制在1S

		// 	for (let i = 0; i < dots.length; i++) {
		// 		dots[i].classList.remove('active')
		// 	}
		// 	dots[n1].classList.add('active')
		// }
		function switchImg() {
			n2 = -n1 * imgW //执行时要读取N2
			sliderBox.style.transform = `translateX(${n2}px)` //执行时要读取N2
			// console.log(n2)
			sliderBox.style.transition = '1s' //过程控制在1S
		
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
fn()



// preLoading()
// function preLoading() {
// 	//获取元素
// 	const onboarding = document.querySelector('.onboarding')
// 	const images = document.querySelectorAll('img')
// 	console.log(images)
// 	const arrUrl = []
// 	for (let i = 0; i < images.length; i++) {
// 		arrUrl.push(images[i].src)//push() 方法向数组末尾添加新项目,并返回新长度
// 	}//拿图片地址
// 	console.log(arrUrl)
// 	let imgAllLoaded = false//图片未加载
// 	let animationEnded = false//动画未加载
// 	let startTime = new Date().getTime()//动画开始时间
// 	let timer = null
// 	let num = 0
// 	for (let i = 0; i < arrUrl.length; i++) {
// 		let oImage = new Image()//构造函数、预加载
// 		oImage.src = arrUrl[i]
// 		oImage.onload = function() {//图片加载函数
// 			num++
// 			if (num == arrUrl.length) {//如果num等于数组的长度
// 				console.log('图片加载完成')
// 				imgAllLoaded = true//图片加载完成
// 			}
// 		}
// 	}

// 	onboarding.addEventListener('transitionend', function() {
// 		console.log(111)
// 		document.querySelector('.home').style.display = 'block'
// 		fn()
// 	})
// 	timer = setInterval(function() {
// 		if ((new Date().getTime() - startTime) >= 2000) {//现在的时间减去动画的时间
// 			 animationEnded = true//动画完成
// 			console.log(animationEnded)
// 		}
// 		if (animationEnded && imgAllLoaded) {
// 			onboarding.style.opacity = 0;//opacity不透明度,0为透明，1为不透明
// 			clearInterval(timer)
// 		}
// 	}, 1000)
// }
// 懒加载
// api:https://api.unsplash.com/
// photos:获取图片的接口
// page=1:页码：1
// per_page=10:每页十张图片
//获取ID client_id=3FzSIp3I7GOAqygcqEznknh5y5g4QA4P3vKUMHWRmSY
// const api = `https://api.unsplash.com/photos?page=1&per_page=10&client_id=3FzSIp3I7GOAqygcqEznknh5y5g4QA4P3vKUMHWRmSY`
lazyLoad()

function lazyLoad() {
	const oProduts = document.querySelector('.products')
	const oloader = document.querySelector('.loader')

	const getData = async function(page, per_page) {
		let api =
			`https://api.unsplash.com/photos?page=${page}&per_page=${per_page}&client_id=EZGq6C-TXQ0jhzf7TDspcdOHMHWplhKP39USCfX7gKM`
		const response = await fetch(api)
		//fetch API用于做HTTP请求开启一个请求并返回promise对象(promise原型对象)
		//fetch api 的 Response 接口呈现了对一次请求的响应数据

		if (!response.ok) {
			console.log(`错误：${response.status}`)
		}
		return await response.json() //promise对象

	}
	let result = getData(1, 10)

	const showData = function(data) {
		console.log(data)
		// data.then(data => {
		data.forEach(item => {
			const oDiv = document.createElement('div')
			const className = "product"
			oDiv.innerHTML = `<img src="${item.urls.thumb}" alt="">
			   <p>${item.user.username}</p>
			   <p>${item.updated_at}</p>
			   `

			oProduts.appendChild(oDiv)
		})
		// })
	}

	//showData(result)
	let total = 0
	let currentPage = 1
	let per_page = 10
	const isLoading = function(page, per_page, total) {
		// if (total == 0 || pege * per_pege < total) {

		// }

		return total == 0 || page * per_page <= total
	}

	const lodaData = async function(page, per_page) {
		oloader.classList.add('show') //加载器
		console.log(111)
		console.log(isLoading(currentPage, per_page, total))
		if (isLoading(currentPage, per_page, total)) {
			const response = await getData(page, per_page)
			console.log(response)
			showData(response)

			total = 30
			oloader.classList.remove('show') //加载器消失
		} else {
			oloader.classList.remove('show') //加载器消失
		}
	}
	document.body.addEventListener('scroll', () => {
		//获取元素
		console.log(111111)
		const scrollTop = document.body.scrollTop
		const clientHeight = document.body.clientHeight
		const scrollHeight = document.body.scrollHeight
		console.log(scrollTop + clientHeight >= scrollHeight)
		console.log(scrollTop, clientHeight, scrollHeight)
		if (scrollTop + clientHeight >= scrollHeight && isLoading(currentPage, per_page, total)) {

			currentPage++
			lodaData(currentPage, per_page, total) //第一次滑屏：currentPage=2
		} else {
			oloader.classList.remove('show')
		}
		console.log(currentPage)
		console.log(per_page)
		console.log(total)
	})
	//初始化
	lodaData(currentPage, per_page, total) //currentPage为1

}
