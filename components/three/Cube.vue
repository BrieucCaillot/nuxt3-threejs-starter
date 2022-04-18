<template></template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

import vertexShader from '@/class/three/shaders/cube/vertex.glsl'
import fragmentShader from '@/class/three/shaders/cube/fragment.glsl'
import WebGL from '@/class/three/WebGL'

export default defineComponent({
	setup() {
		const geometry = new THREE.BoxGeometry(1, 1, 1)
		const material = new THREE.ShaderMaterial({
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
		})
		const cube = new THREE.Mesh(geometry, material)

		onMounted(() => {
			const { scene } = new WebGL()

			cube.name = 'Cube'
			// cube.rotation.y = 10
			scene.add(cube)

			const onUpdate = () => {
				cube.rotation.y += 0.01
			}
		})
		onUnmounted(() => {
			const { scene } = new WebGL()
			scene.remove(cube)
		})
	},
})
</script>
