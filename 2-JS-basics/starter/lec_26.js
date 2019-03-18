var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: [1990,1995],
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "teacher",
    isMarried: false,
    age: [],
    calcAge: function() {
  //      return 2018 - john.birthYear; // the same with the lower one
        this.age[0] = 2018 - this.birthYear[0];
        this.age[1] = 2018 - this.birthYear[1];
    }
};

console.log(john.calcAge());
//john.age = john.calcAge(); //add new properties to Object
console.log(john);
