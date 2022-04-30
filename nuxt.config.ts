import { defineNuxtConfig } from 'nuxt'
import glsl from 'vite-plugin-glsl'

export default defineNuxtConfig({
	meta: {
		link: [
			{
				href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap',
				rel: 'stylesheet',
			},
		],
	},
	build: {
		postcss: {
			postcssOptions: require('./postcss.config'),
		},
		transpile: ['three', 'gsap'],
	},
	vite: {
		plugins: [glsl()],
	},
})
