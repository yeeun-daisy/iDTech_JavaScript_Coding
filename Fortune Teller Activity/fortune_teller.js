// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}  

const fortune = getRandomIntInclusive(0, 11);

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
if (fortune >= 0 && fortune <= 3) {
    console.log("Fortune Selected: " + fortune);
    console.log("Oh no! You selected a low fortune!");
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
} else if (fortune > 3 && fortune <= 7) {
    console.log("Fortune Selected: " + fortune);
    console.log("You've selected an average fortune.");
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
} else if (fortune > 7 && fortune <= 10) {
    console.log("Fortune Selected: " + fortune);
    console.log("Congratulations! You selected great fortune.");
// 4. If the fortune is out of range, then the fortune can't be read correctly.
} else {
    console.log("Fortune Selected: " + fortune);
    console.log("I cannot determine your fortune. Please try again!");
}


