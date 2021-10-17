<template>
	<div ref="root">
		<Cube />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import useWebGL from '@/hooks/useWebGL'
import Cube from '@/components/three/Cube.vue'

export default defineComponent({
	components: {
		Cube,
	},
	setup() {
		const root = ref(null)
		const { renderer } = useWebGL()

		onMounted(() => {
			root.value.appendChild(renderer.domElement)
		})

		return {
			root,
		}
	},
})
</script>
