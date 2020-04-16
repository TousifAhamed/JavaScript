// functions are plane objects and we can call them, we can pass them as parameters etc

function foo(callback) {
  var x = 5,
    y = 6;
  var z = x + y;
  callback();
  function retFn(){
      console.log('Ret Fun is called');
  }
  return retFn;
}

function bar() {
  console.log('bar called');
}

var resultFn = foo(bar);
resultFn();