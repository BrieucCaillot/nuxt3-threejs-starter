<template>
	<div ref="root">
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
		const root: { value: HTMLElement | null } = ref(null)
		const { renderer } = useWebGL()
		onMounted(() => {
			if (root.value) {
				root.value.appendChild(renderer.domElement)
			}
		})
		return {
			root,
		}
	},
})
</script>
