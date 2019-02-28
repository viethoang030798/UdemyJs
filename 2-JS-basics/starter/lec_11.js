// Operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;
//Multiple operators
var isFullAge = now -yearJohn >= fullAge;
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark)/2;
console.log(average);

//Muletiple assignment (right to left)
var x,y;
x = y = (3+5) *4 -6;
console.log(x,y);
//More operators;
x *=2; // the same to x=x*2;
console.log(x);
x +=10; // x=x+10;
console.log(x); 
