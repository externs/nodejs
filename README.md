# @depack/externs

[![npm version](https://badge.fury.io/js/%40depack%2Fexterns.svg)](https://npmjs.org/package/@depack/externs)

`@depack/externs` is The Google Closure Compiler Externs For Node.JS.

```sh
yarn add -E @depack/externs
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [How To Use](#how-to-use)
  * [Global Conflict](#global-conflict)
- [Warnings](#warnings)
  * [Global](#global)
  * [Node.JS](#nodejs)
  * [Events](#events)
  * [Stream](#stream)
  * [Crypto](#crypto)
  * [Fs](#fs)
  * [Tls](#tls)
  * [Http](#http)
  * [Https](#https)
  * [Http2](#http2)
  * [Zlib](#zlib)
  * [Child_Process](#child_process)
  * [Util](#util)
  * [Cluster](#cluster)
  * [Readline](#readline)
  * [Repl](#repl)
  * [Assert](#assert)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## How To Use

These externs were generated for the use by _Depack_: the dependency bundler for the web and back-end Node.JS. _Depack_ will perform regex-based static analysis on modules, and when they import an internal module (e.g., `path`), it will mark an extern as needed to be added. It will then add the `require` call to the output wrapper:

```js
import { join } from 'path'

// will produce the wrapper
const path = require('path')
```

Because path is now a globally declared variable that is placed in the wrapper, it will also participate in optimisations, and by supplying the externs from the relevant externs file, the compiler will successfully be able to perform correct property renames, leaving property names of that module alone.

The important thing about how compiling Node.JS packages works in _Depack_, is the strategy when the pseudo built-in module is generated in `node_modules`. For example, for the `path` internal, the following code will be produced in `node_modules/path/index.js`:

```js
export default path
export const {
  'basename': basename,
  'delimiter': delimiter,
  'dirname': dirname,
  'extname': extname,
  'format': format,
  'isAbsolute': isAbsolute,
  'join': join,
  'normalize': normalize,
  'parse': parse,
  'posix': posix,
  'relative': relative,
  'resolve': resolve,
  'sep': sep,
  'win32': win32,
} = path
```

Because `path` was previously defined in the output wrapper, all its properties will be destructured and exported correctly.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true" width="25"></a></p>

### Global Conflict

There are 2 modules that have the same name as some global variable: `module` and `console`. _Depack_ will require them using an underscore:

```js
const _module = require('module')
const _console = require('console')
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Warnings

These were the warnings that were emitted during the generation of each extern.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true" width="25"></a></p>

### Global

```js
// interface NodeBuffer extends Uint8Array {
types-v8/global.d.ts(188,1): warning TS0: omitting heritage reference to a type/value conflict: Uint8Array
```

Update manually to extend `Uint8Array`.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true" width="25"></a></p>

### Node.JS

```js
types-v8/nodejs.d.ts(98,3): warning TS0: omitting heritage reference to a type/value conflict: Error
types-v8/nodejs.d.ts(123,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(137,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(149,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(255,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(270,7): warning TS0: should not emit a 'never' type
types-v8/nodejs.d.ts(446,7): warning TS0: anonymous type has no symbol
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true" width="25"></a></p>

### Events

Remove `.internal`.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/6.svg?sanitize=true" width="25"></a></p>

### Stream

```js
// export class Duplex extends Readable implements Writable {
types-v8/stream.d.ts(200,7): warning TS0: omitting @implements of a class: Writable
```

Remove `.internal`.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/7.svg?sanitize=true" width="25"></a></p>

### Crypto

```js
types-v8/crypto.d.ts(10,14): warning TS0: type/symbol conflict for Certificate, using {?} for now
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/8.svg?sanitize=true" width="25"></a></p>

### Dns

```
types-v8/dns.d.ts(272,7): warning TS0: unhandled anonymous type with multiple call signatures

types-v8/dns.d.ts(273,7): warning TS0: unhandled anonymous type with multiple call signatures

types-v8/dns.d.ts(274,7): warning TS0: unhandled anonymous type with multiple call signatures
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/9.svg?sanitize=true" width="25"></a></p>

### Fs

```js
//   export interface FSWatcher extends events.EventEmitter {
types-v8/fs.d.ts(46,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/10.svg?sanitize=true" width="25"></a></p>

### Tls

```js
// export interface ClearTextStream extends stream.Duplex {
types-v8/tls.d.ts(327,3): warning TS0: omitting interface deriving from class: stream.Duplex
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/11.svg?sanitize=true" width="25"></a></p>

### Http

Update Property Signatures.

```js
/* TODO: PropertySignature: http.'accept' */
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/12.svg?sanitize=true" width="25"></a></p>

### Https

```js
types-v8/https.d.ts(12,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(25,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(44,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(45,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(46,3): warning TS0: unhandled type flags: IncludesNonWideningType
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/13.svg?sanitize=true" width="25"></a></p>

### Http2

```js
// export interface Http2Stream extends stream.Duplex {
types-v8/http2.d.ts(61,3): warning TS0: omitting interface deriving from class: stream.Duplex

// export interface Http2Session extends events.EventEmitter {
types-v8/http2.d.ts(248,3): warning TS0: omitting interface deriving from class: events.EventEmitter

// export interface Http2Server extends net.Server {
types-v8/http2.d.ts(405,3): warning TS0: omitting interface deriving from class: net.Server

// export interface Http2SecureServer extends tls.Server {
types-v8/http2.d.ts(449,3): warning TS0: omitting interface deriving from class: tls.Server
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/14.svg?sanitize=true" width="25"></a></p>

### Zlib

```js
types-v8/zlib.d.ts(32,3): warning TS0: omitting interface deriving from class: stream.Transform

types-v8/zlib.d.ts(33,3): warning TS0: omitting interface deriving from class: stream.Transform

types-v8/zlib.d.ts(34,3): warning TS0: omitting interface deriving from class: stream.Transform

types-v8/zlib.d.ts(35,3): warning TS0: omitting interface deriving from class: stream.Transform

types-v8/zlib.d.ts(36,3): warning TS0: omitting interface deriving from class: stream.Transform

types-v8/zlib.d.ts(37,3): warning TS0: omitting interface deriving from class: stream.Transform

types-v8/zlib.d.ts(38,3): warning TS0: omitting interface deriving from class: stream.Transform
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/15.svg?sanitize=true" width="25"></a></p>

### Child_Process

```
types-v8/child_process.d.ts(10,3): warning TS0: omitting interface deriving from class: events.EventEmitter

types-v8/child_process.d.ts(126,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(129,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(133,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(139,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(144,7): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(145,7): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(147,7): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(172,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(174,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(198,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(199,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(213,7): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/child_process.d.ts(214,7): warning TS0: unhandled type flags: IncludesNonWideningType
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/16.svg?sanitize=true" width="25"></a></p>

### Util

```js
// export var inspect: {
types-v8/util.d.ts(11,14): warning TS0: unhandled anonymous type

// export interface CustomPromisify<TCustom extends Function> extends Function {
types-v8/util.d.ts(42,3): warning TS0: omitting heritage reference to a type/value conflict: Function
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/17.svg?sanitize=true" width="25"></a></p>

### Cluster

```js
// export interface Cluster extends events.EventEmitter {
types-v8/cluster.d.ts(98,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/18.svg?sanitize=true" width="25"></a></p>

### Punycode

```js
//   export var ucs2: ucs2;
types-v8/punycode.d.ts(6,14): warning TS0: type/symbol conflict for ucs2, using {?} for now
```

### Readline

```js
// export interface ReadLine extends events.EventEmitter {
types-v8/readline.d.ts(17,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

### Repl

```js
// export class Recoverable extends SyntaxError {
types-v8/repl.d.ts(65,3): warning TS0: omitting heritage reference to a type/value conflict: SyntaxError
```

### Assert

```js
// export class AssertionError implements Error {
types-v8/assert.d.ts(4,7): warning TS0: omitting heritage reference to a type/value conflict: Error

// export function fail(message?: string): never;
types-v8/assert.d.ts(19,7): warning TS0: should not emit a 'never' type

// export function fail(actual: any, expected: any, message?: string, operator?: string, stackStartFn?: Function): never;
types-v8/assert.d.ts(20,7): warning TS0: should not emit a 'never' type
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/19.svg?sanitize=true"></a></p>

## Copyright

<table>
  <tr>
    <th>
      <a href="https://artd.eco">
        <img src="https://raw.githubusercontent.com/wrote/wrote/master/images/artdeco.png" alt="Art Deco" />
      </a>
    </th>
    <th>© <a href="https://artd.eco">Art Deco</a> for <a href="https://artd.eco/depack">Depack</a> 2019</th>
    <th>
      <a href="https://www.technation.sucks" title="Tech Nation Visa">
        <img src="https://raw.githubusercontent.com/artdecoweb/www.technation.sucks/master/anim.gif"
          alt="Tech Nation Visa" />
      </a>
    </th>
    <th><a href="https://www.technation.sucks">Tech Nation Visa Sucks</a></th>
  </tr>
</table>

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>