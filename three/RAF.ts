type Callback = {
	name: string
	callback: Function
}

class RAF {
	callbacks: Callback[] = []

	subscribe = (name: string, callback: Function) => {
		this.callbacks.push({
			name,
			callback,
		})
	}

	unsubscribe = (name: string) => {
		this.callbacks.forEach((item, i) => {
			if (item.name == name) this.callbacks.splice(i, i + 1)
		})
	}

	onUpdate = () => {
		this.callbacks.forEach((item) => {
			item.callback()
		})
	}
}
export default RAF
