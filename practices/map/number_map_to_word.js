'use strict';
var number_map_to_word = function(collection){
  return collection.map(x => {
    switch (x)
    { case 1:
        return 'a'
      case 2:
        return 'b'
      case 3:
        return 'c'
      case 4:
        return 'd'
      case 5:
        return 'e'
 }});
};

module.exports = number_map_to_word;
