import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import Sizes from '@/class/three/utils/Sizes'
import Camera from '@/class/three/Camera'

class Renderer {
	webGL: WebGL

	instance: THREE.WebGLRenderer | null = null

	canvas: HTMLCanvasElement
	sizes: Sizes
	scene: THREE.Scene
	camera: Camera

	constructor() {
		this.webGL = new WebGL()

		this.instance

		this.canvas = this.webGL.canvas
		this.sizes = this.webGL.sizes
		this.scene = this.webGL.scene
		this.camera = this.webGL.camera

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
		this.instance.setClearColor(0x000)
		this.instance.setSize(this.sizes.width as number, this.sizes.height as number)
		this.instance.setPixelRatio(this.sizes.pixelRatio as number)
	}

	onResize() {
		this.instance!.setSize(this.sizes.width as number, this.sizes.height as number)
		this.instance!.setPixelRatio(this.sizes.pixelRatio as number)
	}

	onUpdate() {
		this.instance!.render(this.scene, this.camera.instance!)
	}

	destroy() {
		this.instance!.dispose()
	}
}

export default Renderer
