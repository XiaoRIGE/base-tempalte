module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // // 要求 require() 出现在顶层模块作用域中
    'global-require': 'off',

    'space-before-function-paren': 'off',

    'no-plusplus': ['off', { allowForLoopAfterthoughts: true }],

    'no-underscore-dangle': 'off',

    'prefer-promise-reject-errors': 'off',

    'no-restricted-syntax': 'off',

    'consistent-return': 'off',

    'vue/no-v-html': 'off',

    'no-param-reassign': [
      'off',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'e', // for e.returnvalue
          'ctx', // for Koa routing
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
          'state', // for vuex state
        ],
      },
    ],
  },
}
