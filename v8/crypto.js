/**
 * @externs
 * @suppress {duplicate,checkTypes}
 */
// NOTE: generated by tsickle, do not edit.
// externs from types-v8/crypto.d.ts:
// Derived from: declare module "crypto"
/** @const */
var crypto = {};
/**
 * @record
 * @struct
 */
crypto.Certificate = function() {};

/**
 * @param {(string|!Buffer)} spkac
 * @return {!Buffer}
 */
crypto.Certificate.prototype.exportChallenge = function(spkac) {};

/**
 * @param {(string|!Buffer)} spkac
 * @return {!Buffer}
 */
crypto.Certificate.prototype.exportPublicKey = function(spkac) {};

/**
 * @param {!Buffer} spkac
 * @return {boolean}
 */
crypto.Certificate.prototype.verifySpkac = function(spkac) {};
/** @type {function(new: (?)): ?} */
crypto.Certificate;
/** @type {boolean} */
crypto.fips;
/**
 * @record
 * @struct
 */
crypto.CredentialDetails = function() {};
/** @type {string} */
crypto.CredentialDetails.prototype.pfx;
/** @type {string} */
crypto.CredentialDetails.prototype.key;
/** @type {string} */
crypto.CredentialDetails.prototype.passphrase;
/** @type {string} */
crypto.CredentialDetails.prototype.cert;
/** @type {(string|!Array<string>)} */
crypto.CredentialDetails.prototype.ca;
/** @type {(string|!Array<string>)} */
crypto.CredentialDetails.prototype.crl;
/** @type {string} */
crypto.CredentialDetails.prototype.ciphers;
/**
 * @record
 * @struct
 */
crypto.Credentials = function() {};
/** @type {?|undefined} */
crypto.Credentials.prototype.context;

/**
 * @param {!crypto.CredentialDetails} details
 * @return {!crypto.Credentials}
 */
crypto.createCredentials = function(details) {};

/**
 * @param {string} algorithm
 * @return {!crypto.Hash}
 */
crypto.createHash = function(algorithm) {};

/**
 * @param {string} algorithm
 * @param {(string|!Buffer)} key
 * @return {!crypto.Hmac}
 */
crypto.createHmac = function(algorithm, key) {};

/** @typedef {string} */
crypto.Utf8AsciiLatin1Encoding;

/** @typedef {string} */
crypto.HexBase64Latin1Encoding;

/** @typedef {string} */
crypto.Utf8AsciiBinaryEncoding;

/** @typedef {string} */
crypto.HexBase64BinaryEncoding;

/** @typedef {string} */
crypto.ECDHKeyFormat;
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
crypto.Hash = function() {};

/**
 * @param {(string|!Buffer|!DataView)} data
 * @param {string=} input_encoding
 * @return {!crypto.Hash}
 */
crypto.Hash.prototype.update = function(data, input_encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.Hash.prototype.digest = function(encoding) {};
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
crypto.Hmac = function() {};

/**
 * @param {(string|!Buffer|!DataView)} data
 * @param {string=} input_encoding
 * @return {!crypto.Hmac}
 */
crypto.Hmac.prototype.update = function(data, input_encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.Hmac.prototype.digest = function(encoding) {};

/**
 * @param {string} algorithm
 * @param {?} password
 * @return {!crypto.Cipher}
 */
crypto.createCipher = function(algorithm, password) {};

/**
 * @param {string} algorithm
 * @param {?} key
 * @param {?} iv
 * @return {!crypto.Cipher}
 */
crypto.createCipheriv = function(algorithm, key, iv) {};
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
crypto.Cipher = function() {};

/**
 * @param {(!Buffer|!DataView)|string} data
 * @param {string|?=} input_encoding
 * @param {string=} output_encoding
 * @return {!Buffer|string}
 */
crypto.Cipher.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @param {string=} output_encoding
 * @return {!Buffer|string}
 */
crypto.Cipher.prototype.final = function(output_encoding) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {boolean=} auto_padding
 * @return {THIS}
 */
crypto.Cipher.prototype.setAutoPadding = function(auto_padding) {};

/**
 * @return {!Buffer}
 */
crypto.Cipher.prototype.getAuthTag = function() {};

/**
 * @template THIS
 * @this {THIS}
 * @param {!Buffer} buffer
 * @return {THIS}
 */
crypto.Cipher.prototype.setAAD = function(buffer) {};

/**
 * @param {string} algorithm
 * @param {?} password
 * @return {!crypto.Decipher}
 */
crypto.createDecipher = function(algorithm, password) {};

/**
 * @param {string} algorithm
 * @param {?} key
 * @param {?} iv
 * @return {!crypto.Decipher}
 */
crypto.createDecipheriv = function(algorithm, key, iv) {};
/**
 * @extends {NodeJS.ReadWriteStream}
 * @record
 * @struct
 */
crypto.Decipher = function() {};

/**
 * @param {(!Buffer|!DataView)|string} data
 * @param {string|?=} input_encoding
 * @param {string=} output_encoding
 * @return {!Buffer|string}
 */
crypto.Decipher.prototype.update = function(data, input_encoding, output_encoding) {};

/**
 * @param {string=} output_encoding
 * @return {!Buffer|string}
 */
crypto.Decipher.prototype.final = function(output_encoding) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {boolean=} auto_padding
 * @return {THIS}
 */
crypto.Decipher.prototype.setAutoPadding = function(auto_padding) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {!Buffer} tag
 * @return {THIS}
 */
crypto.Decipher.prototype.setAuthTag = function(tag) {};

/**
 * @template THIS
 * @this {THIS}
 * @param {!Buffer} buffer
 * @return {THIS}
 */
crypto.Decipher.prototype.setAAD = function(buffer) {};

/**
 * @param {string} algorithm
 * @return {!crypto.Signer}
 */
crypto.createSign = function(algorithm) {};
/**
 * @extends {NodeJS.WritableStream}
 * @record
 * @struct
 */
crypto.Signer = function() {};

/**
 * @param {(string|!Buffer|!DataView)} data
 * @param {string=} input_encoding
 * @return {!crypto.Signer}
 */
crypto.Signer.prototype.update = function(data, input_encoding) {};

/**
 * @param {(string|{key: string, passphrase: string})} private_key
 * @param {string=} output_format
 * @return {!Buffer|string}
 */
crypto.Signer.prototype.sign = function(private_key, output_format) {};

/**
 * @param {string} algorith
 * @return {!crypto.Verify}
 */
crypto.createVerify = function(algorith) {};
/**
 * @extends {NodeJS.WritableStream}
 * @record
 * @struct
 */
crypto.Verify = function() {};

/**
 * @param {(string|!Buffer|!DataView)} data
 * @param {string=} input_encoding
 * @return {!crypto.Verify}
 */
crypto.Verify.prototype.update = function(data, input_encoding) {};

/**
 * @param {(string|!Object)} object
 * @param {(!Buffer|!DataView)|string} signature
 * @param {string=} signature_format
 * @return {boolean}
 */
crypto.Verify.prototype.verify = function(object, signature, signature_format) {};

/**
 * @param {number|!Buffer|string} prime_length_or_prime
 * @param {number|string=} generator_or_prime_encoding
 * @param {(number|!Buffer)|string=} generator
 * @param {string=} generator_encoding
 * @return {!crypto.DiffieHellman}
 */
crypto.createDiffieHellman = function(prime_length_or_prime, generator_or_prime_encoding, generator, generator_encoding) {};
/**
 * @record
 * @struct
 */
crypto.DiffieHellman = function() {};
/** @type {number} */
crypto.DiffieHellman.prototype.verifyError;

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.DiffieHellman.prototype.generateKeys = function(encoding) {};

/**
 * @param {!Buffer|string} other_public_key
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {!Buffer|string}
 */
crypto.DiffieHellman.prototype.computeSecret = function(other_public_key, input_encoding, output_encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.DiffieHellman.prototype.getPrime = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.DiffieHellman.prototype.getGenerator = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.DiffieHellman.prototype.getPublicKey = function(encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.DiffieHellman.prototype.getPrivateKey = function(encoding) {};

/**
 * @param {!Buffer|string} public_key
 * @param {string=} encoding
 * @return {void}
 */
crypto.DiffieHellman.prototype.setPublicKey = function(public_key, encoding) {};

/**
 * @param {!Buffer|string} private_key
 * @param {string=} encoding
 * @return {void}
 */
crypto.DiffieHellman.prototype.setPrivateKey = function(private_key, encoding) {};

/**
 * @param {string} group_name
 * @return {!crypto.DiffieHellman}
 */
crypto.getDiffieHellman = function(group_name) {};

/**
 * @param {(string|!Buffer)} password
 * @param {(string|!Buffer)} salt
 * @param {number} iterations
 * @param {number} keylen
 * @param {string} digest
 * @param {function(!Error, !Buffer): ?} callback
 * @return {void}
 */
crypto.pbkdf2 = function(password, salt, iterations, keylen, digest, callback) {};

/**
 * @param {(string|!Buffer)} password
 * @param {(string|!Buffer)} salt
 * @param {number} iterations
 * @param {number} keylen
 * @param {string} digest
 * @return {!Buffer}
 */
crypto.pbkdf2Sync = function(password, salt, iterations, keylen, digest) {};

/**
 * @param {number} size
 * @param {function(!Error, !Buffer): void=} callback
 * @return {!Buffer|void}
 */
crypto.randomBytes = function(size, callback) {};

/**
 * @param {number} size
 * @param {function(!Error, !Buffer): void=} callback
 * @return {!Buffer|void}
 */
crypto.pseudoRandomBytes = function(size, callback) {};

/**
 * @param {(!Buffer|!Uint8Array)} buffer
 * @param {number=} offset
 * @param {number=} size
 * @return {!Buffer}
 */
crypto.randomFillSync = function(buffer, offset, size) {};

/**
 * @param {!Buffer|!Uint8Array} buffer
 * @param {function(!Error, !Buffer): void|function(!Error, !Uint8Array): void|number} callback_or_offset
 * @param {function(!Error, !Buffer): void|function(!Error, !Uint8Array): void|number=} callback_or_size
 * @param {function(!Error, !Buffer): void|function(!Error, !Uint8Array): void=} callback
 * @return {void}
 */
crypto.randomFill = function(buffer, callback_or_offset, callback_or_size, callback) {};
/**
 * @record
 * @struct
 */
crypto.RsaPublicKey = function() {};
/** @type {string} */
crypto.RsaPublicKey.prototype.key;
/** @type {number} */
crypto.RsaPublicKey.prototype.padding;
/**
 * @record
 * @struct
 */
crypto.RsaPrivateKey = function() {};
/** @type {string} */
crypto.RsaPrivateKey.prototype.key;
/** @type {string} */
crypto.RsaPrivateKey.prototype.passphrase;
/** @type {number} */
crypto.RsaPrivateKey.prototype.padding;

/**
 * @param {(string|!crypto.RsaPublicKey)} public_key
 * @param {!Buffer} buffer
 * @return {!Buffer}
 */
crypto.publicEncrypt = function(public_key, buffer) {};

/**
 * @param {(string|!crypto.RsaPrivateKey)} private_key
 * @param {!Buffer} buffer
 * @return {!Buffer}
 */
crypto.privateDecrypt = function(private_key, buffer) {};

/**
 * @param {(string|!crypto.RsaPrivateKey)} private_key
 * @param {!Buffer} buffer
 * @return {!Buffer}
 */
crypto.privateEncrypt = function(private_key, buffer) {};

/**
 * @param {(string|!crypto.RsaPublicKey)} public_key
 * @param {!Buffer} buffer
 * @return {!Buffer}
 */
crypto.publicDecrypt = function(public_key, buffer) {};

/**
 * @return {!Array<string>}
 */
crypto.getCiphers = function() {};

/**
 * @return {!Array<string>}
 */
crypto.getCurves = function() {};

/**
 * @return {!Array<string>}
 */
crypto.getHashes = function() {};
/**
 * @record
 * @struct
 */
crypto.ECDH = function() {};

/**
 * @param {string=} encoding
 * @param {string=} format
 * @return {!Buffer|string}
 */
crypto.ECDH.prototype.generateKeys = function(encoding, format) {};

/**
 * @param {!Buffer|string} other_public_key
 * @param {string=} input_encoding
 * @param {string=} output_encoding
 * @return {!Buffer|string}
 */
crypto.ECDH.prototype.computeSecret = function(other_public_key, input_encoding, output_encoding) {};

/**
 * @param {string=} encoding
 * @return {!Buffer|string}
 */
crypto.ECDH.prototype.getPrivateKey = function(encoding) {};

/**
 * @param {string=} encoding
 * @param {string=} format
 * @return {!Buffer|string}
 */
crypto.ECDH.prototype.getPublicKey = function(encoding, format) {};

/**
 * @param {!Buffer|string} private_key
 * @param {string=} encoding
 * @return {void}
 */
crypto.ECDH.prototype.setPrivateKey = function(private_key, encoding) {};

/**
 * @param {string} curve_name
 * @return {!crypto.ECDH}
 */
crypto.createECDH = function(curve_name) {};

/**
 * @param {!Buffer} a
 * @param {!Buffer} b
 * @return {boolean}
 */
crypto.timingSafeEqual = function(a, b) {};
/** @type {string} */
crypto.DEFAULT_ENCODING;