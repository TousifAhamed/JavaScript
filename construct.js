// Objects with similar structure
// how handle it instead of repeatedly calling/writing the same thing 

// tousif = {
//   name: 'tousif',
//   age: 30,
//   celebrateBirthDay: function () {
//     this.age++;
//   },
// };

// masha = {
//   name: 'Masha',
//   age: 26,
//   celebrateBirthDay: function () {
//     this.age++;
//   },
// };

// To avoid writing similar things we can use constructor
function Person(name, age){
    
    this.name = name;
    this.age = age;
    // this.celebrateBirthDay = function(){
    //     this.age++;
    // };
}

Person.prototype.celebrateBirthDay = function(){
    this.age++;
}

var tousif = new Person('Tousif', 30);
tousif.celebrateBirthDay();
console.log(tousif);

var masha = new Person('Masha', 26);
masha.celebrateBirthDay();
console.log(masha);

console.log(tousif.__proto__ === Person.prototype);
console.log(masha.__proto__ === Person.prototype);