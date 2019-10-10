'use strict';

function choose_no_repeat_number(collection) {
  
  return collection.filter((x, y, z) => z.indexOf(x) === y);

}

module.exports = choose_no_repeat_number;
