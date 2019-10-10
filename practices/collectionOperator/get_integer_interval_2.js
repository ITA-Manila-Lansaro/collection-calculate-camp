'use strict';

function get_integer_interval_2(number_a, number_b) {
  let arr = [];
  if (number_a < number_b){
    number_a = 0;  
    do{
      number_a = number_a + 2;
      arr.push(number_a);
    }while(number_a < number_b);
  }      
  else{
    do{
      arr.push(number_a);
      number_a = number_a - 2;
    }while(number_a > number_b);
  }

  return arr;
}

module.exports = get_integer_interval_2;
