'use strict';

function collect_max_number(collection) {
  return collection.reduce((prev,curr) => prev < curr ? curr : prev);
}

module.exports = collect_max_number;
