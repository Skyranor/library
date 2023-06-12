module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/function-component-definition': ['error', {
      namedComponents: ['arrow-function']
    }],
    'import/order': ['error', {
      groups: [['builtin', 'external']],
      'newlines-between': 'always'
    }],
    overrides: [{
      files: ['src/**/*.slice.ts'],
      rules: {
        'no-param-reassign': ['error', {
          props: false
        }]
      }
    }]
  }
};