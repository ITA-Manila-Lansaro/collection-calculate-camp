'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(a => collection_a.includes(a));
}

module.exports = get_intersection;
