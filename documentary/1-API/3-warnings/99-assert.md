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