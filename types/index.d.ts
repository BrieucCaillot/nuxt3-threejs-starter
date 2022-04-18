import WebGL from '@/class/three/WebGL'

export {}

declare global {
	interface Window {
		webGL: WebGL
	}
}
