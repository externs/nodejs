/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/repl.d.ts:
// Derived from: declare module "repl"
/** @const */
var repl = {};
/**
 * @record
 * @struct
 */
repl.ReplOptions = function() {};
/** @type {string} */
repl.ReplOptions.prototype.prompt;
/** @type {!NodeJS.ReadableStream} */
repl.ReplOptions.prototype.input;
/** @type {!NodeJS.WritableStream} */
repl.ReplOptions.prototype.output;
/** @type {boolean} */
repl.ReplOptions.prototype.terminal;
/** @type {!Function} */
repl.ReplOptions.prototype.eval;
/** @type {boolean} */
repl.ReplOptions.prototype.useColors;
/** @type {boolean} */
repl.ReplOptions.prototype.useGlobal;
/** @type {boolean} */
repl.ReplOptions.prototype.ignoreUndefined;
/** @type {!Function} */
repl.ReplOptions.prototype.writer;
/** @type {!Function} */
repl.ReplOptions.prototype.completer;
/** @type {?|undefined} */
repl.ReplOptions.prototype.replMode;
/** @type {?|undefined} */
repl.ReplOptions.prototype.breakEvalOnSigint;
/**
 * @extends {readline.ReadLine}
 * @record
 * @struct
 */
repl.REPLServer = function() {};
/** @type {?} */
repl.REPLServer.prototype.context;
/** @type {!NodeJS.ReadableStream} */
repl.REPLServer.prototype.inputStream;
/** @type {!NodeJS.WritableStream} */
repl.REPLServer.prototype.outputStream;

/**
 * @param {string} keyword
 * @param {(!Function|{help: string, action: !Function})} cmd
 * @return {void}
 */
repl.REPLServer.prototype.defineCommand = function(keyword, cmd) {};

/**
 * @param {boolean=} preserveCursor
 * @return {void}
 */
repl.REPLServer.prototype.displayPrompt = function(preserveCursor) {};

/**
 * events.EventEmitter
 * 1. exit
 * 2. reset
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void} listener
 * @return {THIS}
 */
repl.REPLServer.prototype.addListener = function(event, listener) {};

/**
 * @param {(string|symbol)|string} event
 * @param {...?} args_or_context
 * @return {boolean}
 */
repl.REPLServer.prototype.emit = function(event, args_or_context) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void} listener
 * @return {THIS}
 */
repl.REPLServer.prototype.on = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void} listener
 * @return {THIS}
 */
repl.REPLServer.prototype.once = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void} listener
 * @return {THIS}
 */
repl.REPLServer.prototype.prependListener = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(): void} listener
 * @return {THIS}
 */
repl.REPLServer.prototype.prependOnceListener = function(event, listener) {};

/**
 * @param {(string|!repl.ReplOptions)=} options
 * @return {!repl.REPLServer}
 */
repl.start = function(options) {};

/**
 * @extends {SyntaxError}
 * @constructor
 * @struct
 * @param {!Error} err
 */
repl.Recoverable = function(err) {};
/** @type {!Error} */
repl.Recoverable.prototype.err;
