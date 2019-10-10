'use strict';
var rank_asc = function(collection){
  return collection.map(val => val).sort().reverse();
};

module.exports = rank_asc;
