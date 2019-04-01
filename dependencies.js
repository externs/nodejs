module.exports = {
  os: [], // it references NodeJS.platform however it's resolved to a string
  global: ['buffer', 'nodejs'],
  url: ['querystring', 'global'],
  vm: ['buffer'], // ScriptOptions.cachedData: Buffer
  buffer: ['global'], // global.IterableIterator
  nodejs: ['buffer', 'global'],
  events: ['nodejs'],
  stream: ['events', 'nodejs'],
  crypto: ['buffer', 'nodejs'],
  dns: ['nodejs'],
  net: ['stream', 'events', 'dns', 'buffer', 'nodejs'],
  fs: ['stream', 'events', 'url', 'buffer', 'nodejs'],
  tls: ['crypto', 'dns', 'net', 'stream', 'buffer'],
  http: ['events', 'net', 'stream', 'url'],
  https: ['tls', 'events', 'http', 'url'],
  http2: ['events', 'fs', 'net', 'stream', 'tls', 'http', 'url', 'nodejs', 'buffer'],
  zlib: ['buffer', 'stream'],
  child_process: ['events', 'stream', 'net', 'buffer'],
  timers: ['nodejs'],
  _process: ['nodejs'],
  _module: ['nodejs'],
  _console: ['global'],
}