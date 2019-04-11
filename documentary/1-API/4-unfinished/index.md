## WIP

Currently, after some ignored properties and methods not defined in externs, there are still warnings that have not been handled.

```ts
node_modules/buffer/index.js:6: WARNING - Property constants never defined on buffer
  constants,
  ^^^^^^^^^

node_modules/buffer/index.js:7: WARNING - Property kMaxLength never defined on buffer
  kMaxLength,
  ^^^^^^^^^^

node_modules/buffer/index.js:8: WARNING - Property kStringMaxLength never defined on buffer
  kStringMaxLength,
  ^^^^^^^^^^^^^^^^

node_modules/console/index.js:6: WARNING - Property context never defined on Console
  context,
  ^^^^^^^

node_modules/constants/index.js:4: WARNING - Property COPYFILE_EXCL never defined on constants
  COPYFILE_EXCL,
  ^^^^^^^^^^^^^

node_modules/constants/index.js:27: WARNING - Property EDQUOT never defined on constants
  EDQUOT,
  ^^^^^^

node_modules/constants/index.js:44: WARNING - Property EMULTIHOP never defined on constants
  EMULTIHOP,
  ^^^^^^^^^

node_modules/constants/index.js:95: WARNING - Property ESTALE never defined on constants
  ESTALE,
  ^^^^^^

node_modules/constants/index.js:103: WARNING - Property OPENSSL_VERSION_NUMBER never defined on constants
  OPENSSL_VERSION_NUMBER,
  ^^^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:125: WARNING - Property RSA_PSS_SALTLEN_AUTO never defined on constants
  RSA_PSS_SALTLEN_AUTO,
  ^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:126: WARNING - Property RSA_PSS_SALTLEN_DIGEST never defined on constants
  RSA_PSS_SALTLEN_DIGEST,
  ^^^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:127: WARNING - Property RSA_PSS_SALTLEN_MAX_SIGN never defined on constants
  RSA_PSS_SALTLEN_MAX_SIGN,
  ^^^^^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:139: WARNING - Property SIGINFO never defined on constants
  SIGINFO,
  ^^^^^^^

node_modules/constants/index.js:216: WARNING - Property UV_FS_COPYFILE_EXCL never defined on constants
  UV_FS_COPYFILE_EXCL,
  ^^^^^^^^^^^^^^^^^^^

node_modules/domain/index.js:4: WARNING - Property active never defined on domain
  active,
  ^^^^^^

node_modules/domain/index.js:6: WARNING - Property createDomain never defined on domain
  createDomain,
  ^^^^^^^^^^^^

node_modules/events/index.js:4: WARNING - Property defaultMaxListeners never defined on events
  defaultMaxListeners,
  ^^^^^^^^^^^^^^^^^^^

node_modules/events/index.js:5: WARNING - Property init never defined on events
  init,
  ^^^^

node_modules/events/index.js:6: WARNING - Property listenerCount never defined on events
  listenerCount,
  ^^^^^^^^^^^^^

node_modules/events/index.js:7: WARNING - Property usingDomains never defined on events
  usingDomains,
  ^^^^^^^^^^^^

node_modules/http/index.js:14: WARNING - Property maxHeaderSize never defined on http
  maxHeaderSize,
  ^^^^^^^^^^^^^

node_modules/http2/index.js:3: WARNING - Access to private property Http2ServerRequest of {
  ClientHttp2Session: function(this:http2.ClientHttp2Session): ?,
  ClientHttp2Stream: function(this:http2.ClientHttp2Stream): ?,
  ClientSessionOptions: None,
  ClientSessionRequestOptions: function(this:http2.ClientSessionRequestOptions): ?,
  Http2SecureServer: function(this:http2.Http2SecureServer): ?,
  Http2Server: function(this:http2.Http2Server): ?,
  Http2ServerRequest: function(new:http2.Http2ServerRequest): ?,
  Http2ServerResponse: function(new:http2.Http2ServerResponse): ?,
  Http2Session: function(this:http2.Http2Session): ?,
  Http2Stream: function(this:http2.Http2Stream): ?, ...
} not allowed here.
  Http2ServerRequest,
  ^^^^^^^^^^^^^^^^^^

node_modules/http2/index.js:4: WARNING - Access to private property Http2ServerResponse of {
  ClientHttp2Session: function(this:http2.ClientHttp2Session): ?,
  ClientHttp2Stream: function(this:http2.ClientHttp2Stream): ?,
  ClientSessionOptions: None,
  ClientSessionRequestOptions: function(this:http2.ClientSessionRequestOptions): ?,
  Http2SecureServer: function(this:http2.Http2SecureServer): ?,
  Http2Server: function(this:http2.Http2Server): ?,
  Http2ServerRequest: function(new:http2.Http2ServerRequest): ?,
  Http2ServerResponse: function(new:http2.Http2ServerResponse): ?,
  Http2Session: function(this:http2.Http2Session): ?,
  Http2Stream: function(this:http2.Http2Stream): ?, ...
} not allowed here.
  Http2ServerResponse,
  ^^^^^^^^^^^^^^^^^^^

node_modules/net/index.js:5: WARNING - Property Stream never defined on net
  Stream,
  ^^^^^^

node_modules/process/index.js:7: WARNING - Property assert never defined on NodeJS.Process
  assert,
  ^^^^^^

node_modules/process/index.js:8: WARNING - Property binding never defined on NodeJS.Process
  binding,
  ^^^^^^^

node_modules/process/index.js:14: WARNING - Property dlopen never defined on NodeJS.Process
  dlopen,
  ^^^^^^

node_modules/process/index.js:21: WARNING - Property features never defined on NodeJS.Process
  features,
  ^^^^^^^^

node_modules/process/index.js:28: WARNING - Property initgroups never defined on NodeJS.Process
  initgroups,
  ^^^^^^^^^^

node_modules/process/index.js:32: WARNING - Property moduleLoadList never defined on NodeJS.Process
  moduleLoadList,
  ^^^^^^^^^^^^^^

node_modules/process/index.js:37: WARNING - Property ppid never defined on NodeJS.Process
  ppid,
  ^^^^

node_modules/process/index.js:38: WARNING - Property reallyExit never defined on NodeJS.Process
  reallyExit,
  ^^^^^^^^^^

node_modules/querystring/index.js:3: WARNING - Property decode never defined on querystring
  decode,
  ^^^^^^

node_modules/querystring/index.js:4: WARNING - Property encode never defined on querystring
  encode,
  ^^^^^^

node_modules/querystring/index.js:9: WARNING - Property unescapeBuffer never defined on querystring
  unescapeBuffer,
  ^^^^^^^^^^^^^^

node_modules/readline/index.js:3: WARNING - Property Interface never defined on readline
  Interface,
  ^^^^^^^^^

node_modules/repl/index.js:4: WARNING - Property REPL_MODE_MAGIC never defined on repl
  REPL_MODE_MAGIC,
  ^^^^^^^^^^^^^^^

node_modules/repl/index.js:5: WARNING - Property REPL_MODE_SLOPPY never defined on repl
  REPL_MODE_SLOPPY,
  ^^^^^^^^^^^^^^^^

node_modules/repl/index.js:6: WARNING - Property REPL_MODE_STRICT never defined on repl
  REPL_MODE_STRICT,
  ^^^^^^^^^^^^^^^^

node_modules/repl/index.js:9: WARNING - Property writer never defined on repl
  writer,
  ^^^^^^

node_modules/timers/index.js:3: WARNING - Property active never defined on timers
  active,
  ^^^^^^

node_modules/timers/index.js:7: WARNING - Property enroll never defined on timers
  enroll,
  ^^^^^^

node_modules/timers/index.js:11: WARNING - Property unenroll never defined on timers
  unenroll,
  ^^^^^^^^

node_modules/tls/index.js:5: WARNING - Property DEFAULT_CIPHERS never defined on tls
  DEFAULT_CIPHERS,
  ^^^^^^^^^^^^^^^

node_modules/tls/index.js:7: WARNING - Property SLAB_BUFFER_SIZE never defined on tls
  SLAB_BUFFER_SIZE,
  ^^^^^^^^^^^^^^^^

node_modules/tls/index.js:13: WARNING - Property convertALPNProtocols never defined on tls
  convertALPNProtocols,
  ^^^^^^^^^^^^^^^^^^^^

node_modules/tls/index.js:14: WARNING - Property convertNPNProtocols never defined on tls
  convertNPNProtocols,
  ^^^^^^^^^^^^^^^^^^^

node_modules/tls/index.js:19: WARNING - Property parseCertString never defined on tls
  parseCertString,
  ^^^^^^^^^^^^^^^

node_modules/url/index.js:11: WARNING - Property resolveObject never defined on url
  resolveObject,
  ^^^^^^^^^^^^^

node_modules/util/index.js:11: WARNING - Property getSystemErrorName never defined on util
  getSystemErrorName,
  ^^^^^^^^^^^^^^^^^^

0 error(s), 50 warning(s), 96.9% typed
```

%~%