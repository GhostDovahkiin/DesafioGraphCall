module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'prettier',
    'prettier/react',
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single']
  }
};