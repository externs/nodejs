/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
/**
 * @extends {Uint8Array}
 * @constructor
 * @struct
 * @param {!(string|number|Uint8Array|ArrayBuffer|Array<*>|Buffer)} arg1
 * @param {string=} encoding encoding to use, optional.  Default is 'utf8'
 */
function Buffer(arg1, encoding) {}
/**
 * @param {!(ArrayBuffer|Array<*>|string|Buffer)} arrayBufferOrDataOrStr
 * @param {(string|number)=} byteOffsetOrEncoding
 * @param {number=} length
 * @return {!Buffer}
 */
Buffer.from = function(arrayBufferOrDataOrStr, byteOffsetOrEncoding, length) {};
/**
 * @param {*} obj
 * @return {boolean}
 */
Buffer.isBuffer = function(obj) {};
/**
 * @param {string} encoding
 * @return {boolean}
 */
Buffer.isEncoding = function(encoding) {};
/**
 * @param {!(string|Buffer|DataView|ArrayBuffer)} string
 * @param {string=} encoding
 * @return {number}
 */
Buffer.byteLength = function(string, encoding) {};
/**
 * @param {!Array<!Buffer>} list
 * @param {number=} totalLength
 * @return {!Buffer}
 */
Buffer.concat = function(list, totalLength) {};
/**
 * @param {!Buffer} buf1
 * @param {!Buffer} buf2
 * @return {number}
 */
Buffer.compare = function(buf1, buf2) {};
/**
 * @param {number} size
 * @param {!(string|Buffer|number)=} fill
 * @param {string=} encoding
 * @return {!Buffer}
 */
Buffer.alloc = function(size, fill, encoding) {};
/**
 * @param {number} size count of octets to allocate
 * @return {!Buffer}
 */
Buffer.allocUnsafe = function(size) {};
/**
 * Allocates a new non-pooled buffer of {size} octets, leaving memory not initialized, so the contents of the newly created Buffer are unknown and may contain sensitive data.
 * @param {number} size count of octets to allocate
 * @return {!Buffer}
 */
Buffer.allocUnsafeSlow = function(size) {};
/**
 * @type {number}
 */
Buffer.poolSize

/**
 * @param {string} string
 * @param {number=} offset
 * @param {number=} length
 * @param {string=} encoding
 * @return {number}
 */
Buffer.prototype.write = function(string, offset, length, encoding) {};

/**
 * @param {string=} encoding
 * @param {number=} start
 * @param {number=} end
 * @return {string}
 */
Buffer.prototype.toString = function(encoding, start, end) {};

/**
 * @return {{type: string, data: !Array<?>}}
 */
Buffer.prototype.toJSON = function() {};

/**
 * @param {!Buffer} otherBuffer
 * @return {boolean}
 */
Buffer.prototype.equals = function(otherBuffer) {};

/**
 * @param {!Buffer} otherBuffer
 * @param {number=} targetStart
 * @param {number=} targetEnd
 * @param {number=} sourceStart
 * @param {number=} sourceEnd
 * @return {number}
 */
Buffer.prototype.compare = function(otherBuffer, targetStart, targetEnd, sourceStart, sourceEnd) {};

/**
 * @param {!Buffer} targetBuffer
 * @param {number=} targetStart
 * @param {number=} sourceStart
 * @param {number=} sourceEnd
 * @return {number}
 */
Buffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {};

/**
 * @param {number=} start
 * @param {number=} end
 * @return {!Buffer}
 */
Buffer.prototype.slice = function(start, end) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readIntLE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readIntBE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt8 = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt16LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt16BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt32LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readUInt32BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt8 = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt16LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt16BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt32LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readInt32BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readFloatLE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readFloatBE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readDoubleLE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.readDoubleBE = function(offset, noAssert) {};

/**
 * @return {!Buffer}
 */
Buffer.prototype.swap16 = function() {};

/**
 * @return {!Buffer}
 */
Buffer.prototype.swap32 = function() {};

/**
 * @return {!Buffer}
 */
Buffer.prototype.swap64 = function() {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt8 = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt16LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt16BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt32LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeUInt32BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt8 = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt16LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt16BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt32LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeInt32BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeFloatLE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeFloatBE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeDoubleLE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
Buffer.prototype.writeDoubleBE = function(value, offset, noAssert) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {?} value
 * @param {number=} offset
 * @param {number=} end
 * @return {THIS}
 */
Buffer.prototype.fill = function(value, offset, end) {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {number}
 */
Buffer.prototype.indexOf = function(value, byteOffset, encoding) {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {number}
 */
Buffer.prototype.lastIndexOf = function(value, byteOffset, encoding) {};

/**
 * @return {!IterableIterator<!Array<?>>}
 */
Buffer.prototype.entries = function() {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {boolean}
 */
Buffer.prototype.includes = function(value, byteOffset, encoding) {};

/**
 * @return {!IterableIterator<number>}
 */
Buffer.prototype.keys = function() {};

/**
 * @return {!IterableIterator<number>}
 */
Buffer.prototype.values = function() {};
