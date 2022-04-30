import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import Floor from '@/class/three/World/Floor'
import Fox from '@/class/three/World/Fox'
import Cube from '@/class/three/World/Cube'
import Environment from '@/class/three/World/Environment'

import { EntitiesLayer } from '@/constants/ENTITIES'

class World extends WebGLSub {
	floor: Floor | null = null
	fox: Fox | null = null
	cube: Cube | null = null
	environment: Environment | null = null

	constructor() {
		super()

		// Wait for resources
		WebGL.resources.addEventListener('resourcesLoaded', () => this.onResourcesLoaded())
	}

	onResourcesLoaded() {
		console.log('Resources loaded')
		this.store.resourcesLoaded = true
		this.floor = new Floor()
		this.fox = new Fox()
		this.cube = new Cube()
		this.environment = new Environment()
	}

	onUpdate() {
		const { deltaTime } = WebGL.time
		if (!this.store.resourcesLoaded) return
		this.fox.update(deltaTime)
		this.cube.update(deltaTime)
	}
}

export default World
