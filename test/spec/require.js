const a = require('http')
const cache = require.cache

/** @type {string} */
let path = require.resolve('depack')
path = require.resolve('depack', { paths: ['node_modules'] })
/** @type {Array<string>} */
const paths = require.resolve.paths('depack')

/** @type {!NodeModule} */
const main = require.main

const b = module.require('http')