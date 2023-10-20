// making variables
const a = 8;
const b = 7; 
const c = 6;

let numb = "";
// if else for a 

if (a >= b && a >= c) {
    numb = "The largest number is " + a;
}
else if (b >= a && b >= c){
    numb = "The largest number is " + b;
}
else {
    numb = "The largest number is " + c;
}

console.log(numb);

if (a <= b && a <= c) {
    numb = "The smallest number is " + a;
}
else if (b <= a && b <= c){
    numb = "The smallest number is " + b;
}
else {
    numb = "The smallest number is " + c;
}

console.log(numb);