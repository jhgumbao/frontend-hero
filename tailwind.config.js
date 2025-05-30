/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}" // optional, for App Router
	],
	theme: {
		extend: {
			fontFamily: {
				sofia: ['"Sofia Pro"', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
