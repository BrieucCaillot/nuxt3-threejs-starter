import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { SourceType, Source, sources as _sources } from '@/class/three/sources'

class Resources {
	sources: Source[] = _sources
	loaders:
		| {
				gltfLoader: GLTFLoader
				textureLoader: THREE.TextureLoader
				cubeTextureLoader: THREE.CubeTextureLoader
		  }
		| undefined

	constructor() {
		this.setLoaders()
	}

	setLoaders() {
		this.loaders = {
			gltfLoader: new GLTFLoader(),
			textureLoader: new THREE.TextureLoader(),
			cubeTextureLoader: new THREE.CubeTextureLoader(),
		}
	}
}

export default Resources
