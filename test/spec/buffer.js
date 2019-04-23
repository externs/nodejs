const ab = new ArrayBuffer(16)
const data = ['hello', 'world']
const string = 'hello world'

/** @type {!Buffer} */
var b
b = new Buffer(string)
b = new Buffer(string, 'utf8')
b = new Buffer(100)
b = new Buffer(new Uint8Array(100))
b = new Buffer(ab)
b = new Buffer(data)
b = new Buffer(b)

b = Buffer.from(ab)
b = Buffer.from(ab, 10)
b = Buffer.from(ab, 10, 20)

b = Buffer.from(data)
b = Buffer.from(string)
b = Buffer.from(b)
b = Buffer.from(ab)

b = Buffer.from(string, 'utf8')

/** @type {boolean} */
var ib = Buffer.isBuffer(string)
ib = Buffer.isBuffer(b)

/** @type {boolean} */
var ie = Buffer.isEncoding('utf8')
ie = Buffer.isEncoding('sirocco5')

/** @type {number} */
var bl = Buffer.byteLength(string)
bl = Buffer.byteLength(b)
bl = Buffer.byteLength(new DataView(ab))
bl = Buffer.byteLength(ab)
bl = Buffer.byteLength(string, 'utf8')

b = Buffer.concat([b, b])
b = Buffer.concat([b, b], 10)

/** @type {number} */
var n = Buffer.compare(b, b)

b = Buffer.alloc(10)
b = Buffer.alloc(10, string)
b = Buffer.alloc(10, b)
b = Buffer.alloc(10, 10)
b = Buffer.alloc(10, string, 'utf8')

b = Buffer.allocUnsafe(10)

b = Buffer.allocUnsafeSlow(10)

/** @type {number} */
var ps = Buffer.poolSize
