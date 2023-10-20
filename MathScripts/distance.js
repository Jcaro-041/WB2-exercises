// (x1, y1) (x2, y2)  A^2 + B^2 = C^2
// Setting up variables assigning values etc.. 
x1 = 4;
x2 = 3;
y1 = 6;
y2 = 2;
a = (x1 - x2);
b = (y2 - y1);
c = (a*a) + (b*b);
console.log(c);
// Taking c and finding square root for answer
distance = Math.sqrt(c);
console.log(distance.toFixed(2) + "cm^2");