module.exports = {
	root: true,
	env: {
		es6: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint']
};