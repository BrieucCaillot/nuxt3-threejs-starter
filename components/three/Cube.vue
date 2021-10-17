<template></template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

import useWebGL from '@/hooks/useWebGL'

export default defineComponent({
	setup() {
		console.log('cube')

		onMounted(() => {
			const { scene } = useWebGL()

			const geometry = new THREE.BoxGeometry(1)
			const material = new THREE.MeshNormalMaterial()
			const cube = new THREE.Mesh(geometry, material)
			scene.add(cube)

			gsap.to(cube.rotation, {
				duration: 6,
				y: 10,
				yoyo: true,
				repeat: -1,
			})

			scene.add(cube)
		})
	},
})
</script>
