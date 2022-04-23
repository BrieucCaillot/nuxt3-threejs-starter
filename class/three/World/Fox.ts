import * as THREE from 'three'
import WebGL from '@/class/three/WebGL'
import Resources from '@/class/three/utils/Resources'
import Debug from '@/class/three/Debug'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

class Fox {
	webGL: WebGL

	scene: THREE.Scene
	resources: Resources
	debug: Debug

	debugFolder: { [key: string]: any } | undefined
	resource: GLTF
	model!: THREE.Object3D
	animation!: { [key: string]: any }

	constructor() {
		this.webGL = new WebGL()
		this.scene = this.webGL.scene
		this.resources = this.webGL.resources
		this.debug = this.webGL.debug

		// Debug
		if (this.debug.active) {
			this.debugFolder = this.debug.gui.addFolder('fox')
		}

		// Resource
		this.resource = this.resources.itemsLoaded['foxModel'] as GLTF

		this.setModel()
		this.setAnimation()
	}

	setModel() {
		this.model = this.resource.scene
		this.model.scale.set(0.02, 0.02, 0.02)
		this.scene.add(this.model)

		this.model.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.castShadow = true
			}
		})
	}

	setAnimation() {
		this.animation = {}

		// Mixer
		this.animation.mixer = new THREE.AnimationMixer(this.model)

		// Actions
		this.animation.actions = {}

		this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0])
		this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1])
		this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2])

		this.animation.actions.current = this.animation.actions.idle
		this.animation.actions.current.play()

		// Play the action
		this.animation.play = (name: string) => {
			const newAction = this.animation.actions[name]
			const oldAction = this.animation.actions.current

			newAction.reset()
			newAction.play()
			newAction.crossFadeFrom(oldAction, 1)

			this.animation.actions.current = newAction
		}

		// Debug
		if (this.debug.active) {
			const debugObject = {
				playIdle: () => {
					this.animation.play('idle')
				},
				playWalking: () => {
					this.animation.play('walking')
				},
				playRunning: () => {
					this.animation.play('running')
				},
			}
			this.debugFolder!.add(debugObject, 'playIdle')
			this.debugFolder!.add(debugObject, 'playWalking')
			this.debugFolder!.add(debugObject, 'playRunning')
		}
	}

	update(deltaTime: number) {
		this.animation.mixer.update(deltaTime * 0.001)
	}
}

export default Fox
