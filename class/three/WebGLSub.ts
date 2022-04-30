import * as THREE from 'three'

class WebGLSub extends THREE.EventDispatcher {
	store: {
		resourcesLoaded: boolean
	}

	constructor() {
		super()

		this.store = {
			resourcesLoaded: false,
		}
	}
}

export default WebGLSub
