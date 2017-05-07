'use strict';
module.exports = {
	parser: 'babel-eslint',
	extends: 'xo-react',
	plugins: [
		'class-property'
	],
	semicolon: false,
	rules: {
		'no-var': 'error',
		'prefer-const': 'error',
		'capitalized-comments': 'off',
		'object-curly-spacing': [
			'error',
			'always'
		],
		'comma-dangle': [
			'error',
			'always-multiline'
		],
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before'
				}
			}
		],
		'jsx-quotes': [
			'error',
			'prefer-single'
		],
		'class-properties/class-property-semicolon': ["error", "always"],
		'react/jsx-closing-bracket-location': [
			1,
			{
				selfClosing: 'after-props',
				nonEmpty: 'after-props'
			}
		]
	}
}
