require('ignore-styles')
require("regenerator-runtime/runtime")

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        pragmaFrag: 'Fragment'
      }
    ]
  ]
})

require('./server')
