import * as THREE from 'three'
import WebGL from '@/class/three/WebGL'

import vertexShader from '@/class/three/shaders/terrain/vertex.glsl'
import fragmentShader from '@/class/three/shaders/terrain/fragment.glsl'

class Terrain {
	mesh: THREE.Mesh
	uniforms = {
		uColor: {
			value: new THREE.Color(0x234938),
		},
		uHeightMap: {
			value: WebGL.resources.itemsLoaded['texture1'],
		},
	}
	constructor() {
		this.createPlane()
	}

	createPlane() {
		const geometry = new THREE.PlaneGeometry(5, 5, 100, 100)
		const material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader,
		})
		this.mesh = new THREE.Mesh(geometry, material)
		this.mesh.rotation.x = -Math.PI / 2
		WebGL.scene.add(this.mesh)
	}
}

export default Terrain
