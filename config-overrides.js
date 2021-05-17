const { override, addBabelPreset } = require('customize-cra')

const config = override(
  addBabelPreset(
    '@lskjs/babel-preset',
  )
)

module.exports = a => {
  const res = config(a);
  console.log('res', res)
  res.entry = '/Users/isuvorov/projects/lskjs-cra/src-bot-kit'
  // res.entry = '/Users/isuvorov/projects/lskjs-bot-kit/packages/app/src'
  // res.entry = '/Users/isuvorov/projects/lskjs-cra/src4'
  // res.entry = '/Users/isuvorov/projects/lskjs-cra/bot-kit/src'

  return res;
}