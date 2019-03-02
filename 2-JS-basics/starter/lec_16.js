// Ternary operator and switch statements
// ( short form of if-ekse)

//Ternary
var firstName = "John";
var age = 14;
age >= 18 ? console.log(firstName + " drink beer.")
 : console.log(firstName + " drink juice.");

// using ternary to assign values to variable
// should use with simple decision
var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// Switch
// replacing a huge if...else statement.
// looks cleaner.
var job = "whore";
switch (job) {
  case "teacher":
    console.log(firstName + " teaches kids to code");
    break;
  case "driver":
    console.log(firstName + " drive cars");
  case "designer":
    console.log(firstName + " design UI");
  default:
    console.log(firstName + " does something mystery!!");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;
  case age > 13 && age < 25:
    console.log(firstName + " is a teenager");
    break;
  default:
    console.log(firstName + " is a man");

}
