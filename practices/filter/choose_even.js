'use strict';

function choose_even(collection) {
  let even=collection.filter((x)=>{
      return x%2 ==0;
  })
  return even;

}

module.exports = choose_even;
