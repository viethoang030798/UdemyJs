
//Variable mutation and type coercion ***
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age );
// TYpe coercion ( transfer any data type into string to print)
var job, isMarried;
job = 'Teacher';
isMarried = true;
console.log(firstName + ' is a ' + job + ', ' + age + ' years old' +
'. Is he married? ' + isMarried);

// Variable mutatiom (declare multi-type values to variable , e.g variable age
//is int at first declare, now is string)
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + job + ', ' + age + ' years old' +
'. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
