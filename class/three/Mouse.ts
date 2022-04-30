import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

class Mouse extends WebGLSub {
	position: THREE.Vector2 = new THREE.Vector2(0)
	normalizedPosition: THREE.Vector2 = new THREE.Vector2(-1, -1)

	timeoutMouseMove = null
	isMoving: boolean = false

	constructor() {
		super()

		this.setEvents()
	}

	onMouseMove(e: MouseEvent) {
		this.isMoving = true
		this.position.set(e.clientX, e.clientY)
		this.normalizedPosition.set((e.clientX / WebGL.sizes.width) * 2 - 1, -(e.clientY / WebGL.sizes.height) * 2 + 1)
	}

	onMouseStop() {
		this.isMoving = false
	}

	setEvents = () => {
		window.addEventListener('mousemove', (e: MouseEvent) => {
			this.onMouseMove(e)

			// Stop mousemove event after 0.3s
			// clearTimeout(this.timeoutMouseMove)
			// this.timeoutMouseMove = setTimeout(() => this.onMouseStop(), 300)

			this.dispatchEvent({
				type: 'mousemove',
			})
		})
	}
}

export default Mouse
