import WebGL from '@/class/three/WebGL'
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
			this.x = e.clientX / WebGL.sizes.width
			this.y = e.clientY / WebGL.sizes.height

			this.dispatchEvent({
				type: 'mousemove',
			})
		})
	}
}

export default Mouse
