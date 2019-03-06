// Arrays

// Initialize new array
var names = ["John", "Mark", "Jane"];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length); // size of array

// Mutate array data
names[1] = "Ben";// mutate data in array
names[5] = "Mary";
console.log(names);
console.log(names.length);
names[names.length] = "Jamie";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];
john.push("blue"); //add element to end of array
john.unshift("Mr."); //add element to begin of array
console.log(john);

john.pop(); //delete element to the end of array
john.pop();
john.shift(); //delete element to the begin of array
console.log(john);
console.log(john.indexOf(1990)); //show position of that element in array

var isDesigner = john.indexOf("Designer") === -1 ?
"John is NOT a designer" : "John is a designer";
console.log(isDesigner);
