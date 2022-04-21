import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import Resources from '@/class/three/utils/Resources'

class Floor {
	webGL: WebGL

	scene: THREE.Scene
	resources: Resources
	geometry!: THREE.CircleGeometry
	material!: THREE.MeshStandardMaterial
	mesh!: THREE.Mesh
	textures: { [key: string]: THREE.Texture } = {}

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene

		this.resources = this.webGL.resources

		this.setGeometry()
		this.setTextures()
		this.setMaterial()
		this.setMesh()
	}

	setGeometry() {
		this.geometry = new THREE.CircleGeometry(5, 64)
	}

	setTextures() {
		this.textures.base = this.resources.itemsLoaded['grassColorTexture']
		this.textures.base.encoding = THREE.sRGBEncoding
		this.textures.base.repeat.set(1.5, 1.5)
		this.textures.base.wrapS = THREE.RepeatWrapping
		this.textures.base.wrapT = THREE.RepeatWrapping

		this.textures.normal = this.resources.itemsLoaded['grassNormalTexture']
		this.textures.normal.repeat.set(1.5, 1.5)
		this.textures.normal.wrapS = THREE.RepeatWrapping
		this.textures.normal.wrapT = THREE.RepeatWrapping
	}

	setMaterial() {
		this.material = new THREE.MeshStandardMaterial({
			map: this.textures.base,
			normalMap: this.textures.normal,
		})
	}

	setMesh() {
		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.mesh.rotation.x = -Math.PI * 0.5
		this.mesh.receiveShadow = true
		this.scene.add(this.mesh)
	}

	update() {}
}

export default Floor
