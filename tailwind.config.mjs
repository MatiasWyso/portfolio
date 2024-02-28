/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [],
	theme: {
		extend: {
colors: {
			orange: '#65220e', 
			iblue: "#17308f",
			violet: "#26034e",
			green: "#123424",
			lightblue: "#003537",
			grey: "#232322",
			mostaza:"#644a0e",
			darkblue:"#14314e"
},
		},
},
}
