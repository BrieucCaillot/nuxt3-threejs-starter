import GUI from 'lil-gui'

class Debug {
	active: boolean = false
	gui: GUI = new GUI()

	constructor() {
		this.active = window.location.hash === '#debug'
		this.gui.hide()
		if (!this.active) return
		this.gui.show()
	}
}

export default Debug
