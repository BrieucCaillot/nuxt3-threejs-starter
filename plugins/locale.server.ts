import { defineNuxtPlugin, useState } from '#app'

export default defineNuxtPlugin((nuxt) => {
	useState('locale', () => nuxt.ssrContext.req.headers['accept-language']?.split(',')[0])
})
