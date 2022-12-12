// @ts-check
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: ['@prettier/plugin-pug'],

	printWidth: 120,
	singleQuote: false,
	tabWidth: 2,
	useTabs: true,

	pugSingleQuote: false,
	// ... more pug* options
};
