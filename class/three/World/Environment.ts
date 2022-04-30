import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

class Environment extends WebGLSub {
	debugFolder!: { [key: string]: any }
	sunLight!: THREE.DirectionalLight
	environmentMap: { [key: string]: any } = {}

	constructor() {
		super()

		// Debug
		if (WebGL.debug.active) this.debugFolder = WebGL.debug.addFolder('environment')

		this.setSunLight()
		this.setEnvironmentMap()
	}

	setSunLight() {
		this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
		this.sunLight.castShadow = true
		this.sunLight.shadow.camera.far = 15
		this.sunLight.shadow.mapSize.set(1024, 1024)
		this.sunLight.shadow.normalBias = 0.05
		this.sunLight.position.set(3.5, 2, -1.25)
		WebGL.scene.add(this.sunLight)

		// Debug
		if (WebGL.debug.active) {
			this.debugFolder!.add(this.sunLight, 'intensity').name('sunLightIntensity').min(0).max(10).step(0.001)
			this.debugFolder!.add(this.sunLight.position, 'x').name('sunLightX').min(-5).max(5).step(0.001)
			this.debugFolder!.add(this.sunLight.position, 'y').name('sunLightY').min(-5).max(5).step(0.001)
			this.debugFolder!.add(this.sunLight.position, 'z').name('sunLightZ').min(-5).max(5).step(0.001)
		}
	}

	setEnvironmentMap() {
		this.environmentMap.intensity = 0.4
		this.environmentMap.texture = WebGL.resources.itemsLoaded['environmentMapTexture']
		this.environmentMap.texture.encoding = THREE.sRGBEncoding

		WebGL.scene.environment = this.environmentMap.texture

		this.environmentMap.updateMaterials = () => {
			WebGL.scene.traverse((child) => {
				if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
					child.material.envMap = this.environmentMap.texture
					child.material.envMapIntensity = this.environmentMap.intensity
					child.material.needsUpdate = true
				}
			})
		}
		this.environmentMap.updateMaterials()

		// Debug
		if (WebGL.debug.active) {
			this.debugFolder
				.add(this.environmentMap, 'intensity')
				.name('envMapIntensity')
				.min(0)
				.max(4)
				.step(0.001)
				.onChange(this.environmentMap.updateMaterials)
		}
	}
}

export default Environment
