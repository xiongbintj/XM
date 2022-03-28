//获取基于传入元素的鼠标的坐标
let C = {}
C.getMousePos = function(ele) {
	let mouse = {
		x: 0,
		y: 0
	}
	ele.addEventListener('mousemove', function(ev) {
		let {
			pageX,
			pageY,
			target
		} = ev
		let {
			left,
			top
		} = target.getBoundingClientRect()
		mouse.x = pageX - left
		mouse.y = pageY - top
	})
	return mouse
}
//球
class Ball {
	constructor(props) {
		this.x = 0
		this.y = 0
		this.r = 20
		this.scaleX = 1
		this.scaleY = 1
		this.alpha = 1
		this.fillStyle = 'red'
		this.strokeStyle = "blue"
		Object.assign(this, props)
		return this
	}
	render(ctx) {

		let {
			x,
			y,
			r,
			scaleX,
			scaleY,
			alpha,
			fillStyle,
			strokeStyle
		} = this
		ctx.save()
		ctx.translate(x, y)
		ctx.scale(scaleX, scaleY)
		ctx.fillStyle = fillStyle
		ctx.strokeStyle = strokeStyle
		// ctx.save()
		ctx.beginPath()
		ctx.arc(0, 0, r, 0, 2 * Math.PI, false)
		ctx.fill()
		ctx.stroke()
		ctx.restore()
		return this
	}
 isInCircle(mouse){
return this.r >= Math.sqrt(Math.pow((mouse.x - this.x),2) + Math.pow((mouse.y - this.y),2))
    }
}