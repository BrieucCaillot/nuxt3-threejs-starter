<template>
	<Cube />
</template>

<script setup lang="ts">
import Cube from '@/components/three/World/Cube.vue'

defineExpose({
	cube: Cube,
})
</script>
