<template>
	<div id="home">
		<h2 class="text-2xl pb-5 text-white">Welcome 👋</h2>
		<h2 class="text-xl text-white">A boilerplate with Next3 & Threejs (WIP)</h2>
	</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
	setup() {
		// const locale = useState('locale')
		// console.log(locale)
		console.log('SETUP HOME')

		onMounted(() => {
			console.log('onMounted')
		})
	},
})
</script>

<style lang="scss">
#home {
	@apply absolute;
	bottom: 5%;
}
</style>
