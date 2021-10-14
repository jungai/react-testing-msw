module.export = {
	roots: ['<rootDir>'],
	transform: {
		'\\.(ts|tsx)?$': 'babel-jest',
	},
	testMatch: ['<rootDir>/__test__/**/* >(*.)spec.{ts, jsx}'], // finds test
	moduleFileExtensions: ['ts', 'tsx'],
	testPathIgnorePatterns: ['/node_modules/', '/public/'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', '@testing-library/react/cleanup-after-each'], // setupFiles before the tests are ran
};
