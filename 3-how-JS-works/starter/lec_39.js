///////////////////////////////////////
// Lecture: Hoisting
//Hoisting is JavaScript's default behavior of moving
//all declarations to the top of the
//current scope (to the top of the current script
//or the current function).
// declerations executed fir.

calAge(1998);
function calAge(year) {
    console.log(2018 - year);
}
//retirement(1998); //hoisting only work for function decleration, not function

var retirement = function(year) {
    console.log(65 - (2016 - year));
}

//variables
console.log(age);
var age = 23;

function foo(){
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
        third();
    }
}

function third() {
    var d = "John";
    console.log(c);
}




// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword
