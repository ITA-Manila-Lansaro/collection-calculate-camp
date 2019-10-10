'use strict';

function find_last_even(collection) {
  let originalCollection = collection;
  let evenVal = 0; 

   collection.reduce((prev, curr, index, arr) => {
      if (curr % 2 === 0){
        hasEven = true;
        evenVal = curr;
      }
  });

  return evenVal; 
}

module.exports = find_last_even;
