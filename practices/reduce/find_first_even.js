'use strict';

function find_first_even(collection) {
  let hasEven = false;

  return collection.reduce((prev, curr, index) => {
    if (!hasEven && curr % 2 === 0){
      return curr;
    }
  }, 0);
  
}

module.exports = find_first_even;

