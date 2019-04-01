### Global

```js
// interface NodeBuffer extends Uint8Array {
types-v8/global.d.ts(188,1): warning TS0: omitting heritage reference to a type/value conflict: Uint8Array
```

- [x] [Add](v8/global.js#357) `@ extends {Uint8Array}` to _NodeBuffer_.