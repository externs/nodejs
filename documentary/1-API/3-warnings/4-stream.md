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