var pointJohn_1 = 89, pointJohn_2 = 120, pointJohn_3 = 103;
var pointMike_1 = 97, pointMike_2 = 134, pointMike_3 = 105;
var pointMary_1 = 97, pointMary_2 = 134, pointMary_3 = 105;
var avarageJohn, avarageMike, avarageMary;

avarageJohn = (pointJohn_1 + pointJohn_2 + pointJohn_3) / 3;
avarageMike = (pointMike_1 + pointMike_2 + pointMike_3) / 3;
avarageMary = (pointMary_1 + pointMary_2 + pointMary_3) /3;
console.log(" John score " + avarageJohn + " points avarage");
console.log(" Mike score " + avarageMike + " points avarage");
console.log(" Mary score " + avarageMary + " points avarage");
switch (true) {
  case avarageJohn > avarageMike && avarageJohn > avarageMary:
    console.log(" Team John win!!!");
    break;
  case avarageMike > avarageJohn && avarageMike > avarageMary:
    console.log(" Team Mike win!!!");
    break;
  case avarageMary > avarageJohn && avarageMary > avarageMike:
    console.log(" Team Mary win!!!");
    break;
  default:
    console.log(" DRAW!!!");
}
