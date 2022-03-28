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
	 constructor(props){
		 this.x=0
		 this.y=0
		 this.w=60
		 this.h=30
		 this.rotation = 0;
		 this.fillStyle ='red'
		 this.strokeStyle ='blue'
		 Object.assign(this,props)
		 return this
	 }
	 createPath(ctx){//绘制箭头
		let {w,h} = this
		ctx.beginPath() //发起路径
		ctx.moveTo(-w/2, -h/4) //路径发起点：从哪里开始，x,y指定位置
		ctx.lineTo(w/10, -h/4)// 方法添加一个新点，然后创建从该点到画布中最后指定点的线条
		ctx.lineTo(w/10, -h/2)
		ctx.lineTo(w/2, 0)
		ctx.lineTo(w/10, h/2)
		ctx.lineTo(w/10, h/4)
		ctx.lineTo(-w/2, h/4)
		ctx.closePath() //闭合路径
		ctx.stroke() 
		ctx.fill()
		return this
	 }
	render(ctx){
		let {fillStyle,rotation,strokeStyle,x,y} = this
		ctx.save()
		ctx.fillStyle = fillStyle
		ctx.strokeStyle = strokeStyle
		// ctx.rotate(rotation)
		ctx.translate(x,y)
		ctx.rotate(rotation)
		this.createPath(ctx) //渲染之后调用出来
		ctx.restore()
		return this
	}
}
