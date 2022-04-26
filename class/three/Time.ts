import gsap from 'gsap'

import WebGL from '@/class/three/WebGL'

class Time {
	webGL: WebGL

	time: number = 0
	deltaTime: number = 0
	frame: number = 0
	elapsed: number = 0

	constructor() {
		this.webGL = new WebGL()
	}

	addUpdate(fn: Function) {
		gsap.ticker.add((time: number, deltaTime: number, frame: number, elapsed: number) => {
			this.webGL.debug!.stats.begin()
			this.time = time
			this.deltaTime = deltaTime
			this.frame = frame
			this.elapsed = elapsed
			this.webGL.debug!.stats.end()
			fn()
		})
	}

	removeUpdate(fn: gsap.TickerCallback) {
		gsap.ticker.remove(fn)
	}
}

export default Time
