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
     * @record
     * @struct
     */
    function NodeRequireFunction() {}

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
