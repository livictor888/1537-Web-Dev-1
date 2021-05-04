/* -- scope of i is the file -- */ 
 let i = 13;
/* -----------------------------*/

/*
In the following function two i's are declared (these are different i's for their scope is different)
    1) function level
    2) for loop level
*/
function print() 
{
    //  ------ scope of i is the function because thats its immediate block ------ //
    // let i = 12;
    // -------------------------------------------------------------------------- //

    //  ------ scope of i is for loop because thats its immediate block ------- //
    for (let i = 0 ; i < 3 ; i++) 
    {
        console.log("One block " + i);
    }
    // ------------------------------------------------------------------------ //

    // If line 2 or 13, is uncommented, error goes away
    // this is because JavaScript is trying to find the variable i at the function level (i.e inside of function)
    // if it can't find it it will then try to look at the file level
    console.log("Inside of function " + i);
}

print();

// If line 1 is uncommented, error goes away
console.log("Outside of function " + i);

// Lines 2 and 13 are commented, try un-commenting them one by one and observe the output in the console
