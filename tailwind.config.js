/* eslint-disable */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		darkTheme: "gs-dark",
		themes: [
			{
				"gs-light": {
					primary: "#6366f1",
					secondary: "#2dd4bf",
					accent: "#fde047",
					neutral: "#334155",
					"base-100": "#ffffff",
				},
			},
			{
				"gs-dark": {
					primary: "#818cf8",
					secondary: "#2dd4bf",
					accent: "#fef08a",
					neutral: "#ffffff",
					"base-100": "#334155",
				},
			},
		],
	},
};
