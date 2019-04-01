import { relative } from 'path'
import write from '@wrote/write'
import pckg from './package.json'

const [,,mod] = process.argv
const m = relative('', mod)

;(async () => {
  const data = {
    "compilerOptions": {
      "module": "commonjs",
      "removeComments": true,
      "preserveConstEnums": true,
      "sourceMap": true,
    },
    "files": [
      `types-v8/${m}.d.ts`,
    ],
  }
  const d = JSON.stringify(data, null, 2)
  console.log(d)
  await write('tsconfig.json', d)
  if (!(m in pckg.scripts)) {
    pckg.scripts = { ...pckg.scripts, [m]:`tsickle --externs=v8/${m}.js` }
    await write('package.json', JSON.stringify(pckg, null, 2))
    console.log('added %s script', m)
  }
})()