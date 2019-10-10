'use strict';

function get_integer_interval(number_a, number_b) {
  let arr = [];
  if (number_a < number_b){
    number_a = 0; 
    for (; number_a < number_b; number_a++){
      arr.push(number_a);
    }
  }      
  else{
    for(;number_a > number_b; number_a++){
      arr.push(number_a);
    }
  }

  return arr;
}

module.exports = get_integer_interval;

