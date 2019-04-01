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
^^^^^^⏎

v8/events.js:15: WARNING - constant events assigned a value more than once.
Original definition at v8/events.js:9
events = function() {};
^^^^^^^^^^^^^^^^^^^^^^⏎
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