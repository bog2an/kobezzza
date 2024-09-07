import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	{
		rules: {
			indent: ['error', 'tab'], // Настраиваем отступы для использования табуляции вместо пробелов
			// Опционально: Правило для табов в JSX
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],
		},
	},
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
];