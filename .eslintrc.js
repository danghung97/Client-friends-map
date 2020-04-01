module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ["react-native", '@typescript-eslint'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': ["error", {
      "endOfLine":"auto"
    }],
    'react-native/no-unused-styles': 'error',
    'import/first': 'off',
    'sort-keys': 'warn'
  },
  settings: {
    'import/no-unused-modules': [
      1,
      {
        "unusedExports": true
      }
    ],
    'import/resolver': {
      'babel-module': {
        'root': [
          './src'
        ]
      }
    }
  }
};