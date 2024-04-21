/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
				marqee: {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
			},
			animation: {
				marqee: 'marqee 5s linear infinite',
			},
			colors: {
				'aot-indigo': '#0F2167',
				'aot-blue': '#3559E0',
				'aot-blue-light': '#4CB9E7',
				'aot-yellow': '#FFD700',
				'aot-bone': '#FFECD6'
			}
		},
	},
	plugins: [],
}
