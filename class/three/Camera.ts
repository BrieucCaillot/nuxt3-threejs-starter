import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import WebGL from '@/class/three/WebGL'
import Sizes from '@/class/three/utils/Sizes'

class Camera {
	webGL: WebGL

	instance: THREE.PerspectiveCamera | null = null
	controls: OrbitControls | null = null

	sizes: Sizes
	scene: THREE.Scene
	canvas: HTMLCanvasElement

	constructor() {
		this.webGL = new WebGL()

		this.sizes = this.webGL.sizes
		this.scene = this.webGL.scene
		this.canvas = this.webGL.canvas

		this.setInstance()
		this.setControls()
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(35, Number(this.sizes.width) / Number(this.sizes.height), 1, 1000)
		this.instance.position.set(6, 4, 8)
		this.scene.add(this.instance)
	}

	setControls() {
		this.controls = new OrbitControls(this.instance!, this.canvas)
		this.controls.enableDamping = true
	}

	onResize() {
		this.instance!.aspect = Number(this.sizes.width) / Number(this.sizes.height)
		this.instance!.updateProjectionMatrix()
	}

	onUpdate() {
		this.controls!.update()
	}

	destroy() {
		this.controls!.dispose()
	}
}

export default Camera
