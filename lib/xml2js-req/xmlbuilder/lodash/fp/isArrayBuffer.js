'use strict';
const convert = require('./convert');
 const func = convert('isArrayBuffer', require('../isArrayBuffer'), require('./_falseOptions'));

func.placeholder = require('./placeholder');
module.exports = func;
