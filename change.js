// setting up variables
const cashPaid = 87;

// calculating the change back
let quarters = Math.floor(cashPaid / 25);
let dimes = Math.floor((cashPaid % 25 ) / 10) ;
let nickles = Math.floor(((cashPaid % 25) % 10) / 5) ;
let pennies = (((cashPaid % 25) % 10) % 5);

// printing it all out
console.log("Quarters due: " + quarters);
console.log("Dimes due: " + dimes);
console.log("Nickles due: " + nickles);
console.log("Pennies due: " + pennies);

console.log("-----------------------------------");
// another way (lied)

let q = cashPaid / 25;
console.log("Quarters due: " + Math.floor(q));

let d = (cashPaid % 25) / 10;
console.log("Dimes due: " + Math.floor(d)); 

let n = ((cashPaid % 25) % 10) / 5;
console.log("Nickles due: " + Math.floor(n));

let p = (((cashPaid % 25) % 10) % 5) ;
console.log("Pennies due: " + Math.floor(p))