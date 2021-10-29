import * as THREE from 'three'

export default class WebGL {
	scene: THREE.Scene
	camera: THREE.PerspectiveCamera
	renderer: THREE.WebGLRenderer
	width = 0
	height = 0
	clock = new THREE.Clock()
	rafUpdate: Function | null = null

	constructor(rafUpdate: Function) {
		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
		this.camera.position.z = 5
		this.renderer = new THREE.WebGLRenderer({
			antialias: true,
		})
		this.clock = new THREE.Clock()
		this.onResize()
		this.onUpdate()
		this.setEvents()
		this.rafUpdate = rafUpdate
	}

	setEvents = () => {
		window.addEventListener('resize', this.onResize)
	}

	onResize = () => {
		this.width = window.innerWidth
		this.height = window.innerHeight
		this.camera.aspect = this.width / this.height
		this.camera.updateProjectionMatrix()
		this.renderer.setSize(this.width, this.height)
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1, 2))
	}

	onUpdate = () => {
		requestAnimationFrame(this.onUpdate)
		this.renderer.render(this.scene, this.camera)
		const deltaTime = this.clock.getDelta()
		if (this.rafUpdate) this.rafUpdate()
	}
}

// export default WebGL
