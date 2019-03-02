// IF else statement

var firstName="John";
var civilStatus="single";

if (civilStatus === "married") {
   console.log(firstName + "is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}


var isMarried = false;
if (isMarried) {  // always check for a "true"
   console.log(firstName + "is married!");
} else {
  console.log(firstName + " will hopefully marry soon :)");
}

var massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark;

massJohn = 60;
heightJohn = 1.7;
massMark = 90;
heightMark = 1.85;

bmiJohn= massJohn/(heightJohn* heightJohn);
bmiMark= massMark/(heightMark*heightMark);
if (bmiMark>bmiJohn){
    console.log("Mark bmi is higher than John");
} else {
    console.log("John bmi is higher than Mark");
}
