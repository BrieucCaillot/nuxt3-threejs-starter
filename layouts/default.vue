<template>
	<div>
		<Header />
		<Scene />
		<main class="page">
			<slot />
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Header from '@/components/Header.vue'
import Scene from '@/components/three/Scene.vue'

export default defineComponent({
	name: 'LayoutDefault',
	components: {
		Header,
		Scene,
	},
	setup() {},
})
</script>
