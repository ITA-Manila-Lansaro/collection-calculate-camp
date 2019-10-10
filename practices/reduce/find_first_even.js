'use strict';

function find_first_even(collection) {
  let originalCollection = collection;
  let hasEven;
  let evenVal = 0; 

   collection.reduce((prev, curr, index, arr) => {
      if (!hasEven && curr % 2 === 0){
        hasEven = true;
        evenVal = curr;
      }
  });

  return evenVal; 

}

module.exports = find_first_even;

