import WebGL from '@/class/three/WebGL'
import WebGLSub from '@/class/three/WebGLSub'

import Floor from '@/class/three/World/Floor'
import Fox from '@/class/three/World/Fox'
import Cube from '@/class/three/World/Cube'
import Plane from '@/class/three/World/Plane'
import Sphere from '@/class/three/World/Sphere'
import Particles from '@/class/three/World/Particles'
import Terrain from '@/class/three/World/Terrain'
import Environment from '@/class/three/World/Environment'

import { EntitiesLayer } from '@/constants/ENTITIES'

class World extends WebGLSub {
	plane: Plane
	sphere: Sphere
	particles: Particles
	terrain: Terrain

	constructor() {
		super()

		// Wait for resources
		WebGL.resources.addEventListener('resourcesLoaded', () => this.onResourcesLoaded())
	}

	onResourcesLoaded() {
		console.log('Resources loaded')
		this.store.resourcesLoaded = true
		this.plane = new Plane()
		this.environment = new Environment()
		// this.sphere = new Sphere()
		// this.particles = new Particles()
		// this.terrain = new Terrain()
	}

	onUpdate() {
		const { deltaTime } = WebGL.time
		if (!this.store.resourcesLoaded) return
		this.plane && this.plane.update(deltaTime)
		// this.sphere && this.sphere.update(deltaTime)
		// this.particles && this.particles.update(deltaTime)
	}
}

export default World
