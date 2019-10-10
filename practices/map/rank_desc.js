'use strict';
var rank_desc = function(collection){
  return collection.map(val => val).sort();
};

module.exports = rank_desc;
