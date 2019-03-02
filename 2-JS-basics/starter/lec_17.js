// Truthy and falsy value and equality operators
// Falsy value :  0, NULL, undefined,'', NaN
// Truthy value: NOT falsy value
var height;

height = 23;
if (height) {
    console.log("Variable defined!" + height);
} else {
    console.log("Variable has NOT been defined!!");
}

// Equality operators
if (height =='23') {
    console.log("The == operators does type coercion");
}
