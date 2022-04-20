import * as THREE from 'three'
import gsap from 'gsap'

import Camera from '@/class/three/Camera'
import Sizes from '@/class/three/utils/Sizes'
import Resources from '@/class/three/utils/Resources'
import Renderer from '@/class/three/Renderer'
import World from '~~/class/three/World/World'
import Debug from '@/class/three/Debug'

class WebGL {
	static instance: WebGL

	canvas!: HTMLCanvasElement
	sizes!: Sizes
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

		// Update
		gsap.ticker.add(this.update)

		// Dispose WebGL
		// setTimeout(() => this.destroy(), 3000)
	}

	setListerners() {}

	resize() {
		this.camera.onResize()
		this.renderer.onResize()
	}

	update(time: number) {
		// console.log(time)
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
		gsap.ticker.remove(this.update)
	}

	bindAll() {
		this.update = this.update.bind(this)
	}
}

export default WebGL
