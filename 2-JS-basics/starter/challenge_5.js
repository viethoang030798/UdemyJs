var billJohn = {
    name: "John Smith",
    price: [124, 48, 268, 180, 42],
    tips: [],
    paid: [],
    tipsCal: function(){
      var percent;
      for (var i =0; i < 5; i++){
        if (this.price[i] < 50) {
          percent = 0.2;
        }
        else if (this.price[i] >= 50 && this.price[i] <= 200) {
          percent = 0.15;
        } else {
          percent = 0.1;
        }
        this.tips[i] = this.price[i] *  percent;
        this.paid[i] = this.tips[i] + this.price[i];
      }
    }
};

var billMark = {
    name: "Mark Twain",
    price: [77, 375, 110, 45],
    tips: [],
    paid: [],
    tipsCal: function(){
      for (var i =0; i < 4; i++){
        if (this.price[i] < 100) {
          percent = 0.2;
        }
        else if (this.price[i] >= 100 && this.price[i] <= 300) {
          percent = 0.1;
        } else {
          percent = 0.25;
        }
        this.tips[i] = this.price[i] *  percent;
        this.paid[i] = this.tips[i] + this.price[i];
      }
    }
};

function avarageTip(tips){
  var sum = 0;
  for (var i = 0; i < tips.length; i++){
    sum = sum + tips[i];
  }
  avarage = sum/tips.length;
  return avarage;
}
billJohn.tipsCal();
console.log(billJohn);
billMark.tipsCal();
console.log(billMark);
billJohn.avarage = avarageTip(billJohn.tips);
billMark.avarage = avarageTip(billMark.tips);
switch (true) {
  case billJohn.avarage > billMark.avarage:
    console.log("John family pay higher avarage tips!!");
    break;
  default:
    console.log("Mark family pay higher avarage tips!!");
}
