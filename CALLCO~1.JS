function foo(){
    console.log(this);
}
foo();

var john = {
    name: 'John',
    getName: function(){
        console.log( this )
    }
};

console.log(john.getName());

var getName = john.getName;
getName();

console.log(getName == john.getName);
