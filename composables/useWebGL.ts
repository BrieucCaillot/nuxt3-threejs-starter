import WebGL from '@/class/three/WebGL'

let webGL: WebGL | null = null

const useWebGL = (_canvas?: HTMLCanvasElement) => {
	return new WebGL(_canvas!)
}

export default useWebGL
