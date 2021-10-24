<template>
	<div>
		<Header />
		<Scene v-if="isReady" />
		<main class="page">
			<slot />
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Header from '@/components/Header.vue'
import Scene from '@/components/three/Scene.vue'

export default defineComponent({
	name: 'LayoutDefault',
	components: {
		Header,
		Scene,
	},
	setup() {
		console.log('SETUP DEFAULT LAYOUT')

		const isReady = ref(false)
		if (process.client) {
			isReady.value = true
		}
		return {
			isReady,
		}
	},
})
</script>
