// This file explains usages of call apply and bind functions 
function greet( message, name ){
    console.log(this);
    console.log(message + ' ' + name + '!');
}
greet('Good morning', 'Tousif');

// instanceof is a keyword
// Object built in Javascript
// greet is an Object, every function is an object in Javascript,. i.e the reason we are able to pass function as parameter to other functions.
console.log(greet instanceof Object);

// Functions are objects and can have properties 
greet.x = 100;
console.log(greet.x);
// Funcitons can have methods
greet.foo = function(){
    console.log('greet.foo called');
};

greet.foo();

// call - calls the calling function
// greet calling itself, where first arg chagnes function contex and other arguments are treated as function arguments 
greet.call('Hello'); // here no other arguments are passed it returns undefined undefined!
console.log('-------------------------------');
// greet calling itself, where first arg chagnes function contex and other arguments are treated as function arguments 
greet.call('Hello', 'Good evening', 'Tousif');

console.log('------------------------------Apply Example');
var args = ['Good morning', 'Tousif'];
greet.apply('Hello', args); // This behaves same as call where first argument is just to start a new context, but second parameter is array of items

// Passing first argument as null
console.log('--------------------------------calling with null');
var nullArgs = ['Good morning','Ahamed'];
greet.apply(null, nullArgs);

// bind = It helps to create a new function, and we can call it by passing parameters
var greetBound = greet.bind('World');
greetBound();
greetBound('Good Day', 'Tousif');

// Passing default value
console.log('---------------------passing default value')
var greetHola = greet.bind(null, 'Hola');
greetHola('Ahamed');
