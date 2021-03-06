/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/timers.d.ts:
// Derived from: declare module "timers"
/** @const */
var timers = {};

/**
 * @param {function(...?): void} callback
 * @param {number} ms
 * @param {...?} args
 * @return {!NodeJS.Timer}
 */
timers.setTimeout = function(callback, ms, args) {};

/**
 * @template T
 * @param {number} ms
 * @param {timers.T=} value
 * @return {!Promise<void>|!Promise<timers.T>}
 */
timers.setTimeout.__promisify__ = function(ms, value) {};

/**
 * @param {!NodeJS.Timer} timeoutId
 * @return {void}
 */
timers.clearTimeout = function(timeoutId) {};

/**
 * @param {function(...?): void} callback
 * @param {number} ms
 * @param {...?} args
 * @return {!NodeJS.Timer}
 */
timers.setInterval = function(callback, ms, args) {};

/**
 * @param {!NodeJS.Timer} intervalId
 * @return {void}
 */
timers.clearInterval = function(intervalId) {};

/**
 * @param {function(...?): void} callback
 * @param {...?} args
 * @return {?}
 */
timers.setImmediate = function(callback, args) {};

/**
 * @template T
 * @param {timers.T=} value
 * @return {!Promise<void>|!Promise<timers.T>}
 */
timers.setImmediate.__promisify__ = function(value) {};

/**
 * @param {?} immediateId
 * @return {void}
 */
timers.clearImmediate = function(immediateId) {};
