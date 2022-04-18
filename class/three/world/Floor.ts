import * as THREE from 'three'
import WebGL from '@/class/three/WebGL'

class Floor {
	webGL: WebGL

	scene: THREE.Scene
	geometry!: THREE.CircleGeometry
	material!: THREE.MeshBasicMaterial
	mesh!: THREE.Mesh

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene

		this.setGeometry()
		this.setMaterial()
		this.setMesh()
	}

	setGeometry() {
		this.geometry = new THREE.CircleGeometry(5, 64)
	}

	setMaterial() {
		this.material = new THREE.MeshBasicMaterial({
			color: 0xffffff,
		})
	}

	setMesh() {
		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.mesh.rotation.x = -Math.PI * 0.5
		this.mesh.receiveShadow = true
		this.mesh.name = 'floor'
		this.scene.add(this.mesh)
	}
}

export default Floor
