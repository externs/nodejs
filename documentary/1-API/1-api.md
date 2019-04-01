## API

```js
import dependencies from '@depack/externs'
```

The externs for each of the modules are found in the published `v8` directory. The `global` and `nodejs` externs always need to be present when compiling a Node.JS program (unless its in pure JS). Externs might depend on other externs, and the dependency tree is what this package exports:

%EXAMPLE: src%

%~%