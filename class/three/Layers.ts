import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import { EntitiesLayer } from '@/constants/ENTITIES'

class Layers extends WebGLSub {
	activeLayers: EntitiesLayer[] = [EntitiesLayer.DEFAULT]

	constructor() {
		super()

		// this.updateLayers([EntitiesLayer.DEFAULT, EntitiesLayer.FOX, EntitiesLayer.CUBE])
	}

	async updateLayers(layers: EntitiesLayer[]) {
		this.activeLayers = layers

		// await new Promise<void>((resolve, reject) => {
		layers.forEach((layerId: number) => {
			WebGL.camera.enableLayers(layerId)
			WebGL.raycast.setLayers(layerId)
		})

		// 	resolve()
		// })

		// await this.dispatchEvent({
		// 	type: 'activeLayersUpdated',
		// })
	}
}

export default Layers
