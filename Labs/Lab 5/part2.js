var count = parseInt(prompt("Enter the count of numbers"));
var positiveNumberCount = 0 ;
for ( let itemNumber = 0; itemNumber < count; itemNumber++) {
    enteredNumber = parseInt(prompt("Enter a number"));
    if (enteredNumber >= 0) {
        positiveNumberCount++
    }
}
document.write("The count of positive numbers is " + positiveNumberCount);
