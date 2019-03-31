/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/buffer.d.ts:
/**
 * @extends {NodeBuffer}
 * @record
 * @struct
 */
function Buffer() {}
/**
 * @extends {Uint8Array}
 * @record
 * @struct
 */
function NodeBuffer() {}

/**
 * @param {string} string
 * @param {number=} offset
 * @param {number=} length
 * @param {string=} encoding
 * @return {number}
 */
NodeBuffer.prototype.write = function(string, offset, length, encoding) {};

/**
 * @param {string=} encoding
 * @param {number=} start
 * @param {number=} end
 * @return {string}
 */
NodeBuffer.prototype.toString = function(encoding, start, end) {};

/**
 * @return {{type: string, data: !Array<?>}}
 */
NodeBuffer.prototype.toJSON = function() {};

/**
 * @param {!Buffer} otherBuffer
 * @return {boolean}
 */
NodeBuffer.prototype.equals = function(otherBuffer) {};

/**
 * @param {!Buffer} otherBuffer
 * @param {number=} targetStart
 * @param {number=} targetEnd
 * @param {number=} sourceStart
 * @param {number=} sourceEnd
 * @return {number}
 */
NodeBuffer.prototype.compare = function(otherBuffer, targetStart, targetEnd, sourceStart, sourceEnd) {};

/**
 * @param {!Buffer} targetBuffer
 * @param {number=} targetStart
 * @param {number=} sourceStart
 * @param {number=} sourceEnd
 * @return {number}
 */
NodeBuffer.prototype.copy = function(targetBuffer, targetStart, sourceStart, sourceEnd) {};

/**
 * @param {number=} start
 * @param {number=} end
 * @return {!Buffer}
 */
NodeBuffer.prototype.slice = function(start, end) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUIntLE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUIntBE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeIntLE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeIntBE = function(value, offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUIntLE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUIntBE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readIntLE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {number} byteLength
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readIntBE = function(offset, byteLength, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUInt8 = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUInt16LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUInt16BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUInt32LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readUInt32BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readInt8 = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readInt16LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readInt16BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readInt32LE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readInt32BE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readFloatLE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readFloatBE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readDoubleLE = function(offset, noAssert) {};

/**
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.readDoubleBE = function(offset, noAssert) {};

/**
 * @return {!Buffer}
 */
NodeBuffer.prototype.swap16 = function() {};

/**
 * @return {!Buffer}
 */
NodeBuffer.prototype.swap32 = function() {};

/**
 * @return {!Buffer}
 */
NodeBuffer.prototype.swap64 = function() {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUInt8 = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUInt16LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUInt16BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUInt32LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeUInt32BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeInt8 = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeInt16LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeInt16BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeInt32LE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeInt32BE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeFloatLE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeFloatBE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeDoubleLE = function(value, offset, noAssert) {};

/**
 * @param {number} value
 * @param {number} offset
 * @param {boolean=} noAssert
 * @return {number}
 */
NodeBuffer.prototype.writeDoubleBE = function(value, offset, noAssert) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {?} value
 * @param {number=} offset
 * @param {number=} end
 * @return {THIS}
 */
NodeBuffer.prototype.fill = function(value, offset, end) {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {number}
 */
NodeBuffer.prototype.indexOf = function(value, byteOffset, encoding) {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {number}
 */
NodeBuffer.prototype.lastIndexOf = function(value, byteOffset, encoding) {};

/**
 * @return {!IterableIterator<!Array<?>>}
 */
NodeBuffer.prototype.entries = function() {};

/**
 * @param {(string|number|!Buffer)} value
 * @param {number=} byteOffset
 * @param {string=} encoding
 * @return {boolean}
 */
NodeBuffer.prototype.includes = function(value, byteOffset, encoding) {};

/**
 * @return {!IterableIterator<number>}
 */
NodeBuffer.prototype.keys = function() {};

/**
 * @return {!IterableIterator<number>}
 */
NodeBuffer.prototype.values = function() {};
