// This keyword
/*
function calAge(year) {
    console.log(2019 - year);
    console.log(this);
}
*/
//calAge(1998);

var john = {
    name: "John",
    yearOfBirth: 1998,
    calAge: function() {
        console.log(this); // point to john object
        console.log(2018 - this.yearOfBirth);
        function inner(){
            console.log(this);
        }
    }
}
john.calAge();
