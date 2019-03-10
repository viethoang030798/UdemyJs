var bills = {
    price: [124, 48, 268, 180, 42],
    tips: [],
    tipsCal: function(){
      for (var i = 0; i < bills.price.length; i++){
        switch (true) {
          case bills.price[i] < 50:
            bills.tips[i] = bills.price[i] * 0.2;
            return bills.tips[i];
          case bills.price[i] >= 50 && bills.price[i] <= 200:
            bills.tips[i] = bills.price[i] * 0.15;
            return bills.tips[i];
          default:
            bills.tips[i] = bills.price[i] * 0.1;
            return bills.tips[i];
        }

      }
    }
}

console.log(bills.tips);
