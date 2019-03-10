var john = {
    fullName: "John Smith",
    mass: 70,
    height: 1.8,
    calBMI: function (){
      return this.mass/(this.height*this.height);
    }

};
var mark = {
    fullName: " Mark Pitt",
    mass: 90,
    height: 1.6,
    calBMI: function (){
    return this.mass/(this.height*this.height);
    }
};
john.bmi = john.calBMI();
mark.bmi = mark.calBMI();
console.log( mark.fullName + mark.bmi);
console.log(john.fullName + john.bmi);
switch (true) {
  case john.bmi > mark.bmi:
    console.log("John have higher BMI");
    break;
  case john.bmi < mark.bmi:
    console.log("Mark have higher BMI");
    break;
  default:
    console.log("Equal bmi!");
}
