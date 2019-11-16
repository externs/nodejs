import { relative, dirname, join } from 'path'
/**
 * If an extern depends on others, it will be present in this list.
 */
export const dependencies = {
  url: ['querystring'],
  stream: ['events'],
  net: ['stream', 'events', 'dns'],
  fs: ['stream', 'events', 'url'],
  tls: ['crypto', 'dns', 'net', 'stream'],
  http: ['events', 'net', 'stream', 'url'],
  https: ['tls', 'events', 'http', 'url'],
  http2: ['events', 'fs', 'net', 'stream', 'tls', 'http', 'url'],
  zlib: ['stream'],
  child_process: ['events', 'stream', 'net'],
  cluster: ['child_process', 'events', 'net'],
  readline: ['events', 'stream'],
  repl: ['stream', 'readline'],
  dgram: ['events', 'dns'],
  string_decoder: ['buffer'],
  domain: ['events'],
  tty: ['net'],
}

/**
 * Returns the path to the `v8` externs by calling the `require.resolve` to get the pack to the `@externs/nodejs` package.
 */
const getExternsDir = () => {
  const externs = relative('',
    dirname(require.resolve('@externs/nodejs/package.json')))
  const externsDir = join(externs, 'v8')
  return externsDir
}

export default getExternsDir