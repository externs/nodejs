### Cluster

- [x] [Already present](v8/cluster.js#151) `@ extends {events.EventEmitter}` to _Cluster_.
    ```js
    // export interface Cluster extends events.EventEmitter {
    types-v8/cluster.d.ts(98,3): warning TS0: omitting interface deriving from class: events.EventEmitter
    ```

#### Missing Methods In Types

- [ ] `SCHED_NONE`
- [ ] `SCHED_RR`
- [ ] `domain`
- [ ] `schedulingPolicy`
