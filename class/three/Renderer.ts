import * as THREE from 'three'

import WebGLSub from './WebGLSub'

class Renderer extends WebGLSub {
	instance: THREE.WebGLRenderer | null = null

	constructor() {
		super()

		this.instance
		this.setInstance()
	}

	setInstance() {
		this.instance = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
		})
		this.instance.physicallyCorrectLights = true
		this.instance.outputEncoding = THREE.sRGBEncoding
		this.instance.toneMapping = THREE.ACESFilmicToneMapping
		this.instance.toneMappingExposure = 0.8
		this.instance.shadowMap.enabled = true
		this.instance.shadowMap.type = THREE.PCFSoftShadowMap
		this.instance.setClearColor(0x222222, 1)
		this.instance.setSize(this.sizes.width, this.sizes.height)
		this.instance.setPixelRatio(this.sizes.pixelRatio)
	}

	onResize() {
		this.instance!.setSize(this.sizes.width, this.sizes.height)
		this.instance!.setPixelRatio(this.sizes.pixelRatio)
	}

	onUpdate() {
		this.instance!.render(this.scene, this.camera.instance!)
	}

	destroy() {
		this.instance!.dispose()
	}
}

export default Renderer
