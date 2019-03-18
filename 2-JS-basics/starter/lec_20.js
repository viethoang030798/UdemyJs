// Function

function calculateAge(birthYear) {
    return 2019 - birthYear;
}
// this funtion return a specific value
var ageJohn = calculateAge(1998);
console.log(ageJohn);

function yearRetire(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
      console.log(firstName + " retires in " +
      retirement + " years." );
    } else {
      console.log(firstName + " already retired " +
      retirement + " years." );
    }
}

yearRetire(1998, "Jamie");
yearRetire(1967, "Mom & dad");
yearRetire(1947, "Grandny");
// this function dont return anything, so we can call it directly, this funtion perform an action
// like log sth into console, print sth,..
