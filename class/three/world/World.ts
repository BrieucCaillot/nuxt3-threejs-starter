import WebGL from '@/class/three/WebGL'
import Resources from '@/class/three/utils/Resources'
import Floor from '@/class/three/World/Floor'
import Fox from '@/class/three/World/Fox'
import Environment from '@/class/three/World/Environment'

class World {
	webGL: WebGL

	scene: THREE.Scene
	resources: Resources
	floor: Floor | null = null
	fox: Fox | null = null
	environment: Environment | null = null

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene
		this.resources = this.webGL.resources

		// Wait for resources
		this.resources.addEventListener('resourcesLoaded', () => this.onResourcesLoaded())
	}

	onResourcesLoaded() {
		console.log('Resources loaded')
		this.floor = new Floor()
		this.fox = new Fox()
		this.environment = new Environment()
	}

	onUpdate(time: number, delta: number, timeDelta: number) {
		this.fox && this.fox.update(time, delta, timeDelta)
	}
}

export default World
