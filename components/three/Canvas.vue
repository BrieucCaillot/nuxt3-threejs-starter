<template>
	<canvas id="canvas" ref="canvas" class="fixed top-0 left-0 h-full w-full z-0"></canvas>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import useWebGL from '@/composables/useWebGL'

export default defineComponent({
	setup() {
		const canvas: { value: HTMLCanvasElement | null } = ref(null)

		onMounted(() => {
			console.log('CANVAS MOUNTED')

			if (canvas.value) useWebGL(canvas.value as HTMLCanvasElement)
		})
		return {
			canvas,
		}
	},
})
</script>
