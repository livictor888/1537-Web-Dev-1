// A triangle is issoceles
// if any of the two sides are equal
// a == b or b == c or c == a

// write a function which will return a boolean
// true  : if the triangle is issoceles
// false : if it is not 

function isIssocles(sidea, sideb, sidec) {
    let bool = false;

    if ( (sidea == sideb) || (sideb == sidec) || (sidec == sidea)) {
        bool = true;
    }

    return bool;
}

let result = isIssocles(2,1,2);

if (result) {
    document.write('Triangle is issocles');
} else {
    document.write('Triangle is not issocles');
}

