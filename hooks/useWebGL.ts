import WebGL from '../three/WebGL'

let webgl = new WebGL()

const useWebGL = (): null | WebGL => {
	return webgl || (webgl = new WebGL())
}

export default useWebGL
