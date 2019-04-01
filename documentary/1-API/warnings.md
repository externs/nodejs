## Warnings

These were the warnings that were emitted during the generation of each extern.

%~ width="25"%

### Global

```js
// interface NodeBuffer extends Uint8Array {
types-v8/global.d.ts(188,1): warning TS0: omitting heritage reference to a type/value conflict: Uint8Array
```

Update manually to extend `Uint8Array`.

%~ width="25"%

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

%~ width="25"%

### Events

Remove `.internal`.

%~ width="25"%

### Stream

```js
// export class Duplex extends Readable implements Writable {
types-v8/stream.d.ts(200,7): warning TS0: omitting @implements of a class: Writable
```

Remove `.internal`.

%~ width="25"%

### Crypto

```js
types-v8/crypto.d.ts(10,14): warning TS0: type/symbol conflict for Certificate, using {?} for now
```

%~ width="25"%

### Dns

```
types-v8/dns.d.ts(272,7): warning TS0: unhandled anonymous type with multiple call signatures

types-v8/dns.d.ts(273,7): warning TS0: unhandled anonymous type with multiple call signatures

types-v8/dns.d.ts(274,7): warning TS0: unhandled anonymous type with multiple call signatures
```

%~ width="25"%

### Fs

```js
//   export interface FSWatcher extends events.EventEmitter {
types-v8/fs.d.ts(46,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

%~ width="25"%

### Tls

```js
// export interface ClearTextStream extends stream.Duplex {
types-v8/tls.d.ts(327,3): warning TS0: omitting interface deriving from class: stream.Duplex
```

%~ width="25"%

### Http

Update Property Signatures.

```js
/* TODO: PropertySignature: http.'accept' */
```

%~ width="25"%

### Https

```js
types-v8/https.d.ts(12,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(25,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(44,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(45,3): warning TS0: unhandled type flags: IncludesNonWideningType

types-v8/https.d.ts(46,3): warning TS0: unhandled type flags: IncludesNonWideningType
```

%~ width="25"%

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

%~ width="25"%

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

%~ width="25"%

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

%~ width="25"%

### Util

```js
// export var inspect: {
types-v8/util.d.ts(11,14): warning TS0: unhandled anonymous type

// export interface CustomPromisify<TCustom extends Function> extends Function {
types-v8/util.d.ts(42,3): warning TS0: omitting heritage reference to a type/value conflict: Function
```

%~ width="25"%

### Cluster

```js
// export interface Cluster extends events.EventEmitter {
types-v8/cluster.d.ts(98,3): warning TS0: omitting interface deriving from class: events.EventEmitter
```

%~ width="25"%

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

%~%