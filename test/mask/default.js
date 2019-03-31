import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import externs from '../../src'

// export default
makeTestSuite('test/result', {
  async getResults(input) {
    const res = await externs({
      text: input,
    })
    return res
  },
  context: Context,
})