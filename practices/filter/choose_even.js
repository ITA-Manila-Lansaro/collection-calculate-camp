'use strict';

function choose_even(collection) {
  return collection.filter(n => n % 2 ===0);
}

module.exports = choose_even;
