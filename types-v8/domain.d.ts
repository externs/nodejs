/// <reference path="./events.d.ts" />
/// <reference path="./nodejs.d.ts" />

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