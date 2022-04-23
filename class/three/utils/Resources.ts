import * as THREE from 'three'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { Source, sources as _sources } from '@/constants/SOURCES'

class Resources extends THREE.EventDispatcher {
	sources: Source[] = _sources
	loaders: {
		gltfLoader: GLTFLoader
		textureLoader: THREE.TextureLoader
		cubeTextureLoader: THREE.CubeTextureLoader
	}
	itemsLoaded: [key: string, value: GLTF | THREE.Texture | THREE.CubeTexture][] = []
	toLoad: number
	totalLoaded: number

	constructor() {
		super()

		this.loaders = {
			gltfLoader: new GLTFLoader(),
			textureLoader: new THREE.TextureLoader(),
			cubeTextureLoader: new THREE.CubeTextureLoader(),
		}
		this.itemsLoaded = []
		this.toLoad = this.sources.length
		this.totalLoaded = 0

		this.startLoading()
	}

	startLoading() {
		// Load each source
		for (const source of this.sources) {
			if (source.type === 'gltfModel') {
				this.loaders.gltfLoader.load(source.path as string, (file) => {
					this.sourceLoaded(source, file)
				})
			} else if (source.type === 'texture') {
				this.loaders.textureLoader.load(source.path as string, (file) => {
					this.sourceLoaded(source, file)
				})
			} else if (source.type === 'cubeTexture') {
				this.loaders.cubeTextureLoader.load(source.path as [], (file) => {
					this.sourceLoaded(source, file)
				})
			}
		}
	}

	sourceLoaded(source: Source, file: GLTF | THREE.Texture | THREE.CubeTexture) {
		this.itemsLoaded[source.name] = file

		this.totalLoaded++

		if (this.totalLoaded === this.toLoad) {
			this.dispatchEvent({
				type: 'resourcesLoaded',
			})
		}
	}
}

export default Resources
