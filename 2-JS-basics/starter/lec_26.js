var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    calcAge: function() {
        return 2018 - john.birthYear; // the same with the lower one
        this.age = 2018 - this.birthYear;
    }
};

console.log(john.calcAge());
john.age = john.calcAge(); //add new properties to Object
console.log(john);
