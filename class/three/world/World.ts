import WebGL from '@/class/three/WebGL'
import Resources from '@/class/three/utils/Resources'
import Floor from '@/class/three/World/Floor'
import Fox from '@/class/three/World/Fox'
import Environment from '@/class/three/World/Environment'
import Time from '@/class/three/Time'

class World {
	webGL: WebGL

	scene: THREE.Scene
	resources: Resources
	time: Time
	floor: Floor | null = null
	fox: Fox | null = null
	environment: Environment | null = null

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene
		this.resources = this.webGL.resources
		this.time = this.webGL.time

		// Wait for resources
		this.resources.addEventListener('resourcesLoaded', () => this.onResourcesLoaded())
	}

	onResourcesLoaded() {
		console.log('Resources loaded')
		this.floor = new Floor()
		this.fox = new Fox()
		this.environment = new Environment()
	}

	onUpdate() {
		const { deltaTime } = this.time
		this.fox && this.fox.update(deltaTime)
	}
}

export default World
