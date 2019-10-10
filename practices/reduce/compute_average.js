'use strict';

function compute_average(collection) {
  return collection.reduce(((prev, curr) => prev + curr) , 0) / collection.length;
}

module.exports = compute_average;

