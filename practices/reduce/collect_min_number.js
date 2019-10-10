'use strict';

function collect_min_number(collection) {
  return collection.reduce((prev,curr) => prev > curr ? curr : prev);
}

module.exports = collect_min_number;

