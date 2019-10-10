'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  let output =[];
  
  collection_a.forEach(val => {
      if (collection_b.filter(x => Number.isInteger(val/x)).length > 0)
        output.push(val);
  });
  return output;
}


module.exports = choose_divisible_integer;
