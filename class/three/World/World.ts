import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import Floor from '@/class/three/World/Floor'
import Fox from '@/class/three/World/Fox'
import Environment from '@/class/three/World/Environment'

class World extends WebGLSub {
	floor: Floor | null = null
	fox: Fox | null = null
	environment: Environment | null = null

	constructor() {
		super()

		// Wait for resources
		WebGL.resources.addEventListener('resourcesLoaded', () => this.onResourcesLoaded())
	}

	onResourcesLoaded() {
		console.log('Resources loaded')
		this.resourcesLoaded = true
		this.floor = new Floor()
		this.fox = new Fox()
		this.environment = new Environment()
	}

	onUpdate() {
		const { deltaTime } = WebGL.time
		if (!this.resourcesLoaded) return
		this.fox && this.fox.update(deltaTime)
	}
}

export default World
