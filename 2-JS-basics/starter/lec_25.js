// Objects and properties

var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john["lastName"]);
console.log(john["birthYear"]);
// mutate data
john.job = "fuck boi";
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1997;
jane["lastName"] = "Smith";
console.log(jane);
