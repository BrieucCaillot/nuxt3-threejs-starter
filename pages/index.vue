<template>
	<div id="home" class="absolute bottom-[5%]">
		<h2 class="text-2xl pb-5 text-white">Welcome 👋</h2>
		<h2 class="text-xl text-white">A boilerplate with Next3 & Threejs (WIP)</h2>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WebGL from '@/class/three/WebGL'

export default defineComponent({
	name: 'Home',
	setup() {
		console.log('SETUP HOME')

		onMounted(() => {
			const { scene, camera } = new WebGL()
			// camera.instance?.position.z = 5
		})
	},
})
</script>
