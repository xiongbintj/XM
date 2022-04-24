//获取基于传入元素的鼠标的坐标
			let C = {}
			C.getMousePos = function(ele) {
				let mouse = {x: 0,y: 0}
				ele.addEventListener('mousemove', function(ev) {
					let {pageX,	pageY,target} = ev
					let {left,top} = target.getBoundingClientRect()
					mouse.x = pageX - left
					mouse.y = pageY - top
				})
				return mouse
			}
			//箭头类
			class Arrow{
							   constructor(props) {
								   this.x=0
								   this.y=0
								   this.w=60
								   this.h=30
								   this.rotation = 0;
								   this.fillStyle ='red'
								   this.fillStroke ='black'
							   }
							   createPath(){
								   let {w,h} = this
								   ctx.beginPath() //发起路径
								   ctx.moveTo(20, 60) //路径发起点：从哪里开始，x,y指定位置
								   // ctx.lineTo(100, 100) // 方法添加一个新点，然后创建从该点到画布中最后指定点的线条
								   ctx.lineTo(80, 60)
								   ctx.lineTo(80, 50)
								   ctx.lineTo(120, 75)
								   ctx.lineTo(80, 100)
								   ctx.lineTo(80, 90)
								   ctx.lineTo(20, 90)
								   ctx.closePath() //闭合路径
								   ctx.stroke() 
							   }
							   render(){}
			}