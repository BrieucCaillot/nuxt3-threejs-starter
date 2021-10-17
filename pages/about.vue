<template>
	<div>
		<h1>Hello from about</h1>
		<p>{{ locale }}</p>
	</div>
</template>

<script>
export default defineComponent({
	setup() {
		const locale = useState('locale')
		console.log(locale.value)

		return {
			locale,
		}
	},
})
</script>
