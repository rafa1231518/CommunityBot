'use strict';
const arrayReduce = require('./_arrayReduce');
 const deburr = require('./deburr');
 const words = require('./words');

/** Used to compose unicode capture groups. */
const rsApos = "['\u2019]";

/** Used to match apostrophes. */
const reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;
