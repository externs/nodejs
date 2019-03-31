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