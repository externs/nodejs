import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import externs from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof externs, 'function')
  },
  async 'calls package without error'() {
    await externs()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await externs({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T