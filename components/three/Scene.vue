<template>
	<div id="canvas" ref="canvas" class="fixed top-0 left-0 h-full w-full z-0"></div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import useWebGL from '@/composables/useWebGL'

export default defineComponent({
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
