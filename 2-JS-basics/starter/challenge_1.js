var massJohn, heightJohn, massMark, heightMark, bmiJohn, bmiMark;

massJohn = 60;
heightJohn = 1.7;
massMark = 90;
heightMark = 1.85;

bmiJohn= massJohn/(heightJohn* heightJohn);
bmiMark= massMark/(heightMark*heightMark);
var bool=bmiMark>bmiJohn;
console.log("John: "+bmiJohn+" Mark: " +bmiMark);
console.log("Is Mark's BMI higher than John?"+ bool);

/*if(bool){
  console.log("YESSSS");
}*/
