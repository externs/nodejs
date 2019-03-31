/// <reference path="./nodejs.d.ts" />

// This needs to be global to avoid TS2403 in case lib.dom.d.ts is present in the same build
interface Console {
  Console: NodeJS.ConsoleConstructor;
  assert(value: any, message?: string, ...optionalParams: any[]): void;
  clear(): void;
  count(label?: string): void;
  countReset(label?: string): void;
  debug(message?: any, ...optionalParams: any[]): void;
  dir(obj: any, options?: NodeJS.InspectOptions): void;
  error(message?: any, ...optionalParams: any[]): void;
  group(...label: any[]): void;
  groupCollapsed(): void;
  groupEnd(): void;
  info(message?: any, ...optionalParams: any[]): void;
  log(message?: any, ...optionalParams: any[]): void;
  time(label: string): void;
  timeEnd(label: string): void;
  trace(message?: any, ...optionalParams: any[]): void;
  warn(message?: any, ...optionalParams: any[]): void;

  // --- Inspector mode only ---
  /** @deprecated Use console.timeStamp() instead. */
  markTimeline(label?: string): void;
  profile(label?: string): void;
  profileEnd(label?: string): void;
  timeStamp(label?: string): void;
  /** @deprecated Use console.time() instead. */
  timeline(label?: string): void;
  /** @deprecated Use console.timeEnd() instead. */
  timelineEnd(label?: string): void;
}

interface Error {
  stack?: string;
}

// Declare "static" methods in Error
interface ErrorConstructor {
  /** Create .stack property on a target object */
  captureStackTrace(targetObject: Object, constructorOpt?: Function): void;

  /**
   * Optional override for formatting stack traces
   *
   * @see https://github.com/v8/v8/wiki/Stack%20Trace%20API#customizing-stack-traces
   */
  prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;

  stackTraceLimit: number;
}

// Node.js ESNEXT support
interface String {
  /** Removes whitespace from the left end of a string. */
  trimLeft(): string;
  /** Removes whitespace from the right end of a string. */
  trimRight(): string;
}


/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/
declare var process: NodeJS.Process;
declare var global: NodeJS.Global;
declare var console: Console;

declare var __filename: string;
declare var __dirname: string;

declare function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare namespace setTimeout {
  export function __promisify__(ms: number): Promise<void>;
  export function __promisify__<T>(ms: number, value: T): Promise<T>;
}
declare function clearTimeout(timeoutId: NodeJS.Timer): void;
declare function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timer;
declare function clearInterval(intervalId: NodeJS.Timer): void;
declare function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
declare namespace setImmediate {
  export function __promisify__(): Promise<void>;
  export function __promisify__<T>(value: T): Promise<T>;
}
declare function clearImmediate(immediateId: any): void;


// Same as module.exports
declare var exports: any;
declare var SlowBuffer: {
  new(str: string, encoding?: string): Buffer;
  new(size: number): Buffer;
  new(size: Uint8Array): Buffer;
  new(array: any[]): Buffer;
  prototype: Buffer;
  isBuffer(obj: any): boolean;
  byteLength(string: string, encoding?: string): number;
  concat(list: Buffer[], totalLength?: number): Buffer;
};

// compat for TypeScript 1.8
// if you use with --target es3 or --target es5 and use below definitions,
// use the lib.es6.d.ts that is bundled with TypeScript 1.8.
interface MapConstructor { }
interface WeakMapConstructor { }
interface SetConstructor { }
interface WeakSetConstructor { }

// Forward-declare needed types from lib.es2015.d.ts (in case users are using `--lib es5`)
interface Iterable<T> { }
interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
}
interface IteratorResult<T> { }
interface SymbolConstructor {
  readonly iterator: symbol;
}
declare var Symbol: SymbolConstructor;

interface IterableIterator<T> { }


// TODO: change to `type NodeRequireFunction = (id: string) => any;` in next mayor version.
interface NodeRequireFunction {
  /* tslint:disable-next-line:callable-types */
  (id: string): any;
}

interface NodeRequire extends NodeRequireFunction {
  resolve: RequireResolve;
  cache: any;
  extensions: NodeExtensions;
  main: NodeModule | undefined;
}

interface RequireResolve {
  (id: string, options?: { paths?: string[]; }): string;
  paths(request: string): string[] | null;
}

interface NodeExtensions {
  '.js': (m: NodeModule, filename: string) => any;
  '.json': (m: NodeModule, filename: string) => any;
  '.node': (m: NodeModule, filename: string) => any;
  [ext: string]: (m: NodeModule, filename: string) => any;
}

declare var require: NodeRequire;

interface NodeModule {
  exports: any;
  require: NodeRequireFunction;
  id: string;
  filename: string;
  loaded: boolean;
  parent: NodeModule | null;
  children: NodeModule[];
  paths: string[];
}

declare var module: NodeModule;

declare var require: NodeRequire;

interface NodeModule {
  exports: any;
  require: NodeRequireFunction;
  id: string;
  filename: string;
  loaded: boolean;
  parent: NodeModule | null;
  children: NodeModule[];
  paths: string[];
}

declare var module: NodeModule;