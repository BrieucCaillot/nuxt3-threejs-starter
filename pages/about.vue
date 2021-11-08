<template>
	<div id="about" class="absolute bottom-[5%]">
		<h2 class="text-xl text-white">This is the about page</h2>
		<Plane />
	</div>
</template>

<script>
import Plane from '@/components/three/Plane.vue'

export default defineComponent({
	components: { Plane },
	setup() {
		console.log('SETUP ABOUT')

		onMounted(() => {
			const { camera } = useWebGL()
			camera.position.z = 1
		})
	},
})
</script>
