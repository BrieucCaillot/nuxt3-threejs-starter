import { useState } from '#app'
import WebGL from '@/three/WebGL'

let webGL: WebGL | null = null

const useWebGL = () => {
	const raf = useRAF()
	return webGL || (webGL = new WebGL(raf.onUpdate))
}

export default useWebGL
