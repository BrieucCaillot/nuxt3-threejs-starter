import * as THREE from 'three'
import { EventDispatcher } from 'three'

class Sizes extends EventDispatcher {
	width: Number
	height: Number
	pixelRatio: Number

	constructor() {
		super()

		this.width = window.innerWidth
		this.height = window.innerHeight
		this.pixelRatio = Math.min(window.devicePixelRatio, 2)

		this.setEvents()
	}

	setEvents = () => {
		window.addEventListener('resize', () => {
			this.width = window.innerWidth
			this.height = window.innerHeight
			this.pixelRatio = Math.min(window.devicePixelRatio, 2)

			this.dispatchEvent({
				type: 'resize',
			})
		})
	}
}

export default Sizes
