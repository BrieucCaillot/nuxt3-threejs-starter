<template>
	<div class="layout">
		<Header />
		<main id="main" class="page">
			<Canvas />
			<slot />
		</main>
	</div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Canvas from '@/components/three/Canvas.vue'

console.log('SETUP DEFAULT LAYOUT')
</script>

<style lang="scss" scoped></style>
