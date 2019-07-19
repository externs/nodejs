## WIP

Currently, after some ignored properties and methods not defined in externs, there are still warnings that have not been handled.

```ts
node_modules/buffer/index.js:6: WARNING - [JSC_INEXISTENT_PROPERTY] Property constants never defined on buffer
  constants,
  ^^^^^^^^^

node_modules/buffer/index.js:7: WARNING - [JSC_INEXISTENT_PROPERTY] Property kMaxLength never defined on buffer
  kMaxLength,
  ^^^^^^^^^^

node_modules/buffer/index.js:8: WARNING - [JSC_INEXISTENT_PROPERTY] Property kStringMaxLength never defined on buffer
  kStringMaxLength,
  ^^^^^^^^^^^^^^^^

node_modules/console/index.js:6: WARNING - [JSC_INEXISTENT_PROPERTY] Property context never defined on Console
  context,
  ^^^^^^^

node_modules/constants/index.js:4: WARNING - [JSC_INEXISTENT_PROPERTY] Property COPYFILE_EXCL never defined on constants
  COPYFILE_EXCL,
  ^^^^^^^^^^^^^

node_modules/constants/index.js:27: WARNING - [JSC_INEXISTENT_PROPERTY] Property EDQUOT never defined on constants
  EDQUOT,
  ^^^^^^

node_modules/constants/index.js:44: WARNING - [JSC_INEXISTENT_PROPERTY] Property EMULTIHOP never defined on constants
  EMULTIHOP,
  ^^^^^^^^^

node_modules/constants/index.js:95: WARNING - [JSC_INEXISTENT_PROPERTY] Property ESTALE never defined on constants
  ESTALE,
  ^^^^^^

node_modules/constants/index.js:103: WARNING - [JSC_INEXISTENT_PROPERTY] Property OPENSSL_VERSION_NUMBER never defined on constants
  OPENSSL_VERSION_NUMBER,
  ^^^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:125: WARNING - [JSC_INEXISTENT_PROPERTY] Property RSA_PSS_SALTLEN_AUTO never defined on constants
  RSA_PSS_SALTLEN_AUTO,
  ^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:126: WARNING - [JSC_INEXISTENT_PROPERTY] Property RSA_PSS_SALTLEN_DIGEST never defined on constants
  RSA_PSS_SALTLEN_DIGEST,
  ^^^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:127: WARNING - [JSC_INEXISTENT_PROPERTY] Property RSA_PSS_SALTLEN_MAX_SIGN never defined on constants
  RSA_PSS_SALTLEN_MAX_SIGN,
  ^^^^^^^^^^^^^^^^^^^^^^^^

node_modules/constants/index.js:139: WARNING - [JSC_INEXISTENT_PROPERTY] Property SIGINFO never defined on constants
  SIGINFO,
  ^^^^^^^

node_modules/constants/index.js:216: WARNING - [JSC_INEXISTENT_PROPERTY] Property UV_FS_COPYFILE_EXCL never defined on constants
  UV_FS_COPYFILE_EXCL,
  ^^^^^^^^^^^^^^^^^^^

node_modules/domain/index.js:4: WARNING - [JSC_INEXISTENT_PROPERTY] Property active never defined on domain
  active,
  ^^^^^^

node_modules/domain/index.js:6: WARNING - [JSC_INEXISTENT_PROPERTY] Property createDomain never defined on domain
  createDomain,
  ^^^^^^^^^^^^

node_modules/http2/index.js:3: WARNING - [JSC_BAD_PRIVATE_PROPERTY_ACCESS] Access to private property Http2ServerRequest of {
  ClientHttp2Session: (typeof http2.ClientHttp2Session),
  ClientHttp2Stream: (typeof http2.ClientHttp2Stream),
  ClientSessionOptions: None,
  ClientSessionRequestOptions: (typeof http2.ClientSessionRequestOptions),
  Http2SecureServer: (typeof http2.Http2SecureServer),
  Http2Server: (typeof http2.Http2Server),
  Http2ServerRequest: (typeof http2.Http2ServerRequest),
  Http2ServerResponse: (typeof http2.Http2ServerResponse),
  Http2Session: (typeof http2.Http2Session),
  Http2Stream: (typeof http2.Http2Stream), ...
} not allowed here.
  Http2ServerRequest,
  ^^^^^^^^^^^^^^^^^^

node_modules/http2/index.js:4: WARNING - [JSC_BAD_PRIVATE_PROPERTY_ACCESS] Access to private property Http2ServerResponse of {
  ClientHttp2Session: (typeof http2.ClientHttp2Session),
  ClientHttp2Stream: (typeof http2.ClientHttp2Stream),
  ClientSessionOptions: None,
  ClientSessionRequestOptions: (typeof http2.ClientSessionRequestOptions),
  Http2SecureServer: (typeof http2.Http2SecureServer),
  Http2Server: (typeof http2.Http2Server),
  Http2ServerRequest: (typeof http2.Http2ServerRequest),
  Http2ServerResponse: (typeof http2.Http2ServerResponse),
  Http2Session: (typeof http2.Http2Session),
  Http2Stream: (typeof http2.Http2Stream), ...
} not allowed here.
  Http2ServerResponse,
  ^^^^^^^^^^^^^^^^^^^

node_modules/process/index.js:7: WARNING - [JSC_INEXISTENT_PROPERTY] Property assert never defined on NodeJS.Process
  assert,
  ^^^^^^

node_modules/process/index.js:8: WARNING - [JSC_INEXISTENT_PROPERTY] Property binding never defined on NodeJS.Process
  binding,
  ^^^^^^^

node_modules/process/index.js:14: WARNING - [JSC_INEXISTENT_PROPERTY] Property dlopen never defined on NodeJS.Process
  dlopen,
  ^^^^^^

node_modules/process/index.js:21: WARNING - [JSC_INEXISTENT_PROPERTY] Property features never defined on NodeJS.Process
  features,
  ^^^^^^^^

node_modules/process/index.js:28: WARNING - [JSC_INEXISTENT_PROPERTY] Property initgroups never defined on NodeJS.Process
  initgroups,
  ^^^^^^^^^^

node_modules/process/index.js:32: WARNING - [JSC_INEXISTENT_PROPERTY] Property moduleLoadList never defined on NodeJS.Process
  moduleLoadList,
  ^^^^^^^^^^^^^^

node_modules/process/index.js:37: WARNING - [JSC_INEXISTENT_PROPERTY] Property ppid never defined on NodeJS.Process
  ppid,
  ^^^^

node_modules/process/index.js:38: WARNING - [JSC_INEXISTENT_PROPERTY] Property reallyExit never defined on NodeJS.Process
  reallyExit,
  ^^^^^^^^^^

node_modules/repl/index.js:4: WARNING - [JSC_INEXISTENT_PROPERTY] Property REPL_MODE_MAGIC never defined on repl
  REPL_MODE_MAGIC,
  ^^^^^^^^^^^^^^^

node_modules/repl/index.js:5: WARNING - [JSC_INEXISTENT_PROPERTY] Property REPL_MODE_SLOPPY never defined on repl
  REPL_MODE_SLOPPY,
  ^^^^^^^^^^^^^^^^

node_modules/repl/index.js:6: WARNING - [JSC_INEXISTENT_PROPERTY] Property REPL_MODE_STRICT never defined on repl
  REPL_MODE_STRICT,
  ^^^^^^^^^^^^^^^^

node_modules/repl/index.js:9: WARNING - [JSC_INEXISTENT_PROPERTY] Property writer never defined on repl
  writer,
  ^^^^^^

node_modules/timers/index.js:3: WARNING - [JSC_INEXISTENT_PROPERTY] Property active never defined on timers
  active,
  ^^^^^^

node_modules/timers/index.js:7: WARNING - [JSC_INEXISTENT_PROPERTY] Property enroll never defined on timers
  enroll,
  ^^^^^^

node_modules/timers/index.js:11: WARNING - [JSC_INEXISTENT_PROPERTY] Property unenroll never defined on timers
  unenroll,
  ^^^^^^^^

node_modules/tls/index.js:5: WARNING - [JSC_INEXISTENT_PROPERTY] Property DEFAULT_CIPHERS never defined on tls
  DEFAULT_CIPHERS,
  ^^^^^^^^^^^^^^^

node_modules/tls/index.js:7: WARNING - [JSC_INEXISTENT_PROPERTY] Property SLAB_BUFFER_SIZE never defined on tls
  SLAB_BUFFER_SIZE,
  ^^^^^^^^^^^^^^^^

node_modules/tls/index.js:13: WARNING - [JSC_INEXISTENT_PROPERTY] Property convertALPNProtocols never defined on tls
  convertALPNProtocols,
  ^^^^^^^^^^^^^^^^^^^^

node_modules/tls/index.js:14: WARNING - [JSC_INEXISTENT_PROPERTY] Property convertNPNProtocols never defined on tls
  convertNPNProtocols,
  ^^^^^^^^^^^^^^^^^^^

node_modules/tls/index.js:19: WARNING - [JSC_INEXISTENT_PROPERTY] Property parseCertString never defined on tls
  parseCertString,
  ^^^^^^^^^^^^^^^

0 error(s), 38 warning(s), 97.5% typed
```

%~%