let major = "CSCI";

switch (major){
    case "BIOL":
        displayMajor = "Biology - ";
        break;
    case "CSCI":
        displayMajor = "Comp Sci";
        break;
    case "ENG":
        displayMajor = "English";
        break;
    default:
        displayMajor = "Not a major";
}
console.log(displayMajor);