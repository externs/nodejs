### Global

```js
// interface NodeBuffer extends Uint8Array {
types-v8/global.d.ts(188,1): warning TS0: omitting heritage reference to a type/value conflict: Uint8Array
```

- [x] [Add](v8/global/buffer.js#6) `@ extends {Uint8Array}` to _Buffer_.
- [x] Update `NodeRequire` to be callable, add [tests](test/spec/require.js):
    <table>
    <tr><th>Before</th><th>After</th></tr>
    <tr><td>

    ```ts
    /**
    * @record
    * @struct
    */
    function NodeRequireFunction() {}

    /* TODO: CallSignature:  */
    /**
    * @extends {NodeRequireFunction}
    * @record
    * @struct
    */
    function NodeRequire() {}
    /** @type {!RequireResolve} */
    NodeRequire.prototype.resolve;
    /**
    * @record
    * @struct
    */
    function RequireResolve() {}
    ```
    </td>
    <td>

    ```ts
    /**
     * @param {string} id
     * @returns {?}
     */
    function NodeRequireFunction(id) {}

    /* TODO: CallSignature:  */
    /**
    * @param {string} id
    * @returns {*}
    */
    function NodeRequire(id) {}
    /** @type {!RequireResolve} */
    NodeRequire.prototype.resolve;
    /**
    * @param {string} request
    * @param {{paths:!Array<string>}} options
    * @return {string}
    */
    function RequireResolve(request, options) {}
    ```
    </td></tr>
    </table>
- [x] The [`NodeModule.prototype.require`](v8/global.js) should not reference _NodeRequire_ instead of _NodeRequireFunction_ because _NodeRequire_ is just a function without additional properties such as `.cache` _etc_. However, _NodeRequireFunction_ still needs to be changed to a function from `@struct`.