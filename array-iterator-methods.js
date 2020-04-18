// forEach()
var days = [
  { day: 'Sun', hours: 2 },
  { day: 'Mon', hours: 8 },
  { day: 'Tue', hours: 7 },
  { day: 'Wed', hours: 10 },
//   { day: 'Thu', hours: 2 },
//   { day: 'Fri', hours: 2 },
//   { day: 'Sat', hours: 2 },
];

// console.log(days);
days.forEach(function( item ){
    // console.log(item);
})

// Filter
// var resultDays = days.filter(function(item){
//     return true;// Returns entire array
// });

// var resultDays = days.filter(function (item) {
//   return false; // Returns empty array
// });

var resultDays = days.filter(function (item) {
  return item.hours >= 8; // Returns only if the condition is met, i.e it is filtering data based on conditions 
});

// console.log('--------------------Printing Result Days')
// console.log(resultDays);

// Map function is used whenever you want new array along with transformation of items
var numbers = [ 1,2,3,4 ];
var resultArray = numbers.map(function(item){
    return item * item;
})

console.log('----------------Printing resulting array');
console.log(resultArray);

// some 
var marks = [10,30,40,60];

function checkMarks(item){
    return item >= 35;
};
// some method checks if any of items pass the condition
console.log(marks.some(checkMarks)); 

// every
const isBelow = (currentValue) => currentValue < 40;

const array1 = [1, 10, 39, 19, 20, 13];

// every methods tests whether all the methods pass the condition
console.log(array1.every(isBelow));

// reduce
const array2 = [1, 2, 3, 4];
const reducer = (accum, curVal) => accum + curVal;

console.log(array2.reduce(reducer));

console.log(array2.reduce(reducer,10));