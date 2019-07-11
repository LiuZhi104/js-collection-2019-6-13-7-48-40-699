'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  let muiltiples=collection.filter(x=>{
      return x%3==0;

  })
  return muiltiples;
}

module.exports = choose_multiples_of_three;
