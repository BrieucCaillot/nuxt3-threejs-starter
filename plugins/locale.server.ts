import { defineNuxtPlugin, useState } from '#imports'

export default defineNuxtPlugin((nuxt) => {
	const locale = useState('locale', () => nuxt.ssrContext.req.headers['accept-language']?.split(',')[0])
})
