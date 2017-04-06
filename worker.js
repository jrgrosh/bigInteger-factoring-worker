//<script src="http://peterolson.github.com/BigInteger.js/BigInteger.min.js"></script>
//const bigInt = require('big-integer');
importScripts('node_modules/big-integer/BigInteger.min.js');
var m = bigInt(5);
var i = bigInt(3);
var start = bigInt(3);
var stop = bigInt(5)
console.log("m = " + String(m));

function success(p, q, m){
  postMessage(JSON.stringify({
    type: "success",
    factor1: p.toString(),
    factor2: q.toString(),
    product: m.toString()
  }));
  console.log("Success");
}

function failure(beginning, end){
  postMessage(JSON.stringify({
    type: "failure",
    start: beginning.toString(),
    finish: end.toString()
  }));
  console.log("Failure");
}

function search(start, finish, product){
  start = bigInt(start);
  i = bigInt(start);
  stop = bigInt(finish);
  m = bigInt(product);

  while(i.lesser(stop)){
    if(m.isDivisibleBy(i)){
      console.log(i.toString() + " is a factor of m");
      break;
    }

    i = i.plus(2)

  }

  if(m.isDivisibleBy(i)){
    success(i, m.divide(i), m);
  } else{
    failure(start, stop);
  }

}






onmessage = function(e) {
  var workerResult = undefined;
  //console.log("message = " + JSON.stringify(e));
  console.log(e);
  if(e.data.type === 'search'){
    workerResult = 'Result: ' + 5;

  }
  else{
  console.log('Message received from main script');
   workerResult = 'Result: ' + 4;
  console.log('Posting message back to main script');
  }
  postMessage(workerResult);
  search(3, 898, 988027)
}
/*
<script src="http://peterolson.github.com/BigInteger.js/BigInteger.min.js"></script>
const bigInt = require('big-integer');
const p = bigInt(179425867	);
const q = bigInt(179426341);
const m = p.multiply(q);

console.log("m = " + String(m));

let i = bigInt(3);
while(i.lesser(m)){
  if(m.isDivisibleBy(i)){
    console.log(i.toString() + " is a factor of m");
    break;
  }

  i = i.plus(2)

}*/
