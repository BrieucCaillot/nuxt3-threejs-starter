import WebGL from '@/class/three/WebGL'
import Resources from '@/class/three/utils/Resources'
import Floor from '@/class/three/world/Floor'

class World {
	webGL: WebGL

	scene: THREE.Scene
	resources: Resources
	floor: Floor

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene
		this.resources = this.webGL.resources

		this.floor = new Floor()

		// Wait for resources
		// this.resources.on('ready', () => {
		// 	// Setup
		// 	this.floor = new Floor()
		// 	this.fox = new Fox()
		// 	this.environment = new Environment()
		// })
	}
}

export default World
