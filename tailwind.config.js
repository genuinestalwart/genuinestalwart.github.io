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
					accent: "#eef2ff",
					neutral: "#334155",
					"base-100": "#e2e8f0",
				},
			},
			{
				"gs-dark": {
					primary: "#818cf8",
					secondary: "#2dd4bf",
					accent: "#1A2238",
					neutral: "#e2e8f0",
					"base-100": "#334155",
				},
			},
		],
	},
};
