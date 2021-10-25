<template>
	<div id="canvas" ref="canvas">
		<Cube />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import useWebGL from '@/composables/useWebGL'
import Cube from '@/components/three/Cube.vue'

export default defineComponent({
	components: {
		Cube,
	},
	setup() {
		const canvas: { value: HTMLElement | null } = ref(null)

		onMounted(() => {
			console.log('SCENE MOUNTED')

			const { renderer } = useWebGL()
			if (canvas.value) canvas.value.appendChild(renderer.domElement)
		})
		return {
			canvas,
		}
	},
})
</script>
