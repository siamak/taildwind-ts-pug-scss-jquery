/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./**/*.pug"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["iransansx", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	separator: "_",
	plugins: [require("tailwindcss"), require("autoprefixer")],
};
