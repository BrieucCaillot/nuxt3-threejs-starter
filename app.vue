<template>
	<NuxtPage />
</template>

<script lang="ts">
import '@/assets/css/tailwind.css'
import '@/assets/sass/styles.scss'

export default defineComponent({
	setup() {
		console.log('SETUP OUAIS')
	},
})
</script>

<style lang="scss">
body {
	@apply font-sans;
}
</style>
