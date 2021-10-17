import * as THREE from 'three'

class WebGL {
	scene: THREE.Scene
	camera: THREE.PerspectiveCamera
	renderer: THREE.WebGLRenderer
	width: number
	height: number

	constructor() {
		this.scene = new THREE.Scene()
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
		this.renderer = new THREE.WebGLRenderer()
		this.width = window.innerWidth
		this.height = window.innerWidth

		this.renderer.setSize(window.innerWidth, window.innerHeight)
		this.camera.position.z = 5
		this.animate()

		this.setEvents()
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

	animate = () => {
		requestAnimationFrame(this.animate)
		this.renderer.render(this.scene, this.camera)
	}
}

export default WebGL
