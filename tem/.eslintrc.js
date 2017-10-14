// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 关闭语句末强制分号
    //"semi": [0],
    // 关闭不能使用console.log打印
    "no-console": "off",
    //对象字面量项尾不能有逗号
    "comma-dangle": [2, "never"],
    //可以给参数重新赋值
    "no-param-reassign":0,
    //允许全局用require
    "global-require": 0,
    //关闭换行风格检测
    'linebreak-style': 0
  },
  // 启用全局变量
  "globals": {
    "API": true,
    "GLOBAL":true
  }
}
