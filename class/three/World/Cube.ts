import * as THREE from 'three'
import GUI from 'lil-gui'

import WebGL from '@/class/three/WebGL'
import vertexShader from '@/class/three/shaders/cube/vertex.glsl'
import fragmentShader from '@/class/three/shaders/cube/fragment.glsl'
import Debug from '@/class/three/Debug'

class Floor {
	webGL: WebGL

	scene: THREE.Scene
	geometry!: THREE.BoxGeometry
	material!: THREE.ShaderMaterial
	mesh!: THREE.Mesh
	debug: Debug

	debugFolder: {} | undefined
	colors = ['#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff']
	params = {
		color: this.colors[0],
	}

	constructor() {
		this.webGL = new WebGL()
		this.debug = this.webGL.debug
		this.scene = this.webGL.scene

		this.setGeometry()
		this.setMaterial()
		this.setMesh()

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.gui.addFolder('environment')
		}
	}

	setGeometry() {
		this.geometry = new THREE.BoxGeometry(1)
	}

	setMaterial() {
		this.material = new THREE.ShaderMaterial({
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			uniforms: {
				uColor: { value: new THREE.Color(this.params.color) },
			},
		})

		if (this.debug.active) {
			this.debug.gui.add(this.params, 'color', this.colors).onChange((value: string) => {
				this.material.uniforms.uColor.value.set(value)
			})
		}
	}

	setMesh() {
		this.mesh = new THREE.Mesh(this.geometry, this.material)
		this.mesh.rotation.x = -Math.PI * 0.5
		this.mesh.receiveShadow = true
		this.mesh.name = 'Cube'
		this.scene.add(this.mesh)
	}

	destroy() {
		this.scene.remove(this.mesh)
		this.geometry.dispose()
		this.material.dispose()
	}
}

export default Floor
