import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'

class WebGLSub extends THREE.EventDispatcher {
	resourcesLoaded: boolean = false

	constructor() {
		super()
	}
}

export default WebGLSub
