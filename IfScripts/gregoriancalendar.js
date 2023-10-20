const givenYear = 2400;

const disvisibleBy100 = givenYear % 100;
const divisibleBy400 = givenYear % 400;
const diviisbleBy4 = givenYear % 4;

if (disvisibleBy100 == 0 && divisibleBy400 != 0){
    console.log(givenYear + " is Not a leap year!");
}

else if (diviisbleBy4 == 0){
    console.log(givenYear + " is a leap year!")
}

else {
    console.log(givenYear + " is Not a leap year!")
}