<template>
	<div id="home" class="absolute bottom-[5%]">
		<h2 class="text-2xl pb-5 text-white">Welcome 👋</h2>
		<h2 class="text-xl text-white">A boilerplate with Next3 & Threejs (WIP)</h2>

		<Cube />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Cube from '@/components/three/Cube.vue'
import WebGL from '@/class/three/WebGL'

export default defineComponent({
	name: 'Home',
	components: {
		Cube,
	},
	setup() {
		console.log('SETUP HOME')

		onMounted(() => {
			const { scene, camera } = new WebGL()
			console.log(scene.children)
			// camera.instance?.position.z = 5
		})
	},
})
</script>
