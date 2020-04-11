<template>
	<div ref="mainScene">
		<div v-if="scene">
			<Sphere :scene="scene" />
		</div>
	</div>
</template>

<script>
import RAF from "@/utils/raf"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import Sphere from "@/components/Sphere"

export default {
	name: "MainScene",
	components: { Sphere },
	data() {
		return {
			renderer: null,
			scene: null,
			camera: null
		}
	},
	mounted() {
		this.initRenderer()
		this.initScene()
		this.initCamera()
		this.initLights()
		this.start()
	},
	destroyed() {
		RAF.unsubscribe("MainSceneUpdate", this.update)
		window.removeEventListener("resize", this.onWindowResize)
	},
	methods: {
		initRenderer() {
			this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
			this.renderer.setSize(window.innerWidth, window.innerHeight)
			this.renderer.debug.checkShaderErrors = true
			this.renderer.shadowMap.enabled = true
			this.$refs.mainScene.appendChild(this.renderer.domElement)
		},
		initScene() {
			this.scene = new THREE.Scene()
			this.scene.main = "MainScene"
			this.scene.background = new THREE.Color(0x123456)
		},
		initCamera() {
			this.camera = new THREE.PerspectiveCamera(
				70,
				window.innerWidth / window.innerHeight,
				1,
				1000
			)
			this.camera.position.set(0, 40, 110)
			this.camera.lookAt(0, 1, 1)

			this.controls = new OrbitControls(this.camera, this.renderer.domElement)
		},
		initLights() {
			let light = new THREE.SpotLight(0xffffff, 2, 100, Math.PI)
			light.castShadow = true
			light.position.set(1, 90, 1)

			this.scene.add(light)
		},
		start() {
			RAF.subscribe("MainSceneUpdate", this.update)
			window.addEventListener("resize", this.onWindowResize)
		},
		update() {
			this.controls.update()
			this.renderer.render(this.scene, this.camera)
		},
		onWindowResize() {
			this.camera.aspect = window.innerWidth / window.innerHeight
			this.camera.updateProjectionMatrix()

			this.renderer.setSize(window.innerWidth, window.innerHeight)
		}
	}
}
</script>

<style>
canvas {
	height: 100%;
	width: 100%;
}
</style>
