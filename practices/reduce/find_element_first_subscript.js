'use strict';

function calculate_elements_sum(collection, element) {

  return collection.reduce((prev, curr, index) => {
    if (curr === element) return index;});
}

module.exports = calculate_elements_sum;
