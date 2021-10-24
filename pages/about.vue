<template>
	<div id="about">
		<h2 class="text-xl text-white">This is the about page</h2>
	</div>
</template>

<script>
export default defineComponent({
	setup() {
		console.log('SETUP ABOUT')
		const locale = useState('locale')
		// console.log(locale.value)

		return {
			locale,
		}
	},
})
</script>

<style lang="scss">
#about {
	@apply absolute;
	bottom: 5%;
}
</style>
