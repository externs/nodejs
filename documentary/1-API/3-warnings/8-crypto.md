### Crypto

> The `crypto` externs [already exists](https://github.com/google/closure-compiler/blob/master/externs/browser/w3c_webcrypto.js#L552) in _GCC_, therefore the extern's namespace is added as `_crypto_.

```js
types-v8/crypto.d.ts(10,14): warning TS0: type/symbol conflict for Certificate, using {?} for now
```

- [ ] Fix the `Certificate` conflict.

#### Missing Methods In Types

- [ ] `Cipheriv`
- [ ] `Decipheriv`
- [ ] `DiffieHellmanGroup`
- [ ] `Sign`
- [ ] `constants`
- [ ] `createDiffieHellmanGroup`
- [ ] `prng`
- [ ] `rng`
- [ ] `setEngine`