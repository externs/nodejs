/**
 * If an extern depends on others, it will be present in this list.
 */
const dependencies = {
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

module.exports=dependencies