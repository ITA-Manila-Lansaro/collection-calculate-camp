'use strict';

function choose_common_elements(collection_a, collection_b) {

  return collection_a.filter(x => collection_b.includes(x));
}

module.exports = choose_common_elements;
