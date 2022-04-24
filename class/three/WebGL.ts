import * as THREE from 'three'

import Sizes from '@/class/three/utils/Sizes'
import Mouse from '@/class/three/Mouse'
import Time from '@/class/three/Time'
import Resources from '@/class/three/utils/Resources'
import Camera from '@/class/three/Camera'
import Renderer from '@/class/three/Renderer'
import World from '@/class/three/World/World'
import Debug from '@/class/three/Debug'

class WebGL {
	static instance: WebGL

	canvas!: HTMLCanvasElement
	sizes!: Sizes
	mouse!: Mouse
	time!: Time
	scene!: THREE.Scene
	resources!: Resources
	camera!: Camera
	renderer!: Renderer
	world!: World
	debug!: Debug

	constructor(_canvas?: HTMLCanvasElement) {
		if (WebGL.instance) {
			return WebGL.instance
		} else if (!_canvas) return

		WebGL.instance = this

		this.canvas = _canvas
		this.sizes = new Sizes()
		this.mouse = new Mouse()
		this.time = new Time()
		this.scene = new THREE.Scene()
		this.resources = new Resources()
		this.camera = new Camera()
		this.renderer = new Renderer()
		this.debug = new Debug()
		this.world = new World()

		// Bind all methods
		this.bindAll()

		// Listeners
		this.sizes.addEventListener('resize', () => this.resize())
		this.mouse.addEventListener('mousemove', () => this.mouseMove())

		// Update
		this.time.addUpdate(this.update)

		// Dispose WebGL
		// setTimeout(() => this.destroy(), 3000)
	}

	resize() {
		this.camera.onResize()
		this.renderer.onResize()
	}

	mouseMove() {
		// To do on mousemove
	}

	update() {
		this.camera.onUpdate()
		this.world.onUpdate()
		this.renderer.onUpdate()
	}

	destroy() {
		// @TODO Destroy from inside all classes

		// Traverse the whole scene
		this.scene.traverse((child) => {
			// Test if it's a mesh
			if (child instanceof THREE.Mesh) {
				child.geometry.dispose()
				console.log('Disposed geometry')

				// Loop through the material properties
				for (const key in child.material) {
					const value = child.material[key]

					// Test if there is a dispose function
					if (value && typeof value.dispose === 'function') {
						value.dispose()
						console.log('Disposed material')
					}
				}
			}
		})

		// Destroy from classes
		this.camera.destroy()
		this.renderer.destroy()

		// Remove update
		this.time.removeUpdate(this.update)
	}

	bindAll() {
		this.update = this.update.bind(this)
	}
}

export default WebGL
