// Function statement & expression

// Function expression (produce an immidiate result, like a = b+5), when didnt return anything,
// it's a staement, like if (a >b)
var whatDoYouDo = function(job, firstName) {
    switch (job) {
      case "teacher":
          return firstName + " teaches code";
      case  "driver":
          return firstName + " drive car";
      case "designer":
          return firstName + " design UI";
      default:
          return firstName + " does sth else";
    }
}

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mark"));
