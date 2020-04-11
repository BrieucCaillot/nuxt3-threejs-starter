<script>
import * as THREE from "three"
import RAF from "@/utils/raf"

export default {
	name: "Sphere",
	props: ["scene"],
	render() {
		return null
	},
	mounted() {
		this.createSpheres()
	},
	destroyed() {
		RAF.unsubscribe("MainSceneSphere", this.update)
	},
	methods: {
		createSpheres() {
			this.sphereGroup = new THREE.Group()
			for (let elem in Array(6).fill()) {
				let sphere = new THREE.Mesh(
					new THREE.SphereGeometry(10, 60, 20),
					new THREE.MeshStandardMaterial({
						color: Math.random() * 0x888888 + 0x888888,
						side: THREE.DoubleSide
					})
				)
				sphere.position.x = Math.cos(elem) * 40
				sphere.position.y = Math.sin(elem) * 40
				this.sphereGroup.add(sphere)
			}
			RAF.subscribe("MainSceneSphere", this.update)
			this.scene.add(this.sphereGroup)
		},
		update() {
			this.rotate()
		},
		rotate() {
			this.sphereGroup.rotation.x += Math.PI / 180
			this.sphereGroup.rotation.y += Math.PI / 180
		}
	}
}
</script>
