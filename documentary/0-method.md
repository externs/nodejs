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
    <md2html>

    Show _Buffer_ tests (`depack test/spec/buffer.js -a --checks_only --externs v8/global/buffer.js --externs v8/global.js` shows no warnings).
    </md2html>
    </summary>

    %EXAMPLE: test/spec/buffer.js%
    </details>
<!-- 1. Because the `Buffer` interface (not the global var) is now [defined](types-v8/global.d.ts#184) in the `global.d.ts` as `interface Buffer extends NodeBuffer { }`, the externs would generate a `NodeBuffer` type. The `Buffer` extern has been [manually updated](v8/global/buffer.js) to merge `var Buffer` and `interface Buffer`. There are also tests to make sure there are no warnings. -->

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