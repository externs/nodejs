// Type definitions for Node.js 8.10
// Project: http://nodejs.org/
// Definitions by: Microsoft TypeScript <https://github.com/Microsoft>
//                 DefinitelyTyped <https://github.com/DefinitelyTyped>
//                 Parambir Singh <https://github.com/parambirs>
//                 Christian Vaagland Tellnes <https://github.com/tellnes>
//                 Wilco Bakker <https://github.com/WilcoBakker>
//                 Nicolas Voigt <https://github.com/octo-sniffle>
//                 Chigozirim C. <https://github.com/smac89>
//                 Flarna <https://github.com/Flarna>
//                 Mariusz Wiktorczyk <https://github.com/mwiktorczyk>
//                 wwwy3y3 <https://github.com/wwwy3y3>
//                 Deividas Bakanas <https://github.com/DeividasBakanas>
//                 Kelvin Jin <https://github.com/kjin>
//                 Alvis HT Tang <https://github.com/alvis>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Hannes Magnusson <https://github.com/Hannes-Magnusson-CK>
//                 Alberto Schiabel <https://github.com/jkomyno>
//                 Huw <https://github.com/hoo29>
//                 Nicolas Even <https://github.com/n-e>
//                 Bruno Scheufler <https://github.com/brunoscheufler>
//                 Hoàng Văn Khải <https://github.com/KSXGitHub>
//                 Lishude <https://github.com/islishude>
//                 Andrew Makarov <https://github.com/r3nya>
//                 Jordi Oliveras Rovira <https://github.com/j-oliveras>
//                 Thanik Bhongbhibhat <https://github.com/bhongy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/** inspector module types */
/// <reference path="./inspector.d.ts" />

/************************************************
*                                               *
*                   MODULES                     *
*                                               *
************************************************/
declare module "buffer" {
  export var INSPECT_MAX_BYTES: number;
  var BuffType: typeof Buffer;
  var SlowBuffType: typeof SlowBuffer;
  export type TranscodeEncoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "latin1" | "binary";
  export function transcode(source: Buffer | Uint8Array, fromEnc: TranscodeEncoding, toEnc: TranscodeEncoding): Buffer;
  export { BuffType as Buffer, SlowBuffType as SlowBuffer };
}

declare module "cluster" {
  import * as child from "child_process";
  import * as events from "events";
  import * as net from "net";

  // interfaces
  export interface ClusterSettings {
      execArgv?: string[]; // default: process.execArgv
      exec?: string;
      args?: string[];
      silent?: boolean;
      stdio?: any[];
      uid?: number;
      gid?: number;
      inspectPort?: number | (() => number);
  }

  export interface Address {
      address: string;
      port: number;
      addressType: number | "udp4" | "udp6";  // 4, 6, -1, "udp4", "udp6"
  }

  export class Worker extends events.EventEmitter {
      id: number;
      process: child.ChildProcess;
      suicide: boolean;
      send(message: any, sendHandle?: any, callback?: (error: Error) => void): boolean;
      kill(signal?: string): void;
      destroy(signal?: string): void;
      disconnect(): void;
      isConnected(): boolean;
      isDead(): boolean;
      exitedAfterDisconnect: boolean;

      /**
       * events.EventEmitter
       *   1. disconnect
       *   2. error
       *   3. exit
       *   4. listening
       *   5. message
       *   6. online
       */
      addListener(event: string, listener: (...args: any[]) => void): this;
      addListener(event: "disconnect", listener: () => void): this;
      addListener(event: "error", listener: (error: Error) => void): this;
      addListener(event: "exit", listener: (code: number, signal: string) => void): this;
      addListener(event: "listening", listener: (address: Address) => void): this;
      addListener(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      addListener(event: "online", listener: () => void): this;

      emit(event: string | symbol, ...args: any[]): boolean;
      emit(event: "disconnect"): boolean;
      emit(event: "error", error: Error): boolean;
      emit(event: "exit", code: number, signal: string): boolean;
      emit(event: "listening", address: Address): boolean;
      emit(event: "message", message: any, handle: net.Socket | net.Server): boolean;
      emit(event: "online"): boolean;

      on(event: string, listener: (...args: any[]) => void): this;
      on(event: "disconnect", listener: () => void): this;
      on(event: "error", listener: (error: Error) => void): this;
      on(event: "exit", listener: (code: number, signal: string) => void): this;
      on(event: "listening", listener: (address: Address) => void): this;
      on(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      on(event: "online", listener: () => void): this;

      once(event: string, listener: (...args: any[]) => void): this;
      once(event: "disconnect", listener: () => void): this;
      once(event: "error", listener: (error: Error) => void): this;
      once(event: "exit", listener: (code: number, signal: string) => void): this;
      once(event: "listening", listener: (address: Address) => void): this;
      once(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      once(event: "online", listener: () => void): this;

      prependListener(event: string, listener: (...args: any[]) => void): this;
      prependListener(event: "disconnect", listener: () => void): this;
      prependListener(event: "error", listener: (error: Error) => void): this;
      prependListener(event: "exit", listener: (code: number, signal: string) => void): this;
      prependListener(event: "listening", listener: (address: Address) => void): this;
      prependListener(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      prependListener(event: "online", listener: () => void): this;

      prependOnceListener(event: string, listener: (...args: any[]) => void): this;
      prependOnceListener(event: "disconnect", listener: () => void): this;
      prependOnceListener(event: "error", listener: (error: Error) => void): this;
      prependOnceListener(event: "exit", listener: (code: number, signal: string) => void): this;
      prependOnceListener(event: "listening", listener: (address: Address) => void): this;
      prependOnceListener(event: "message", listener: (message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      prependOnceListener(event: "online", listener: () => void): this;
  }

  export interface Cluster extends events.EventEmitter {
      Worker: Worker;
      disconnect(callback?: Function): void;
      fork(env?: any): Worker;
      isMaster: boolean;
      isWorker: boolean;
      // TODO: cluster.schedulingPolicy
      settings: ClusterSettings;
      setupMaster(settings?: ClusterSettings): void;
      worker?: Worker;
      workers?: {
          [index: string]: Worker | undefined
      };

      /**
       * events.EventEmitter
       *   1. disconnect
       *   2. exit
       *   3. fork
       *   4. listening
       *   5. message
       *   6. online
       *   7. setup
       */
      addListener(event: string, listener: (...args: any[]) => void): this;
      addListener(event: "disconnect", listener: (worker: Worker) => void): this;
      addListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
      addListener(event: "fork", listener: (worker: Worker) => void): this;
      addListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
      addListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      addListener(event: "online", listener: (worker: Worker) => void): this;
      addListener(event: "setup", listener: (settings: any) => void): this;

      emit(event: string | symbol, ...args: any[]): boolean;
      emit(event: "disconnect", worker: Worker): boolean;
      emit(event: "exit", worker: Worker, code: number, signal: string): boolean;
      emit(event: "fork", worker: Worker): boolean;
      emit(event: "listening", worker: Worker, address: Address): boolean;
      emit(event: "message", worker: Worker, message: any, handle: net.Socket | net.Server): boolean;
      emit(event: "online", worker: Worker): boolean;
      emit(event: "setup", settings: any): boolean;

      on(event: string, listener: (...args: any[]) => void): this;
      on(event: "disconnect", listener: (worker: Worker) => void): this;
      on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
      on(event: "fork", listener: (worker: Worker) => void): this;
      on(event: "listening", listener: (worker: Worker, address: Address) => void): this;
      on(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      on(event: "online", listener: (worker: Worker) => void): this;
      on(event: "setup", listener: (settings: any) => void): this;

      once(event: string, listener: (...args: any[]) => void): this;
      once(event: "disconnect", listener: (worker: Worker) => void): this;
      once(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
      once(event: "fork", listener: (worker: Worker) => void): this;
      once(event: "listening", listener: (worker: Worker, address: Address) => void): this;
      once(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      once(event: "online", listener: (worker: Worker) => void): this;
      once(event: "setup", listener: (settings: any) => void): this;

      prependListener(event: string, listener: (...args: any[]) => void): this;
      prependListener(event: "disconnect", listener: (worker: Worker) => void): this;
      prependListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
      prependListener(event: "fork", listener: (worker: Worker) => void): this;
      prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
      prependListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      prependListener(event: "online", listener: (worker: Worker) => void): this;
      prependListener(event: "setup", listener: (settings: any) => void): this;

      prependOnceListener(event: string, listener: (...args: any[]) => void): this;
      prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): this;
      prependOnceListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): this;
      prependOnceListener(event: "fork", listener: (worker: Worker) => void): this;
      prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): this;
      prependOnceListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): this;  // the handle is a net.Socket or net.Server object, or undefined.
      prependOnceListener(event: "online", listener: (worker: Worker) => void): this;
      prependOnceListener(event: "setup", listener: (settings: any) => void): this;
  }

  export function disconnect(callback?: Function): void;
  export function fork(env?: any): Worker;
  export var isMaster: boolean;
  export var isWorker: boolean;
  // TODO: cluster.schedulingPolicy
  export var settings: ClusterSettings;
  export function setupMaster(settings?: ClusterSettings): void;
  export var worker: Worker;
  export var workers: {
      [index: string]: Worker | undefined
  };

  /**
   * events.EventEmitter
   *   1. disconnect
   *   2. exit
   *   3. fork
   *   4. listening
   *   5. message
   *   6. online
   *   7. setup
   */
  export function addListener(event: string, listener: (...args: any[]) => void): Cluster;
  export function addListener(event: "disconnect", listener: (worker: Worker) => void): Cluster;
  export function addListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
  export function addListener(event: "fork", listener: (worker: Worker) => void): Cluster;
  export function addListener(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
  export function addListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
  export function addListener(event: "online", listener: (worker: Worker) => void): Cluster;
  export function addListener(event: "setup", listener: (settings: any) => void): Cluster;

  export function emit(event: string | symbol, ...args: any[]): boolean;
  export function emit(event: "disconnect", worker: Worker): boolean;
  export function emit(event: "exit", worker: Worker, code: number, signal: string): boolean;
  export function emit(event: "fork", worker: Worker): boolean;
  export function emit(event: "listening", worker: Worker, address: Address): boolean;
  export function emit(event: "message", worker: Worker, message: any, handle: net.Socket | net.Server): boolean;
  export function emit(event: "online", worker: Worker): boolean;
  export function emit(event: "setup", settings: any): boolean;

  export function on(event: string, listener: (...args: any[]) => void): Cluster;
  export function on(event: "disconnect", listener: (worker: Worker) => void): Cluster;
  export function on(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
  export function on(event: "fork", listener: (worker: Worker) => void): Cluster;
  export function on(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
  export function on(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
  export function on(event: "online", listener: (worker: Worker) => void): Cluster;
  export function on(event: "setup", listener: (settings: any) => void): Cluster;

  export function once(event: string, listener: (...args: any[]) => void): Cluster;
  export function once(event: "disconnect", listener: (worker: Worker) => void): Cluster;
  export function once(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
  export function once(event: "fork", listener: (worker: Worker) => void): Cluster;
  export function once(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
  export function once(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
  export function once(event: "online", listener: (worker: Worker) => void): Cluster;
  export function once(event: "setup", listener: (settings: any) => void): Cluster;

  export function removeListener(event: string, listener: (...args: any[]) => void): Cluster;
  export function removeAllListeners(event?: string): Cluster;
  export function setMaxListeners(n: number): Cluster;
  export function getMaxListeners(): number;
  export function listeners(event: string): Function[];
  export function listenerCount(type: string): number;

  export function prependListener(event: string, listener: (...args: any[]) => void): Cluster;
  export function prependListener(event: "disconnect", listener: (worker: Worker) => void): Cluster;
  export function prependListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
  export function prependListener(event: "fork", listener: (worker: Worker) => void): Cluster;
  export function prependListener(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
  export function prependListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
  export function prependListener(event: "online", listener: (worker: Worker) => void): Cluster;
  export function prependListener(event: "setup", listener: (settings: any) => void): Cluster;

  export function prependOnceListener(event: string, listener: (...args: any[]) => void): Cluster;
  export function prependOnceListener(event: "disconnect", listener: (worker: Worker) => void): Cluster;
  export function prependOnceListener(event: "exit", listener: (worker: Worker, code: number, signal: string) => void): Cluster;
  export function prependOnceListener(event: "fork", listener: (worker: Worker) => void): Cluster;
  export function prependOnceListener(event: "listening", listener: (worker: Worker, address: Address) => void): Cluster;
  export function prependOnceListener(event: "message", listener: (worker: Worker, message: any, handle: net.Socket | net.Server) => void): Cluster;  // the handle is a net.Socket or net.Server object, or undefined.
  export function prependOnceListener(event: "online", listener: (worker: Worker) => void): Cluster;
  export function prependOnceListener(event: "setup", listener: (settings: any) => void): Cluster;

  export function eventNames(): string[];
}

declare module "punycode" {
  export function decode(string: string): string;
  export function encode(string: string): string;
  export function toUnicode(domain: string): string;
  export function toASCII(domain: string): string;
  export var ucs2: ucs2;
  interface ucs2 {
      decode(string: string): number[];
      encode(codePoints: number[]): string;
  }
  export var version: any;
}

declare module "repl" {
  import * as stream from "stream";
  import * as readline from "readline";

  export interface ReplOptions {
      prompt?: string;
      input?: NodeJS.ReadableStream;
      output?: NodeJS.WritableStream;
      terminal?: boolean;
      eval?: Function;
      useColors?: boolean;
      useGlobal?: boolean;
      ignoreUndefined?: boolean;
      writer?: Function;
      completer?: Function;
      replMode?: any;
      breakEvalOnSigint?: any;
  }

  export interface REPLServer extends readline.ReadLine {
      context: any;
      inputStream: NodeJS.ReadableStream;
      outputStream: NodeJS.WritableStream;

      defineCommand(keyword: string, cmd: Function | { help: string, action: Function }): void;
      displayPrompt(preserveCursor?: boolean): void;

      /**
       * events.EventEmitter
       * 1. exit
       * 2. reset
       */

      addListener(event: string, listener: (...args: any[]) => void): this;
      addListener(event: "exit", listener: () => void): this;
      addListener(event: "reset", listener: (...args: any[]) => void): this;

      emit(event: string | symbol, ...args: any[]): boolean;
      emit(event: "exit"): boolean;
      emit(event: "reset", context: any): boolean;

      on(event: string, listener: (...args: any[]) => void): this;
      on(event: "exit", listener: () => void): this;
      on(event: "reset", listener: (...args: any[]) => void): this;

      once(event: string, listener: (...args: any[]) => void): this;
      once(event: "exit", listener: () => void): this;
      once(event: "reset", listener: (...args: any[]) => void): this;

      prependListener(event: string, listener: (...args: any[]) => void): this;
      prependListener(event: "exit", listener: () => void): this;
      prependListener(event: "reset", listener: (...args: any[]) => void): this;

      prependOnceListener(event: string, listener: (...args: any[]) => void): this;
      prependOnceListener(event: "exit", listener: () => void): this;
      prependOnceListener(event: "reset", listener: (...args: any[]) => void): this;
  }

  export function start(options?: string | ReplOptions): REPLServer;

  export class Recoverable extends SyntaxError {
      err: Error;

      constructor(err: Error);
  }
}

declare module "readline" {
  import * as events from "events";
  import * as stream from "stream";

  export interface Key {
      sequence?: string;
      name?: string;
      ctrl?: boolean;
      meta?: boolean;
      shift?: boolean;
  }

  export interface ReadLine extends events.EventEmitter {
      setPrompt(prompt: string): void;
      prompt(preserveCursor?: boolean): void;
      question(query: string, callback: (answer: string) => void): void;
      pause(): ReadLine;
      resume(): ReadLine;
      close(): void;
      write(data: string | Buffer, key?: Key): void;

      /**
       * events.EventEmitter
       * 1. close
       * 2. line
       * 3. pause
       * 4. resume
       * 5. SIGCONT
       * 6. SIGINT
       * 7. SIGTSTP
       */

      addListener(event: string, listener: (...args: any[]) => void): this;
      addListener(event: "close", listener: () => void): this;
      addListener(event: "line", listener: (input: any) => void): this;
      addListener(event: "pause", listener: () => void): this;
      addListener(event: "resume", listener: () => void): this;
      addListener(event: "SIGCONT", listener: () => void): this;
      addListener(event: "SIGINT", listener: () => void): this;
      addListener(event: "SIGTSTP", listener: () => void): this;

      emit(event: string | symbol, ...args: any[]): boolean;
      emit(event: "close"): boolean;
      emit(event: "line", input: any): boolean;
      emit(event: "pause"): boolean;
      emit(event: "resume"): boolean;
      emit(event: "SIGCONT"): boolean;
      emit(event: "SIGINT"): boolean;
      emit(event: "SIGTSTP"): boolean;

      on(event: string, listener: (...args: any[]) => void): this;
      on(event: "close", listener: () => void): this;
      on(event: "line", listener: (input: any) => void): this;
      on(event: "pause", listener: () => void): this;
      on(event: "resume", listener: () => void): this;
      on(event: "SIGCONT", listener: () => void): this;
      on(event: "SIGINT", listener: () => void): this;
      on(event: "SIGTSTP", listener: () => void): this;

      once(event: string, listener: (...args: any[]) => void): this;
      once(event: "close", listener: () => void): this;
      once(event: "line", listener: (input: any) => void): this;
      once(event: "pause", listener: () => void): this;
      once(event: "resume", listener: () => void): this;
      once(event: "SIGCONT", listener: () => void): this;
      once(event: "SIGINT", listener: () => void): this;
      once(event: "SIGTSTP", listener: () => void): this;

      prependListener(event: string, listener: (...args: any[]) => void): this;
      prependListener(event: "close", listener: () => void): this;
      prependListener(event: "line", listener: (input: any) => void): this;
      prependListener(event: "pause", listener: () => void): this;
      prependListener(event: "resume", listener: () => void): this;
      prependListener(event: "SIGCONT", listener: () => void): this;
      prependListener(event: "SIGINT", listener: () => void): this;
      prependListener(event: "SIGTSTP", listener: () => void): this;

      prependOnceListener(event: string, listener: (...args: any[]) => void): this;
      prependOnceListener(event: "close", listener: () => void): this;
      prependOnceListener(event: "line", listener: (input: any) => void): this;
      prependOnceListener(event: "pause", listener: () => void): this;
      prependOnceListener(event: "resume", listener: () => void): this;
      prependOnceListener(event: "SIGCONT", listener: () => void): this;
      prependOnceListener(event: "SIGINT", listener: () => void): this;
      prependOnceListener(event: "SIGTSTP", listener: () => void): this;
  }

  type Completer = (line: string) => CompleterResult;
  type AsyncCompleter = (line: string, callback: (err: any, result: CompleterResult) => void) => any;

  export type CompleterResult = [string[], string];

  export interface ReadLineOptions {
      input: NodeJS.ReadableStream;
      output?: NodeJS.WritableStream;
      completer?: Completer | AsyncCompleter;
      terminal?: boolean;
      historySize?: number;
      prompt?: string;
      crlfDelay?: number;
      removeHistoryDuplicates?: boolean;
  }

  export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer | AsyncCompleter, terminal?: boolean): ReadLine;
  export function createInterface(options: ReadLineOptions): ReadLine;

  export function cursorTo(stream: NodeJS.WritableStream, x: number, y?: number): void;
  export function emitKeypressEvents(stream: NodeJS.ReadableStream, interface?: ReadLine): void;
  export function moveCursor(stream: NodeJS.WritableStream, dx: number | string, dy: number | string): void;
  export function clearLine(stream: NodeJS.WritableStream, dir: number): void;
  export function clearScreenDown(stream: NodeJS.WritableStream): void;
}

declare module "dgram" {
  import * as events from "events";
  import * as dns from "dns";

  interface RemoteInfo {
      address: string;
      family: string;
      port: number;
  }

  interface AddressInfo {
      address: string;
      family: string;
      port: number;
  }

  interface BindOptions {
      port: number;
      address?: string;
      exclusive?: boolean;
  }

  type SocketType = "udp4" | "udp6";

  interface SocketOptions {
      type: SocketType;
      reuseAddr?: boolean;
      recvBufferSize?: number;
      sendBufferSize?: number;
      lookup?: (hostname: string, options: dns.LookupOneOptions, callback: (err: NodeJS.ErrnoException, address: string, family: number) => void) => void;
  }

  export function createSocket(type: SocketType, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;
  export function createSocket(options: SocketOptions, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

  export class Socket extends events.EventEmitter {
      send(msg: Buffer | string | Uint8Array | any[], port: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
      send(msg: Buffer | string | Uint8Array, offset: number, length: number, port: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
      bind(port?: number, address?: string, callback?: () => void): void;
      bind(port?: number, callback?: () => void): void;
      bind(callback?: () => void): void;
      bind(options: BindOptions, callback?: Function): void;
      close(callback?: () => void): void;
      address(): AddressInfo;
      setBroadcast(flag: boolean): void;
      setTTL(ttl: number): void;
      setMulticastTTL(ttl: number): void;
      setMulticastInterface(multicastInterface: string): void;
      setMulticastLoopback(flag: boolean): void;
      addMembership(multicastAddress: string, multicastInterface?: string): void;
      dropMembership(multicastAddress: string, multicastInterface?: string): void;
      ref(): this;
      unref(): this;
      setRecvBufferSize(size: number): void;
      setSendBufferSize(size: number): void;
      getRecvBufferSize(): number;
      getSendBufferSize(): number;

      /**
       * events.EventEmitter
       * 1. close
       * 2. error
       * 3. listening
       * 4. message
       */
      addListener(event: string, listener: (...args: any[]) => void): this;
      addListener(event: "close", listener: () => void): this;
      addListener(event: "error", listener: (err: Error) => void): this;
      addListener(event: "listening", listener: () => void): this;
      addListener(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;

      emit(event: string | symbol, ...args: any[]): boolean;
      emit(event: "close"): boolean;
      emit(event: "error", err: Error): boolean;
      emit(event: "listening"): boolean;
      emit(event: "message", msg: Buffer, rinfo: AddressInfo): boolean;

      on(event: string, listener: (...args: any[]) => void): this;
      on(event: "close", listener: () => void): this;
      on(event: "error", listener: (err: Error) => void): this;
      on(event: "listening", listener: () => void): this;
      on(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;

      once(event: string, listener: (...args: any[]) => void): this;
      once(event: "close", listener: () => void): this;
      once(event: "error", listener: (err: Error) => void): this;
      once(event: "listening", listener: () => void): this;
      once(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;

      prependListener(event: string, listener: (...args: any[]) => void): this;
      prependListener(event: "close", listener: () => void): this;
      prependListener(event: "error", listener: (err: Error) => void): this;
      prependListener(event: "listening", listener: () => void): this;
      prependListener(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;

      prependOnceListener(event: string, listener: (...args: any[]) => void): this;
      prependOnceListener(event: "close", listener: () => void): this;
      prependOnceListener(event: "error", listener: (err: Error) => void): this;
      prependOnceListener(event: "listening", listener: () => void): this;
      prependOnceListener(event: "message", listener: (msg: Buffer, rinfo: AddressInfo) => void): this;
  }
}

declare module "string_decoder" {
  export interface NodeStringDecoder {
      write(buffer: Buffer): string;
      end(buffer?: Buffer): string;
  }
  export var StringDecoder: {
      new(encoding?: string): NodeStringDecoder;
  };
}

declare module "util" {
  export interface InspectOptions extends NodeJS.InspectOptions { }
  export function format(format: any, ...param: any[]): string;
  export function debug(string: string): void;
  export function error(...param: any[]): void;
  export function puts(...param: any[]): void;
  export function print(...param: any[]): void;
  export function log(string: string): void;
  export var inspect: {
      (object: any, showHidden?: boolean, depth?: number | null, color?: boolean): string;
      (object: any, options: InspectOptions): string;
      colors: {
          [color: string]: [number, number] | undefined
      }
      styles: {
          [style: string]: string | undefined
      }
      defaultOptions: InspectOptions;
      custom: symbol;
  };
  export function isArray(object: any): object is any[];
  export function isRegExp(object: any): object is RegExp;
  export function isDate(object: any): object is Date;
  export function isError(object: any): object is Error;
  export function inherits(constructor: any, superConstructor: any): void;
  export function debuglog(key: string): (msg: string, ...param: any[]) => void;
  export function isBoolean(object: any): object is boolean;
  export function isBuffer(object: any): object is Buffer;
  export function isFunction(object: any): boolean;
  export function isNull(object: any): object is null;
  export function isNullOrUndefined(object: any): object is null | undefined;
  export function isNumber(object: any): object is number;
  export function isObject(object: any): boolean;
  export function isPrimitive(object: any): boolean;
  export function isString(object: any): object is string;
  export function isSymbol(object: any): object is symbol;
  export function isUndefined(object: any): object is undefined;
  export function deprecate<T extends Function>(fn: T, message: string): T;

  export interface CustomPromisify<TCustom extends Function> extends Function {
      __promisify__: TCustom;
  }

  export function callbackify(fn: () => Promise<void>): (callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<TResult>(fn: () => Promise<TResult>): (callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
  export function callbackify<T1>(fn: (arg1: T1) => Promise<void>): (arg1: T1, callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<T1, TResult>(fn: (arg1: T1) => Promise<TResult>): (arg1: T1, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
  export function callbackify<T1, T2>(fn: (arg1: T1, arg2: T2) => Promise<void>): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2) => Promise<TResult>): (arg1: T1, arg2: T2, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
  export function callbackify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>): (arg1: T1, arg2: T2, arg3: T3, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
  export function callbackify<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<T1, T2, T3, T4, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
  export function callbackify<T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<T1, T2, T3, T4, T5, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;
  export function callbackify<T1, T2, T3, T4, T5, T6>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<void>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: NodeJS.ErrnoException) => void) => void;
  export function callbackify<T1, T2, T3, T4, T5, T6, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6) => Promise<TResult>): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, arg6: T6, callback: (err: NodeJS.ErrnoException, result: TResult) => void) => void;

  export function promisify<TCustom extends Function>(fn: CustomPromisify<TCustom>): TCustom;
  export function promisify<TResult>(fn: (callback: (err: Error | null, result: TResult) => void) => void): () => Promise<TResult>;
  export function promisify(fn: (callback: (err?: Error | null) => void) => void): () => Promise<void>;
  export function promisify<T1, TResult>(fn: (arg1: T1, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1) => Promise<TResult>;
  export function promisify<T1>(fn: (arg1: T1, callback: (err?: Error | null) => void) => void): (arg1: T1) => Promise<void>;
  export function promisify<T1, T2, TResult>(fn: (arg1: T1, arg2: T2, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2) => Promise<TResult>;
  export function promisify<T1, T2>(fn: (arg1: T1, arg2: T2, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2) => Promise<void>;
  export function promisify<T1, T2, T3, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<TResult>;
  export function promisify<T1, T2, T3>(fn: (arg1: T1, arg2: T2, arg3: T3, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3) => Promise<void>;
  export function promisify<T1, T2, T3, T4, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<TResult>;
  export function promisify<T1, T2, T3, T4>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4) => Promise<void>;
  export function promisify<T1, T2, T3, T4, T5, TResult>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err: Error | null, result: TResult) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<TResult>;
  export function promisify<T1, T2, T3, T4, T5>(fn: (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5, callback: (err?: Error | null) => void) => void): (arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5) => Promise<void>;
  export function promisify(fn: Function): Function;
  export namespace promisify {
      const custom: symbol;
  }

  export class TextDecoder {
      readonly encoding: string;
      readonly fatal: boolean;
      readonly ignoreBOM: boolean;
      constructor(
        encoding?: string,
        options?: { fatal?: boolean; ignoreBOM?: boolean }
      );
      decode(
        input?:
          Int8Array
          | Int16Array
          | Int32Array
          | Uint8Array
          | Uint16Array
          | Uint32Array
          | Uint8ClampedArray
          | Float32Array
          | Float64Array
          | DataView
          | ArrayBuffer
          | null,
        options?: { stream?: boolean }
      ): string;
  }

  export class TextEncoder {
      readonly encoding: string;
      constructor();
      encode(input?: string): Uint8Array;
  }
}

declare module "assert" {
  function internal(value: any, message?: string): void;
  namespace internal {
      export class AssertionError implements Error {
          name: string;
          message: string;
          actual: any;
          expected: any;
          operator: string;
          generatedMessage: boolean;
          code: 'ERR_ASSERTION';

          constructor(options?: {
              message?: string; actual?: any; expected?: any;
              operator?: string; stackStartFn?: Function
          });
      }

      export function fail(message?: string): never;
      export function fail(actual: any, expected: any, message?: string, operator?: string, stackStartFn?: Function): never;
      export function ok(value: any, message?: string): void;
      export function equal(actual: any, expected: any, message?: string): void;
      export function notEqual(actual: any, expected: any, message?: string): void;
      export function deepEqual(actual: any, expected: any, message?: string): void;
      export function notDeepEqual(actual: any, expected: any, message?: string): void;
      export function strictEqual(actual: any, expected: any, message?: string): void;
      export function notStrictEqual(actual: any, expected: any, message?: string): void;
      export function deepStrictEqual(actual: any, expected: any, message?: string): void;
      export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;

      export function throws(block: Function, message?: string): void;
      export function throws(block: Function, error: RegExp | Function, message?: string): void;
      export function doesNotThrow(block: Function, message?: string): void;
      export function doesNotThrow(block: Function, error: RegExp | Function, message?: string): void;

      export function ifError(value: any): void;
  }

  export = internal;
}

declare module "tty" {
  import * as net from "net";

  export function isatty(fd: number): boolean;
  export class ReadStream extends net.Socket {
      isRaw: boolean;
      setRawMode(mode: boolean): void;
      isTTY: boolean;
  }
  export class WriteStream extends net.Socket {
      columns: number;
      rows: number;
      isTTY: boolean;
  }
}

declare module "domain" {
  import * as events from "events";

  export class Domain extends events.EventEmitter implements NodeJS.Domain {
      run(fn: Function): void;
      add(emitter: events.EventEmitter): void;
      remove(emitter: events.EventEmitter): void;
      bind(cb: (err: Error, data: any) => any): any;
      intercept(cb: (data: any) => any): any;
      dispose(): void;
      members: any[];
      enter(): void;
      exit(): void;
  }

  export function create(): Domain;
}

