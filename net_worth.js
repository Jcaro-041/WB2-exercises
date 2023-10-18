// Approximate worth of items owned
car = 14000;
house = 0;
computer = 1200;
clothes = 1000;
totalAssets = car + house + computer + clothes;
console.log(totalAssets);

// Debts
creditCardDebt = 1200;
carLoan = 4000;
totalDebts = creditCardDebt + carLoan;
console.log(totalDebts);

// Adding it all together
netWorth = totalAssets - totalDebts;

//
console.log("Your net worth is " + netWorth);