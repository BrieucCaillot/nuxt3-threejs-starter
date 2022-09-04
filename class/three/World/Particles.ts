import * as THREE from 'three'
import WebGL from '@/class/three/WebGL'

import vertexShader from '@/class/three/shaders/particles/vertex.glsl'
import fragmentShader from '@/class/three/shaders/particles/fragment.glsl'

class Particles {
	particles: Array<{ position: THREE.Vector3; size: number; colour: THREE.Color; lifetime: number }> = []
	constructor() {
		const uniforms = {
			uDiffuseTexture: {
				value: WebGL.resources.itemsLoaded['diffuseTexture'],
			},
			uPointMultiplier: {
				value: WebGL.sizes.height / (2 * Math.tan((WebGL.camera.instance!.fov * Math.PI) / 360)),
			},
		}

		this.material = new THREE.ShaderMaterial({
			uniforms,
			vertexShader,
			fragmentShader,
			blending: THREE.AdditiveBlending,
			depthTest: true,
			depthWrite: false,
			transparent: true,
			vertexColors: true,
		})

		this.geometry = new THREE.BufferGeometry()

		this.points = new THREE.Points(this.geometry, this.material)

		this.geometry.setAttribute('position', new THREE.Float32BufferAttribute([], 3))
		this.geometry.setAttribute('size', new THREE.Float32BufferAttribute([], 1))
		this.geometry.setAttribute('colour', new THREE.Float32BufferAttribute([], 3))

		WebGL.scene.add(this.points)

		this.addParticles()
		this.upateParticles()
	}

	addParticles() {
		for (let i = 0; i < 10; i++) {
			this.particles.push({
				position: new THREE.Vector3((Math.random() * 2 - 1) * 2, (Math.random() * 2 - 1) * 2, (Math.random() * 2 - 1) * 2),
				size: 2 * Math.random(),
				colour: new THREE.Color(Math.random(), Math.random(), Math.random()),
				lifetime: 5,
			})
		}
	}

	upateParticles() {
		const positions = []
		const sizes = []
		const colors = []
		const lifetime = []

		for (let p of this.particles) {
			positions.push(p.position.x, p.position.y, p.position.z)
			sizes.push(p.size)
			colors.push(p.colour.r, p.colour.g, p.colour.b)
		}

		this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
		this.geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1))
		this.geometry.setAttribute('colour', new THREE.Float32BufferAttribute(colors, 3))
		this.geometry.attributes.position.needsUpdate = true
		this.geometry.attributes.size.needsUpdate = true
		this.geometry.attributes.colour.needsUpdate = true
	}

	update(time: number) {
		const { deltaTime } = WebGL.time
		// this.mesh.material.uniforms.uTime.value += 0.05
	}
}

export default Particles
