<template>
	<header class="fixed top-0 p-8 w-full z-20">
		<nav class="max-w-[250px] ml-auto">
			<ul class="text-white flex justify-between list-none">
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
