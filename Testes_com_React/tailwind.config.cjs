/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		backgroundImage: {
			spaceX: "url('./public/spacex.jpg')",
		},
		extend: {},
	},
	plugins: [],
};
