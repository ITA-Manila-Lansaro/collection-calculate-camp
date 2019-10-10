'use strict';

function compute_median(collection) {

  let baseCollection = collection;
  let collectionLen = parseInt(collection.length); 

  return collection.sort((a, b) => parseInt(a) - parseInt(b))
  .map(a => parseInt(a))
  .reduce((a,b, c) => { 
    let median = collectionLen/2;
      if (collectionLen % 2 == 0){
          return collection[median] + 
                  ((collection[median] - collection[median + 1])/2);
      }
      else{
          return baseCollection[median-.5];
      }
  });
}

module.exports = compute_median;


