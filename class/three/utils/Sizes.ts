import * as THREE from 'three'

class Sizes extends THREE.EventDispatcher {
	width: number
	height: number
	pixelRatio: number
	aspect: number

	constructor() {
		super()

		this.width = window.innerWidth
		this.height = window.innerHeight
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)
		this.aspect = this.width / this.height

		this.setEvents()
	}

	setEvents = () => {
		window.addEventListener('resize', () => {
			this.width = window.innerWidth
			this.height = window.innerHeight
			this.pixelRatio = Math.min(window.devicePixelRatio, 2)
			this.aspect = this.width / this.height

			this.dispatchEvent({
				type: 'resize',
			})
		})
	}
}

export default Sizes
