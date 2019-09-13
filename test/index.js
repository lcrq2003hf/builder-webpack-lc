
const path = require('path')
process.chdir(path.join(__dirname, 'smoke/template'))

describe('builder-webpack test cats', () => {
  require('./unit/webpack-base-test')
})