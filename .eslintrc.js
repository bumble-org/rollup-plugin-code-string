module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    quotes: 'off',
    semi: 'off',
  },
}
