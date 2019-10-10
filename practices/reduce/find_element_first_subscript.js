'use strict';

function calculate_elements_sum(collection, element) {

  return collection.reduce((prev, curr) => {
    if (curr === element) return element;});
}

module.exports = calculate_elements_sum;

