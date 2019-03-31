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