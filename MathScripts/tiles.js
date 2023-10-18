// measuring and area
l = 12;
w = 13;
area = l * w;
console.log(area);

// amount of tiles  
box = 12;
tilesNeeded = area / box; 
console.log(tilesNeeded);

// 10% more for insurance
insurance = tilesNeeded * .1;
totalNeeded = insurance + tilesNeeded
console.log(totalNeeded.toFixed(0));