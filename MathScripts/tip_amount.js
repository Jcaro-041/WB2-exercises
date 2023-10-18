// The amount for a tip will be a constant 20%
tipPercent = .2;
foodCost = 45.68;
tipAmount = foodCost * tipPercent;
console.log(tipAmount.toFixed(2));

// Adding together the tipAmount and foodCost for billTotal
billTotal = tipAmount + foodCost;
console.log(billTotal.toFixed(2));

// Bill total printed
console.log("The tip amount for a " + foodCost + " bill is " + billTotal.toFixed(2));