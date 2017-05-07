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
		'class-property/class-property-semicolon': ['error', 'always'],
		'react/jsx-tag-spacing': ['error', {
			'closingSlash': 'never',
			'beforeSelfClosing': 'never',
			'afterOpening': 'never'
		}]
	}
}
