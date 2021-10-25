<template></template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import * as THREE from 'three'
import gsap from 'gsap'

import useWebGL from '@/composables/useWebGL'
import useRAF from '@/composables/useRAF'

export default defineComponent({
	setup() {
		onMounted(() => {
			const { scene } = useWebGL()

			const geometry = new THREE.BoxGeometry(1)
			const material = new THREE.MeshNormalMaterial()
			const cube = new THREE.Mesh(geometry, material)
			cube.name = 'Cube'
			cube.rotation.y = 10
			scene.add(cube)

			const onUpdate = () => {
				cube.rotation.y += 0.01
			}

			const raf = useRAF()
			raf.subscribe('Cube', onUpdate)
		})
	},
})
</script>
