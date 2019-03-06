var bills = [124, 48, 268];

function tip_calculator(price) {
    var tips;
    switch (true) {
      case price < 50:
        tips = price * 0.2;
        return tips;
      case price >= 50 && price <= 200:
        tips = price * 0.15;
        return tips;
      default:
        tips = price * 0.1;
        return tips;
    }
}

function final_paid(price,tips) {
    var final_price;
    final_price = price + tips;
    return final_price;
}

var tips_amount = [];
var paid_amount = [];
for (i = 0; i < 3; i++) {
    tips = tip_calculator(bills[i]);
    tips_amount.push(tips);
    final_price = final_paid(bills[i],tips);
    paid_amount.push(final_price);
}
console.log("Tips are: " + tips_amount);
console.log("Final prices are: " + paid_amount);
