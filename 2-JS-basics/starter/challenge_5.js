var bills = {
    price: [124, 48, 268, 180, 42],
    tipsCal: function(){
      tips = [];
      for (var i = 0; i < 5; i++){
          var tip = [];
          if (bills.price[i] < 50) {
            tip[i] = bills.price[i] * 0.2;
            tips.push(tip[i]);
          }
          else if (bills.price[i] >= 50 && bills.price[i] <= 200) {
            tip[i] = bills.price[i] * 0.15;
            tips.push(tip[i]);
          } else {
            tip[i] = bills.price[i] * 0.1;
            tips.push(tip[i]);
          }
      }
      return tips;
    }
};

bills.tips = bills.tipsCal();
console.log(bills);
console.log(bills.tips);
