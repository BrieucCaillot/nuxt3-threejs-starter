import * as THREE from 'three'
import WebGL from '@/class/three/WebGL'

import vertexShader from '@/class/three/shaders/sphere/vertex.glsl'
import fragmentShader from '@/class/three/shaders/sphere/fragment.glsl'

class Sphere {
	mesh: THREE.Mesh
	uniforms = {
		uColor: {
			value: new THREE.Color(0, 0, 1),
		},
		uResolution: {
			value: new THREE.Vector2(WebGL.sizes.width, WebGL.sizes.height),
		},
		uTime: {
			value: 0,
		},
	}

	constructor() {
		this.createMesh()
	}

	createMesh() {
		const geometry = new THREE.SphereGeometry(2)
		const material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader,
		})
		this.mesh = new THREE.Mesh(geometry, material)
		WebGL.scene.add(this.mesh)
	}

	update(time: number) {
		const { deltaTime } = WebGL.time
		this.mesh.material.uniforms.uTime.value += 0.05
	}
}

export default Sphere
