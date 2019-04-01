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
