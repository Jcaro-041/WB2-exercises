// variables initially
students = 25;
const slicesPerPizza = 8;
const pizzas = 8;

// calculating total people
totalPeople = (++students);

// math for pizza per person 
slicesPerPerson = (pizzas * slicesPerPizza) / students;
console.log("For a pizza party with " + totalPeople + " people there will be enough slices for everyone to get " + Math.trunc(slicesPerPerson) + " slices if theres " + pizzas + " pizzas with 8 slices in each pizza.");
leftOver = (pizzas * slicesPerPizza) % students; 
console.log("There will also be " + leftOver + " slices leftover.");