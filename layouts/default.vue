<template>
	<div class="layout">
		<Header />
		<main id="main" class="page">
			<Canvas />
			<slot />
		</main>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import Header from '@/components/Header.vue'
import Canvas from '@/components/three/Canvas.vue'

export default defineComponent({
	name: 'LayoutDefault',
	components: {
		Header,
		Canvas,
	},
	setup() {
		console.log('SETUP DEFAULT LAYOUT')
	},
})
</script>

<style lang="scss" scoped></style>
