'use strict';

function find_first_even(collection) {
  let hasEven = false;
  let retVal;
  retVal = collection.reduce((prev, curr) => {
    if (!hasEven && curr % 2 === 0){
      return curr;
    }
  }, 0);
  
return retVal;
}

module.exports = find_first_even;

