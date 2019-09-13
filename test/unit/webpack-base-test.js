
const assert = require('assert')

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js')
  it('entry', () => {
    assert.equal(baseConfig.entry.index, 'E:/学习/玩转webpack/code/03-day/demo03/builder-webpack/test/smoke/template/src/index/index.js')
    assert.equal(baseConfig.entry.search, 'E:/学习/玩转webpack/code/03-day/demo03/builder-webpack/test/smoke/template/src/search/index.js')
  })
})