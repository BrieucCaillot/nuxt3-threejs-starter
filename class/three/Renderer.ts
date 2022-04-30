import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

class Renderer extends WebGLSub {
	instance: THREE.WebGLRenderer | null = null

	constructor() {
		super()

		this.instance
		this.setInstance()
	}

	setInstance() {
		this.instance = new THREE.WebGLRenderer({
			canvas: WebGL.canvas,
			antialias: true,
		})
		this.instance.physicallyCorrectLights = true
		this.instance.outputEncoding = THREE.sRGBEncoding
		this.instance.toneMapping = THREE.ACESFilmicToneMapping
		this.instance.toneMappingExposure = 0.8
		this.instance.shadowMap.enabled = true
		this.instance.shadowMap.type = THREE.PCFSoftShadowMap
		this.instance.setClearColor(0x222222, 1)
		this.instance.setSize(WebGL.sizes.width, WebGL.sizes.height)
		this.instance.setPixelRatio(WebGL.sizes.pixelRatio)
	}

	onResize() {
		this.instance!.setSize(WebGL.sizes.width, WebGL.sizes.height)
		this.instance!.setPixelRatio(WebGL.sizes.pixelRatio)
	}

	onUpdate() {
		this.instance!.render(WebGL.scene, WebGL.camera.instance!)
	}

	destroy() {
		this.instance!.dispose()
	}
}

export default Renderer
