/* alanode example/ */
import getExternsDir, { dependencies } from '../src'

console.log('Externs dir: %s', getExternsDir())
console.log('Dependencies:')
console.log(dependencies)