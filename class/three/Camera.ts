import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import WebGLSub from '@/class/three/WebGLSub'

class Camera extends WebGLSub {
	instance: THREE.PerspectiveCamera | null = null
	controls: OrbitControls | null = null

	constructor() {
		super()

		this.setInstance()
		this.setControls()
	}

	setInstance() {
		this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 1, 1000)
		this.instance.position.set(6, 4, 8)
		this.scene.add(this.instance)
	}

	setControls() {
		this.controls = new OrbitControls(this.instance!, this.canvas)
		this.controls.enableDamping = true
	}

	onResize() {
		this.instance!.aspect = this.sizes.width / this.sizes.height
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
