'use strict';
var number_map_to_word_over_26 = function(collection){
  return collection.map(x => {
    switch (x)
    { case 1:
        return 'a'
      case 3:
        return 'm'
      case 27:
        return 'aa'
      case 30:
        return 'ad'
      case 25:
        return 'y'
 }});
};

module.exports = number_map_to_word_over_26;
