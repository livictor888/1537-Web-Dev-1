var operation = prompt("Specify an operation (addition / subtraction / multiplication / division)");
var first_number = parseFloat(prompt("Enter the first number"));
var second_number = parseFloat(prompt("Enter the second number"));
var result = 0
if (operation == "addition")
{
    result = first_number + second_number;
}

if (operation == "subtraction")
{
    result = first_number - second_number;
}

if (operation == "multiplication")
{
    result = first_number * second_number;
}

if (operation == "division")
{
    result = first_number / second_number;
}

document.writeln("The result of " + operation + " of " + first_number + " and " + second_number + " is " + result);
