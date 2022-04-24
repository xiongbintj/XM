//1.右侧导航高度自适应
(function() {
	//获取元素
	const navContaine = document.querySelector('#nav') //大容器
	const navList = document.querySelector('.navList') //小容器
	let ratio = (navContaine.clientHeight / navList.offsetHeight) //视口高除以元素的高度ong't
	navList.style.transform = `scale(${ratio})` //元素比例
})();

//2.点击右侧li时修改背景色，让左侧对应的dt跳转到目标
(function() { //函数自执行
	const navList = document.querySelector('.navList')
	const navLi = navList.querySelectorAll("li")
	let ele
	//2.1为navList元素注册事件处理函数
	navList.addEventListener('touchstart', function(ev) {
		ele = ev.target //ev.target 属性返回哪个 DOM 元素触发了事件
		changeBy(ev.target) //2.11点击右侧li时修改背景色，
		scrollToY(ev.target) //让左侧对应的dt跳转到目标
		// console.log(ev)
	});

	function changeBy(ele) { //2.11点击右侧li时修改背景色，
		for (let i = 1; i < navLi.length; i++) {
			navLi[i].classList.remove('focus') //删除上一个
		}
		ele.classList.add('focus') //点击右侧li时修改背景色(添加class的名称为 focus)，
	}

	function scrollToY(ele) {//3.让左侧对应的dt跳转到目标
		const dt = getDt(ele)
		const dtY = getDtY(dt)
		
		window.scrollTo(0, dtY);//scrollTo() 方法可把内容滚动到指定的坐标。

		function getDt(ele) {//3.1找到元素父级元素
			let i = ele.dataset.index
			console.log(i)
			const dt = document.querySelector(`[data-id='${i}']`)

			return dt //return 语句会终止函数的执行并返回函数的值。
		}

		function getDtY(ele) {//3.2点击左侧对应的dt跳转到目标
			//拿到滚动条的滚动距离
			const scrollY = window.scrollY//文档从顶部开始滚动过的像素值
			//拿到dt的视口坐标
			const dtY = ele.getBoundingClientRect().top
			console.log(scrollY )
			console.log(dtY)
			
			return scrollY + dtY//return 语句会终止函数的执行并返回函数的值。
			
		}
	}

	navList.addEventListener('touchmove', function(ev) {

	});
	navList.addEventListener('touchend', function(ev) {

	});
})()
