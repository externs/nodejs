/* alanode example/ */
import externs from '../src'

(async () => {
  const res = await externs({
    text: 'example',
  })
  console.log(res)
})()