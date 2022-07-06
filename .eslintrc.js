
module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
}