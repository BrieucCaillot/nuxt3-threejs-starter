import WebGLSub from '@/class/three/WebGLSub'

class Mouse extends WebGLSub {
	x: number = 0
	y: number = 0

	constructor() {
		super()

		this.setEvents()
	}

	onMouseMove(e: MouseEvent) {
		this.x = e.clientX
		this.y = e.clientY
	}

	setEvents = () => {
		window.addEventListener('mousemove', (e: MouseEvent) => {
			this.x = e.clientX / this.sizes.width
			this.y = e.clientY / this.sizes.height

			this.dispatchEvent({
				type: 'mousemove',
			})
		})
	}
}

export default Mouse
