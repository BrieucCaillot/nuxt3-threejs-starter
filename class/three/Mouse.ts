import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import Sizes from '@/class/three/utils/Sizes'

class Mouse extends THREE.EventDispatcher {
	webGL: WebGL

	sizes: Sizes
	x: number = 0
	y: number = 0

	constructor() {
		super()

		this.webGL = new WebGL()
		this.sizes = this.webGL.sizes

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
