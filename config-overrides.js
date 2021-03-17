const { override, addBabelPreset } = require('customize-cra')

module.exports = override(
  addBabelPreset(
    '@lskjs/babel-preset',
  )
)