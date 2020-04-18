var obj = {
    x: 1 // x is an own property
};

var proto = {
    y: 2
}
console.log(Object.getPrototypeOf( obj ));
console.log(obj.__proto__);

Object.setPrototypeOf( obj, proto);
console.log(obj.__proto__);

console.log(obj)
console.log(obj.y);

var obj2 = {
    z: 3
};
Object.setPrototypeOf(obj2, proto);

// Changing the value of proto.y
// proto is shared among objects
// and it is called prototype chain 
proto.y = 100;

console.log('----------------obj.y')
console.log(obj.y);
console.log('----------------obj2.y');
console.log(obj2.y);
