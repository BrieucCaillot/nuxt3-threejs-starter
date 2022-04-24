import * as THREE from 'three'

import WebGL from '@/class/three/WebGL'
import Sizes from '@/class/three/utils/Sizes'
import Mouse from '@/class/three/Mouse'
import Time from '@/class/three/Time'
import Resources from '@/class/three/utils/Resources'
import Camera from '@/class/three/Camera'
import Renderer from '@/class/three/Renderer'
import Debug from '@/class/three/Debug'

class WebGLSub extends THREE.EventDispatcher {
	webGL: WebGL
	canvas: HTMLCanvasElement
	sizes: Sizes
	mouse: Mouse
	time: Time
	scene: THREE.Scene
	resources: Resources
	camera: Camera
	renderer: Renderer
	debug: Debug

	constructor() {
		super()

		this.webGL = new WebGL()
		this.canvas = this.webGL.canvas
		this.sizes = this.webGL.sizes
		this.mouse = this.webGL.mouse
		this.time = this.webGL.time
		this.scene = this.webGL.scene
		this.resources = this.webGL.resources
		this.camera = this.webGL.camera
		this.renderer = this.webGL.renderer
		this.debug = this.webGL.debug
	}
}

export default WebGLSub
