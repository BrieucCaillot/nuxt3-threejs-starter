import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import { EntitiesName } from '@/constants/ENTITIES'

class Floor extends WebGLSub {
	geometry!: THREE.CircleGeometry
	material!: THREE.MeshStandardMaterial
	mesh!: THREE.Mesh
	textures: { [key: string]: THREE.Texture } = {}

	constructor() {
		super()

		this.setGeometry()
		this.setTextures()
		this.setMaterial()
		this.setMesh()
	}

	setGeometry() {
		this.geometry = new THREE.CircleGeometry(5, 64)
	}

	setTextures() {
		this.textures.base = WebGL.resources.itemsLoaded['grassColorTexture']
		this.textures.base.encoding = THREE.sRGBEncoding
		this.textures.base.repeat.set(1.5, 1.5)
		this.textures.base.wrapS = THREE.RepeatWrapping
		this.textures.base.wrapT = THREE.RepeatWrapping

		this.textures.normal = WebGL.resources.itemsLoaded['grassNormalTexture']
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
		this.mesh.name = EntitiesName.FLOOR
		this.mesh.receiveShadow = true
		WebGL.scene.add(this.mesh)
	}

	update() {}
}

export default Floor
