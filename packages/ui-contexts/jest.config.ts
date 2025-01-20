import client from '@rocket.chat/jest-presets/client';
import type { Config } from 'jest';

export default {
	preset: client.preset,
	moduleNameMapper: {
		'^react($|/.+)': '<rootDir>/../../node_modules/react$1',
		'^react-dom/client$': '<rootDir>/../../node_modules/react-dom$1',
		'^react-dom($|/.+)': '<rootDir>/../../node_modules/react-dom$1',
	},
} satisfies Config;
