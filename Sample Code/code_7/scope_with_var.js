// var i = 0;

function print() {
    
    //  loop terminates when 
    //  i becomes 3, 3 < 3 (false)
    for (var i = 0; i < 3 ; i++) {
        console.log('Value of i inside for loop = ' + i);
    }
    // since the scope of i is the function and i reached the value of 3
    console.log('Value of i outside of for loop but inside of the function = ' + i);
}
print();

// -- JS tries to see, if a variable i is accessible in the file -- //
// -- but if line 1 is uncommented  the error goes away 
console.log('outside of the function i = ' + i);
//----------------------------------------------------------------- //
