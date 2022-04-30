import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import { EntitiesLayer } from '@/constants/ENTITIES'

class Raycast extends WebGLSub {
	raycaster: THREE.Raycaster = new THREE.Raycaster()
	pointer: THREE.Vector2 = new THREE.Vector2(-10, -10)

	constructor() {
		super()
	}

	onMouseMove() {
		this.pointer.set(WebGL.mouse.normalizedPosition.x, WebGL.mouse.normalizedPosition.y)
	}

	onUpdate() {
		if (!WebGL.mouse.isMoving) return
		this.raycaster.setFromCamera(this.pointer, WebGL.camera.instance)

		// calculate objects intersecting the picking ray
		const intersects = this.raycaster.intersectObjects(WebGL.scene.children)

		for (let i = 0; i < intersects.length; i++) {
			// console.log(intersects[i].object.name)
			const object = intersects[i].object as THREE.Mesh
			if (object.name == 'CUBE') {
				object.material.uniforms.uColor.value = new THREE.Color(0xff0000)
			}
		}
	}

	setLayers(layerId: EntitiesLayer) {
		this.raycaster.layers.set(layerId)
	}
}

export default Raycast
