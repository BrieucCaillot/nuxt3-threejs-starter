import * as THREE from 'three'
import WebGL from '@/class/three/WebGL'

import vertexShader from '@/class/three/shaders/plane/vertex.glsl'
import fragmentShader from '@/class/three/shaders/plane/fragment.glsl'

class Plane {
	mesh: THREE.Mesh
	uniforms = {
		uColor: {
			value: new THREE.Color(0x12ff11),
		},
		uResolution: {
			value: new THREE.Vector2(WebGL.sizes.width, WebGL.sizes.height),
		},
		uMouse: {
			value: new THREE.Vector3(),
		},
		uImage: {
			value: WebGL.resources.itemsLoaded['betvoraTexture'],
		},
		uDisp: {
			value: WebGL.resources.itemsLoaded['noise1Texture'],
		},
		uText: {
			value: WebGL.resources.itemsLoaded['textTexture'],
		},
		uTime: {
			value: 0,
		},
		uProgress: {
			value: 0,
		},
	}

	constructor() {
		this.createMesh()
	}

	createMesh() {
		const geometry = new THREE.PlaneBufferGeometry(1, 1, 10, 10)
		const material = new THREE.ShaderMaterial({
			uniforms: this.uniforms,
			vertexShader,
			fragmentShader,
		})
		// const material = new THREE.MeshStandardMaterial({
		// 	map: WebGL.resources.itemsLoaded['albedoTexture'],
		// 	normalMap: WebGL.resources.itemsLoaded['normalTexture'],
		// 	aoMap: ormMap,
		// 	roughnessMap: ormMap,
		// 	metalnessMap: ormMap,
		// 	metalness: 0.1,
		// 	roughness: 0.8,
		// 	normalScale: new THREE.Vector2(1),
		// })
		this.mesh = new THREE.Mesh(geometry, material)
		this.mesh.name = 'PLANE'
		WebGL.scene.add(this.mesh)

		const folder = WebGL.debug.addFolder('Plane')
		folder.add(this.uniforms.uProgress, 'value', 0, 1).step(0.1).listen()
	}

	update(time: number) {
		const { deltaTime } = WebGL.time
		this.mesh.material.uniforms.uTime.value += 0.05
	}
}

export default Plane
