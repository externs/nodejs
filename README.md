# @depack/externs

[![npm version](https://badge.fury.io/js/%40depack%2Fexterns.svg)](https://npmjs.org/package/@depack/externs)

`@depack/externs` is The Google Closure Compiler Externs For Node.JS.

```sh
yarn add -E @depack/externs
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [Method](#method)
- [API](#api)
  * [`getExternsDir(): string`](#getexternsdir-string)
- [How To Use](#how-to-use)
  * [Global Conflict](#global-conflict)
- [Warnings And Todos](#warnings-and-todos)
  * [Export = internal](#export--internal)
  * [Global](#global)
  * [Node.JS](#nodejs)
  * [Events](#events)
  * [Stream](#stream)
  * [Assert](#assert)
    * [Missing Methods In Types](#missing-methods-in-types)
  * [v8](#v8)
    * [Missing Methods In Types](#missing-methods-in-types)
  * [Cluster](#cluster)
    * [Missing Methods In Types](#missing-methods-in-types)
  * [Crypto](#crypto)
    * [Missing Methods In Types](#missing-methods-in-types)
  * [Dns](#dns)
  * [Fs](#fs)
  * [Tls](#tls)
  * [Http](#http)
  * [Https](#https)
  * [Http2](#http2)
  * [Zlib](#zlib)
  * [Child_Process](#child_process)
  * [Util](#util)
  * [Punycode](#punycode)
  * [Readline](#readline)
  * [Repl](#repl)
- [WIP](#wip)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## Method

The method is to use [`tsickle`](https://github.com/angular/tsickle) on the types definition file for Node.JS (`@types/node/index.d.ts`). However, there are a few steps that were taken to prepare the externs:

1. The definitions are split into individual files, making it easier to track warnings and maintain the manual changes that have to be made for each extern.
1. When trying to generate from [the single file](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/v8/index.d.ts#L193), there's a conflict between `declare var Buffer` and `interface Buffer`, which _TypeScript_ is fine with, but `tsickle` fails to process properly. To overcome this, the _NodeBuffer_ interface is just moved into a separate file, the externs for it are generated, and then manually updated to include static methods from _var Buffer_. This can also be done by declaring _Buffer_ as a class with static methods, but we did it manually.
    ```ts
    // original node.d.ts
    // Declaring both var and interface DOES NOT WORK WITH TSICKLE
    interface Buffer extends NodeBuffer { }
    declare var Buffer: { }
    // later on ...
    interface NodeBuffer extends Uint8Array { }
    ```
1. There have been tests added to the `Buffer` interface to make sure there are no warnings when working with _Buffer_ API. These tests is just an illustration of how externs can be tested, i.e., to make sure the _GCC_ does not produce any warnings.
    <details>
    <summary>
    Show <em>Buffer</em> tests (<code>depack test/spec/buffer.js -a --checks_only --externs v8/global/buffer.js --externs v8/global.js</code> shows no warnings).
    </summary>

    ```js
    const ab = new ArrayBuffer(16)
    const data = ['hello', 'world']
    const string = 'hello world'
    
    /** @type {!Buffer} */
    var b
    b = new Buffer(string)
    b = new Buffer(string, 'utf8')
    b = new Buffer(100)
    b = new Buffer(new Uint8Array(100))
    b = new Buffer(ab)
    b = new Buffer(data)
    b = new Buffer(b)
    
    b = Buffer.from(ab)
    b = Buffer.from(ab, 10)
    b = Buffer.from(ab, 10, 20)
    
    b = Buffer.from(data)
    b = Buffer.from(string)
    b = Buffer.from(b)
    b = Buffer.from(ab)
    
    b = Buffer.from(string, 'utf8')
    
    /** @type {boolean} */
    var ib = Buffer.isBuffer(string)
    ib = Buffer.isBuffer(b)
    
    /** @type {boolean} */
    var ie = Buffer.isEncoding('utf8')
    ie = Buffer.isEncoding('sirocco5')
    
    /** @type {number} */
    var bl = Buffer.byteLength(string)
    bl = Buffer.byteLength(b)
    bl = Buffer.byteLength(new DataView(ab))
    bl = Buffer.byteLength(ab)
    bl = Buffer.byteLength(string, 'utf8')
    
    b = Buffer.concat([b, b])
    b = Buffer.concat([b, b], 10)
    
    /** @type {number} */
    var n = Buffer.compare(b, b)
    
    b = Buffer.alloc(10)
    b = Buffer.alloc(10, string)
    b = Buffer.alloc(10, b)
    b = Buffer.alloc(10, 10)
    b = Buffer.alloc(10, string, 'utf8')
    
    b = Buffer.allocUnsafe(10)
    
    b = Buffer.allocUnsafeSlow(10)
    
    /** @type {number} */
    var ps = Buffer.poolSize
    ```
    </details>
1. Because of [warnings](#warnings-and-todos) and cases that `tsickle` can't handle, some externs need manual update by looking at the error messages and also manual inspection of generated code.
1. The globals are only defined as the `global` object in **`global.d.ts`**: `declare var global: NodeJS.Global;`. These do not get propagated to the global scope. For now, we're not sure whether properties of the [`NodeJS.Global`](/types-v8/nodejs.js#429) other than _Buffer_ should be expanded into the global context, because _Closure_ will probably handle them already since they're generic JS.
    <details>
    <summary>Show globals</summary>

    ```ts
    export interface Global {
        Array: typeof Array;
        ArrayBuffer: typeof ArrayBuffer;
        Boolean: typeof Boolean;
        Buffer: typeof Buffer;
        DataView: typeof DataView;
        Date: typeof Date;
        Error: typeof Error;
        EvalError: typeof EvalError;
        Float32Array: typeof Float32Array;
        Float64Array: typeof Float64Array;
        Function: typeof Function;
        GLOBAL: Global;
        Infinity: typeof Infinity;
        Int16Array: typeof Int16Array;
        Int32Array: typeof Int32Array;
        Int8Array: typeof Int8Array;
        Intl: typeof Intl;
        JSON: typeof JSON;
        Map: MapConstructor;
        Math: typeof Math;
        NaN: typeof NaN;
        Number: typeof Number;
        Object: typeof Object;
        Promise: Function;
        RangeError: typeof RangeError;
        ReferenceError: typeof ReferenceError;
        RegExp: typeof RegExp;
        Set: SetConstructor;
        String: typeof String;
        Symbol: Function;
        SyntaxError: typeof SyntaxError;
        TypeError: typeof TypeError;
        URIError: typeof URIError;
        Uint16Array: typeof Uint16Array;
        Uint32Array: typeof Uint32Array;
        Uint8Array: typeof Uint8Array;
        Uint8ClampedArray: Function;
        WeakMap: WeakMapConstructor;
        WeakSet: WeakSetConstructor;
        // clearImmediate is part of global extern
        clearImmediate: (immediateId: any) => void;
        // clearInterval is skipped by tsickle
        clearInterval: (intervalId: NodeJS.Timer) => void;
        // clearTimeout is skipped by tsickle
        clearTimeout: (timeoutId: NodeJS.Timer) => void;
        // console is part of global extern
        console: typeof console;
        decodeURI: typeof decodeURI;
        decodeURIComponent: typeof decodeURIComponent;
        encodeURI: typeof encodeURI;
        encodeURIComponent: typeof encodeURIComponent;
        escape: (str: string) => string;
        eval: typeof eval;
        // global is part of global extern
        global: Global;
        isFinite: typeof isFinite;
        isNaN: typeof isNaN;
        parseFloat: typeof parseFloat;
        parseInt: typeof parseInt;
        // process is part of global extern
        process: Process;
        // root is NOT part of global extern: SHOULD IT BE?
        root: Global;
        // setImmediate is part of global extern
        setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
        // setInterval is skipped by tsickle
        setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        // setTimeout is skipped by tsickle
        setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => NodeJS.Timer;
        undefined: typeof undefined;
        unescape: (str: string) => string;
        gc: () => void;
        v8debug?: any;
    }
    ```
    </details>

The issue with splitting the declarations into separate files is that it is harder to merge upstream updates into it, and a lot of manual work has to be done. Therefore, ideally there would have to be patch scripts that would allow to update generated types, however at the moment externs are updated by hand when there are [warnings](#warnings-and-todos).

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## API

```js
import getExternsDir, { dependencies } from '@depack/externs'
```

The externs for each of the modules are found in the published `v8` directory. The `global` and `nodejs` externs always need to be present when compiling a _Node.JS_ program (unless its in pure JS). Externs might depend on other externs, and the dependency tree is exported by this package:

```js
/* alanode example/ */
import getExternsDir, { dependencies } from '../src'

console.log('Externs dir: %s', getExternsDir())
console.log('Dependencies:')
console.log(dependencies)
```
```js
Externs dir: v8
Dependencies:
{ url: [ 'querystring' ],
  stream: [ 'events' ],
  net: [ 'stream', 'events', 'dns' ],
  fs: [ 'stream', 'events', 'url' ],
  tls: [ 'crypto', 'dns', 'net', 'stream' ],
  http: [ 'events', 'net', 'stream', 'url' ],
  https: [ 'tls', 'events', 'http', 'url' ],
  http2: [ 'events', 'fs', 'net', 'stream', 'tls', 'http', 'url' ],
  zlib: [ 'stream' ],
  child_process: [ 'events', 'stream', 'net' ],
  cluster: [ 'child_process', 'events', 'net' ],
  readline: [ 'events', 'stream' ],
  repl: [ 'stream', 'readline' ],
  dgram: [ 'events', 'dns' ],
  string_decoder: [ 'buffer' ],
  domain: [ 'events' ],
  tty: [ 'net' ] }
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true" width="25"></a></p>

### `getExternsDir(): string`

Runs `require.resolve('@depack/externs/package.json')` to find the location of this package, and adds the `v8` at the end to point to the externs version 8 (currently only Node 8 is supported).

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/3.svg?sanitize=true"></a></p>

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/4.svg?sanitize=true" width="25"></a></p>

### Global Conflict

There are 3 modules that have the same name as some global variable: `module` and `console` and `buffer`. The `crypto` extern [already exists](https://github.com/google/closure-compiler/blob/master/externs/browser/w3c_webcrypto.js#L552) in the _GCC_. Therefore, _Depack_ will require them using an underscore:

```js
const _module = require('module')
const _console = require('console')
const _buffer = require('buffer')
const _crypto_ = require('crypto')
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/5.svg?sanitize=true"></a></p>

## Warnings And Todos

There were warnings that were emitted during the generation of each extern. Those warnings needed to be fixed manually. There are also `TODO` statements generated by `tsickle` that could not perform some analysis. They also needed (and still need) to be fixed manually.

`tsickle` is not able to handle:

- *`PropertySignature`*:
    ```ts
    export interface IncomingHttpHeaders { 'accept'?: string; }
    ```
- *`IncludesNonWideningType`*:
    ```ts
    export type ServerOptions = tls.SecureContextOptions & tls.TlsOptions;
    ```
- *`omitting interface deriving from class`* (not always):
    ```ts
    export interface ReadableStream extends EventEmitter { }
    ```
- *`omitting heritage reference to a type/value`* (not sure wat):
    ```ts
    export interface ErrnoException extends Error { }
    ```

> *omitting interface deriving from class*
> For some reason, the class will not always be able to extend another class. E.g., the `@extends {event.EventEmitter}` has to be added manually in many files that rely on it.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/6.svg?sanitize=true" width="25"></a></p>

### Export = internal

`Events` and `Stream` have a typed structure that exports an `internal` property:

```ts
declare module "events" {
  class internal extends NodeJS.EventEmitter { }

  namespace internal {
    export class EventEmitter extends internal {
      static listenerCount(emitter: EventEmitter, event: string | symbol): number;
      ...
    }
  }

  export = internal;
}
```

This will result in externs having the `internal` property:

```js
/**
 * @param {(string|symbol)} type
 * @return {number}
 */
events.internal.EventEmitter.prototype.listenerCount = function(type) {};
```

This is obviously incorrect, so that `.internal` needs to be removed manually.

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/7.svg?sanitize=true" width="25"></a></p>


### Global

```js
// interface NodeBuffer extends Uint8Array {
types-v8/global.d.ts(188,1): warning TS0: omitting heritage reference to a type/value conflict: Uint8Array
```

- [x] [Add](v8/global.js#357) `@ extends {Uint8Array}` to _NodeBuffer_.

### Node.JS

Node.JS is an interface that contains API referenced in other classes. Although there's no such thing as NodeJS extern, its properties are referenced in other externs. Because it is also referenced in the `global.d.ts`, it will always be added by _Depack_ when compiling a _Node.JS_ program.

```js
types-v8/nodejs.d.ts(98,3): warning TS0: omitting heritage reference to a type/value conflict: Error
types-v8/nodejs.d.ts(123,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(137,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(149,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(255,3): warning TS0: omitting interface deriving from class: EventEmitter
types-v8/nodejs.d.ts(270,7): warning TS0: should not emit a 'never' type
types-v8/nodejs.d.ts(446,7): warning TS0: anonymous type has no symbol
```

- [x] [Add](v8/nodejs.js#128) `@extends {Error}` to _ErrnoException_
- [x] [Add](v8/nodejs.js#248) `@extends {NodeJS.EventEmitter}` to _ReadableStream_
- [x] [Add](v8/nodejs.js#319) `@extends {NodeJS.EventEmitter}` to _WritableStream_
- [x] [Add](v8/nodejs.js#350) `@extends {NodeJS.EventEmitter}` to _Events_
- [x] [Add](v8/nodejs.js#652) `@extends {NodeJS.EventEmitter}` to _Process_
- [ ] [Add](v8/nodejs.js#953) `Intl` type to _NodeJS.Global.prototype.Intl;_
- [x] [Remove](v8/nodejs.js#546) `@struct` from _ProcessEnv_ to prevent warning
    ```js
    test/code.js:7: WARNING - Cannot do '[]' access on a struct
    const output = process.env['OUTPUT']
    ```
- [x] [Add](v8/nodejs.js#1070) `Error.prepareStackTrace` to the Closure's _Error_ extern.

### Events

- [x] Remove `.internal`.

Because events is both a namespace, and a function, it is exported in the following way:

```js
/** @const */
var events = {};
/**
 * @extends {NodeJS.EventEmitter}
 * @constructor
 * @struct
 */
events = function() {};
```

This will lead to the compiler warning:

```js
v8/events.js:15: WARNING - accessing name events in externs has no effect. Perhaps you forgot to add a var keyword?
events = function() {};
^^^^^^

v8/events.js:15: WARNING - constant events assigned a value more than once.
Original definition at v8/events.js:9
events = function() {};
^^^^^^^^^^^^^^^^^^^^^^
```

Therefore, we collapse the 2 declarations together into

```js
/**
 * @extends {NodeJS.EventEmitter}
 * @constructor
 * @struct
 */
var events = function() {};
```

### Stream

```js
// export class Duplex extends Readable implements Writable {
types-v8/stream.d.ts(200,7): warning TS0: omitting @implements of a class: Writable
```

- [x] Remove `.internal`.
- [x] Because `@constructor` cannot inherit more than one class, the `@extends {Writable}` is not added, however because the methods have been defined in types as implementations of the `Writable` interfaces, they are added to the Duplex prototype itself.

Same as for _events_ (see above), collapse the declaration into a single `var` definition.

```js
/**
 * @extends {events.EventEmitter}
 * @constructor
 * @struct
 */
var stream = function() {};
```

### Assert

```js
// export function fail(message?: string): never;
types-v8/assert.d.ts(19,7): warning TS0: should not emit a 'never' type

// export function fail(actual: any, expected: any, message?: string, operator?: string, stackStartFn?: Function): never;
types-v8/assert.d.ts(20,7): warning TS0: should not emit a 'never' type
```

- [x] Remove `.internal` and `{}` namespace declaration (see Events for description).
- [x] Despite the warning, the `AssertionError` [does extend](v8/assert.js#16) `Error`.
    ```js
    // export class AssertionError implements Error {
    types-v8/assert.d.ts(4,7): warning TS0: omitting heritage reference to a type/value conflict: Error
    ```

#### Missing Methods In Types

- [ ] `doesNotReject` added in `V8.13.0`
- [ ] `rejects` added in `V8.13.0`
- [ ] `strict` added in `V8.13.0`

### v8

There are some missing APIs that appeared in Node 8 that are not present in types.

#### Missing Methods In Types

- [ ] `serialize`
- [ ] `deserialize`
- [ ] `cachedDataVersionTag`
- [ ] `Serializer`
- [ ] `Deserializer`
- [ ] `DefaultSerializer`
- [ ] `DefaultDeserializer`

### Cluster

- [x] [Already present](v8/cluster.js#151) `@ extends {events.EventEmitter}` to _Cluster_.
    ```js
    // export interface Cluster extends events.EventEmitter {
    types-v8/cluster.d.ts(98,3): warning TS0: omitting interface deriving from class: events.EventEmitter
    ```

#### Missing Methods In Types

- [ ] `SCHED_NONE`
- [ ] `SCHED_RR`
- [ ] `domain`
- [ ] `schedulingPolicy`


### Crypto

> The `crypto` externs [already exists](https://github.com/google/closure-compiler/blob/master/externs/browser/w3c_webcrypto.js#L552) in _GCC_, therefore the extern's namespace is added as `_crypto_.

```js
types-v8/crypto.d.ts(10,14): warning TS0: type/symbol conflict for Certificate, using {?} for now
```

- [ ] Fix the `Certificate` conflict.

#### Missing Methods In Types

- [ ] `Cipheriv`
- [ ] `Decipheriv`
- [ ] `DiffieHellmanGroup`
- [ ] `Sign`
- [ ] `constants`
- [ ] `createDiffieHellmanGroup`
- [ ] `prng`
- [ ] `rng`
- [ ] `setEngine`

### Dns

```js
types-v8/dns.d.ts(272,7): warning TS0: unhandled anonymous type with multiple call signatures

types-v8/dns.d.ts(273,7): warning TS0: unhandled anonymous type with multiple call signatures

types-v8/dns.d.ts(274,7): warning TS0: unhandled anonymous type with multiple call signatures
```

The _Resolver_ class has `resolve`, `resolve4`, `resolve6` methods which it references in its definition, however those methods have multiple call signatures.

```ts
export function resolve(hostname: string, callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "A", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
export function resolve(hostname: string, rrtype: "AAAA", callback: (err: NodeJS.ErrnoException, addresses: string[]) => void): void;
// + N more

export class Resolver {
  ...
  resolve: typeof resolve;
  resolve4: typeof resolve4;
  resolve6: typeof resolve6;
```

This means the externs cannot be generated.

```js
/** @type {?} */
dns.Resolver.prototype.resolve;
/** @type {?} */
dns.Resolver.prototype.resolve4;
/** @type {?} */
dns.Resolver.prototype.resolve6;
```

- [ ] Add a type for each of the methods.

### Fs

```js
//   export interface FSWatcher extends events.EventEmitter {
types-v8/fs.d.ts(46,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

- [x] [Add `@extends {events.EventEmitter}`](v8/fs.js#L90) to _FSWatcher_.

### Tls

```js
// export interface ClearTextStream extends stream.Duplex {
types-v8/tls.d.ts(327,3): warning TS0: omitting interface deriving from class: stream.Duplex
```

- [x] [Add `* @extends {stream.Duplex}`](v8/tld.js#339) to _ClearTextStream_.

### Http

Update Property Signatures.

```js
/* TODO: PropertySignature: http.'accept' */
```

- [ ] Add property signatures.

### Https

```js
types-v8/https.d.ts(12,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(25,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(44,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(45,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(46,3): warning TS0: unhandled type flags: IncludesNonWideningType
```

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


### Child_Process

```js
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


### Util

```js
// export var inspect: {
types-v8/util.d.ts(11,14): warning TS0: unhandled anonymous type
```

Here, the `inspect` is defined in curly brackets for all of its possible signatures. `tsickle` does not understand that.

```js
export var inspect: {
  (object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
  (object: any, options: InspectOptions): string;
  colors: {
    [color: string]: [number, number] | undefined
  }
  styles: {
    [style: string]: string | undefined
  }
  defaultOptions: InspectOptions;
  custom: symbol;
};
```

```js
// export interface CustomPromisify<TCustom extends Function> extends Function {
types-v8/util.d.ts(42,3): warning TS0: omitting heritage reference to a type/value conflict: Function
```

### Punycode

```js
//   export var ucs2: ucs2;
types-v8/punycode.d.ts(6,14): warning TS0: type/symbol conflict for ucs2, using {?} for now
```

### Readline

```js
// export interface ReadLine extends events.EventEmitter {
types-v8/readline.d.ts(17,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

- [x] [Rename](v8/readline.js#185) `interface` argument to `_interface`, otherwise the following error is shown:
    ```js
    @depack/externs/v8/readline.js:185: ERROR - Parse error. ')' expected
    readline.emitKeypressEvents = function(stream, interface) {};
                                                  ^
    ```

### Repl

```js
// export class Recoverable extends SyntaxError {
types-v8/repl.d.ts(65,3): warning TS0: omitting heritage reference to a type/value conflict: SyntaxError
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/8.svg?sanitize=true"></a></p>

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

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/9.svg?sanitize=true"></a></p>

## Copyright

The types copyright belongs to their authors.

**Type definitions for Node.js 8.10** by:
- Microsoft TypeScript <https://github.com/Microsoft>
- DefinitelyTyped <https://github.com/DefinitelyTyped>
- Parambir Singh <https://github.com/parambirs>
- Christian Vaagland Tellnes <https://github.com/tellnes>
- Wilco Bakker <https://github.com/WilcoBakker>
- Nicolas Voigt <https://github.com/octo-sniffle>
- Chigozirim C. <https://github.com/smac89>
- Flarna <https://github.com/Flarna>
- Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
- wwwy3y3 <https://github.com/wwwy3y3>
- Deividas Bakanas <https://github.com/DeividasBakanas>
- Kelvin Jin <https://github.com/kjin>
- Alvis HT Tang <https://github.com/alvis>
- Sebastian Silbermann <https://github.com/eps1lon>
- Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
- Alberto Schiabel <https://github.com/jkomyno>
- Huw <https://github.com/hoo29>
- Nicolas Even <https://github.com/n-e>
- Bruno Scheufler <https://github.com/brunoscheufler>
- Hoàng Văn Khải <https://github.com/KSXGitHub>
- Lishude <https://github.com/islishude>
- Andrew Makarov <https://github.com/r3nya>
- Jordi Oliveras Rovira <https://github.com/j-oliveras>
- Thanik Bhongbhibhat <https://github.com/bhongy>

Taken from https://github.com/DefinitelyTyped/DefinitelyTyped

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