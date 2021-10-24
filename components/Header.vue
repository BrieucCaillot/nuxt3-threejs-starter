<template>
	<header>
		<nav>
			<ul class="text-white">
				<li>
					<NuxtLink to="/">Home Page</NuxtLink>
				</li>
				<li>
					<NuxtLink to="about">About Page</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	setup() {},
})
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	top: 0;
	padding: 2rem;
	width: 100%;
}

nav {
	max-width: 250px;
	margin-left: auto;
	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;
	}
}
</style>
