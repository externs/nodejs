/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/child_process.d.ts:
// Derived from: declare module "child_process"
/** @const */
var child_process = {};
/**
 * @extends {events.EventEmitter}
 * @record
 * @struct
 */
child_process.ChildProcess = function() {};
/** @type {!stream.Writable} */
child_process.ChildProcess.prototype.stdin;
/** @type {!stream.Readable} */
child_process.ChildProcess.prototype.stdout;
/** @type {!stream.Readable} */
child_process.ChildProcess.prototype.stderr;
/** @type {!child_process.StdioStreams} */
child_process.ChildProcess.prototype.stdio;
/** @type {boolean} */
child_process.ChildProcess.prototype.killed;
/** @type {number} */
child_process.ChildProcess.prototype.pid;
/** @type {boolean} */
child_process.ChildProcess.prototype.connected;

/**
 * @param {string=} signal
 * @return {void}
 */
child_process.ChildProcess.prototype.kill = function(signal) {};

/**
 * @param {?} message
 * @param {function(!Error): void|(!net.Socket|!net.Server)=} callback_or_sendHandle
 * @param {function(!Error): void|!child_process.MessageOptions=} callback_or_options
 * @param {function(!Error): void=} callback
 * @return {boolean}
 */
child_process.ChildProcess.prototype.send = function(message, callback_or_sendHandle, callback_or_options, callback) {};

/**
 * @return {void}
 */
child_process.ChildProcess.prototype.disconnect = function() {};

/**
 * @return {void}
 */
child_process.ChildProcess.prototype.unref = function() {};

/**
 * @return {void}
 */
child_process.ChildProcess.prototype.ref = function() {};

/**
 * events.EventEmitter
 * 1. close
 * 2. disconnect
 * 3. error
 * 4. exit
 * 5. message
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(number, string): void|function(): void|function(!Error): void|function(?, (!net.Socket|!net.Server)): void} listener
 * @return {THIS}
 */
child_process.ChildProcess.prototype.addListener = function(event, listener) {};

/**
 * @param {(string|symbol)|string} event
 * @param {...?|number|!Error} args_or_code_or_err_or_message
 * @return {boolean}
 */
child_process.ChildProcess.prototype.emit = function(event, args_or_code_or_err_or_message) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(number, string): void|function(): void|function(!Error): void|function(?, (!net.Socket|!net.Server)): void} listener
 * @return {THIS}
 */
child_process.ChildProcess.prototype.on = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(number, string): void|function(): void|function(!Error): void|function(?, (!net.Socket|!net.Server)): void} listener
 * @return {THIS}
 */
child_process.ChildProcess.prototype.once = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(number, string): void|function(): void|function(!Error): void|function(?, (!net.Socket|!net.Server)): void} listener
 * @return {THIS}
 */
child_process.ChildProcess.prototype.prependListener = function(event, listener) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {string} event
 * @param {function(...?): void|function(number, string): void|function(): void|function(!Error): void|function(?, (!net.Socket|!net.Server)): void} listener
 * @return {THIS}
 */
child_process.ChildProcess.prototype.prependOnceListener = function(event, listener) {};
/**
 * @extends {ReadonlyArray}
 * @record
 * @struct
 */
child_process.StdioStreams = function() {};

/* TODO: PropertySignature: child_process.0 */

/* TODO: PropertySignature: child_process.1 */

/* TODO: PropertySignature: child_process.2 */
/**
 * @record
 * @struct
 */
child_process.MessageOptions = function() {};
/** @type {boolean} */
child_process.MessageOptions.prototype.keepOpen;
/**
 * @record
 * @struct
 */
child_process.SpawnOptions = function() {};
/** @type {string} */
child_process.SpawnOptions.prototype.cwd;
/** @type {?|undefined} */
child_process.SpawnOptions.prototype.env;
/** @type {?|undefined} */
child_process.SpawnOptions.prototype.stdio;
/** @type {boolean} */
child_process.SpawnOptions.prototype.detached;
/** @type {number} */
child_process.SpawnOptions.prototype.uid;
/** @type {number} */
child_process.SpawnOptions.prototype.gid;
/** @type {(string|boolean)} */
child_process.SpawnOptions.prototype.shell;
/** @type {boolean} */
child_process.SpawnOptions.prototype.windowsVerbatimArguments;
/** @type {boolean} */
child_process.SpawnOptions.prototype.windowsHide;

/**
 * @param {string} command
 * @param {!ReadonlyArray<string>=} args
 * @param {!child_process.SpawnOptions=} options
 * @return {!child_process.ChildProcess}
 */
child_process.spawn = function(command, args, options) {};
/**
 * @record
 * @struct
 */
child_process.ExecOptions = function() {};
/** @type {string} */
child_process.ExecOptions.prototype.cwd;
/** @type {?|undefined} */
child_process.ExecOptions.prototype.env;
/** @type {string} */
child_process.ExecOptions.prototype.shell;
/** @type {number} */
child_process.ExecOptions.prototype.timeout;
/** @type {number} */
child_process.ExecOptions.prototype.maxBuffer;
/** @type {string} */
child_process.ExecOptions.prototype.killSignal;
/** @type {number} */
child_process.ExecOptions.prototype.uid;
/** @type {number} */
child_process.ExecOptions.prototype.gid;
/** @type {boolean} */
child_process.ExecOptions.prototype.windowsHide;
/**
 * @extends {child_process.ExecOptions}
 * @record
 * @struct
 */
child_process.ExecOptionsWithStringEncoding = function() {};
/** @type {string} */
child_process.ExecOptionsWithStringEncoding.prototype.encoding;
/**
 * @extends {child_process.ExecOptions}
 * @record
 * @struct
 */
child_process.ExecOptionsWithBufferEncoding = function() {};
/** @type {string} */
child_process.ExecOptionsWithBufferEncoding.prototype.encoding;

/**
 * @param {string} command
 * @param {function(!Error, string, string): void|?|!child_process.ExecOptions=} callback_or_options
 * @param {function(!Error, !Buffer, !Buffer): void|function(!Error, string, string): void|function(!Error, (string|!Buffer), (string|!Buffer)): void=} callback
 * @return {!child_process.ChildProcess}
 */
child_process.exec = function(command, callback_or_options, callback) {};

/**
 * @param {string} command
 * @param {?|!child_process.ExecOptions=} options
 * @return {!Promise<{stdout: string, stderr: string}>|!Promise<{stdout: !Buffer, stderr: !Buffer}>|!Promise<{stdout: (string|!Buffer), stderr: (string|!Buffer)}>}
 */
child_process.exec.__promisify__ = function(command, options) {};
/**
 * @record
 * @struct
 */
child_process.ExecFileOptions = function() {};
/** @type {string} */
child_process.ExecFileOptions.prototype.cwd;
/** @type {?|undefined} */
child_process.ExecFileOptions.prototype.env;
/** @type {number} */
child_process.ExecFileOptions.prototype.timeout;
/** @type {number} */
child_process.ExecFileOptions.prototype.maxBuffer;
/** @type {string} */
child_process.ExecFileOptions.prototype.killSignal;
/** @type {number} */
child_process.ExecFileOptions.prototype.uid;
/** @type {number} */
child_process.ExecFileOptions.prototype.gid;
/** @type {boolean} */
child_process.ExecFileOptions.prototype.windowsHide;
/** @type {boolean} */
child_process.ExecFileOptions.prototype.windowsVerbatimArguments;
/**
 * @extends {child_process.ExecFileOptions}
 * @record
 * @struct
 */
child_process.ExecFileOptionsWithStringEncoding = function() {};
/** @type {string} */
child_process.ExecFileOptionsWithStringEncoding.prototype.encoding;
/**
 * @extends {child_process.ExecFileOptions}
 * @record
 * @struct
 */
child_process.ExecFileOptionsWithBufferEncoding = function() {};
/** @type {string} */
child_process.ExecFileOptionsWithBufferEncoding.prototype.encoding;
/**
 * @extends {child_process.ExecFileOptions}
 * @record
 * @struct
 */
child_process.ExecFileOptionsWithOtherEncoding = function() {};
/** @type {string} */
child_process.ExecFileOptionsWithOtherEncoding.prototype.encoding;

/**
 * @param {string} file
 * @param {?|!Array<string>|function(!Error, string, string): void|!child_process.ExecFileOptionsWithBufferEncoding|!child_process.ExecFileOptionsWithStringEncoding|!child_process.ExecFileOptionsWithOtherEncoding|!child_process.ExecFileOptions=} options_or_args_or_callback
 * @param {?|function(!Error, string, string): void|function(!Error, !Buffer, !Buffer): void|!child_process.ExecFileOptionsWithBufferEncoding|!child_process.ExecFileOptionsWithStringEncoding|function(!Error, (string|!Buffer), (string|!Buffer)): void|!child_process.ExecFileOptionsWithOtherEncoding|!child_process.ExecFileOptions=} options_or_callback
 * @param {function(!Error, !Buffer, !Buffer): void|function(!Error, string, string): void|function(!Error, (string|!Buffer), (string|!Buffer)): void=} callback
 * @return {!child_process.ChildProcess}
 */
child_process.execFile = function(file, options_or_args_or_callback, options_or_callback, callback) {};

/**
 * @param {string} file
 * @param {!Array<string>|!child_process.ExecFileOptionsWithBufferEncoding|!child_process.ExecFileOptionsWithStringEncoding|!child_process.ExecFileOptionsWithOtherEncoding|!child_process.ExecFileOptions|?=} args_or_options
 * @param {!child_process.ExecFileOptionsWithBufferEncoding|!child_process.ExecFileOptionsWithStringEncoding|!child_process.ExecFileOptionsWithOtherEncoding|!child_process.ExecFileOptions|?=} options
 * @return {!Promise<{stdout: string, stderr: string}>|!Promise<{stdout: !Buffer, stderr: !Buffer}>|!Promise<{stdout: (string|!Buffer), stderr: (string|!Buffer)}>}
 */
child_process.execFile.__promisify__ = function(file, args_or_options, options) {};
/**
 * @record
 * @struct
 */
child_process.ForkOptions = function() {};
/** @type {string} */
child_process.ForkOptions.prototype.cwd;
/** @type {?|undefined} */
child_process.ForkOptions.prototype.env;
/** @type {string} */
child_process.ForkOptions.prototype.execPath;
/** @type {!Array<string>} */
child_process.ForkOptions.prototype.execArgv;
/** @type {boolean} */
child_process.ForkOptions.prototype.silent;
/** @type {!Array<?>} */
child_process.ForkOptions.prototype.stdio;
/** @type {boolean} */
child_process.ForkOptions.prototype.detached;
/** @type {number} */
child_process.ForkOptions.prototype.uid;
/** @type {number} */
child_process.ForkOptions.prototype.gid;
/** @type {boolean} */
child_process.ForkOptions.prototype.windowsVerbatimArguments;

/**
 * @param {string} modulePath
 * @param {!Array<string>=} args
 * @param {!child_process.ForkOptions=} options
 * @return {!child_process.ChildProcess}
 */
child_process.fork = function(modulePath, args, options) {};
/**
 * @record
 * @struct
 */
child_process.SpawnSyncOptions = function() {};
/** @type {string} */
child_process.SpawnSyncOptions.prototype.cwd;
/** @type {(string|!Buffer)} */
child_process.SpawnSyncOptions.prototype.input;
/** @type {?|undefined} */
child_process.SpawnSyncOptions.prototype.stdio;
/** @type {?|undefined} */
child_process.SpawnSyncOptions.prototype.env;
/** @type {number} */
child_process.SpawnSyncOptions.prototype.uid;
/** @type {number} */
child_process.SpawnSyncOptions.prototype.gid;
/** @type {number} */
child_process.SpawnSyncOptions.prototype.timeout;
/** @type {string} */
child_process.SpawnSyncOptions.prototype.killSignal;
/** @type {number} */
child_process.SpawnSyncOptions.prototype.maxBuffer;
/** @type {string} */
child_process.SpawnSyncOptions.prototype.encoding;
/** @type {(string|boolean)} */
child_process.SpawnSyncOptions.prototype.shell;
/** @type {boolean} */
child_process.SpawnSyncOptions.prototype.windowsHide;
/** @type {boolean} */
child_process.SpawnSyncOptions.prototype.windowsVerbatimArguments;
/**
 * @extends {child_process.SpawnSyncOptions}
 * @record
 * @struct
 */
child_process.SpawnSyncOptionsWithStringEncoding = function() {};
/** @type {string} */
child_process.SpawnSyncOptionsWithStringEncoding.prototype.encoding;
/**
 * @extends {child_process.SpawnSyncOptions}
 * @record
 * @struct
 */
child_process.SpawnSyncOptionsWithBufferEncoding = function() {};
/** @type {string} */
child_process.SpawnSyncOptionsWithBufferEncoding.prototype.encoding;
/**
 * @template T
 * @record
 * @struct
 */
child_process.SpawnSyncReturns = function() {};
/** @type {number} */
child_process.SpawnSyncReturns.prototype.pid;
/** @type {!Array<string>} */
child_process.SpawnSyncReturns.prototype.output;
/** @type {child_process.T} */
child_process.SpawnSyncReturns.prototype.stdout;
/** @type {child_process.T} */
child_process.SpawnSyncReturns.prototype.stderr;
/** @type {number} */
child_process.SpawnSyncReturns.prototype.status;
/** @type {string} */
child_process.SpawnSyncReturns.prototype.signal;
/** @type {!Error} */
child_process.SpawnSyncReturns.prototype.error;

/**
 * @param {string} command
 * @param {!child_process.SpawnSyncOptionsWithStringEncoding|!child_process.SpawnSyncOptionsWithBufferEncoding|!child_process.SpawnSyncOptions|!Array<string>=} options_or_args
 * @param {!child_process.SpawnSyncOptionsWithStringEncoding|!child_process.SpawnSyncOptionsWithBufferEncoding|!child_process.SpawnSyncOptions=} options
 * @return {!child_process.SpawnSyncReturns<!Buffer>|!child_process.SpawnSyncReturns<string>}
 */
child_process.spawnSync = function(command, options_or_args, options) {};
/**
 * @record
 * @struct
 */
child_process.ExecSyncOptions = function() {};
/** @type {string} */
child_process.ExecSyncOptions.prototype.cwd;
/** @type {(string|!Buffer)} */
child_process.ExecSyncOptions.prototype.input;
/** @type {?|undefined} */
child_process.ExecSyncOptions.prototype.stdio;
/** @type {?|undefined} */
child_process.ExecSyncOptions.prototype.env;
/** @type {string} */
child_process.ExecSyncOptions.prototype.shell;
/** @type {number} */
child_process.ExecSyncOptions.prototype.uid;
/** @type {number} */
child_process.ExecSyncOptions.prototype.gid;
/** @type {number} */
child_process.ExecSyncOptions.prototype.timeout;
/** @type {string} */
child_process.ExecSyncOptions.prototype.killSignal;
/** @type {number} */
child_process.ExecSyncOptions.prototype.maxBuffer;
/** @type {string} */
child_process.ExecSyncOptions.prototype.encoding;
/** @type {boolean} */
child_process.ExecSyncOptions.prototype.windowsHide;
/**
 * @extends {child_process.ExecSyncOptions}
 * @record
 * @struct
 */
child_process.ExecSyncOptionsWithStringEncoding = function() {};
/** @type {string} */
child_process.ExecSyncOptionsWithStringEncoding.prototype.encoding;
/**
 * @extends {child_process.ExecSyncOptions}
 * @record
 * @struct
 */
child_process.ExecSyncOptionsWithBufferEncoding = function() {};
/** @type {string} */
child_process.ExecSyncOptionsWithBufferEncoding.prototype.encoding;

/**
 * @param {string} command
 * @param {!child_process.ExecSyncOptionsWithStringEncoding|!child_process.ExecSyncOptionsWithBufferEncoding|!child_process.ExecSyncOptions=} options
 * @return {!Buffer|string}
 */
child_process.execSync = function(command, options) {};
/**
 * @record
 * @struct
 */
child_process.ExecFileSyncOptions = function() {};
/** @type {string} */
child_process.ExecFileSyncOptions.prototype.cwd;
/** @type {(string|!Buffer)} */
child_process.ExecFileSyncOptions.prototype.input;
/** @type {?|undefined} */
child_process.ExecFileSyncOptions.prototype.stdio;
/** @type {?|undefined} */
child_process.ExecFileSyncOptions.prototype.env;
/** @type {number} */
child_process.ExecFileSyncOptions.prototype.uid;
/** @type {number} */
child_process.ExecFileSyncOptions.prototype.gid;
/** @type {number} */
child_process.ExecFileSyncOptions.prototype.timeout;
/** @type {string} */
child_process.ExecFileSyncOptions.prototype.killSignal;
/** @type {number} */
child_process.ExecFileSyncOptions.prototype.maxBuffer;
/** @type {string} */
child_process.ExecFileSyncOptions.prototype.encoding;
/** @type {boolean} */
child_process.ExecFileSyncOptions.prototype.windowsHide;
/**
 * @extends {child_process.ExecFileSyncOptions}
 * @record
 * @struct
 */
child_process.ExecFileSyncOptionsWithStringEncoding = function() {};
/** @type {string} */
child_process.ExecFileSyncOptionsWithStringEncoding.prototype.encoding;
/**
 * @extends {child_process.ExecFileSyncOptions}
 * @record
 * @struct
 */
child_process.ExecFileSyncOptionsWithBufferEncoding = function() {};
/** @type {string} */
child_process.ExecFileSyncOptionsWithBufferEncoding.prototype.encoding;

/**
 * @param {string} command
 * @param {!child_process.ExecFileSyncOptionsWithStringEncoding|!child_process.ExecFileSyncOptionsWithBufferEncoding|!child_process.ExecFileSyncOptions|!Array<string>=} options_or_args
 * @param {!child_process.ExecFileSyncOptionsWithStringEncoding|!child_process.ExecFileSyncOptionsWithBufferEncoding|!child_process.ExecFileSyncOptions=} options
 * @return {!Buffer|string}
 */
child_process.execFileSync = function(command, options_or_args, options) {};