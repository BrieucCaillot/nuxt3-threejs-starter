<script setup lang="ts">
import Cube from '@/class/three/World/Cube'

const cube = ref<Cube>()

onMounted(() => {
	cube.value = new Cube()
})
onUnmounted(() => {
	cube.value?.destroy()
})
</script>
