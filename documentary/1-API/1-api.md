## API

```js
import getExternsDir, { dependencies } from '@depack/externs'
```

The externs for each of the modules are found in the published `v8` directory. The `global` and `nodejs` externs always need to be present when compiling a _Node.JS_ program (unless its in pure JS). Externs might depend on other externs, and the dependency tree is exported by this package:

%EXAMPLE: example%
%FORK-js example%

%~ width="25"%

```## getExternsDir => string
```

Runs `require.resolve('@depack/externs/package.json')` to find the location of this package, and adds the `v8` at the end to point to the externs version 8 (currently only Node 8 is supported).

%~%