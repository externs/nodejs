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

### util

```ts
node_modules/util/index.js:11: WARNING - Property getSystemErrorName never defined on util
  getSystemErrorName,
  ^^^^^^^^^^^^^^^^^^
```

-[x] Adding to `util.getSystemErrorName` to externs manually.

%~%