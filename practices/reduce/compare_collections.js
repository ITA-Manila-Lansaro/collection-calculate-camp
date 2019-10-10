'use strict';

function compare_collections(collection_a, collection_b) {
  let ret = true;
   collection_a.reduce((prev, curr, index) => {
     if(collection_b[index] !== curr) ret = false;
    });
  return ret;
}

module.exports = compare_collections;


