import WebGL from '@/class/three/WebGL'
import Resources from '@/class/three/utils/Resources'
import Cube from '@/class/three/World/Cube'

class World {
	webGL: WebGL

	scene: THREE.Scene
	resources: Resources
	cube: Cube

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene
		this.resources = this.webGL.resources

		this.cube = new Cube()

		// Wait for resources
		// this.resources.on('ready', () => {
		// 	// Setup
		// 	this.floor = new Floor()
		// 	this.fox = new Fox()
		// 	this.environment = new Environment()
		// })
	}

	onUpdate() {
		this.cube.update()
	}
}

export default World
