<template>
	<div id="home" class="absolute bottom-[5%]">
		<h2 class="text-2xl pb-5 text-white">Welcome 👋</h2>
		<h2 class="text-xl text-white">A boilerplate with Next3 & Threejs (WIP)</h2>

		<Cube />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useWebGL from '@/composables/useWebGL'
import Cube from '@/components/three/Cube.vue'

export default defineComponent({
	components: {
		Cube,
	},
	setup() {
		console.log('SETUP HOME')

		onMounted(() => {
			const { camera } = useWebGL()
			camera.position.z = 5
		})
	},
})
</script>
