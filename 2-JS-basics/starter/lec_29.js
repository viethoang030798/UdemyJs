// Loop and iteration

// For Loop
var john = ["John", "Smith", 1990, "teacher", false];
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// While loop
var i = 0
while (i < john,length) {
  console.log(john[i]);
  i++;
}

// Continue and break statement

var john = ["John", "Smith", 1990, "teacher", false, "blue"];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") continue;
    console.log(john[i]);
} // after continue, go straight to begin of loop

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== "string") break;
    console.log(john[i]);
} // after break, stop loop
console.log(john.length);
console.log(john[john.length]);
//print array back ward

for (var i = 0; i < john.length; i++) {
    console.log(john[5-i]);
}
