console.log("Hello!!");


// [1, 2, 3].map(num => {
//     if (typeof num === 'number') return;
//     return num * 2;
//   });
//   function sayHi() {
//     return (() => 0)();
//   }
//   console.log(typeof sayHi());
//   console.log(typeof typeof 1);

// console.log(3=="3");
// “==” checks only for equality in value, whereas “===” is a stricter equality test and returns false if either the value or the type of the two variables are different.

// console.log(1 == '1'); // true
// console.log(false == '0'); // true
// console.log(true == '1'); // true
// console.log('1' == '01'); // false
// console.log(10 == 5 + 5); // true

// let a = 3;
// let b = new Number(3);
// let c = 3;
// console.log(a == b); // true
// console.log(a === b); // false
// console.log(b === c); // false

// Undefined means taking memory but no value assigned or present.

// The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.

// Let a; // undefined
// Let b = null; // null

// Not a number
// Not a legal number
// NAN never compare to anything or NAN


// => Reusable piece of code which is bundled together which performs particular task.
// => Function expression and function call.
// => Types of functions : Regular and Arrow functions

// => functions without name is anonymus function
// => assigned to a variable / callback functions
// => const name = function() {…}
// => [].map(I => () => {…})
// Anonymous Function is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.

// (function(){console.log("hi im an iife")})()  ==>IIFE
// => Functions which are immediately invoked (called) once defined are known as IIFE.
// => variables declared inside it not available outside the function.
// => useCase : data privacy (closure)
// => syntax (function() {…})();

// function map(arr, mapFunc){
//     const mapArr = [];
//     for(let i=0; i<arr.length;i++){
//         const result = mapFunc(arr[i],i,arr)
//         mapArr.push(result)
//     }
//     return mapArr;
// }
// map([1,2,34,45], num => num + 2);

// polyfile
// function map(arr, mapFunc){
//     const mapArr = [];
// map([1,2,34,45], num => 
// function filter(arr, filterFunc) {    
//     const filterArr = [];           
//     for(let i=0;i<arr.length;i++) {
//         const result = filterFunc(arr[i], i, arr);        
//         if(result)             
//         filterArr.push(arr[i]);     
//     }    
// return filterArr;
// }
// filter([1,2,34,45], num => num % 2 === 0);

// reduser
// const sumReducer = (accumulator, currentValue) => accumulator + currentValue;

// function reduce(arr, reducer, initialValue) {    
//     let accumulator = initialValue || 0;           
//     for(let i=0;i<arr.length;i++)        
//         accumulator = reducer(accumulator, arr[i], i, arr);    
//     return accumulator;
// }
// reduce([1,2,3,4], sumReducer, 0);

// A function which accepts another function as an argument or returns another function as an result or both.

// function s(){
//     console.log("higher order function")
// }
// function e(a){
//     console.log(a())
// }
// e(s);

// const arrowFunc = () => arguments.length;
// console.log(arrowFunc(1, 2, 3));

// Arrow function is shorter syntax of normal function and does not have its own “this”, "arguements”, “new keyword”,

// => Functions in JS are first class object.
// => First class function means when functions are treated like any other variable.
// Const handler = () => {…}
// document.addEventListener("click", handler);

// Helps us to create anonymous function which doesn’t have any function name which is main diff between function expression and declaration.
// => Can be used as IIFE or stored in variable 
// => arrow function, anonymous, IIFE


// Impure function 
// let x = 2;

// function addI(y) {
//     return (x += y);
// }

// Callback function
// A callback function is a function that is passed as an argument to another function, to be “called back” at a later time.

// The function which is passed to another function as an argument and that function invokes it or completes the action.

// Generator function

// Regular functions return only one, single value (or nothing).
// Generators can return (“yield”) multiple values, one after another, on-demand. They work great with iterables, allowing to create data streams with ease.
// function* generateSeq(param) {
//     let a = 10;
//     yield (a += 1);
//     yield (a += 2);
//     yield (a += 3);
//     return (a += 4);
//   }

//   const gen = generateSeq();
//   console.log(gen.next(5));
//   console.log(gen.next());
//   console.log(gen.next());
//   console.log(gen.next());
//   console.log(gen.next());

// Assignment Operator

// let number = 0;
// console.log(number++); // 0 || number = 1
// console.log(++number); // 2 || number 2
// console.log(number); // 2

// variable++ => print value before performing operation && will update the value of variable
// ++variable => print value after performing operation && will update the value of variable

// Closure function
// A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
// * Own scope where variables defined between its curly brackets
// * Outer function’s variables
// * Global variables

// function add (){
//     var a = 10;

//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// const inner = add(); // own scope + global // execution context of add will be deleted

// // can I user variable (anything) from add function or not?
// inner ();   // closure so which (3) scope it has access for?



// Currying in js
// Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

// function add(a) {
//     return function (b) {
//       return function (c) {
//         return a + b + c;
//       };
//     };
//   }
//   function addN(a) {
//     if (!a) return null;
//     return (n) => {
//       return n ? addN(a + n) : a;
//     };
//   }

//   console.log(add(1)(2)(3));
//   console.log(addN(1)(2)(3)(4)());


// Map and SET

// SET
// Insertion order is not maintained
// cannot access using index
// Extraction is allowed using methods
// Iterable using forof, forEach
// size is dynamic
// Duplicate values not allowed
// Deletion and finding is faster and trivials compare to arrays ** important

// MAP
// A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.
// A Map has a property that represents the size of the map.
// ordered key value pair of data
// Elements access via key
// iterable - for of
// keys are unique, values are not
// keys can be anything (including values like arrays)
// pure access storages optimized for data access (this is not allowedbasically)

// WeakSet & WeakMap

// WeakSet
// only store objects in it
// weakSet are not iterable
// All functions of set are not available in weakSet

// weakMap
// Key should be object only
// Cannot iterate
// All functions of map are not available in weakSet


// Write a function to delete a character from any string ?

// function removeCharacter() {
//     originalString = 'Sajal';
//     newString = originalString.replace('a', '');
//     // document.querySelector('.output').textContent = newString;
// }
// function deleteChar(a,b){
//     const z=b.split('');
//     for(let i=0;i<z.length;i++){
//         if(z[i]===a){
//             z.splice(i,1);
//         }}
//     return(z.join(""));
// }
// console.log(deleteChar('s',"dssxcdvfbghdfbg"))



// Difference between .forEach() and .map()

// Both is used to loop over the array
// Basic diff -> Map returns an array and foreach return undefined so you can chain other function on map and not on forEach
// https://stackoverflow.com/questions/34426458/javascript-difference-between-foreach-and-map

// A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains
// * Own scope where variables defined between its curly brackets
// * Outer function’s variables
// * Global variables


// find & filter

// common => Both are array methods and used to find elements from array based on certain condition

// Diff
//  HOF => Both are HOF
// Occurence => find return first occurence && filter will return all matching occurence 
// return type => find depends on matching element data type && for filter it will be always array
// If nothing match => find will retrun undefined && filter will return [];

// filter
//     var x=["1","2","3","4"];
//     x.find(get4);
//     function get4(c){ return c==4;}
// find() & filter()
    // const array[1,22,4,293,5,1];

    // array.find((i) => i === 1); // ?? 1

    // array.filter((i) => i === 1); // ?? [1, 1]





// A prototype and  Prototype Chaining

// A prototype in JavaScript is an object from which another object is derived from.

// Prototype Chaining
// Prototypes are the means of inheritance in JavaScript.
// The prototype of an object would also have a prototype object. This continues until we reach the top level when there is no prototype object.
// This is called prototype chaining or prototype chain in JavaScript.


// Call: The call() method invokes a function with a given "this" value and arguments provided one by one

// Apply: Invokes the function with a given "this" value and allows you to pass in arguments as an array

// bind: returns a new function, allowing you to pass any number of arguments


// Palindrome example

// let rev = 0;
// let num = 9229;
// let num1 = num;
// let lastDigit;

// while (num != 0) {
//   lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   console.log(rev);
//   num = Math.floor(num / 10);
// }
// console.log(rev, num1);
// if (rev === num1) {
//   console.log("Number is Palindrome");
// } else {
//   console.log("Number is Not Palindrome");
// }


// types of error

// RangeError - This is thrown when a number is outside an allowable range of values.
// 	ReferenceError - This error is thrown when a reference made to a variable/item is broken.
// 	SyntaxError - This error occurs when we type code that the JS engine can understand.
// 	TypeError - TypeError occurs when an operation is performed on a wrong data type. Maybe a boolean is expected but a sting is found.


// const num = 123
// num.toUpperCase() // needs string;

// https://blog.bitsrc.io/types-of-native-errors-in-javascript-you-must-know-b8238d40e492



// The nature of JS is synchronous in nature and all code which we write is blocking code. To enable non-blocking and allow function to execute or wait we use async behaviour. Async-await is used for the same.

// enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

// What are promises
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.

// 1. Improves Code Readability
// 2. Better handling of asynchronous operations
// 3. Better flow of control definition in asynchronous logic
// 4. Better Error Handling

// Fulfilled | rejected | pending

// const prom = new Promise((resolve, reject) => {
//     const a = 1;

//     if (a >= 5) {
//       resolve();
//     } else {
//       reject('Condition not satisfied');
//     }
//   });
//   console.log(prom);
//   prom
//     .then(() => {
//       console.log('Resolved');
//     })
//     .catch((e) => {
//       console.log(e);
//     });  

// const prom = new Promise((resolve, reject) => {
//     const a = 10;
  
//     if (a <= 5) {
//       resolve();
//     } else {
//       reject('Condition not satisfied');
//     }
//   });
  
//   prom
//     .then(() => {
//       console.log('Resolved');
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// const prom = new Promise((resolve, reject) => {
//   const a = 10;

//   if (a <= 5) {
//     resolve();
//   } else {
//     reject('Condition not satisfied');
//   }
// });

// prom
//   .then(() => {
//     console.log('Resolved');
//   })
//   .catch((e) => {
//     console.log(e);
//   });




// Throttling & Debouncing

// Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.

// Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times.

// Throttle: the original function will be called at most once per specified period.

// Debounce: the original function will be called after the caller stops calling the decorated function after a specified period.

// Throttling - repeat
// Debouncing - Delay
// Throttling will execute function repeatedly over time.
// Debouncing will bounce off after one execution.

// Throttling =>
// To execute something over a period of time again and again
// In JS can be achieved using setInterval

// setInterval(() => {
//     //
//   }, 1000);
  
  // Debouncing =>
  // To execute something after a certain amount of time only once
  // In JS can be achieved using setTimeout
  
//   setTimeout(() => {
//     //
//   }, 1000);
  



//*** Difference between ES5 and ES6 ?


