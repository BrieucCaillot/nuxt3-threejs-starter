<template></template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import * as THREE from 'three'

import useWebGL from '@/composables/useWebGL'
import useRAF from '@/composables/useRAF'
import vertexShader from '@/three/shaders/plane/vertex'
import fragmentShader from '@/three/shaders/plane/fragment'

export default defineComponent({
	setup() {
		const geometry = new THREE.PlaneGeometry(0.5, 0.5, 10, 10)
		const material = new THREE.RawShaderMaterial({
			uniforms: {
				uTime: {
					value: 0,
				},
			},
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
			side: THREE.DoubleSide,
		})
		const plane = new THREE.Mesh(geometry, material)

		onMounted(() => {
			const { scene } = useWebGL()

			plane.name = 'Plane'
			scene.add(plane)

			const onUpdate = () => {
				material.uniforms.uTime.value += 0.05
			}

			const raf = useRAF()
			raf.subscribe('Cube', onUpdate)
		})
		onUnmounted(() => {
			const { scene } = useWebGL()
			scene.remove(plane)
		})
	},
})
</script>
