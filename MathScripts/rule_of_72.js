// 72/interest rate = number of periods for the investment to double
savingsAmount = 42000;
const interestRate = 5.78; 
years = 72 / interestRate
console.log("At a " + interestRate + "% interest rate, your savings account will be worth " + savingsAmount * 2 + " in " + years.toFixed(1) + " years." );