import GUI from 'lil-gui'
import Stats from 'three/examples/jsm/libs/stats.module.js'

class Debug {
	active: boolean = false
	gui!: GUI
	stats: Stats = Stats()

	constructor() {
		this.setGUI()
		this.setStats()
	}

	setGUI() {
		this.gui = new GUI()
		this.active = true
		if (!this.active) return
		this.gui.show()
	}

	setStats() {
		this.stats.showPanel(0)
		document.body.appendChild(this.stats.dom)
	}

	addFolder(name: string) {
		return this.gui.addFolder(name)
	}
}

export default Debug
