/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/_buffer.d.ts:
// Derived from: declare module "buffer"
/** @const */
var buffer = {};
/** @type {number} */
buffer.INSPECT_MAX_BYTES;
/** @type {function(new: (!Buffer), string, string=): ?} */
buffer.BuffType;
/** @type {function(new: (!Buffer), string, string=): ?} */
buffer.SlowBuffType;

/** @typedef {string} */
buffer.TranscodeEncoding;

/**
 * @param {(!Buffer|!Uint8Array)} source
 * @param {string} fromEnc
 * @param {string} toEnc
 * @return {!Buffer}
 */
buffer.transcode = function(source, fromEnc, toEnc) {};
/** @const */
buffer.Buffer = buffer.BuffType;
/** @const */
buffer.SlowBuffer = buffer.SlowBuffType;