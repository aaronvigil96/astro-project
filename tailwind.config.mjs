import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				animate: {
					'0%': {transform: 'rotate(0deg)'},
					'100%': {transform: 'rotate(360deg)'}
				}
			},
			animation: {
				'animate-line': 'animate 5s linear infinite'
			}
		},
	},
	plugins: [],
}
